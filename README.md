# Pokémon Mystery Quest

This repository is the home of **Pokémon Mystery Quest**, a fan-made tabletop RPG for
Pokémon-only adventures by u/Finnfox66. It collects the exported rules documents, the
character sheet, and a fan-made website that presents the rules and provides tools for
playing with them.

The rules themselves live in the author's Google Doc (linked in the ruleset's
"Links to material" section) — that document is the source of truth. The files under
`Rules/` are read-only exports of it, kept here for reference, comparison and analysis.

## What's in this repository

- **`Rules/`** — the current ruleset export (`Mystery Quest ruleset 0_x_y_z.md` at the
  folder root; selected earlier release baselines in `Older versions/`), and the
  character sheet in `Rules/Character sheet/` (paper PDF/PNG prints plus the working
  `.xlsx`). (Earlier patch exports and the release-to-release changelogs are kept
  outside the repository.)
- **`Website/`** — the project's website: the planning documents (`CONTENT_PLAN.md`,
  `TECHNICAL_PLAN.md`, `design.md` and the `design-reference/` screenshots), the
  generated ruleset documents in `ruleset/` (built from the newest export by
  `tools/update-ruleset.mjs` — never edit those by hand), and the ready-to-serve
  static site in `site/` (rules page and search data built by `tools/build.mjs`; all
  data files, including the Move list, are committed as-is).
- **`AI context/`** — working documents maintained together with an AI assistant:
  open findings on the current ruleset (`RULES_ANALYSIS.md`), the design decision log
  and resolved-findings record (`DESIGN_DECISIONS.md`), the Move conversion method
  (`MOVE_CONVERSIONS.md`).
- **`AGENTS.md`** — instructions for AI coding assistants working in this repository.

## The website

`Website/site/` is a plain static site — serve the folder with any static file server
and open it in a browser. It presents the full ruleset with a searchable outline, a
Moves browser with filters, and a character creator (player characters and NPCs, with
JSON export/import) plus an editor for custom Moves. Everything runs locally in the
browser and stores its data in `localStorage` — no accounts, no server.
