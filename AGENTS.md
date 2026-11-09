# AGENTS.md

## Project overview

Analysis workspace for **Pokémon Mystery Quest** (v0.9.5.8), a fan-made Pokémon TTRPG
ruleset by u/Finnfox66. The repository holds exported copies of the ruleset and
the character sheet. The purpose of this repo is **rules analysis**, not rules
editing.

## Critical constraints

- **Git:** the user makes all commits in this repository. The agent never runs
  `git commit`, `git add`, or any other staging/commit command — it only edits
  working-tree files.

- The versioned ruleset exports are Markdown
  exports of the author's Google Doc. They are **not the source of truth**.
  The latest export (currently `Rules/Mystery Quest ruleset 0_9_5_8.md`) sits at
  the `Rules/` root; all prior exports (`0_9_4_0` through `0_9_4_7` and
  `0_9_5_0` through `0_9_5_7`) are retained in `Rules/Older versions/` for
  archival and comparison purposes only.
- Version numbering (author correction, 2026-10-27): the exports formerly labeled
  `0_9_5_1` through `0_9_5_8` were actually upgrades to 0.9.4 — they are
  `0_9_4_1` through `0_9_4_7`, and the final export (formerly `0_9_5_8`) was
  promoted to the actual 0.9.5 release as `0_9_5_0` (file names also dropped
  "Pokémon"). Exports after the 0.9.5 release continue the 0.9.5.x numbering
  (`0_9_5_1.md` and up; the current latest is `0_9_5_8`). The 0.9.4 baseline
  predating the first export is `0_9_4_0`. All of these live in
  `Rules/Older versions/`. All documents in this repository use the corrected
  numbering.
- **The website's rules documents** (`Website/ruleset/`) are *generated* files,
  produced by `Website/tools/update-ruleset.mjs` from the newest export: the
  artifact-cleaned ruleset under the generic name `Mystery Quest ruleset.md`
  (without the Example Move conversions section — the website's Moves list is
  the extracted examples plus the hand-maintained `Website/site/assets/data/move-library.json`
  (new conversions from the latest official versions; indirect ones wait in
  `local-only/New versions.md`) — and
  without the "Contents and material" section: the site's contents listing,
  links to material, acknowledgments and character-sheet image are
  implemented site-side, separate from the rules text, and the
  character-sheet image asset is still copied into
  `Website/site/assets/` via the manifest),
  `version.json` (the true version derived from the export filename — the
  document byline's "0.9.5+" placeholder is rewritten in the generated copy
  and never reaches the web page), and `images.json`, the image manifest that
  specifies what each image link in the ruleset represents (alt text, website
  asset path, optional repo source file copied into
  `Website/site/assets/`; base64 payloads in an export are extracted
  automatically). Never hand-edit the generated documents; re-run the script
  after a new export arrives. The raw exports in `Rules/` are never modified.
  The site in `Website/site/` is deployed to GitHub Pages by
  `.github/workflows/website-workflow.yml` (Pages source: GitHub Actions); its pages
  use a per-page `<base>` tag and relative URLs, so the site works both at a domain
  root and under a project subpath (`user.github.io/<repo>/`).
  Never edit, reformat, lint, or "fix" these files — not even whitespace,
  escaped punctuation (`\+`, `\=`, `\.`), or vertical tabs inside tables.
  Those are export artifacts, not defects to repair locally. Prior exports
  are retained for comparison.
- Link artifacts (broken image references produced by the Google Docs to
  Markdown conversion) are ignored; never report them. Base64 image data is
  the exception: if it appears in a rules export, remove it from the file
  silently, without reporting the removal.
- The same applies to the character sheet exports under `Rules/Character sheet/`
  (`Mystery Quest character sheet.pdf` / `.png`), which are not edited.
  **Exception:** `Rules/Character sheet/Mystery Quest character sheet.xlsx` is the working
  character sheet and is maintained in the repository; it may be iterated on the
  author's request to match the current ruleset (its converted values are verified
  against the ruleset's conversion tables and Example Move conversions; formulas
  are kept compatible with both Google Sheets and Excel — no Google-only functions).
  (author instruction, 2026-10-25)
