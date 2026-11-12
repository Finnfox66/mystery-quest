# RULES_ANALYSIS.md

Rules analysis of **Pokémon Mystery Quest** v0.9.6.1
(`Rules/Mystery Quest ruleset 0_9_6_1.md`, the latest export). This document analyzes the
current ruleset version only — it contains no version history or iteration log: findings
resolved in the ruleset are removed and recorded in condensed form under "Resolved
findings" in `DESIGN_DECISIONS.md`, and changelogs between release versions live in
`Rules/Rules changelog/`. The ruleset documents are exports from the author's Google Doc
and were reviewed read-only; every recommendation below is a change to make **in the
source document**, not in this repository's copies.

Findings are categorized as: **Rules defect** (undefined or contradictory mechanic),
**Ambiguity**, **Balance concern**, **Content gap**, **Editorial**. Sections of the ruleset
are referenced by heading, not line number. Finding IDs are prefixed by category (D, A, B,
C, E) and never reused — a resolved ID's record lives under "Resolved findings" in
`DESIGN_DECISIONS.md` (older records there use the historical F-numbers).

## Contents

1. [Scope and method](#1-scope-and-method)
2. [What already works well](#2-what-already-works-well)
3. [Findings](#3-findings) — defects, ambiguities, balance concerns, content gaps, editorial
4. [Prioritized change list](#4-prioritized-change-list)
5. [Overall assessment](#5-overall-assessment)

---

## 1. Scope and method

- Every section of `Rules/Mystery Quest ruleset 0_9_6_1.md` was read in full.
- All checkable numerical claims were verified programmatically (exact d20 enumeration and
  dynamic programming, run in a sandbox):
  - **Percentage Tests** reproduce official chances exactly for every 5% step from 0% to
    100% (modifier = +10 − 1 per missing full 5%; `d20 + m > 10` succeeds on `10 + m` of 20
    faces). All five documented examples (100/85/50/30/10%) are exact.
  - **Level formula** `(X * 1.5) + 5` rounded up matches the documented table for all seven
    listed values of X (0→5, 5→13, 10→20, 25→43, 40→65, 50→80, 60→95).
  - **Minimum Advancement Point cost** table verified by exhaustive optimal distribution of
    X Progress Modifiers over 6 Core stats (cost of raising one stat to v is v(v+1)/2):
    5→5, 10→14, 25→65, 40→154, 50→234, 60→330 all exact. The 170-session campaign budget
    (2 AP/session = 340 AP) covers the 60-PM maximum (330 AP) with 10 AP to spare.
  - **Eevee conversion example** (55/55/50/45/65/55 → 6/6/5/5/7/6, halves rounding up) and
    the **Eevee NPC derived values** (HP 32, PP 12, Movement 4 m, Base Evasion 20) are
    correct.
  - **Base Value Array totals** are 63 / 72 / 78 as documented.
  - **All 25 example Move conversions** were checked field-by-field against the conversion
    tables: PP cost (5→3, 10→2, 15→1, 20+→0), Accuracy modifier, and Power
    (Power Value + Power Dice per bracket; AoE = two dice sets) all match, including the
    four indirect conversions (Seismic Toss, Fly, Trick Room, Stealth Rock). Stealth Rock's
    values (Shape Size 5 m, Range 15 m, Ranged placement) match the Status rows of the AoE
    conversion table.
  - **Seismic Toss cap**: Power = half the user's level (rounded up), max 20, is reached at
    X = 23 total Progress Modifiers (level 40).
  - **Hit chance at parity**: a 100%-accuracy damaging Move with (Sp.) Attack 6 vs Speed 6
    (Base Evasion 18) hits on d20+10+6 > 18, i.e. 90%; a 70%-accuracy Move hits 60%. A natural
    20 always hits and is a Critical Hit, so the extreme tails are 100%/0% by construction.
    Spot expected-damage checks: Body Slam (1 PP) ≈ 15 expected damage per use at starting
    stats; Surf (1 PP) ≈ 11 per target per use; Blizzard (3 PP) 60% full-damage chance per
    target.
- Judgments respect the stated design intents: classless, conversion-kit-first, flexible
  progression over strict balance, minimal worldbuilding.
- Per repo convention, Google-Docs export artifacts (escaped `\+`/`\=`/`\.`, vertical tabs
  in tables, ToC page numbers) are **not** reported as findings.

## 2. What already works well

- The conversion math is exact: Percentage Tests map official % chances onto the d20 with
  zero distortion, and the advancement/level/Power/PP tables are internally consistent —
  all verified programmatically.
- "Exceeds, not meets-or-exceeds" and "halves round up" are stated once as global logic and
  honored everywhere exceptions occur (jumping rounds down, and it says so).
- The Stance system (choose per round, hidden for NPCs, Protect Stance replacing the
  banned Protect Move) adds real tactical choice without grid dependence.
- The restriction framework (named categories, Action Phase / End Phase, restrictions never
  removing the End Phase) gives the rules a consistent vocabulary for turn structure, and
  the maintenance rules make buffs, debuffs and "charged" states all follow one convention
  (Incapacitated can't pay PP to maintain any of them).
- The "Unmodified values" list (Core rules > Modifiers) states once, for **all** modifiers,
  which values never receive them — Initiative rolls, Move Ranges and Shape Sizes, max/current
  PP — while Base Evasion and Movement Range intentionally do propagate Speed modifiers.
- True Damage is typed by exception only (Combat tests and Moves > True Damage), and Chip
  Damage is explicitly reduced to 0 by immunities.
- The example Move set demonstrates the conversion kit end to end, hard cases included, with
  the four indirect conversions marked and their judgment calls documented.

---

## 3. Findings

### 3.1 Rules defects — contradictions in the text

None open.

### 3.2 Ambiguities — likely to cause table disputes

None open.

### 3.3 Balance concerns — verify in playtest, not necessarily defects

**B1. Speed performs triple duty.**
*Where:* Core rules > Derived combat values; Rounds, turns and actions > Flow of a battle.
Speed drives Movement Range, Base Evasion and the Initiative modifier, while Health drives
only HP and the PP pool. Speed is close to a mandatory stat for defensive builds. Not a
defect; worth an explicit design-intent sentence so a Speed-dumped character is not mistaken
for a balanced choice.

**B2. Advantage/Disadvantage stacking is uncapped.**
*Where:* Core rules > Modifiers > Advantages and Disadvantages.
+4/−4 each, stacking, on top of Cover (+4), unseen attacker (+4), ranged-in-melee (−4) etc. —
a single test can swing ±12 or more, and hit chances are already high (verified: a
100%-accuracy Move hits 90% at equal starting stats; a natural 20 always hits). Probably
intended, but a cap or GM guidance would prevent rules-lawyer stacking.

**B3. Single-target vs AoE Power asymmetry — accepted by design.**
*Where:* Combat tests and Moves > Power.
Verified: the 85–100 bracket converts to 10 + d10 (average 15.5) vs the official midpoint
9.25 — about 68% inflation — while AoE Powers are two dice sets with no flat value.
*Author clarification:* deliberate — AoE Moves are weaker per target but hit potentially
more targets. Recorded in `DESIGN_DECISIONS.md`; no change needed.

**B5. Example Move PP-efficiency spread is inherited from official data.**
*Where:* Example Move conversions.
Verified independently: all 25 conversions match the PP/Accuracy/Power tables exactly. The
official-PP-20+ cluster converts to 0 PP (Quick Attack, Seismic Toss, Thunder Wave, Swords
Dance, Stealth Rock) and has no limiting resource; spot checks at starting stats: Body Slam
≈ 15 expected damage for 1 PP, Surf ≈ 11 per target for 1 PP, Blizzard 60% full-hit chance
for 3 PP, Seismic Toss a variance-free 20 at cap for 0 PP, Stealth Rock 4 True Damage per
character per turn for 5 rounds with no roll for 0 PP. Accepted by design (conversion
fidelity; official data is the point), but these are the items to watch in playtest, and GMs
should know them when pricing encounters.

**B6. Protect Stance is near-total single-target defense for a round, at no PP cost.**
*Where:* Rounds, turns and actions > Stances.
+8 Defense Power with 0 actions means most single-target To-Damage tests fail and deal only
Chip Damage (1, or 0 vs an immunity). Trading your whole round for near-immunity is a strong
but legitimate option; watch whether it makes boss fights stall. Playtest item only.

**B7. Starvation/Sleep Deprivation at 0 Max PP is very harsh.**
*Where:* Health and recovery > Starvation and Sleep Deprivation.
At Max PP 0 the character gets a Disadvantage (−4) to **all** stats (including Core) and
halved Movement Range. Explicitly written, but worth a GM-facing note since it can cascade
into combat ineffectiveness.

### 3.4 Content gaps

**C1. No world-structure rules (by design).**
*Where:* Description; whole document.
No recruiting/catching, guild or dungeon-crawling rules — deliberate per the stated intents —
but a one-line pointer to the alternative PMD rulesets already named in the Description
would help GMs searching for those systems.

**C2. The AoE conversion table has no Physical/Special row for "Entire Field".**
*Where:* Combat tests and Moves > Area of Effect range.
Only the Status entry (Blast (all), 50 m, Radial) is defined; a damaging entire-field Move
has no Shape/Shape Size/Placement conversion. Rare in official data, but the row is missing.

### 3.5 Editorial

**E2.** In Core rules > Stats, the heading "Social stats" lacks the colon used by
"Core stats:" and "Knowledge stats:".
**E3.** The Eevee examples use "Sp. Atk"/"Sp. Def" while the stat names are "Special
attack"/"Special defense" — minor terminology inconsistency (the "(Sp.) Attack" combination
notation is defined; the bare abbreviations are not).
**E4.** Flow of a battle writes Initiative as "d20 + Speed", while Derived combat values
define "Initiative modifier = Speed". The two are equivalent (Initiative rolls are on the
unmodified-values list, so no modifier ever applies), but using the derived-value name in
the roll formula would be terminologically consistent.

Per repo convention, Google-Docs export artifacts in the file (escaped `\+`/`\=`/`\.`,
vertical tabs inside table cells, ToC page numbers, the "0.9.5+" byline placeholder) are
deliberately **not** listed; they belong to the source document's deferred layout phase.

---

## 4. Prioritized change list

| Priority | Findings | Summary |
| :--- | :--- | :--- |
| P1 — table disputes | — | None open. |
| P2 — balance verification (playtest) | B1, B2, B5–B7 | Speed's triple duty; Advantage stacking; PP-0 cluster & Move spread; Protect Stance; starvation at 0 Max PP. (B3 accepted by design — AoE weaker per target, hits more targets.) |
| P3 — content/editorial | C1, C2, E2–E4 | World-rules pointer; Entire-Field damaging AoE row; "Social stats" colon; Sp. Atk abbreviations; Initiative-modifier terminology. |

## 5. Overall assessment

No open defects or ambiguities remain: the To-Hit rule makes a natural 20 always hit and a
Critical Hit; modifier propagation to derived values is defined once in the "Unmodified
values" list (Base Evasion and Movement Range intentionally receive Speed modifiers;
Initiative rolls, Move Ranges/Shape Sizes and PP never do); True Damage is untyped unless
explicitly typed; the buff/debuff/charged-state maintenance rules share one convention
(Incapacitated can't pay PP to maintain any of them); Clash still rolls for Critical Hits;
Wonder Guard's scope is stated outright; Stealth Rock's Status values (5 m, Range 15 m)
sit on the Ranged Placement Type, so its Range field is well-defined; and the Trapping and
Condition keywords cover binding and resistible-condition Moves. The mathematical core
is exact — every programmatic check passes. What remains is the playtest balance axis
(B1, B2, B5–B7) and minor content/editorial polish (C1, C2, E2–E4). The ruleset is
table-ready.
