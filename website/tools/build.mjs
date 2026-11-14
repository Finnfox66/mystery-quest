#!/usr/bin/env node
// build.mjs — build the deployable static site in website/dist/ from the source files
// in website/site/ and the generated ruleset documents in website/ruleset/.
//
// The whole of website/site/ (hand-written pages, scripts, styles, images, source data)
// is copied to website/dist/ first, then the generated files are written into it.
// Everything under website/dist/ is gitignored — never commit build output.
//
// Outputs (under website/dist/):
//   dist/rules/index.html        — rules page (rendered rules + headings data, with the
//                                  search index and site version/build date embedded
//                                  inline via the template's JSON script blocks)
//   dist/assets/data/moves.json  — the Move list: ruleset examples + hand-maintained move-library.json
//   dist/LICENSE, dist/LICENSING.md — license documents copied from the repo root
//
// No other data files are emitted: the site's only runtime data fetch is
// assets/data/moves.json. The search index / site data reach the rules page inline
// (rules.js reads the #search-data / #site-data script blocks), and the source data
// files site/assets/data/move-library.json and move-descriptions.json are build inputs
// only — they are merged into moves.json and are NOT copied to dist/.

import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync, rmSync, cpSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const website = join(here, "..");
const repo = join(website, "..");
const rulesetDir = join(website, "ruleset");
const siteDir = join(website, "site");
const distDir = join(website, "dist");

// ---------- minimal Markdown renderer (subset sufficient for the cleaned ruleset) ----------

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inline(s) {
  let out = escapeHtml(s);
  out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return out;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Renders markdown to HTML and returns { html, sections, headings }.
// sections: one per heading, { anchor, level, text, breadcrumb, textContent }
// headings: flat list { level, text, anchor, parent } (parent = index of parent heading or -1)
function renderMarkdown(md, { fromHeading = null } = {}) {
  const lines = md.split("\n");
  let html = "";
  const headings = [];
  const sections = [];
  let section = null; // current section
  let stack = []; // heading indices stack for breadcrumbs
  let i = 0;

  const newSection = (level, text, anchor) => {
    while (stack.length && headings[stack[stack.length - 1]].level >= level) stack.pop();
    const parent = stack.length ? stack[stack.length - 1] : -1;
    const idx = headings.length;
    headings.push({ level, text, anchor, parent });
    stack.push(idx);
    section = { anchor, level, text, breadcrumb: stack.slice(0, -1).map((s) => headings[s].text), textContent: "" };
    sections.push(section);
    html += `<h${level} id="${anchor}">${inline(text)}</h${level}>`;
  };

  const addBlock = (blockHtml, plainText) => {
    html += blockHtml;
    if (section) section.textContent += " " + plainText;
  };

  let started = fromHeading === null;
  while (i < lines.length) {
    const line = lines[i];
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      if (!started && h[1] !== fromHeading) { i++; continue; }
      started = true;
      const text = h[2].trim();
      const anchor = slugify(text) || "section";
      let a = anchor, n = 2;
      while (headings.some((x) => x.anchor === a)) a = `${anchor}-${n++}`;
      newSection(h[1].length, text, a);
      i++;
      continue;
    }
    if (!started) { i++; continue; }
    if (/^\s*$/.test(line)) { i++; continue; }
    if (/^---+\s*$/.test(line)) { addBlock("<hr>", ""); i++; continue; }
    if (line.startsWith("|")) {
      // table
      const rows = [];
      while (i < lines.length && lines[i].startsWith("|")) { rows.push(lines[i]); i++; }
      const parseRow = (r) => r.split("|").slice(1, -1).map((c) => c.trim());
      const header = parseRow(rows[0]);
      let body = rows.slice(1).filter((r) => !/^\|?\s*:?-{3,}/.test(r.replace(/\|/g, "|")) || true);
      // drop separator row (second row of dashes/colons)
      const dataRows = rows.slice(2);
      let t = "<table><thead><tr>" + header.map((c) => `<th>${inline(c)}</th>`).join("") + "</tr></thead><tbody>";
      const plain = [];
      for (const r of dataRows) {
        const cells = parseRow(r);
        t += "<tr>" + cells.map((c) => `<td>${inline(c.replace(/<br>/g, " "))}</td>`).join("") + "</tr>";
        plain.push(cells.join(" "));
      }
      t += "</tbody></table>";
      addBlock(t, plain.join(" "));
      continue;
    }
    if (/^\s*-\s+/.test(line)) {
      // list (one nesting level via 2-space indent)
      let list = "<ul>", plain = [];
      while (i < lines.length && /^\s*-\s+/.test(lines[i])) {
        const m = lines[i].match(/^(\s*)-\s+(.*)$/);
        const indent = m[1].length;
        const item = m[2];
        if (indent >= 2) {
          list += `<li><ul><li>${inline(item)}</li></ul></li>`;
        } else {
          list += `<li>${inline(item)}</li>`;
        }
        plain.push(item);
        i++;
      }
      list += "</ul>";
      addBlock(list, plain.join(" "));
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      let list = "<ol>", plain = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        const item = lines[i].replace(/^\d+\.\s+/, "");
        list += `<li>${inline(item)}</li>`;
        plain.push(item);
        i++;
      }
      list += "</ol>";
      addBlock(list, plain.join(" "));
      continue;
    }
    // paragraph: join consecutive plain lines
    const buf = [];
    while (i < lines.length && !/^\s*$/.test(lines[i]) && !/^(#{1,6}\s|\||\s*-\s|\d+\.\s|---+\s*$)/.test(lines[i])) {
      buf.push(lines[i].trim());
      i++;
    }
    addBlock(`<p>${inline(buf.join(" "))}</p>`, buf.join(" "));
  }
  return { html, sections, headings };
}