- `local-only/New versions.md` holds
  rules text waiting to be implemented into the full ruleset and may be edited
  directly, including by the analysis agent. Ready rules text that could be
  implemented into the ruleset is presented there, not in `AI context/RULES_ANALYSIS.md`, which
  stays reserved for findings and change requests. `local-only/New versions.md` is the
  primary location for suggested rules text. If `local-only/New versions.md` contains
  ruletext that can already be found in the full ruleset document, remove it from
  `local-only/New versions.md`. Conversely, if ruletext goes missing from
  `local-only/New versions.md`, check whether it has already been implemented into the
  full ruleset document before restoring it. The Google Doc is the author's true
  working draft, so overwriting `local-only/New versions.md` is always safe.
  Formatting in that file: every block's deliverable is the **new** rules text, in
  a fenced code block as a single unwrapped line holding the complete replacement
  text (full paragraph or table cell), so copy-pasting it into the rules document
  carries no line breaks and no comparison is needed to apply the change. Quotes of
  the current ruleset may appear as Markdown block quotes for reference, but a block
  whose only content is a quote of current text is a mistake — quotes identify what
  is being replaced, never the suggestion itself. Tables are never block-quoted.
  Suggested rules text uses curly apostrophes (’), matching the author's document,
  and omits Markdown export artifacts (escaped `\.`/`\+`/`\=`) that do not exist in
  the source document.
- The authoritative sources are the Google Docs / Drive links listed inside the
  ruleset document's "Links to material" section.
- All rules feedback, corrections, and change requests go into
  `AI context/RULES_ANALYSIS.md`. Never encode findings as edits to the
  rules text.
- `AI context/RULES_ANALYSIS.md` analyzes the **latest ruleset version only** — it contains
  no per-version changelog or iteration history. Resolved findings are removed
  from it and condensed under "Resolved findings" in `AI context/DESIGN_DECISIONS.md`.
- **Changelogs** are generated only between **release versions** (e.g., 0.9.4 →
  0.9.5), one document per release pair in `Rules/Rules changelog/`, named
  `changelog X - Y.md` (e.g., `changelog 0_9_4 - 0_9_5.md`). A changelog documents
  the **exact delta between the two named exports** (e.g., 0.9.4.0 → 0.9.5.0) and
  is **never updated when later versions arrive** (e.g., 0.9.5.1's changes are not
  folded into `changelog 0_9_4 - 0_9_5.md`) — later versions are treated like
  older versions in this respect. The exports in `Rules/Older versions/` are
  archival and their individual differences are never documented;
  only the two latest of them are relevant, as context for
  interpreting the most recent changes (author instruction, 2026-10-26;
  clarified 2026-10-29).

## Working conventions for analysis

- Reference rules by **section heading** (e.g., "Stances > Fleet Stance"), not
  line numbers — the exported document's layout may be re-exported at any time.
- Categorize every finding as one of: **Rules defect** (undefined or
  contradictory mechanic), **Ambiguity**, **Balance concern**, **Content gap**,
  or **Editorial**.
- Verify every numerical claim (dice probabilities, conversion tables,
  advancement costs, worked examples) programmatically before reporting it.
  State which checks were run in `AI context/RULES_ANALYSIS.md`.
- The ruleset is version 0.9.5.8 and explicitly pre-playtest. Layout issues and
  sections the author has marked incomplete are known gaps, not defects — report
  them as content gaps only.
- Respect the author's stated design intents (classless, minimal worldbuilding,
  flexible progression over strict balance) when judging whether something is a
  problem. Do not recommend changes that reverse those intents; recommend
  clarifications that preserve them.
- Findings that have been resolved in the ruleset are removed from
  `AI context/RULES_ANALYSIS.md` and recorded in condensed form under "Resolved findings"
  in `AI context/DESIGN_DECISIONS.md`.

## Game design conventions established during analysis

- **Weather conditions** (Harsh Sunlight, Rain, Sandstorm, Snow, Fog) have **no
  standalone mechanical effects**. They are narrative conditions that fulfill
  prerequisites and conditions written into individual Moves (e.g., Thunder's
  Accuracy in Rain) and may justify GM-given Advantages/Disadvantages. Any
  converted Move may reference weather only through such conditionals in its
  description. See `AI context/MOVE_CONVERSIONS.md` for the conversion
  method and the weather conventions.
- **Conversion marking:** a Move conversion is **Direct** when every official
  specification maps onto ruleset mechanics via the conversion tables without
  inventing new mechanics (conditionals written into the description field are
  allowed), and **Indirect** when the official behavior has no mechanical
  equivalent and documented judgment calls are made (semi-invulnerable turns,
  initiative inversion, etc.). Mark indirect conversions in the Move's heading
  ("Trick Room - indirect conversion"), using a plain hyphen (the author finds
  it easier to write than an em-dash); direct conversions carry no marking.
