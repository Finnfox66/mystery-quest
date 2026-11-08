# CONTENT_PLAN — Pokémon Mystery Quest website

**What the website contains, page by page.** This is the content plan: the pages the site
has and what appears on each of them. For how the site is built (stack, build pipeline,
data formats, tool internals, roadmap), see `TECHNICAL_PLAN.md`. The v1 site is
implemented in `Website/site/` (all pages except the encounter builder); this document
remains the content plan.

The site presents the **Pokémon Mystery Quest** ruleset (currently v0.9.5.8): the full
rules, a browsable list of converted Moves, a character creator for player characters and
NPCs, and an encounter builder for game masters. There is no backend — everything runs in
the browser and character sheets are imported/exported as JSON files.

---

## 1. Branding and legal content (applies to every page)

- The site is branded **"Mystery Quest"** (short form **"MQ"**) — logo, page titles,
  favicon, navigation. "MQ" is deliberately chosen over "PMQ": it matches the name and
  stays far enough from "PMD" (the official *Pokémon Mystery Dungeon* series). The full
  name "Pokémon Mystery Quest" may appear at most once in body text (the home page's first
  paragraph), in plain unemphasized text.
- **Disclaimers**: the home page shows a clearly visible disclaimer (not buried), and the
  **footer of every page** carries one: an unofficial fan-made project, not affiliated
  with, endorsed or approved by Nintendo, Game Freak, The Pokémon Company, or any official
  Pokémon rights holder; Pokémon and all related names are trademarks of their respective
  owners; the ruleset is free and non-commercial.
