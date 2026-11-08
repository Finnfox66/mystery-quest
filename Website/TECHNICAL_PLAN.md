# TECHNICAL_PLAN — Pokémon Mystery Quest website

**How the website is built.** For what the site contains, page by page, see
The v1 site is built into `Website/site/` by `Website/tools/build.mjs` (all pages except the encounter builder, which is left out for now).

Plan for a static website presenting the **Pokémon Mystery Quest** ruleset (currently
v0.9.5.8). **There is no backend**: everything runs in the browser, and character sheets
are imported/exported as JSON files.

---

## 1. Constraints and non-goals

- **No backend, no accounts, no database.** Static hosting only — the site is a plain
  static bundle, so any static host works: AWS S3 + CloudFront (the original plan),
  GitHub Pages, Netlify, or a local file server. All state lives in the browser
  (in-progress characters in `localStorage`) or in exported JSON files. Hosting note for
  GitHub Pages: a user/org page or custom domain serves from the root and root-absolute
  URLs (`/assets/…`, `/rules/`) work as-is; a *project* page (`user.github.io/<repo>/`)
  needs a `<base href="/<repo>/">` in the templates (add a `--base` option to
  `tools/build.mjs`) or relative paths.
- **Predefined data libraries, bundled at build time — except species base stats.**
  Species names and types, the type chart (resistance/weakness levels), the Ability
  list, the Base Value Arrays and the Move library ship as static JSON under
  `Website/site/data/`. No runtime lookup and no external API — the site stays
  dependency-free and hostable anywhere. **Species base stats are deliberately not
  included**: official creature stats can change between game versions, and bundling
  them would create a second source that drifts from the ruleset's conversion input —
  so the earlier "no official base-stat lookup" exception stands for stats, and Core
  base values are entered by hand. Factual game data only — no artwork, per
  CONTENT_PLAN.md §1.)
- **The Google Docs are the source of truth** for the rules; the repo's `Rules/*.md`
  exports are inputs, never outputs. Website content is *generated* from them (see
  CONTENT_PLAN.md §3); generated HTML/JSON is committed but never hand-edited.
- **Custom Moves are first-class.** Because any character can have invented or
  home-converted Moves, a character's import/export **never stores Move reference IDs** —
  every Move is embedded in full (§5). The Move library on the site is a convenience
  palette, not a dependency of the format.
- **Portraits travel with the sheet.** Supported via the JSON itself (base64 data URL)
  so a character is always a single file; details in §6.
- **No backwards compatibility in v1.** A schema version field is written for
  information, but no migration machinery is built; files exported by older schema
  versions are not guaranteed to load (§8). Migration is a possible later addition, not
  a v1 commitment.
- **No battle tracking in v1.** Initiative, stances, turn order and per-Move PP spending
  happen at the table; the site is a creation and reference tool, not a virtual
  tabletop. The sheet tracks the character's *current* state — HP, PP, active Status
  Conditions and buffs/debuffs (§5) — not combat flow. The encounter
  builder (§7.5) is *planning*, not tracking: it computes a balance read-out from two
  rosters and keeps no combat state, which stays within this constraint.
- Non-goals for v1: hosting the character sheet PDF (a link suffices), dark mode, and
  the fan-project naming/disclaimer content itself (that is content policy — see
  CONTENT_PLAN.md §1).

## 2. Proposed stack

Deliberately boring and dependency-light — the site must stay maintainable by one person
and hostable anywhere:

- **No framework.** Plain HTML + CSS + vanilla JavaScript (ES modules). The creator tool
  is the only complex piece; if it outgrows vanilla DOM code, Preact or Svelte is the
  fallback, decided *after* a working vanilla prototype.
- **Input format (decided): Markdown throughout** — no HTML or JSON canonical
  document is stored for the rules. Markdown is the only format the project
  receives (the Google Docs export), it diffs cleanly for review, a stored
  HTML/JSON intermediate would be a second quasi-source that can drift, and the
  pipeline's normalized Markdown input doubles as the v2 Markdown download (§11)
  for free. The site's runtime format is HTML — as a *generated output*
  (partials), committed but never hand-edited.
