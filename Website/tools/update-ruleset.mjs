#!/usr/bin/env node
// update-ruleset.mjs — refresh Website/ruleset/ from the latest ruleset export.
//
// Reads the newest "Mystery Quest ruleset 0_x_y_z.md" from Rules/, removes the
// Google Docs → Markdown export artifacts, splits off the Example Move
// conversions section (the website provides the Moves list separately), applies
// the image manifest, and writes the results to Website/ruleset/:
//
//   - Mystery Quest ruleset.md    — cleaned ruleset, WITHOUT the Example Move
//     conversions section, under a generic name so references to it never
//     change (replaced wholesale on each run)
//   - example-move-conversions.md — the cleaned Example Move conversions
//     section on its own (the build's source for moves.json)
//   - version.json                — the true ruleset version (derived from the
//     export FILENAME, e.g. 0_9_5_4 -> "0.9.5.4") plus the source export and
//     update date, for the site's version banner
//
// The document byline may carry a placeholder version ("0.9.5+") because the
// author does not update it constantly; the script rewrites the byline to the
// true version derived from the export filename, so the placeholder never
// reaches the web page or the v2 Markdown download.
//
// The export file itself is never touched — the outputs are generated files and
// must not be hand-edited; re-run this script whenever a new export arrives.
//
// Artifact classes removed from the Google Docs export:
//   1. Escaped punctuation (\+ \| \- \. \= \> \* \& …) — the export escapes
//      Markdown-special characters that do not need escaping in the source.
//   2. Vertical tabs inside table cells (stacked cell content, e.g. the AoE
//      conversion table's Physical/Special and Status variants) → <br>.
//   3. Heading anchor tags like {#rounds,-turns-and-actions} — the site derives
//      anchors from the heading text itself (the repo's canonical convention).
//   4. NOTICE boxes — authoring/status notes (e.g. the layout disclaimer).
//      Single-cell tables ("| NOTICE: … |" plus the "| :---- |" separator
//      line) or standalone paragraphs. The author removes them from the
//      source document over time; the website never shows them.
//   5. The "Contents and material" section — the document's own table of
//      contents, links to material, acknowledgments and character-sheet
//      subsections (the plain-text "Contents and material" marker up to the
//      next "##" heading). The site implements its contents listing and
//      material links separately, so the section must not be in the web copy.
//
// Images: the export's image references (![][imageN]) are mapped through
// Website/ruleset/images.json — the manifest that specifies what each image
// link in the ruleset represents. Each entry gives the reference ID, alt text,
// the website asset path to serve it from, and optionally a repo source file to
// copy into the site's assets. If the export instead carries a base64 data
// definition for a reference, the script extracts it into the site's assets
// automatically. A reference with no manifest entry fails the run loudly —
// new images must be given a manifest entry.

import { readdirSync, readFileSync, writeFileSync, unlinkSync, mkdirSync, copyFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, "..", "..");
const rulesDir = join(repoRoot, "Rules");
const outDir = join(repoRoot, "Website", "ruleset");
const siteDir = join(repoRoot, "Website", "site");

const EXPORT_NAME = /^Mystery Quest ruleset (\d+)_(\d+)_(\d+)_(\d+)\.md$/;
const OUT_NAME = "Mystery Quest ruleset.md";
const MOVES_HEADING = /^## Example Move conversions\s*$/;

// Full ASCII punctuation set — the only characters the export escapes.
const PUNCT = "!-/:-@[-`{-~";

/** Find the newest ruleset export in a directory (version-sorted). */
export function latestExport(dir = rulesDir) {
  const found = readdirSync(dir)
    .map((name) => {
      const m = name.match(EXPORT_NAME);
      return m ? { name, version: m.slice(1).map(Number) } : null;
    })
    .filter(Boolean);
  if (found.length === 0) {
    throw new Error(`No "Mystery Quest ruleset 0_x_y_z.md" found in ${dir}`);
  }
  found.sort(
    (a, b) =>
      b.version[0] - a.version[0] ||
      b.version[1] - a.version[1] ||
      b.version[2] - a.version[2] ||
      b.version[3] - a.version[3]
  );
  return found[0];
}

/** Rewrite the document byline's version with the true version. */
export function setBylineVersion(text, version) {
  const re = /^(By \*\*[^*]+\*\*, version ).*$/m;
  if (!re.test(text)) {
    throw new Error('Byline ("By **…**, version …") not found — cannot stamp the true version.');
  }
  return text.replace(re, `$1${version}`);
}