- **Converted Move text formatting:** Move entries use plain formatting only -
  no code quotes (e.g., no `d20 - 4 > 10`), no em-dashes or other complex line
  markings (parentheses and commas only), and empty value fields are written
  as "-". Entries list the Move's own converted values (Type, Keywords, PP
  cost, Range, Accuracy, Shape, Shape Size, Placement Type, Power); AoE
  entries list Shape, Shape Size and Placement Type as separate fields).
  Effects are grouped under "Secondary effects:" (buffs, debuffs, Status
  Conditions; self-effects included) and "Other effects:" (other effects and
  interactions, including rule exceptions such as exceptional timing);
  "Description:" holds lore text only — descriptive text for how the Move
  appears in the game world, no rules text (ruleset 0.9.5.9). Fields are
  omitted when a Move has nothing for them. Prose values after a
  colon start with a capital letter
  ("**Description:** The user burrows into the ground..."). Custom
  sentence values that are not official wording are written with a capital
  letter and end with a dot ("**Power:** Equal to the user’s level."). Move
  texts never repeat rules the ruleset states elsewhere: a Move references
  rules, it does not restate them to make sure they are understood, and it
  never restates another Move's conditionals. Percentage chances are written
  as full sentences naming the target: "Has a 30% (-4) chance of applying the
  Paralysis condition to the target." (author instruction, 2026-10-25; wording
  revised by the author in ruleset 0.9.4.6 and shortened, with the word
  "modifier" dropped from the parenthetical, in 0.9.5.1).
  Effect sentences are written with a verb and end with the beneficiary:
  "Applies an Attack buff of two stages (+4) to the user." (buff/debuff steps
  were renamed to "stages" ruleset-wide in 0.9.4.7 — always use "stage", the
  official Pokémon term). Exceptional timing
  leads the Description ("When a round starts, this Move can be used to..."),
  and simple terms matching defined ruleset terms are preferred ("Power", not
  "Attack Power"; "area", not "zone") (author revision, 2026-10-26; house
  style recorded in `AI context/MOVE_CONVERSIONS.md`).
- **Conversion simplification:** avoid accurate divisions of Max HP or other
  stats in Move conversions - use flat values instead (e.g., Stealth Rock's
  official 12.5% of max HP becomes a flat 4 True Damage), and do not apply
  type modifiers to True Damage in conversions. Both diverge from the official
  rules by design: complexity comes at a cost in a tabletop game (author
  instruction, 2026-10-25).
- **Conversion fidelity over strict balance:** converted Move values (PP cost, Power,
  Accuracy) follow the conversion tables without per-Move balancing. Imbalances inherited
  from official data (Blizzard vs Surf, Hyper Beam's throughput, the official-PP-20+ →
  PP 0 cluster) are accepted — official sources are the point of the conversion kit, and
  Pokémon's own Move set is not balanced in the first place. Per-Move custom PP costs are
  rejected, as are PP-table changes that would make every Move except Basic attack cost
  more than 0 (free Moves do not buy extra Main Actions, and such a change taxes the whole
  utility category). Balance levers are global systems instead: Main Action economy,
  Turn-End Decay with PP maintenance, bounds/durations on indirect conversions' judgment
  calls only, and GM-side encounter design (author instruction, 2026-10-25).
- **The To-Hit stat term is skill, not a leak:** the damaging-Move To-Hit test
  deliberately adds the attacker's (Sp.) Attack against the target's Speed-based
  Base Evasion, so the individual skills of characters have D&D-like meaning for
  hitting targets and avoiding attacks, even though the official games do not work
  that way. Hit-chance inflation at large stat gaps (official accuracy distinctions
  collapsing once (Sp.) Attack exceeds Speed by roughly 12) is an accepted by-design
  cost; proposals to cap or shrink the stat term are withdrawn (author clarification,
  2026-10-25).
- **The level formula is a learnability index, not a damage scale:**
  converting official level-based damage (Seismic Toss, Night Shade) may
  derive Power from the user's level ((X * 1.5) + 5, where X is the total
  Progress Modifiers), but only with both bounds - Seismic Toss uses
  "Equal to half the user’s level (rounded up), to a maximum of 20.":
  halving tracks the normal Move curve through progression and the cap is
  reached at X = 23 Progress Modifiers instead of X = 10, after which the
  Move stays at the top single-target tier (verified numerically,
  2026-10-25).
