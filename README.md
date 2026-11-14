# Pokémon Mystery Quest

This repository is the home of **Pokémon Mystery Quest**, a fan-made tabletop RPG for
Pokémon-only adventures by u/Finnfox66. It collects the exported rules documents, the
character sheet, and a fan-made website that presents the rules and provides tools for
playing with them.

The rules themselves live in the author's Google Doc (linked in the ruleset's
"Links to material" section) — that document is the source of truth. The files under
`rules/` are read-only exports of it, kept here for reference, comparison and analysis.

## What's in this repository

- **`rules/`** — the versioned ruleset exports (`Mystery Quest ruleset 0_x_y_z.md`; the
  latest sits at the folder root, all earlier ones in `Older versions/`), the
  release-to-release changelogs in `Rules changelog/`, and the character sheet in
  `rules/Character sheet/` (paper PDF/PNG prints plus the working `.xlsx`).
- **`website/`** — the project's website: its source files in `site/`, the generated
  ruleset documents in `ruleset/` (built from the newest export by
  `tools/update-ruleset.mjs` — never edit those by hand), the build tools in
  `tools/`, and the planning documents ([CONTENT_PLAN.md](website/CONTENT_PLAN.md), [TECHNICAL_PLAN.md](website/TECHNICAL_PLAN.md),
  [design.md](website/design.md) and the `design-reference/` screenshots). See [website/README.md](website/README.md)
  for how to build and run it locally.
- **`ai-context/`** — working documents maintained together with an AI assistant:
  open findings on the current ruleset ([RULES_ANALYSIS.md](ai-context/RULES_ANALYSIS.md)), the design decision log
  and resolved-findings record ([DESIGN_DECISIONS.md](ai-context/DESIGN_DECISIONS.md)), the Move conversion method
  ([MOVE_CONVERSIONS.md](ai-context/MOVE_CONVERSIONS.md)).
- **[AGENTS.md](AGENTS.md)** — instructions for AI coding assistants working in this repository.

## License

The original content of this repository — the ruleset text, the character sheet, the
website and its code, and the planning and analysis documents — is licensed under the
[MIT License](LICENSE) and is free to use, copy, modify, and distribute for any purpose.

Pokémon and all related names and marks are trademarks of Nintendo, Game Freak, The
Pokémon Company, and Creatures Inc. This is an unofficial fan-made project, not
affiliated with or endorsed by them, and the MIT License grants no rights in those
trademarks. See [LICENSING.md](LICENSING.md) for the full licensing documentation.