// ---------- Move examples parser ----------

function parseMoves(md) {
  const moves = [];
  const blocks = md.split(/^#### /m).slice(1);
  for (const b of blocks) {
    const lines = b.split("\n");
    let name = lines[0].trim();
    let conversion = "direct";
    if (name.endsWith("- indirect conversion")) {
      conversion = "indirect";
      name = name.slice(0, -"- indirect conversion".length).trim();
    }
    const m = { name, conversion, official: "", type: "", keywords: [], ppCost: null, range: "", shape: "", shapeSize: "", placementType: "", accuracy: "", power: "", secondaryEffects: "", otherEffects: "", description: "" };
    for (const line of lines.slice(1)) {
      const fm = line.match(/^- \*\*([^*]+?)\*\*:?\s*(.*)$/);
      if (!fm) {
        const om = line.match(/^\*\*Official:\*\*\s*(.*)$/);
        if (om) m.official = om[1].trim();
        continue;
      }
      const key = fm[1].trim().replace(/:+$/, "").toLowerCase();
      const val = fm[2].trim();
      switch (key) {
        case "type": m.type = val; break;
        case "keywords": m.keywords = val.split(",").map((k) => k.trim()).filter(Boolean); break;
        case "pp cost": m.ppCost = parseInt(val, 10); break;
        case "range": m.range = val; break;
        case "shape": m.shape = val; break;
        case "shape size": m.shapeSize = val; break;
        case "placement type": m.placementType = val; break;
        case "accuracy": m.accuracy = val; break;
        case "power": m.power = val; break;
        case "secondary effects": m.secondaryEffects = val; break;
        case "other effects": m.otherEffects = val; break;
        case "description": m.description = val; break;
      }
    }
    moves.push(m);
  }
  return moves;
}

// ---------- build ----------

const version = JSON.parse(readFileSync(join(rulesetDir, "version.json"), "utf8"));
const rulesMd = readFileSync(join(rulesetDir, "Mystery Quest ruleset.md"), "utf8");
const movesMd = readFileSync(join(rulesetDir, "example-move-conversions.md"), "utf8");
// The website's Move list = the ruleset's Example Move conversions + the hand-maintained
// library of new conversions from the latest official versions (move-library.json).
const libraryPath = join(siteDir, "assets", "data", "move-library.json");

// Rules page: render from the first "## " heading onward (page header presents title/author/version)
const bodyStart = rulesMd.indexOf("\n## ");
const rulesBody = rulesMd.slice(bodyStart + 1);
const rules = renderMarkdown(rulesBody);

const moves = parseMoves(movesMd).concat(existsSync(libraryPath) ? JSON.parse(readFileSync(libraryPath, "utf8")) : []);
// Lore Descriptions come from official flavor text (move-descriptions.json, built by
// local-only/fetch-descriptions.mjs from PokeAPI); ruleset examples carry none themselves.
const descPath = join(siteDir, "assets", "data", "move-descriptions.json");
const descriptions = existsSync(descPath) ? JSON.parse(readFileSync(descPath, "utf8")) : {};
for (const m of moves) if (!m.description && descriptions[m.name]) m.description = descriptions[m.name];

const siteJson = { version: version.version, buildDate: new Date().toISOString() };
const searchIndex = {
  sections: rules.sections.map((s) => ({
    anchor: s.anchor,
    level: s.level,
    heading: s.text,
    breadcrumb: s.breadcrumb,
    text: s.textContent.replace(/\s+/g, " ").trim(),
  })),
};

// headings data for the outline: direct-children counts
const headings = rules.headings.map((h, idx) => {
  const children = rules.headings.filter((x) => x.parent === idx).length;
  return { level: h.level, text: h.text, anchor: h.anchor, parent: h.parent, children };
});

const rulesTemplate = readFileSync(join(here, "templates", "rules.html"), "utf8");
const rulesPage = rulesTemplate
  .replace("<!--RULES_CONTENT-->", rules.html)
  .replace("<!--HEADINGS_DATA-->", JSON.stringify(headings))
  .replace("<!--SEARCH_DATA-->", JSON.stringify(searchIndex.sections))
  .replace("<!--SITE_DATA-->", JSON.stringify(siteJson));

// Fresh output directory: copy the site source, then write the generated files into it.
// Build-time-only source data is excluded from the copy — it is merged into the
// generated moves.json, and the site never fetches the source files at runtime.
const buildOnlyData = ["move-library.json", "move-descriptions.json"].map((f) => join(siteDir, "assets", "data", f));
rmSync(distDir, { recursive: true, force: true });
cpSync(siteDir, distDir, { recursive: true, filter: (src) => !buildOnlyData.includes(src) });
mkdirSync(join(distDir, "rules"), { recursive: true });
mkdirSync(join(distDir, "assets", "data"), { recursive: true });
writeFileSync(join(distDir, "rules", "index.html"), rulesPage);
writeFileSync(join(distDir, "assets", "data", "moves.json"), JSON.stringify(moves)); // minified: smaller download, faster JSON.parse

// License documents: copied from the repo root so the deployed site serves them at its
// root; the static pages link to them with relative URLs, which work on any host.
for (const name of ["LICENSE", "LICENSING.md"]) {
  copyFileSync(join(repo, name), join(distDir, name));
}

console.log(`Built site v${version.version} into website/dist/: rules page (${rules.headings.length} headings, ${rules.sections.length} sections), ${moves.length} moves -> dist/assets/data/moves.json`);