- No official Pokémon artwork, logos, or sprites anywhere on the site (portraits are
  user-supplied; placeholder graphics are generic silhouettes in the site's own style).

## 2. Pages

```
/                     Home
/rules                Rules
/moves                Move browser
/moves/editor         Custom Move editor
/moves/preview        Custom Move preview
/creator              Character creator
/links-and-downloads  Links and downloads
/about                About
/encounters           Encounter builder (planned — not in v1)
```

Eight pages are in v1 (the encounter builder is planned but left out for now). Each is
one HTML file plus shared CSS/JS; navigation is plain links (no client router at this
size). The Home, Links and downloads and About pages are fully static; `/rules`,
`/moves`, `/moves/editor`, `/moves/preview` and `/creator` run application code.

### 2.1. Home `/`

- What Mystery Quest is and why it exists: a fan-made, classless, conversion-kit-first
  Pokémon TTRPG that converts the latest official core-series material into tabletop
  mechanics, built for flexibility and GM judgment over strict balance, with minimal
  worldbuilding. (This is where the full name may appear once.)
- The fan-project disclaimer, clearly visible (§1).
- Quick links to the rules, the Move list, and the creator.
- **Material from the rules document's former "Contents and material" section lives
  here, outside the rules text**: the link to the rules document (Google Doc) and the
  acknowledgments. The character-sheet links (paper prints, Google Sheets, PNG image)
  live on the **Links and downloads** page (§2.6), not here.

### 2.2. Rules `/rules`

- The complete, current ruleset, rendered from the latest export. Only the latest ruleset
  version is viewable (decided). Changelogs between release versions live in
  `Rules/Rules changelog/` and are not part of the site in v1.
- **Two-column layout**: the left column is the document outline/contents list of all
  headings; the main column is the rules text itself. The two columns scroll
  independently. Per-section anchors are derived from headings (e.g.
  `/rules#stances-fleet-stance` for "Stances > Fleet Stance"), matching the repo
  convention of referencing rules by heading.
- **Outline/contents list**: by default only H2 headings are shown ("Mystery Quest
  ruleset" is the H1). Each row shows the count of its direct subheadings, e.g. "(3)".
  Headings act as accordions — clicking the heading name reveals or hides its subheadings
  (no arrow icons; subheadings indent by depth). Each heading row has a **"›" button on
  its right side** that scrolls the main rules column to that section; clicking the name
  only expands/collapses. Both columns reserve their scrollbar at all times (no layout
  shift).
- A version banner showing only the version (e.g. "v0.9.5.8") fed from `version.json`,
  never from the document byline's placeholder.
- **Search**: the search box live-filters the rules by text; while searching, the left
  column is replaced by the search results instead of the outline. Each result shows
  its heading structure (the breadcrumb of headings it was found under, e.g. "Secondary
  effects > Status Conditions — Paralysis"), a limited amount of text surrounding the
  match, and a **"›" button** that scrolls the rules to where the result was found (with
  the matched terms highlighted). Clearing the search word — via the **×** button that
  appears inside the field when it has text — returns the left column to the
  outline/contents list. (Implementation in TECHNICAL_PLAN §3.)

### 2.3. Move browser `/moves`

- All converted Moves: custom Moves first (alphabetical), then the ruleset's Example Move
  conversions plus the hand-maintained Move library (Website/site/assets/data/
  move-library.json, converted from the latest official versions), alphabetically. Custom
  Move cards carry
  **Delete** and **Edit ›** buttons; a **New Move** button (right-aligned next to the
  filters) opens the editor at `/moves/editor`, and each custom Move has a preview page
  at `/moves/preview`.
- Filters: type, a single keyword dropdown containing all keywords (including the
  category, targeting and Melee/Long Range groups), and the conversion marking
  (Direct / Indirect / custom). Free-text search over Move names and effect texts is
  included.
- Move detail cards show the converted fields (converted values are the operative ones;
  official values appear as provenance).
- **Z-Moves are excluded** and never listed: they are one-per-battle transformations of
  regular Moves tied to held items (Z-Crystals), not Moves in their own right.

### 2.4. Character creator `/creator`

- **Characters list (landing view)**: the creator opens on a list of the existing
  characters. Each entry shows the character's **portrait** (a small square image;
  characters without one get a placeholder), the **name** as the label, and as details
  the **type** ("Player character" / "NPC"), **species** and **level**. Each entry has
  **"Duplicate"** and **"Delete"** buttons and an **"Edit ›" button** that enters that
  character's sheet. Above the list: a **filter/search field** limiting the shown
  characters to those matching the search word, and **"New player character" / "New NPC"** actions that
  creates a character from scratch.
- Tabs: **Player character | NPC**. The sheet has two modes (toggled without losing
  state): **Edit** — all creation sections stacked on one page (identity, stats,
  Abilities with full descriptions, Resistances/Weaknesses, Moves, portrait, notes),
  each with its assistive tools inline; and **Preview** — the full sheet rendered in two
  columns like the xlsx (left: identity + stats table with Base value/Progress/Bonuses/
  Total/Buff-debuff/Total columns + Moves as full cards with per-character calculated
  Range/Shape Size; right: portrait, derived values, expendable points, Status
  Conditions, notes). Preview is not read-only: current HP/PP/Fate Points, the
  Buff/debuff column, Status Conditions and Notes stay editable there. Add/Set actions
  open a modal (× top-right, Cancel bottom-right, backdrop/Esc close); added items show
  as cards with a Remove button (right side, or below the content when narrow).
  Import/export buttons; the top bar has a **JSON data** menu (download/upload all data).
- Edit-mode assistive tools fill fields from the predefined libraries: Pokémon species
  names and types (→ Resistances/Weaknesses from the type chart), resistance/weakness
  levels, the Ability list, the Move library, the Base Value Arrays, and other
  predefined information (TECHNICAL_PLAN §1, §7.0). Species base stats are not in the
  libraries (official stats may change with future game versions) — Core base values
  are entered by hand. Every value remains manually editable.
- Player-character content: species, name, types; Core/Knowledge/Social/Bonus stat entry;
  Abilities (2, with warnings for species-specific ones like Wonder Guard); Fate Points
  (maximum 2); Resistances/Weaknesses per species typing; Base Value Array tools (guided
  assignment or reference tracking — assistive, never forced: every value can be typed by
  hand).
- Live derived panel: Max HP = Health × 4; Max PP = ⌈(Health + Attack + Sp. Attack) / 2⌉;
  Movement Range = ⌈Speed / 2⌉; Base Evasion = 12 + Speed; Level = ⌈Σ Core Progress × 1.5⌉
  + 5. Ability-driven adjustments (Tiny/Large, Resourceful, Wonder Guard, Technician) are
  override inputs next to the computed values.
- Move entry: converted fields directly, or the official-values helper that fills them in
  (then still editable). The Basic attack is always present and not editable except for
  type. Max 4 learnt Moves + Basic attack.
- **Status Conditions and buffs/debuffs**: the sheet lets you add/remove the character's
  active Status Conditions and set buff/debuff stages per stat, and displays each one's
  effect from the ruleset's Secondary effects tables — for a condition, its effect and the
  DC of its removal test; for a buff/debuff, the stage → modifier conversion (one stage =
  2, or 4 for Accuracy/Evasion; max 6 stages) plus the Turn-End Decay note.
- NPC content: general values for Core/Knowledge/Social, per-stat exception modifiers,
  the same derived panel, 0–4 Moves, no Fate Points — and the same Status Conditions /
  buffs-debuffs tracking as PCs.
- In-progress characters autosave to `localStorage`, with an explicit "this is not a save
  file — export JSON to keep it" warning.

### 2.5. Encounter builder `/encounters` (planned — not in v1)

A game-master **planning** page (no battle state): two sides of a combat — the players'
party and the foes — with characters added to either side and the encounter's balance
calculated live.

- Side lists show name, kind, types and the character's power level; any defined character
  (imported JSON or localStorage, PCs and NPCs alike) can join either side.
- **Balance read-out**: each character's power level is the average of their six Core stat
  final values; the tool compares the foes against the ruleset's encounter table per
  enemy-count column (at/above/below reference), flags single-enemy encounters (+5 power
  and 1 Legendary Action), scales for party sizes other than 4 with a note, and repeats
  the table's caveat that a low (Sp.) Attack stat may not matter if the character only uses
  Moves of the other category.
- The roster autosaves to `localStorage` and round-trips as JSON.

### 2.6. Links and downloads `/links-and-downloads`

A static page collecting the character-sheet formats and paper-print links that used to
live in the rules document's "Contents and material" section (presented here site-side,
outside the rules text):

- **Links to paper prints** of the character sheet: the PDF export (print version) from
  the ruleset's "Links to material".
- **Links to the Google Sheets character sheets**: the author's working sheet and the
  community copy (by u/gimlisab) — both links from the ruleset's "Links to material".
- **The PNG version of the character sheet, displayed inline on this page** — the plain
  site asset `Website/site/assets/images/character-sheet.png` (copied into the assets by
  `Website/tools/update-ruleset.mjs` via the image manifest in `Website/ruleset/
  images.json`). The image belongs here, not on the Home page and not embedded in the
  rules document.

### 2.7. About `/about`

A static page about the project: what Mystery Quest is and who made it, the full
fan-project disclaimer and licensing note (§1), and the acknowledgments.

## 3. Content pipeline (what feeds the pages)

- **Rules**: the generically-named cleaned document `Website/ruleset/Mystery Quest
  ruleset.md` (kept at the latest export by `Website/tools/update-ruleset.mjs`, without
  the Example Move conversions and "Contents and material" sections). The build renders it
  from the first "## Description" heading onward; the page header/banner/footer present
  name, author and version instead.
- **Moves**: `moves.json` = the ruleset's Example Move conversions (parsed from
  `Website/ruleset/example-move-conversions.md`) plus the hand-maintained `Website/site/assets/data/move-library.json`
  (new Moves converted from the latest official versions, same entry format). Conversion
  method and Move-entry formatting conventions: `AI context/MOVE_CONVERSIONS.md`.
- **Conventions carried over to the site's data**: weather has no standalone mechanics;
  Direct vs Indirect marking with a plain hyphen in the title; Move-entry formatting rules;
  curly apostrophes in generated prose.
- Custom/user Moves never enter the site's pipelines — they live only inside character
  JSON.