- **Restrictions** are named capability categories (Mute, Immobile, No Reactions,
  No Main Actions, Turn Skipped, Incapacitated) defined once under "Rounds, turns
  and actions" and referred to by name in other rules; conditions are expressed
  as bundles of restrictions (Unconscious, Surprised, Freeze and Sleep grant
  Incapacitated; Flinch grants Turn Skipped; Restrained and the Restrict
  interaction pick categories directly). A character's turn has an **Action
  Phase** and an **End Phase**, and restrictions never remove the End Phase:
  end-of-turn effects and Status Condition removal tests always resolve, even on
  skipped turns. Design rationale: `AI context/DESIGN_DECISIONS.md` (D1-D9). Immobile is the
  deliberate exception that also sets Speed 0 / Base Evasion 12, now stated in the
  section intro.
- **Priority Turns:** a character that announces using a Priority Move at the
  beginning of a round gains a Priority Turn, played before normal turns in
  Initiative order. The Action Phase is resolved during the Priority Turn; the End
  Phase is resolved on the character's normal turn. A character using a Priority
  Turn must use a Priority Move as part of their Action Phase; if unable, the
  Priority Turn and the Action Phase are skipped.
- **Charging and Recharging** are additional Move keywords (Moves > Additional
  keywords). Charging Moves are charged on first use (PP paid then) and resolved on
  second use, with the charge cancelled by using another Move or the Incapacitated
  restriction; the charged state is also removed in the user's End Phase if the Move
  was not used during the round, unless the user pays 1 PP to maintain it (the
  buff/debuff maintenance convention, ruleset 0.9.5.0); Recharging Moves grant the
  No Main Actions restriction during the
  user's next turn. Both convert the official charge-before / recharge-after Move
  families (Solar Beam, Hyper Beam etc.) without invented mechanics. A skipped
  next turn does not cancel or defer the recharge: Turn Skipped removes the whole
  Action Phase (a superset of No Main Actions), so the penalty is always paid in
  full (author clarification, matching the official games, where freeze does not
  cancel a required recharge turn).
- **Out-of-battle timing:** when a battle has ended, rules and effects with
  turn-based timing are resolved based on how many seconds have passed. Because
  there is no turn order outside of combat, turns and rounds are interchangeable
  outside of combat, and both one turn and one round correspond to 6 seconds of
  in-game time. End-of-turn effects (e.g., Burn and Poison damage) intentionally
  keep ticking every 6 seconds outside combat, unlike the official games
  (author clarification) — roughly self-balancing because Status Condition
  removal tests also run every 6 seconds.
- **Duration counting:** when an effect states that it lasts X turns or rounds of
  combat, the turn or round it was used in counts as the first one of them,
  unless otherwise stated (General logic, ruleset 0.9.4.6). Move texts never
  spell the counting out per Move - Trick Room's former counting clause was
  removed when the global rule was added.
- **Power modification timing:** when a Move states that its Power is halved,
  doubled or otherwise modified under certain conditions, the modification is
  applied to the Move's total Power after the Power Dice have been rolled and
  summed together with the Power Value (Power section, ruleset 0.9.4.7). Move
  texts state the modification only, never its timing - Solar Beam's former
  "(after it has been resolved)" parenthetical was removed when the global rule
  was added (author choice of a general rule over a Move-specific one,
  2026-10-26).
- **Area hazards (entry-hazard conversions):** a converted hazard zone damages
  characters that enter the area or end their turn inside it (at most once per
  turn) - the trigger deliberately mirrors D&D area-damage logic players are
  assumed to be somewhat familiar with (author clarification on Stealth Rock,
  2026-10-26).
- **Ability list scope is deliberate:** the Ability list is general-first, and
  official Abilities are not converted wholesale — the missing ones have been
  considered extensively by the author and left out for now; new Abilities are
  added when a need emerges. Known mappings: Mimikyu's Disguise is covered by
  Substitute (one-time damage negation), Aegislash's Stance Change by Form
  Change, and weather-setting Abilities by Weather Setter (author
  clarification, 2026-10-29; previously tracked as F19, resolved).
- **Physical maneuvers use Attack only:** Shove, Pin and Restrict are physical
  maneuvers requiring physical strength — they deliberately use only the Attack
  stat, never Special Attack (Attack mirrors physical strength; Special Attack
  mirrors strength with special powers) (author clarification, 2026-10-29;
  previously tracked as F26, withdrawn).
- **Damage floors by role:** Chip Damage (minimum 1 damage on a failed To-Damage
  test) applies only to Single-target Moves - it keeps single-target Moves usable
  even against high Defense. AoE Moves never deal Chip Damage: their
  halved-damage-on-miss is the intended counter to weak high-speed targets, which
  take damage even when the Move does not properly hit them (author clarification,
  2026-10-26; implemented in ruleset 0.9.5.0: "AoE Moves can't cause Chip
  Damage.").