- **The website's rules documents live in `Website/ruleset/`** (decided),
  maintained by **`Website/tools/update-ruleset.mjs`** (run after each new
  export arrives; see `Website/ruleset/README.md`). The script picks the newest
  `Rules/Mystery Quest ruleset 0_x_y_z.md` and produces:
  - **the ruleset document** — the artifact-cleaned copy of the latest export
    (escaped punctuation, vertical-tab table cells → `<br>`, heading anchor
    tags, NOTICE boxes and the table of contents' Google-Doc page numbers
    removed), **without the Example Move conversions section** (the
    website provides the Moves list separately) and **without the
    "Contents and material" section** (the document's own ToC, links to
    material, acknowledgments and character-sheet image — that material is
    presented site-side, see CONTENT_PLAN.md §2.1), under the generic name
    `Mystery Quest ruleset.md` so references to it never change (replaced
    wholesale on each run).
  - **`example-move-conversions.md`** — the cleaned Example Move conversions
    section on its own: the build's source for `moves.json`.
  - **`version.json`** — the true ruleset version, derived from the export
    FILENAME (e.g. `0_9_5_8.md` → `0.9.5.8`), plus the source export and the
    update date. The document byline often carries a placeholder ("0.9.5+")
    because the author does not update it constantly; the script rewrites the
    byline to the true version in the generated copy, and the site's version
    banner reads from `version.json` — the placeholder never reaches the page.
  - **image handling** — the export's image references (`![][imageN]`) are
    mapped through **`Website/ruleset/images.json`, the image manifest** that
    specifies what each image link represents: alt text, the website asset
    path to serve it from, and optionally a repo source file the script copies
    into `Website/site/assets/` (e.g. the character-sheet image, served from
    the repo's own `Mystery Quest character sheet.png`). If a future export
    carries a base64 payload for a reference instead, the script extracts it
    into the assets automatically — so base64 in the exports is *supported*
    but not needed. A reference with no manifest entry fails the run loudly,
    so new images must be given a manifest entry. Entries remain valid even
    when their reference is no longer in the generated rules copy — the
    character-sheet image's reference lived inside the removed "Contents and
    material" section, but its asset is still copied and the site references
    it by path directly (CONTENT_PLAN.md §2.6).
  The raw exports in `Rules/` are never touched; the generated documents are
  never hand-edited. The build (below) consumes these files, and the v2
  Markdown download is the ruleset document itself.
- **One build script** (`Website/tools/build.mjs`, Node) run on demand when the
  ruleset documents change. It:
  1. takes the artifact-cleaned ruleset document and the extracted
     `example-move-conversions.md` from `Website/ruleset/` (kept up to date by
     `Website/tools/update-ruleset.mjs` — the cleaning and Moves split are a
     separate step so the pipeline renders stable, artifact-free inputs),
  2. renders the ruleset to HTML partials, **from the first "## Description"
     heading onward** — everything before it (the document title, the subtitle
     line and the author/version byline) is not rendered on the rules page,
     because the page header, version banner and footer already present the
     name, author and version; the generated document itself keeps that
     material so the v2 Markdown download (§11) stays a complete standalone
     document. Anchors derive from the section headings (the repo's canonical
     way to reference rules),
  3. regenerates `Website/site/data/moves.json` from
     `Website/ruleset/example-move-conversions.md`,
  4. generates `Website/site/data/search-index.json` from the rendered rules (§3), and
  5. stamps the version (from `Website/ruleset/version.json` — never the
     document byline's placeholder) and the build date into
     `Website/site/data/site.json`.
- **Build-time Markdown parsing:** a small hand-written renderer inside
  `tools/build.mjs` (headings/tables/lists/inline formatting) — the cleaned export's
  markdown is regular enough that no parser dependency is needed, keeping even the
  build at zero npm dependencies. The site bundle is dependency-free too.
- **Testing:** Node's built-in test runner against the conversion engine and fixtures
  (§9). No CI needed initially; the build script runs the checks on every build.
- **Add/Set UI pattern (implemented):** "Add …"/"Set …" buttons open a **modal** (× button
  top-right, Cancel bottom-right, backdrop click and Esc also close; a confirm button sits
  next to Cancel; a live preview shows the selection's meaning where useful). Added items
  render as **cards** with a Remove button on the right, or below the content on narrow
  screens.

## 3. Rules page layout and search (static, no backend)

- **Two-column layout**: a left outline column and a main rules column, each with its
  own scroll (`overflow` on each column, not the page). The build emits a **headings
  list** (level, text, anchor) alongside the rendered rules, so the outline and the
  search index are built from the same rendered content as the page and can never drift
  apart.
- **Outline/contents list** (left column, default view): lists all headings, but by
  default only H2s are shown (the document title is the H1). Each row shows the count of
  its direct subheadings "(n)"; headings are **accordions** — clicking the heading name
  expands/collapses its subheadings (no arrow icons; subheadings indent by depth). Each
  row has a **">" button on the right** that scrolls the main column to that section's
  anchor; only ">" navigates. Both columns use `overflow-y: scroll` so the scrollbar is
  always reserved (no layout shift). The rules page itself is excluded from the global
  `html { overflow-y: scroll }` fix (its columns scroll instead).
- The build also emits a **search index** (`search-index.json`): one entry per section
  (heading, anchor, section breadcrumb, normalized text).
- **Search**: the search box live-filters client-side against the prebuilt index —
  instant, no server. While a query is active, the left column shows **search results
  instead of the outline**: each result shows its heading breadcrumb (e.g. "Secondary
  effects > Status Conditions — Paralysis"), a limited snippet of text around the match,
  and a **">" button** that scrolls the main column to the result's anchor and
  highlights the matched terms. Clearing the search word — via the **×** button inside
  the field when it has text — switches the left column back to the outline/contents
  list.
- The Moves browser's filter UI (type/category/targeting/keyword) doubles as the
  search tool there; free-text search over Move names and effect texts is included.

## 4. Visual design

Light and minimalistic, with gradients reserved for page identity rather than surface
decoration:

- **Light theme only** for v1: light background, dark text. Dark mode is not a v1 goal.
- **Content cards use grey edges, not shadows**: cards are defined by light grey
  borders (hairline-to-1px neutral grey), not drop shadows. Where a shadow is
  unavoidable for elevation (modals, dropdowns), it stays minimal and close to the
  element; ordinary content never floats.
- **Small corner radii** on container cards, inputs and buttons (roughly 4–6 px):
  rounded, but not pill-shaped; chips and badges stay flat solid colors so they read
  as accents rather than competing surfaces.
- **Gradients create page identity** on the general pages: page headers and section
  banners may use soft two-hue gradients; small items stay flat solid colors. The
  **character sheet page uses no gradients at all** (§4.1).
- **Spacing by page role**: the home page is airy, with large paddings and generous
  whitespace; the character sheet page is efficiently spaced instead — compact
  paddings, the same small radii, no marketing air (§4.1).
- **Fonts (Google Fonts):** the default text font is **Inter**; the **logo and the rules
  page headings** use **IM Fell Great Primer**. IM Fell Great Primer has **no Bold
  style**, so the logo and rules headings must not use bold — hierarchy comes from size
  and color instead. 1–2 accent hues per page beyond the neutral base.
- Accessibility constraints on top of the style: text/background combinations must
  hold WCAG AA contrast, focus states must be clearly visible on the rounded inputs,
  and the layout must work down to phone width (the creator tool is the narrow-layout
  stress case).
- No official Pokémon artwork or sprites anywhere (CONTENT_PLAN.md §1); placeholder
  graphics are generic silhouettes drawn in the site's own flat style.

### 4.1. The character sheet page: efficiently spaced and moderately print-ready

The creator's sheet view (and the Phase-8 print-friendly view built on it) follows
stricter rules than the rest of the site — the goal is a sheet that is *already
moderately print-ready*, manageable on a home printer:

- **No gradients** on the character sheet page: flat solid colors only, so a home
  printer reproduces it cleanly.
- **Not black and white, and the page background may be gray**: the sheet keeps its
  colors (the xlsx palette — gray section headings, gray labels, light value cells),
  and the app background behind the sheet may be a light gray with white card
  surfaces. Print CSS keeps background colors only where they carry meaning
  (headings, labels) and lets everything else print as white surface with grey edges,
  so the ink usage stays home-printer friendly.
- Grey edges instead of shadows here as everywhere else (§4); compact, efficient
  spacing — the sheet is a dense form, not a landing page.

## 5. Character JSON format

Schema versioned (`schemaVersion`) for information and future-proofing; v1 writes
version 1 and builds no migration machinery (§1). Moves are embedded in full —
required, because custom Moves cannot be referenced by ID.

```jsonc
{
  "schemaVersion": 1,
  "kind": "pc",                       // "pc" | "npc"
  "name": "Ember",
  "species": "Eevee",
  "types": ["Normal"],
  "portrait": {                       // optional, §6
    "mimeType": "image/png",
    "data": "iVBORw0KGgo…"            // base64 (data URL body)
  },
  "appearance": { "height": "0.3 m", "weight": "6.5 kg" },

  // PC stat model: every stat is base + progress + bonus (progress = Progress Modifiers)
  // NPC model (kind === "npc"): general values + per-stat exception modifiers, per the GM section
  "coreStats": {
    "health":   { "base": 6, "progress": 0, "bonus": 0 },
    "attack":   { "base": 6, "progress": 0, "bonus": 0 },
    "specialAttack":  { "base": 5, "progress": 0, "bonus": 0 },
    "defense": { "base": 5, "progress": 0, "bonus": 0 },
    "specialDefense": { "base": 7, "progress": 0, "bonus": 0 },
    "speed":   { "base": 6, "progress": 0, "bonus": 0 }
  },
  "knowledgeStats": { "insight": { "base": 2, "progress": 0, "bonus": 0 } /* … */ },
  "socialStats":    { /* cool, cute, scary, elegant */ },
  "bonusStats":     [ { "topic": "Cooking", "value": 2 } ],
  "npcCategories":  { "core": 2, "knowledge": 10, "social": 7 },  // NPC only

  "abilities": ["Resourceful"],      // PCs choose 2; NPCs may have none
  "moves": [ /* Move objects, embedded in full, max 4 + implicit Basic attack */ ],
  "hp":  { "current": 24, "severeDamage": 0 },
  "pp":  { "current": 9 },
  "fatePoints": 0,                    // PC only (max 2)
  "statusConditions": ["Burn"],       // active Status Conditions; the sheet shows each one's effect + removal DC
  "buffsDebuffs": { "attack": 2 },     // active buff/debuff stages per stat (Accuracy/Evasion use stages of 4; max 6)
  "notes": "Free text, inventory…"
}
```

**Move object** (every field a Move actually has; omitted when the Move has nothing for
it, matching the Move-entry format):

```jsonc
{
  "name": "Thunder",
  "type": "Electric",
  "category": "special",              // "physical" | "special" | "status"
  "targeting": "single-target",       // "single-target" | "area-of-effect"
  "rangeMode": "long-range",          // "melee" | "long-range" (from official contact info)
  "ppCost": 2,
  "accuracyModifier": 4,               // already-converted modifier, e.g. 70% → 4
  "keywords": [],                     // subset of Priority, Counter, Charging, Recharging, Pledge, Trapping, Condition
  "range": "20 m + 2x the user's Special attack",
  "shape": "Blast (small), Projected", // AoE only
  "shapeSize": "2 m + half the user's Special attack",
  "power": { "powerValue": 12, "powerDice": ["d12"] },   // damaging only; AoE: powerValue absent
  "secondaryEffect": "Has 10% (-8 modifier) chance of applying Paralysis.",
  "description": "During Rain, the Move's Accuracy modifier is +10. …",
  "conversion": "direct",              // "direct" | "indirect" — markings from the source data
  "custom": true,                     // true when not from the site's Move library
  "official": {                       // provenance for converted Moves; absent when custom-only
    "power": 110, "accuracy": 70, "pp": 10,
    "contact": false, "rangeRule": "One Adjacent / One Any", "category": "special"
  }
}
```

Design decisions worth stating:

- **Converted values, not official ones, are the operative fields.** The site displays
  and uses `power` / `accuracyModifier` / `ppCost` directly; the `official` block is
  provenance (and lets the creator re-run the conversion if a table ever changes).
- **Active Status Conditions and buffs/debuffs are part of the sheet** (like current
  HP/PP): the JSON stores them and the sheet displays each one's effect from the
  ruleset's Secondary effects tables — condition effect and removal DC, and the
  stage → modifier conversion for buffs/debuffs. What stays at the table is combat
  *flow*: stance, initiative, turn order, per-Move PP spending. Advantages/Disadvantages
  remain out of the export — they are situational, not sheet state.
- Derived values (Max HP, Max PP, Movement Range, Base Evasion, Level) are **computed on
  load, never stored**, so a rules change cannot leave a sheet internally inconsistent.

## 6. Portraits in import/export

Portrait handling with no backend, keeping "one character = one file" true:

- On **import** (file picker or drag-drop), the image is drawn to a canvas, downscaled to
  a small square (target ~96×96, PNG) and stretched to fit the square, then stored as
  a base64 data URL in `portrait`. Typical size after downscale: a few KB — the same
  stored image serves both the characters-list thumbnail and the sheet.
- On **export**, the data URL is written into the JSON as-is, so the portrait travels
  with the sheet.
- A secondary **"Export bundle (.zip)"** action can additionally emit the original,
  full-resolution image alongside the JSON for archival. This is the optional plus;
  the primary path must remain the single JSON file.
- If `portrait` is absent, the sheet renders a placeholder silhouette.

## 7. Creator tool internals

PC/NPC modes sharing one component library. Page content is described in
CONTENT_PLAN.md §2.4.

### 7.0. Sheet modes: edit and preview

Every character sheet has two modes, toggled without losing any state:

- **Edit mode** — all sections stacked on one page (identity, stats, Abilities, Moves,
  derived values, Status Conditions/buffs, portrait, notes), each with its assistive
  tools inline. The tools fill fields from the predefined libraries (§1): Pokémon
  species names and types (→ Resistances/Weaknesses from the type chart),
  resistance/weakness levels, the Ability list, the Move library (`moves.json` plus
  any future library file), the Base Value Arrays, and the official-values Move
  converter (§7.4). Species base stats are not in the libraries (§1) — Core base
  values are entered by hand. Everything stays manually editable — assistive, never
  forced (§7.1).
- **Preview mode** — the sheet rendered as the print-oriented sheet view (§4.1): the
  xlsx-like layout, efficiently spaced and moderately print-ready, for reviewing and
  printing the character. Preview is **not read-only**: the values that change during
  the game stay editable there — current HP, current PP, current Fate Points,
  buffs/debuffs and Status Conditions.

### 7.1. UX principle: assistive, never forced

Every value in a character sheet can be typed by hand. Assistive tools exist to
accelerate, not to gate: they are always an *optional* generator next to manually
editable fields, never a required wizard step. If an assistive tool's output is wrong
for the user's case (Indirect conversions, homebrew, house rules), the user simply
edits or ignores it. Concretely:

- **Move entry** has two freely mixed paths: fill in the converted fields directly
  (Power Value / Power Dice / PP cost / Accuracy modifier / range / keywords by hand),
  or open the official-values helper (§7.4), enter the official numbers, press
  *Convert*, and have the converted fields filled in — then still editable. The
  helper's official-values block is optional provenance, not a required input.
- **Base Value Arrays** (the 12 numbers allocated to Knowledge, Social and Bonus
  stats at creation) get the same treatment, with two usage patterns because the
  user must decide *where each number goes*:
  1. **Guided assignment** — the user picks an array (Hyper specialized / General
     specialized / Jack of all trades), and the site hands out its numbers for
     placement: each unplaced number can be dragged/assigned to a stat, with the
     running state of placed vs. remaining numbers shown.
  2. **Reference tracking** — the user picks an array but enters stat values
     manually; the site compares the manually entered base values against the
     array and shows which numbers are still missing (e.g. "used: 10, 9, 8 —
     remaining: 7, 6, 5, 5, 4, 3, 2, 1"), flagging values that don't occur in the
     array at all. The user can also ignore arrays entirely and enter anything.
- Stats, types, Abilities, and derived-value overrides are plain editable fields
  throughout; nothing is locked behind a tool.

### 7.2. Player character mode

Mirrors the xlsx sheet and the character-creation chapter: species, name, types;
Core/Knowledge/Social/Bonus stat entry with base + progress + bonus fields, with Base
Value Array guided assignment or reference tracking (§7.1); Abilities (2, with warnings
for species-specific ones like Wonder Guard); Fate Points; Resistances/Weaknesses noted
per species typing.

- Live derived panel: **Max HP = Health × 4**, **Max PP = ⌈(Health + Attack +
  Sp. Attack) / 2⌉**, **Movement Range = ⌈Speed / 2⌉** (unbuffed — buffs don't apply to
  move distances), **Base Evasion = 12 + Speed**, **Level = ⌈Σ Core Progress × 1.5⌉ + 5**.
- **Move entry** via either path of §7.1; the Basic attack is always present and not
  editable except for type.
- **Status Conditions and buffs/debuffs**: add/remove active Status Conditions from the
  ruleset's list (Burn, Freeze, Paralysis, Poison, Badly poisoned, Sleep, Flinch) and set
  buff/debuff stages per stat with steppers; the sheet displays each one's effect and
  removal DC / resulting modifier next to the stat it affects.
- Ability-driven derived adjustments (Tiny/Large, Resourceful, Wonder Guard,
  Technician) shown as **override inputs** next to the computed values, since the rules
  modify them at the Ability level, not the formula level.

### 7.3. NPC mode

Per the GM section's model: general values for Core/Knowledge/Social, per-stat exception
modifiers (positive or negative, added to the general values — Core's exception modifiers
can be derived from the official species stats by the normal conversion), the same
derived panel, 0–4 Moves, no Fate Points, and the same Status Conditions / buffs-debuffs
tracking as PCs (§7.2).

### 7.4. Conversion engine (shared JS module, `assets/js/convert.js`)

Implements exactly the ruleset tables, which are already verified in this repo:

| Conversion | Rule |
| :--- | :--- |
| PP cost | official 5 → 3; 10 → 2; 15 → 1; 20+ → 0 |
| Power Value | 5–20→2, 25–40→4, 45–60→6, 65–80→8, 85–100→10, 105–120→12, 125–140→14, 145–160→16, 165–180→18, 185–200→20, … (through 245–260→26) |
| Power Dice | PV 2→d2 … 12→d12, 14→d10+d4, 16→d10+d6, **18→d10+d8**, 20→2d10, 22→d10+d12, 24→2d10+d4, 26→2d10+d6 |
| Single-target Power | Power Value + one set of Power Dice |
| AoE Power | two sets of Power Dice only (no Power Value); STAB adds one set in both cases |
| Accuracy modifier | official % ÷ 5 − 10 (100→+10, 70→+4, 50→0, 30→−4 …) |
| Range | Melee ST 1 m; Long Range ST 20 m + 2× (Sp.) Attack; Long Range Status 15 m; Ranged AoE 10 m + (Sp.) Attack / 15 m |
| AoE shape | All Adjacent→Blast small/Projected; Your Party→Blast small/Projected; All Adjacent Foes→Cone small/Flared; All Foes→Blast large/Ranged; All→Blast large/Projected; Entire Field→Blast all/Radial; Status sizes 5/10/50 m vs Physical/Special 2 m+½Atk, 4 m+Atk |
| Keywords | Priority, Counter, Charging, Recharging, Pledge, Trapping, Condition; keywords chosen at entry, PP paid on first use (Charging) / No Main Actions next End Phase (Recharging) are noted in the UI, not restated per Move |

**Characters list (creator landing view).** In-progress characters autosave to
`localStorage` (one slot per character), with an explicit "this is not a save file —
export JSON to keep it" warning. The landing view lists them; each list item shows:
- the **portrait** — a small square image rendered from the base64 PNG stored in the
  character JSON (§6); characters without a portrait get the placeholder silhouette;
- the **name** as the label, with details: **type** ("Player character" / "NPC"),
  **species**, and **level** (computed per §7.2);
- **"Duplicate"** (deep-copies the character into a new slot, e.g. "Ember (copy)"),
  **"Delete"** (with a confirm step), and a **">" button** that opens that character's
  sheet (edit mode, §7.0).
Above the list: a **filter/search field** that limits the shown characters to those
matching the search word (name, and species/type), and a **"New character"** action
that creates a blank character from scratch (PC or NPC kind chosen on creation).

### 7.5. Encounter builder (`/encounters`)

A planning page for game masters: two sides of a combat — the players' party and the
foes — with characters added to either side and the encounter's balance calculated
live. It shares the creator's character data and component library. It is encounter
*planning*, not battle tracking (§1): no initiative, stances, status conditions or
turn state — the balance read-out is the deliverable.

- **Adding characters to a side**: any character the user has defined — imported JSON
  files (§8) or the creator's `localStorage` characters, PCs and NPCs alike — can be
  added to either side. Side lists show name, kind, types and the character's power
  level (see below); nothing is locked to a "correct" side (an NPC can fight beside
  the party).
- **Power level and balance**: each character's power level is the **average of their
  six Core stat values** (final values: for NPCs, general value plus exception
  modifiers). The balance calculation
  follows the GM section's encounter table: the reference assumes a party of 4 player
  characters (for other party sizes the tool scales the enemy count proportionally
  and says so), and each enemy-count column gives the power level an enemy should
  have for a "difficult, but ending in the players' victory" encounter. The tool
  reports how the actual foes compare to the table's suggestion per enemy-count
  column (at/above/below reference), flags single-enemy encounters (1 enemy: +5
  power and 1 Legendary Action per the table), and repeats the table's own caveat
  that low (Sp.) Attack stats may not matter for combat balance if the character
  only uses Moves of the other category. (Since 0.9.5.3 the ruleset itself defines
  the table's power level as "the average value of the Core stats of a character,
  including both their general values and their exception modifiers" — final
  values, which is what the tool computes.)
- The roster (both sides) autosaves to `localStorage` like creator characters and can
  be exported/imported as JSON; characters are stored as embedded copies, consistent
  with §5's self-contained philosophy — an encounter file needs nothing from the
  site to be understood.

## 8. Import / export mechanics

- **Export**: serialize the in-editor character to the schema, pretty-printed JSON
  (`UTF-8`), filename `<name>.pmq.json`. Optional zip bundle (§6).
- **Import**: file picker or drag-drop; parse, validate against schema version 1
  (a different `schemaVersion` produces a clear "file is from a newer/older version"
  error — no migrations in v1), then open in the editor. Invalid files fail with a
  human-readable error naming the offending field.
- Every Move is embedded (§5); importing a sheet with custom Moves needs nothing from
  the site's library — the sheet is self-contained by design.
- Validation warnings (not errors): moves beyond the 4-learned-Moves cap, PCs without
  2 Abilities, species-specific Abilities on the wrong species.

## 9. Verification

The project convention is that every numerical claim is verified programmatically; the
website inherits that. Test fixtures for the conversion engine (Node test runner, run by
the build script):

- **Eevee PC** (official stats 55/55/50/45/65/55 → Core 6/6/5/5/7/6): Max HP 24,
  Max PP 9, Movement Range 3 m, Base Evasion 18, Level 5.
- **Eevee NPC** (Core 2, official stats as modifiers): HP 32, PP 12, Movement 4 m,
  Base Evasion 20 — the ruleset's own worked example.
- Level table (X = 5/10/25/40/50/60 → levels 13/20/43/65/80/95), accuracy modifier
  table (100→+10 … 10→−8), full PV/PD mapping including the 18 → d10+d8 row, PP table.
- **All 25 example conversions**: the build script checks `moves.json` field-by-field
  against the ruleset's "Example Move conversions" section (same normalization as the
  repo's existing verification: export artifacts and line wrapping only).
- **Status Conditions and buffs/debuffs display data**: the sheet's effect/DC table for
  the seven Status Conditions and the stage → modifier conversion (stage = 2, or 4 for
  Accuracy/Evasion, capped at 6 stages) are checked against the ruleset's Standard
  effects section.
- STAB display strings for single-target ("PV + 2 sets") and AoE ("3 sets") cases.

## 10. Roadmap

| Phase | Scope | Exit criterion |
| :--- | :--- | :--- |
| 1. Skeleton | Folder structure, build script, home page, rules rendering, search index + search box | Rules page renders the latest export with TOC, version banner and working search |
| 2. Engine + tests | `convert.js` + full fixture suite | All §9 checks green |
| 3. Moves browser | `moves.json`, filter + text-search UI, detail cards | All 25 example Moves browsable and correct |
| 4. PC creator | Edit/preview modes, stats, derived panel, libraries (species, types, Abilities, arrays), Move helper, Basic attack | A complete Eevee PC editable and matching the xlsx's outputs |
| 5. NPC creator | Category model, exception modifiers | Eevee NPC example reproduced |
| 6. Persistence | localStorage autosave, JSON import/export, schema validation, portraits | Round-trip (export → import) is lossless, portrait included |
| 7. Encounter builder (deferred beyond v1) | Two-sided roster, character adding, live balance read-out (§7.5) | A 4-PC party vs. defined NPCs produces the correct encounter-table reading, and the roster round-trips |
| 8. Polish | Print-friendly sheet view per §4.1 — the layout stepping stone for v2's PDF export (§11) — accessibility pass, footer/licensing | — |

## 11. v2 outlook (explicitly not v1)

Features under consideration for v2, listed so v1 decisions don't preclude them. The
common theme of the data features is making custom Moves more useful and letting
external (including AI) tools work with the project's data; the PDF export is the one
pure-quality-of-life item, kept in v2 because of its difficulty:

- **Adding custom Moves to the Move library** — beyond the per-character custom Moves
  of v1: a user-side library (browser-local, or imported files) whose entries appear
  in the Moves browser and the creator's Move palette alongside the official
  conversions.
- **Exporting the ruleset as Markdown** — a download of the current, display-normalized
  ruleset (the content pipeline's input format, CONTENT_PLAN.md §3), so users and AI
  tools always have the latest text without scraping the site.
- **Exporting the full Moves library as JSON** — the site's Move data (schema of §5's
  Move object) as a single downloadable file, for reuse in the creator, home tools, or
  AI-assisted Move conversion.
- **Print-friendly PDF export for character sheets** — a real PDF export of a character
  sheet, not just the browser's print dialog. This is expected to be difficult to get
  right (page-friendly layout of a dense sheet, pagination, embedded fonts, portrait
  placement, and consistent output across browsers all have to be solved), so it is
  deliberately v2. v1's Phase-8 print-friendly *view* (print CSS on the sheet screen) is
  the stepping stone: it solves the layout problem once, and the v2 export then renders
  that same layout to PDF rather than inventing a second one. Candidates for the
  implementation (decided in v2, not now): client-side HTML-to-PDF via the browser's
  print pipeline, or a small build-time/headless renderer — no server either way.
- These four share one property worth designing toward even in v1: all published data
  already exists in clean, generated, machine-readable form (`rules` partials,
  `moves.json`, `search-index.json`) — v2 export tools are then thin wrappers, not new
  pipelines.

Battle tracking and backwards compatibility stay out of scope beyond v1 unless
explicitly revisited (§1).

## 12. Decided already / open questions (decide before Phase 1)

Decided already: hosting (AWS S3 + CloudFront later; no effect on the build), no
predefined static data libraries (species names/types, resistance/weakness levels, Abilities, Base Value Arrays, Moves) bundled at build time with no runtime lookup — species base stats excluded (official stats may change; entered manually), fan-project naming and disclaimers with the "MQ" short form
(CONTENT_PLAN.md §1), only the latest ruleset version viewable, rules input format
(Markdown throughout: the export is script-cleaned into `Website/ruleset/`, then rendered
to generated HTML partials; §2), rules search
tools (§3), visual
style — light and minimalistic, grey edges instead of shadows, small radii, gradients
for page identity but never on the character sheet page, home page airy and sheet
efficiently spaced and moderately print-ready (§4–4.1) — the encounter builder as a
planning-only page (§7.5), no backwards compatibility and no battle tracking in v1,
assistive-not-forced tools (§7.1), custom-Move library and data exports deferred to v2
(§11), and **language: English only for v1** (the ruleset's language).

**No open questions remain — the plan is complete and Phase 1 can start.**
