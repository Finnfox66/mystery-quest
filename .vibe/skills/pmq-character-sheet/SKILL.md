---
name: pmq-character-sheet
description: Load before editing the Pokémon Mystery Quest character sheet workbook (Rules/Character sheet/Mystery Quest character sheet.xlsx) — changing values, layout, styles, merges, formulas, or inserting/moving rows. Contains the sheet's style guide, the author's recorded style corrections, openpyxl gotchas, and the required verification steps.
---

# PMQ character sheet (XLSX)

## Files

- `Rules/Character sheet/Mystery Quest character sheet.xlsx` — the working
  character sheet (per AGENTS.md, the maintained file), and the only xlsx: the
  author's style corrections of 2026-10-27 (recorded below) were made in an
  interim copy, "PMQ Character sheet fixed.xlsx", which the author then promoted
  to the working file and renamed. Earlier file names ("PMQ Character
  sheet.xlsx", "PMQ Character sheet fixed.xlsx") appear in older notes and
  records; the style conventions below are the canonical reference.
- The workbook has two sheets: `Character` and `NPC`, sharing the same
  conventions. Both sheets have the Abilities row at row 6 and an empty
  separator row before MOVES (Character: Evasion 35, empty 36, MOVES 37; NPC:
  Evasion 38, empty 39, MOVES 40). The NPC input areas merge C:H (the side
  panel starts at column I), not the Character sheet's C:I.

Edit with Python + `openpyxl` via the `bash` tool (no other xlsx tooling is
available in this environment).

## Style guide

### Fill palette (exact colors)

| Color | Used for |
| :--- | :--- |
| `FF666666` dark gray | Section heading bands (CORE STATS, KNOWLEDGE STATS, SOCIAL STATS, BONUS STATS, OTHER, MOVES, MOVE 1-4 headings) |
| `FFB7B7B7` mid gray | Label cells: stat/field labels in the stat area, field labels in the Move blocks |
| `FFD9D9D9` light gray | Input and derived/computed value cells in the stat area (Base value, Progress, Bonuses, Total columns) |
| `FFA4C2F4` medium blue | Label cells in the Basic attack / MOVE blocks (the blue counterpart of `FFB7B7B7`) |
| `FFC9DAF8` light blue | Input/value cells in the Basic attack / MOVE blocks (counterpart of `FFD9D9D9`) |
| `FFFFFFFF` white | Small white-out patches to visually erase unwanted fills |

Fonts: label and heading cells are bold. No row heights or column widths need
setting (the workbook pins all rows at 15.75; plain default works).

### Border conventions

- All edges are thin black borders.
- **Input boxes have no left edge**: the gray label fill is the visual divider.
  A full-width one-line input (merged `C:I`) is outlined top + bottom + right.
- **Define shared edges once, minimally**: a horizontal rule between two rows
  belongs to the *bottom* of the upper row (e.g., the author's corrected
  Abilities row at `B6`/`C6:I6` carries only left+bottom edges; its top rule is
  row 5's bottom edge). Do not add a redundant top border under an existing
  bottom border.
- **Empty separator rows are completely unstyled**: no fills, no borders
  (e.g., the empty row between Evasion and MOVES). Clearing a cell's value does
  NOT clear its style — stale gray fills and borders are the most likely mistake.
- The stat table's label column has **no closing bottom border** on its last
  row; the dark section-heading fill (`FF666666`) is the visual break.

### Merge conventions

- One-line identity rows (Resistances, Weaknesses, Abilities): label is a
  plain **unmerged** cell in column B (bold, gray); the input area is merged
  across the sheet's full input width — **`C:I`** on the Character sheet
  (side panel starts at J), **`C:H`** on the NPC sheet (side panel starts at
  I). Do not merge the label, and do not use custom spans like `D:H`.
- Stat rows: label merged `B:C` per row; value columns D-I unmerged.
- Section headings: merged bands (e.g., `B7:G7` for CORE STATS with `H7:I7`
  separate; `B37:H37` for MOVES).
- Side panel (columns J-L): label merges like `J36:K37`, value merges like
  `L36:L37`.
- The portrait box `J3:L15` spans many rows — when inserting rows inside it,
  grow the merge (`expand(down=...)`), don't shift it.

### Layout (Character sheet, after the 2026-10-27 restructuring)

Row 2-3 identity header (Name/Pokémon/Types/Height/Weight/Portrait), row 4
Resistances, row 5 Weaknesses, **row 6 Abilities**, row 7 CORE STATS
(+ header row 8), stat rows 9-33, row 34 OTHER, row 35 Evasion, **row 36 empty
separator**, row 37 MOVES, row 39+ Basic attack and MOVE 1-4 blocks.
The NPC sheet mirrors this: rows 2-5 header, **row 6 Abilities** (added
2026-10-28 in the same style, input merged `C6:H6`), row 7 CORE STATS
(+ header row 8), stat rows to 33, row 34 OTHER, row 38 Evasion, **row 39
empty separator**, row 40 MOVES, row 42+ Basic attack and MOVE blocks; its
side panel lives in columns I-L (Level, Movement, HP, Base Evasion).

## Recorded corrections (author, 2026-10-27)

The author corrected three style mistakes made by an automated restructure
(moving Abilities from row 35 to row 6):

1. **Abilities row merges**: `B6:C6` (label) + `D6:H6` (input) were replaced by a
   single input merge `C6:I6` with the label unmerged in B6 — matching the
   Resistances/Weaknesses pattern.
2. **Abilities row borders**: the boxed input (top/bottom/right/left edges) was
   reduced to a single bottom rule across B..I (label keeps its gray fill and
   left edge; the top rule is row 5's bottom edge). Boxes are not universal —
   check how the neighboring author-made rows render before drawing edges.
3. **Vacated separator row (row 36)**: a stale `FFB7B7B7` fill and leftover
   thin borders on B36/D36 (from clearing only values) were stripped — the
   separator must be fully unstyled. Also removed: stray bottom borders on
   B33/C33 (doubled table-break edge; the OTHER heading fill is the break).

## Edit procedures

- **Before editing**: copy the workbook to a temp file (e.g. `/tmp/pmq_backup.xlsx`)
  with `cp` — you will diff against it for verification.
- **Adding a one-line field row**: clone the pattern of Resistances/Weaknesses
  (unmerged bold gray label in B, merged `C:I` input, bottom rule; no left edge).
- **Inserting/moving rows** (the full sequence, all steps required):
  1. Unmerge ALL ranges (capture the list first — `insert_rows` does not move merges).
  2. `ws.insert_rows(n, 1)` — moves cells (values + styles), nothing else.
  3. Re-merge translated: ranges with `min_row >= n` → `shift(0, 1)`;
     ranges spanning the boundary (`min_row < n <= max_row`) → `expand(down=1)`.
  4. Translate formulas: for every formula in rows > n, add 1 to every cell
     reference whose row >= n (regex `(\$?)([A-Z]{1,2})(\$?)(\d+)`; references to
     unmoved header rows like `$F$3` must stay). String literals in these
     formulas (e.g. `"PV + (2 * PD)"`) contain no letter+digit sequences and are
     safe.
  5. Shift data-validation ranges the same way as merges.
  6. Move/clear cells: when clearing, remove styles too (assign a default
     `StyleArray()` or copy the style of a known-clean cell), not just values;
     guard with `isinstance(c, openpyxl.cell.cell.MergedCell)` — merged cells'
     values are read-only.
- **openpyxl gotchas** (details and failure stories in "Failure modes to
  prevent" below): `insert_rows` moves only cells (values + styles), never
  merges, data validations, or formula references; `CellRange.shift` takes
  columns before rows; `CellRange.expand(right, down, ...)`; `cell.value =
  None` clears only the value, `_style` persists; `MergedCell.value` is
  read-only.

## Failure modes to prevent (every one of these happened in this project)

1. **Test openpyxl semantics on a scratch object before mutating the real
   sheet.** `CellRange("A1:B2").shift(1, 0)` shifts COLUMNS, not rows
   (`shift(col_shift, row_shift)`); `expand(0, 1)` expands RIGHT, not down
   (`expand(right, down, ...)`). A five-second scratch experiment before the
   full edit would have caught both. Never learn a parameter order on the
   real workbook.
2. **Mutate in memory, save exactly once, as the last statement.** If any step
   throws, the file on disk is untouched — this saved the workbook twice.
   Never call `wb.save()` mid-script. After a failed run, re-verify the disk
   state (mtime or a fresh probe) before retrying; do not assume.
3. **Clearing a cell is two operations.** `cell.value = None` leaves `_style`
   behind — a stale gray fill and borders survived in the vacated Abilities
   row and the author had to fix them. Always reset `_style` too (default
   `StyleArray()` or a copy of a known-clean cell), and unmerge overlapping
   merges before clearing. `MergedCell.value` is read-only: guard with
   `isinstance(c, openpyxl.cell.cell.MergedCell)`.
4. **`insert_rows` moves only cells.** Merges, data validations and formula
   references do not move with it — run the full checklist above (unmerge →
   insert → re-merge → translate formulas → shift validations → restyle). A
   missing step shows up one session later as an author "fix".
5. **Write inspection probes defensively.** Border sides can be `None`
   (`cell.border.left.style` raises AttributeError — test the side object
   first); `MergedCell` lacks `column_letter` (use
   `openpyxl.utils.get_column_letter(c.column)`) and blocks value writes; a
   crashed probe proves nothing about the file — fix the probe and re-run.
6. **Compare order-insensitively.** Data-validation lists reported "different"
   purely because of ordering — sort `(formula1, sqref)` lists (and merge
   sets) before comparing.
7. **Probe before replacing, and report mismatches instead of guessing the
   direction.** A requested label swap may target a string that does not
   exist (the sheet already matched, or the request was inverted). Search the
   whole workbook (cell values, merged ranges, comments) for the exact
   strings first; if the requested change is a no-op or contradicts the
   sheet, say so before acting.
8. **When debug output contradicts an earlier probe, re-probe — do not
   theorize.** "Phantom merges" that appeared during debugging were the
   script's own column-shift bug visible through a broken translation step;
   a clean minimal probe resolved it in one run.
9. **Formula translation needs a threshold and a count.** Bump only
   references with row >= insert point (header refs like `$F$3` must stay),
   and print how many formulas changed; hand-compute one translated formula
   and diff it against the script's output before trusting the regex.
10. **Git Bash `/tmp` is not a Python path.** `cp file /tmp/x.xlsx` succeeds in
    bash (it maps to the Windows temp dir), but `openpyxl.load_workbook("/tmp/x.xlsx")`
    inside the same heredoc raises FileNotFoundError — Windows Python cannot
    resolve `/tmp/...`. Use `$(cygpath -w /tmp/x.xlsx)`, `$TMP`, or a
    project-adjacent temp path when passing files between bash and Python.
11. **Read verification output carefully before concluding failure.** A
    "values changed" list in an old-vs-new diff naturally contains every
    translated formula twice (old text under the shifted coordinate, new text
    under the same coordinate); check whether "removed" entries are old texts
    at shifted coordinates (expected) before treating them as data loss, and
    confirm side-panel formulas (Level, Movement, HP, Base Evasion) point at
    the new stat rows.

## Verification (after every save — run before reporting done)

Reload both the edited file and the pre-edit backup and compare:

1. Same formula count; spot-check the key formulas (`Base Evasion = 12 +
   $I$14 + $I$35` at L37, `= 12 + $I$35` at L39; Move Power formulas keep
   `$F$3` and `IFS(...)` bodies intact).
2. Data validations unchanged apart from intended row shifts (compare sorted
   `(formula1, sqref)` lists).
3. Values unchanged apart from intended edits.
4. Merged ranges: expected set (nothing silently lost or duplicated).
5. Fills and borders of touched rows: no stale fills/borders on vacated rows;
   new styling matches the author's recorded patterns (the palette, merge, and
   border conventions above).
6. Layout reading: print rows around the edited area (labels in order, empty
   separator row present before MOVES).