/** Remove Google Docs export artifacts; returns the cleaned text and a report. */
export function clean(input) {
  const report = {};

  // Base64 image reference definitions ([imageN]: <data:image/…>) are collected
  // by applyImages for extraction; dangling plain-text definitions are dropped.
  report.imageDefinitions = (input.match(/^\[image[^\]]*\]:.*$/gm) || []).length;
  let text = input.replace(/^\[image[^\]]*\]:\s*(?!<).*$/gm, "");

  // NOTICE boxes — authoring/status notes; the website never shows them.
  // Table form: a "| NOTICE: … |" cell line plus the "| :---- |" separator
  // line below it; paragraph form: a standalone "NOTICE:" / "**NOTICE:**" line.
  const kept = [];
  let notices = 0;
  const srcLines = text.split("\n");
  for (let i = 0; i < srcLines.length; i++) {
    if (/^\|\s*NOTICE:|^\**NOTICE:/.test(srcLines[i])) {
      notices++;
      if (/^\| :---- \|/.test(srcLines[i + 1] || "")) i++;
      continue;
    }
    kept.push(srcLines[i]);
  }
  text = kept.join("\n").replace(/\n{3,}/g, "\n\n");
  report.noticesRemoved = notices;

  // ToC page numbers: the export's table-of-contents link labels carry a tab
  // and the Google Doc's page number ("[Description\t1](#description)") —
  // meaningless outside the Google Doc.
  report.tocPageNumbers = (text.match(/\t\d+\]/g) || []).length;
  text = text.replace(/\t\d+\]/g, "]");

  // Heading anchor tags — only on heading lines.
  report.headingAnchors = (text.match(/^#{1,6}.*\{#[^}]*\}$/gm) || []).length;
  text = text
    .split("\n")
    .map((line) =>
      /^#{1,6}/.test(line) ? line.replace(/\s*\{#[^}]*\}\s*$/, "") : line
    )
    .join("\n");

  // Escaped punctuation: \X → X for any ASCII punctuation X.
  report.escapedPunctuation = (text.match(new RegExp("\\\\[" + PUNCT + "]", "g")) || []).length;
  text = text.replace(new RegExp("\\\\([" + PUNCT + "])", "g"), "$1");

  // Vertical tabs (single or doubled) inside table cells → <br>.
  report.verticalTabs = (text.match(/\v/g) || []).length;
  text = text.replace(/\v+/g, "<br>");

  report.remainingBackslashes = (text.match(/\\/g) || []).length;
  return { text, report };
}

/** Split the cleaned text into the ruleset body and the Example Move conversions section. */
export function splitMoves(text) {
  const lines = text.split("\n");
  const idx = lines.findIndex((l) => MOVES_HEADING.test(l));
  if (idx === -1) throw new Error("The Example Move conversions section was not found.");
  return {
    rules: lines.slice(0, idx).join("\n").replace(/\s+$/, "") + "\n",
    moves: lines.slice(idx).join("\n").replace(/\s+$/, "") + "\n",
  };
}

/**
 * Remove the "Contents and material" section — the document's own table of
 * contents, links to material, acknowledgments and character-sheet
 * subsections (everything from the plain-text "Contents and material" marker
 * up to the next "##" heading). The website implements its contents listing
 * and material links separately (if at all), so the section must not appear
 * in the website copy.
 */
export function stripContentsSection(text) {
  const lines = text.split("\n");
  const start = lines.findIndex((l) => /^Contents and material\s*$/.test(l));
  if (start === -1) return { text, removed: false, lines: 0 };
  const end = lines.findIndex((l, i) => i > start && /^##\s/.test(l));
  if (end === -1) {
    throw new Error('"Contents and material" section has no following ## heading.');
  }
  const head = lines.slice(0, start);
  if (head.length && head[head.length - 1].trim() !== "") head.push("");
  const out = head.concat(lines.slice(end)).join("\n").replace(/\n{3,}/g, "\n\n");
  return { text: out, removed: true, lines: end - start };
}

/** Parse base64 image definitions out of the raw export text: ref → { mime, data }. */
export function parseImageData(input) {
  const defs = {};
  const re = /^\[([^\]]+)\]:\s*<data:(image\/[a-z+]+);base64,([A-Za-z0-9+/=]+)>/gm;
  let m;
  while ((m = re.exec(input))) defs[m[1]] = { mime: m[2], data: m[3] };
  return defs;
}

/**
 * Rewrite image references (![][ref]) via the manifest and extract/copy assets.
 * manifest: { images: [{ ref, alt, src, source? }] }
 * imageData: ref → { mime, data } from parseImageData (base64 in the export).
 */
export function applyImages(text, manifest, imageData, { siteDir, report = console } = {}) {
  const byRef = new Map((manifest.images || []).map((e) => [e.ref, e]));
  const found = new Set();

  // Extract base64 payloads from the export into the site assets (entries whose
  // reference carries a data definition; the manifest still provides alt text).
  const assetsDir = join(siteDir, "assets", "images");
  mkdirSync(assetsDir, { recursive: true });
  for (const [ref] of byRef) {
    if (!imageData[ref]) continue;
    const ext = imageData[ref].mime.split("/")[1].replace("jpeg", "jpg");
    const file = join(assetsDir, `${ref}.${ext}`);
    writeFileSync(file, Buffer.from(imageData[ref].data, "base64"));
    report.log(`  image ${ref}: extracted base64 payload -> ${file}`);
  }

  // Copy repo source files (non-base64 entries) to their asset paths.
  for (const entry of manifest.images || []) {
    if (imageData[entry.ref] || !entry.source) continue;
    const dest = join(siteDir, entry.src);
    mkdirSync(dirname(dest), { recursive: true });
    copyFileSync(join(repoRoot, entry.source), dest);
    report.log(`  image ${entry.ref}: copied ${entry.source} -> ${dest}`);
  }

  // Rewrite reference tokens.
  const missing = [];
  text = text.replace(/!\[([^\]]*)\]\[([^\]]+)\]/g, (whole, docAlt, ref) => {
    const entry = byRef.get(ref);
    if (!entry) { missing.push(ref); return whole; }
    found.add(ref);
    const alt = entry.alt || docAlt;
    return `![${alt}](${entry.src})`;
  });

  const stale = [...byRef.keys()].filter((ref) => !found.has(ref));
  if (missing.length) {
    throw new Error(
      "Image references without a manifest entry (add them to Website/ruleset/images.json): " +
        [...new Set(missing)].join(", ")
    );
  }
  if (stale.length) {
    report.log(`  note: manifest entries not present in this document: ${stale.join(", ")}`);
  }
  return text;
}

