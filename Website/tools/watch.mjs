#!/usr/bin/env node
// watch.mjs — development helper: run build.mjs once, then rebuild Website/dist/
// whenever a watched source file changes. Stop with Ctrl+C.
//
// Usage (from Website/):    node tools/watch.mjs
//      (from the repo root): node Website/tools/watch.mjs
//
// Watched sources: site/ (recursive), ruleset/, tools/templates/, and the repo-root
// LICENSE / LICENSING.md files. The build output dist/ is not watched, so a build
// never retriggers itself. No dependencies — Node's built-in fs.watch only.

import { watch, readdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const website = join(here, "..");
const repo = join(website, "..");

function runBuild() {
  const r = spawnSync(process.execPath, [join(here, "build.mjs")], { stdio: "inherit" });
  if (r.status !== 0) console.error("Build failed — dist/ keeps its previous state; fix the error and save again.");
}

// Editors emit several events per save — debounce into one rebuild.
let timer = null;
function scheduleBuild(reason) {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    timer = null;
    console.log(`\nChange detected (${reason}) — rebuilding…`);
    runBuild();
  }, 150);
}

// fs.watch({ recursive: true }) works on macOS, Windows and Linux (Node >= 20);
// fall back to one watcher per directory on platforms without recursive support.
function watchTree(dir, label) {
  try {
    watch(dir, { recursive: true }, (_event, filename) => scheduleBuild(filename ? `${label}/${filename}` : label));
    console.log(`Watching ${label}/ (recursive)`);
  } catch {
    const walk = (d) => {
      watch(d, (_event, filename) => {
        if (filename) scheduleBuild(relative(repo, join(d, filename)));
      });
      for (const entry of readdirSync(d, { withFileTypes: true })) {
        if (entry.isDirectory()) walk(join(d, entry.name));
      }
    };
    walk(dir);
    console.log(`Watching ${label}/ (per-directory fallback)`);
  }
}

console.log("Building once…");
runBuild();

watchTree(join(website, "site"), "Website/site");
watchTree(join(website, "ruleset"), "Website/ruleset");
watchTree(join(here, "templates"), "Website/tools/templates");
watch(repo, (_event, filename) => {
  if (filename === "LICENSE" || filename === "LICENSING.md") scheduleBuild(filename);
});
console.log("Watching LICENSE, LICENSING.md (repo root)");
console.log("\nWatching for changes — Ctrl+C to stop. Serve Website/dist/ in another terminal.");