/** Verify the outputs hold no artifacts. Throws on failure. */
export function verify(text) {
  const problems = [];
  if (new RegExp("\\\\[" + PUNCT + "]").test(text)) problems.push("escaped punctuation remains");
  if (text.includes("\v")) problems.push("vertical tabs remain");
  if (/\{#[^}]*\}/.test(text)) problems.push("heading anchor tags remain");
  if (text.includes("data:image")) problems.push("base64 image data remains");
  if (/^\[image[^\]]*\]:/gm.test(text)) problems.push("image definitions remain");
  if (/!\[\]\[/.test(text)) problems.push("unmapped image references remain");
  if (/^\|\s*NOTICE:|^\**NOTICE:/m.test(text)) problems.push("NOTICE boxes remain");
  if (/\t\d+\]/.test(text)) problems.push("ToC page numbers remain");
  if (/^Contents and material$/m.test(text)) problems.push("the Contents and material section remains");
  if (problems.length) throw new Error("Verification failed: " + problems.join("; "));
}

function main() {
  const { name, version } = latestExport();
  const versionString = version.join(".");
  const source = readFileSync(join(rulesDir, name), "utf8");
  const manifest = JSON.parse(readFileSync(join(outDir, "images.json"), "utf8"));
  const imageData = parseImageData(source);

  const { text, report } = clean(source);
  const stripped = stripContentsSection(text);
  const withImages = applyImages(stripped.text, manifest, imageData, { siteDir });
  const { rules, moves } = splitMoves(withImages);
  const rulesFinal = setBylineVersion(rules, versionString);
  verify(rulesFinal);
  verify(moves);

  mkdirSync(outDir, { recursive: true });
  for (const f of readdirSync(outDir)) {
    if (/^Mystery Quest ruleset.*\.md$/.test(f) || f === "example-move-conversions.md") {
      unlinkSync(join(outDir, f));
    }
  }
  writeFileSync(join(outDir, OUT_NAME), rulesFinal);
  writeFileSync(join(outDir, "example-move-conversions.md"), moves);
  writeFileSync(
    join(outDir, "version.json"),
    JSON.stringify(
      { version: versionString, sourceExport: name, updated: new Date().toISOString() },
      null,
      2
    ) + "\n"
  );

  console.log(`Cleaned ${name} -> Website/ruleset/${OUT_NAME} (version ${versionString})`);
  console.log(`  image definitions seen:           ${report.imageDefinitions} (${Object.keys(imageData).length} with base64 payloads)`);
  console.log(`  heading anchor tags removed:      ${report.headingAnchors}`);
  console.log(`  NOTICE boxes removed:            ${report.noticesRemoved}`);
  console.log(`  ToC page numbers removed:        ${report.tocPageNumbers}`);
  console.log(`  Contents and material section removed: ${stripped.removed ? stripped.lines + " lines" : "not found (already absent)"}`);
  console.log(`  escaped punctuation unescaped:    ${report.escapedPunctuation}`);
  console.log(`  vertical tabs -> <br>:           ${report.verticalTabs}`);
  console.log(`  remaining backslashes:           ${report.remainingBackslashes} (expected 0)`);
  console.log(`  ruleset lines: ${rulesFinal.split("\n").length} (Moves section split off: ${moves.split("\n").length} lines -> example-move-conversions.md)`);
  console.log("Verification passed: no artifacts remain in the outputs.");
}

main();
