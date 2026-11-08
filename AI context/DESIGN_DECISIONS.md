# DESIGN_DECISIONS.md

Design decision log for the **restriction framework** originally proposed in
`RULES_ANALYSIS.md` (F31), adopted in the ruleset with 0.9.4.2 and mirrored into
AGENTS.md. This file records *why* the framework is shaped the way it is —
accepted and rejected alternatives — so that `RULES_ANALYSIS.md` stays reserved
for findings and changes that need to be made to the ruleset. It also holds the
**resolved-findings record** ("Resolved findings" below): findings that were
open in `RULES_ANALYSIS.md` and have since been resolved in the ruleset are
removed from that document and condensed here, with their numbers kept stable
for cross-references.

**Version renumbering (author correction, 2026-10-27).** The ruleset exports formerly
labeled 0.9.5.1-0.9.5.8 were in fact upgrades to 0.9.4: they are renumbered
0.9.4.1-0.9.4.7, with the final export promoted to the actual 0.9.5 release as
0.9.5.0; the 0.9.4 baseline itself is 0.9.4.0. (Exports after the 0.9.5 release
continue the 0.9.5.x numbering — the current latest is 0.9.5.8.) All prior exports,
including these, live in `Rules/Older versions/`; only the newest export
(`Rules/Mystery Quest ruleset 0_9_5_8.md`) sits at the `Rules/` root. All version
references in this document use the corrected numbering (records written before the
correction referred to the old labels: 0.9.4.x was written as 0.9.5.x, and 0.9.5.0
as 0.9.5.8).

---

## D1. Three layers: categories, turn phases, condition bundles

**Decision.** Conditions like "unconscious", "restrained" and "skipped turn" are treated
as *causes*, not as restrictions. Rules reference named **restriction categories**;
each condition is defined as a short **bundle** of categories; and a **two-phase turn
model** (action phase / end phase) determines when restrictions apply.

**Rationale.** Before the framework, every condition re-listed its own ad-hoc
combination of "can't talk", "unable to move", "can't choose Stances / use Movement
Actions, Main Actions or Reactions" and "turns are skipped". No future rule (Move,
Ability, GM effect) could impose a partial restriction by reference, and "skipped turn"
was never defined against the end-of-turn rules (the root of F2 and F28).

## D2. Categories remove capabilities only; conditions change values

**Decision.** A restriction category never changes stat values. Speed 0 and Base
Evasion 12 stay defined in the Unconscious condition, not in the Incapacitated
category.

**Rationale.** Capability removal and stat changes are independent axes; keeping them
separate lets categories compose freely and keeps each condition's stat effects where
the condition is defined.

**Status update (0.9.4.2, author clarification).** Superseded: the stat clause in the
Immobile row is deliberate — Immobile's Speed 0 / Base Evasion 12 is the intended
replacement for the Advantage (+4) to Accuracy against unconscious characters (which
Unconscious characters have via Incapacitated). This decision's alternative (stats on
Incapacitated) is rejected. The remaining fix is amending the section intro sentence,
which still says restrictions "never change stat values" (F32 in RULES_ANALYSIS.md;
ready text in local-only/New versions.md).

**Status update (0.9.4.3).** Resolved: the intro now reads "Restrictions only remove
capabilities (with the exception of Immobile, which also affects character's Speed and
Base Evasion), and they never remove the End Phase of a character's turn" — the table and
the intro agree. F32 is closed and the ready text is removed from local-only/New versions.md.

## D3. Demand-driven category set: Mute, Immobile, No Reactions, No Main Actions, Turn Skipped, Incapacitated

**Decision.** Exactly six categories. A restriction earns a category name if it is either
(a) directly used by a rule other than Incapacitated, or (b) an action-economy slot the
Stance tables already name (Movement / Main / Reaction).

**Kept.** *No Main Actions* has two concrete users: the Recharging keyword drafted in
F30 (Hyper Beam and similar Moves), and game-master-adjudicated Restrained ("too
restrained to use Moves").

**Status update (0.9.4.3).** The first user is now in the ruleset: the implemented
Recharging keyword grants No Main Actions by name — the first by-reference use of a
restriction category inside a Move keyword.

**Adopted — "No Reactions" (author override, reversing the earlier rejection).**
Making Incapacitated a pure composition of named restrictions requires every
action-slot removal to be a category; the earlier draft had asymmetrically kept
No Main Action as a category while spelling Reactions out inline. It passes criterion
(b) even though it still has no standalone user. Under the same criterion, "can't
choose a Stance" and "can't pay PP to maintain" are *not* categories (not slots, no
standalone users) and stay inline in Incapacitated — this is the line that prevents
"everything Incapacitated mentions" from becoming a category.

**Rejected — "Stanceless".** Both current users of "can't choose Stances" (Unconscious,
Surprised) are fully Incapacitated; the category did no independent work. Stance denial
is folded into Incapacitated's text, plus one sentence in the Stances section (D4).
*Promotion criterion:* a Move conversion (e.g. a Taunt analog) that denies Stance
choice without removing actions.

**Status update (0.9.4.2).** No Reactions now has a standalone user: the new Restrict
(Main Action) interaction grants No Main Actions and No Reactions by name — the first
by-reference use of the categories outside the framework itself.

## D4. Voluntary vs involuntary no-Stance: one sentence, not a category

**Decision.** The Stances section gains one sentence next to the voluntary no-Stance
rule: "A character that is prevented from choosing a Stance, rather than voluntarily
declining to take one, does not gain the default action set of a character without a
Stance."

**Rationale.** The voluntary no-Stance package (2 Movement Actions, or 1 Movement
Action and 1 Main Action) is framed as a choice made during the character's turn,
which a character prevented from choosing has not made. Note the package is
action-poor (no Reaction, no Stance Effect), so this is a semantic fix, not a power
fix.

**Status update (0.9.4.2): withdrawn.** The sentence was never implemented and is
removed from local-only/New versions.md. The implemented ruleset makes it unnecessary and, as
drafted, harmful: (1) the only Stance-denying restriction is Incapacitated, which always
bundles Turn Skipped, so while it is in force no Action Phase exists in which any
action set could be used — the Restrictions alone prevent the default action set
sufficiently; (2) the ruleset's no-Stance rule is state-based ("A character that does
not have a Stance can choose during their turn..."), so a character whose restriction
lifts before their turn — Frozen at round start, thawed mid-round — is simply a
character without a Stance and regains the default action set, which is the desired
outcome; (3) the drafted sentence keyed the denial to the beginning-of-round
Stance-choice event, so under its natural reading the lifted restriction's effect
would have persisted for the whole round: the thawed character would take an Action
Phase with no Stance and no default action set — thematically capable of acting, with
nothing to do. The Taunt-analog promotion criterion above stands: such a Move should
carry its own restriction bundle (Restrict is the template), not lean on a global
sentence.

## D5. Maintenance requires agency at the moment of decay

**Decision.** Paying PP to prevent Turn-End Decay requires being able to act in the
moment: never while Incapacitated; and for buffs on yourself, only if the action phase
of your current turn was not skipped. Maintaining debuffs on enemies is decided at the
end of those enemies' turns, so only Incapacitation prevents it.

**Consequence.** Flinch suppresses maintaining your own buffs (your action phase was
skipped) but not maintaining enemies' debuffs (those decisions happen during the
enemies' turns, when you are unrestricted). Unconscious suppresses all maintenance.

**Status.** The Flinch/self-maintenance asymmetry was proposed to the author; the
alternative (Flinch does not touch self-maintenance) changes one clause and nothing
else.

**Status update (0.9.4.2).** Implemented: the Incapacitated row's "can't pay PP to
maintain buffs or debuffs" plus "A character can't maintain buffs affecting them on a
turn that has been skipped" in "Maintaining buffs and debuffs" realize the decision; the
maintenance-agency block is removed from local-only/New versions.md.

## D6. Naming: "No Main Actions" stays a phrase

**Decision.** Keep the phrase despite Mute, Immobile and Incapacitated being adjectives.
Plural form ("No Main Actions") adopted from the author's table, matching "No Reactions".

**Rationale.** "Main Actions" is a literal column of the Stance tables, so the phrase
self-documents ("your Main Actions count is 0, like Fleet Stance's"). It is referenced
only twice (Recharging, Restrained), so a snappier name buys nothing. The phrase also
doubles as valid prose ("has no Main Action available"), needing no lookup or
rephrasing in rules text.

**Rejected — "Powerless".** "Power" is a defined term in the ruleset (Power Value,
Power Dice, Attack Power, Power Stance); the name would misread as a stat-zeroing
effect while the character can still Disengage, Shove and use Item Interactions.

**Rejected — "Without Main Action".** A prepositional phrase, not an adjective, so it
buys no grammatical consistency with Mute/Immobile/Incapacitated; it also forces an
article decision ("without a Main Action") that breaks the name's prose-blend.

**Accepted cost.** The category table is stylistically mixed (three states, one
count). The split is principled: Mute, Immobile and Incapacitated name states;
No Main Actions names a count in the Stance economy.

## D7. Placement: "Rounds, turns and actions", after "Flow of a battle"

**Decision.** New `### Restrictions` subsection immediately after "Flow of a battle".
The maintenance-agency paragraph lives in "Standard effects > Maintaining buffs and
debuffs". The two phase names can optionally be given in place in "Flow of a battle"
to avoid defining them twice.

**Rejected — "Health and recovery".** Only one of the five rules that reference the
categories (Unconscious) lives there; Flinch, Surprised, Pinned Down and Restrained
all live elsewhere. The categories must also be defined before their first use (the
Unconscious/Surprised sentence in "Flow of a battle") and before Stances, and most of
the framework's content is turn-structure and action-economy.

---

## D8. "Turn skipped" is a restriction category, named after the effect — not "Flinched"

**Decision.** "Turn skipped" is a row in the restriction category table, and its row
carries the full semantics (lose the action phase; the end phase still resolves; Stances
and their Effects are not removed; Reactions are unaffected). The earlier draft had it
as a free-floating turn rule outside the table; that placement is superseded. Incapacitated
lists "has their turn skipped" explicitly, which lets the ruleset sentence "Turns of
Unconscious and Surprised characters are skipped" be deleted.

**Naming.** The category is named "Turn skipped", not "Flinched". Flinch is a cause (a
Status Condition); naming a restriction after its most common cause recreates the
cause/effect conflation the framework removes — the same mistake as naming Incapacitated
"Unconscious".

**Demand-driven test (D3).** Passes: Flinch uses it directly, and Incapacitated includes
it.

**Composition simplification.** As a row, the "unless the character is also Incapacitated"
clause on Reactions becomes unnecessary: Turn skipped alone leaves Reactions alone, and
Incapacitated removes Reactions through its own row.

**What stays general.** The two-phase definitions (action phase / end phase) remain in
turn structure, outside the table, because three things use the phase vocabulary
independently of Turn skipped: the Paralysis reduction ("action phase ends early"), the
maintenance rule ("the action phase of their current turn must not have been skipped"),
and the end-phase enumeration (decay, condition effects, removal tests). The placement
note allows merging these definitions into "Flow of a battle" to avoid a second
definition site.

**Redundancy note.** For Incapacitated, "turn skipped" is derivable (no actions means an
empty action phase); it is listed explicitly for table readability rather than derived.

**Why Flinch is not Incapacitated.** A Flinched character keeps Reactions, speech and
the ability to maintain enemies' debuffs during those enemies' turns (D5). Redefining
Flinch as brief Incapacitation would break all three and make the condition far stronger
than a flinch should be. Expressing Flinch as slot categories instead would need a
"No Movement Actions" category — a new single-user category, violating D3 — and
Immobile is wrong for it (flyers fall, movement-dependent interactions are blocked; a
flinch is not physical restraint).

**Open edge case (flagged for the source doc).** A character who announced a Priority
Move and then has their turn skipped cannot fulfill the "must use a Priority Move on
their turn" obligation; this interaction is undefined in the current ruleset either way.

**Status update (0.9.4.2).** Adopted: Turn Skipped is a category row, Incapacitated
lists it, and the "Turns of Unconscious and Surprised characters are skipped" sentence
is gone from the ruleset. The open edge case above is now reported as F36 in
RULES_ANALYSIS.md, with ready text in local-only/New versions.md.

**Status update (0.9.4.3).** The open edge case is resolved: the Priority Turn model
replaces the announcement obligation with "A character using a Priority Turn must use a
Priority Move as part of their Action Phase. If the character is unable to use the
required Priority Move, their Priority Turn is skipped along with the Action Phase."
The inability/skipped case is defined by the ruleset itself; F36 is closed and the
drafted sentence is removed from local-only/New versions.md.

**Defect in the author's table (`local-only/New versions.md`): "can't choose a Stance" inside
Turn Skipped.** Stance choice is a beginning-of-round decision; Turn Skipped is bound to
a single turn. Same-round case (Flinch applied before the target has acted): the Stance
is already chosen, so "can't choose" has nothing to apply to, and reading it as losing
the Stance contradicts the existing rule that a chosen Stance cannot be lost mid-round.
Cross-round case: it turns Flinch into a Stance-denier, stripping the round's Stance
and Effect — a significant buff to Flinch with no basis in the official flavor or the
current text. Recommendation: keep Stance denial inline in Incapacitated, whose state
can span a round start; its only users (Unconscious, Surprised) are where the clause
comes from.

## D9. Author's table version (`local-only/New versions.md`): evaluation outcome

**Adopted.** (1) No Reactions as a category (see D3). (2) End Phase protection as a
global sentence in the section intro instead of a per-row clause — covers Incapacitated
explicitly. (3) Capitalized Action Phase / End Phase, matching the ruleset's
defined-term convention (Movement Actions, Status Conditions); the phase definitions
must use identical capitals wherever they land. (4) "If the character is Flying, they
fall" — matches the Flight Ability's naming. (5) Dropping the Stance-persistence and
duration clauses from the action rows: the former is redundant with the existing
can't-lose-a-Stance-mid-round rule, the latter is stated by each imposing effect.

**Defect.** "Can't choose a Stance" inside Turn Skipped — see D8 for the analysis and
the recommended fix (inline in Incapacitated). Resolved: the fix was applied directly
in `local-only/New versions.md`.

**Editorial.** The table mixed straight and curly apostrophes; normalized to the ruleset's
curly style during the migration below. The phase definitions, maintenance-agency rule
and condition rewrites now live in local-only/New versions.md alongside the table (per D7).

**Status update (0.9.4.2).** The table was implemented into the ruleset with author
deviations: the Immobile row gained the Speed 0 / Base Evasion 12 clause (contradicting
D2 — F32), the section carries a "severely incomplete" NOTICE (F35), and the apostrophe
normalization did not carry over to the new text (F34).

**Status update (author clarification, 2026-10-25).** The curly-style normalization above
was in fact correct: the author's original text uses curly apostrophes (they are what
the author's keyboard outputs most easily into the Google Doc), so the straight
apostrophes are the anomalies — most likely introduced through this project's suggested
rule text. Suggested rules text uses curly apostrophes from now on, and the open F34
fix normalizes the Restrictions table to curly style (see local-only/New versions.md).

**Status update (0.9.4.3).** All three deviations are addressed: the intro now carries the
Immobile exception (F32 resolved), the NOTICE is removed (F35 resolved), and the
apostrophe normalization remains the only editorial straggler (F34).

## D10. `local-only/New versions.md` is the home of ready rules text

**Decision (author instruction).** `local-only/New versions.md` holds rules text waiting to be
implemented into the full ruleset and may be edited directly, including by the analysis
agent. Ready rules text that could be implemented into the ruleset is presented there,
not in `RULES_ANALYSIS.md`, which stays reserved for findings and change requests.
Ruletext that can already be found in the full ruleset document is removed from New
versions.md. The permission and convention are recorded in AGENTS.md.

**Applied.** The F31 draft, the supporting edits (phase names in "Flow of a battle", the
Stances sentence, the maintenance rule) and the condition rewrites (Unconscious,
Surprised, Flinch, Paralysis, Pinned Down, Restrained) were migrated from
RULES_ANALYSIS.md into local-only/New versions.md, organized by target section; the D8 fix was
applied during the migration. Notable consolidation during migration: the
Advantage-to-Accuracy rule against Unconscious characters, currently stated only in the
Freeze and Sleep parenthetical notes, moves into the Unconscious definition, allowing
those notes to be removed.

**Extended (author clarification).** `local-only/New versions.md` is the primary location for
suggested rules text, and no duplicates of its content are kept in
`RULES_ANALYSIS.md` — the Google Doc is the author's true working draft, so
overwriting local-only/New versions.md is safe, and ruletext missing from it should prompt a
check of the full ruleset for whether it was already implemented. F30's
Charging/Recharging draft was migrated there as the second block and aligned to the
restriction categories during migration: "becomes Unconscious or Surprised" became
"is Incapacitated", "has no Main Action available" became "has the No Main Actions
restriction", and "if that turn is skipped" became "if that turn is Turn Skipped".

**Status update (0.9.4.2).** All migrated blocks were implemented into the ruleset and
removed from local-only/New versions.md. The Advantage-to-Accuracy consolidation did not happen as
planned: the author deliberately dropped the rule instead, with Immobile's Base Evasion
12 as the replacement (author clarification; see the resolved-findings record below).
The restoration text has been removed from local-only/New versions.md.

**Status update (0.9.4.3).** All remaining blocks were implemented and removed from New
versions.md: the Restrictions intro revision (F32), the announced-Priority-with-skipped-
turn sentence (superseded by the Priority Turn model, F36), the Pin and Immobile
editorial fixes and the Freeze/Sleep parenthetical removals (F34 items), and the
Charging/Recharging keywords (F30). The Charging/Recharging implementation is simpler
than the draft: the author's table drops the Recharging carry-over clause (No Main
Actions + Turn Skipped — confirmed deliberate, F37 resolved by author clarification) and the "two consecutive turns" framing of Charging
(now F38, open), and restates the keywords in first-use/second-use terms. Only the
apostrophe-normalization block and the new out-of-battle-turns rule (proposed by the
author, 2026-10-25) remain in local-only/New versions.md.

**Status update (0.9.4.4).** Both remaining blocks were implemented in this minor-corrections
release and removed from local-only/New versions.md: the out-of-battle turn-timing rule, in condensed
author wording ("When a battle has ended, rules and effects with turn-based timing are
resolved based on how many seconds have passed."), and the Restrictions apostrophe
normalization to curly style — with two straight-apostrophe stragglers left in the Immobile
and Incapacitated rows, so a reduced editorial block stays in local-only/New versions.md until they
are fixed. New finding from the condensed wording: F39 (the turn-to-seconds rate is not
stated; ready text in local-only/New versions.md).

**Status update (0.9.4.4 in-place update, 2026-10-25).** The F39 ready text — the
author's own iteration — was implemented into the export without a version bump, and the
update also fixed the Hazardous Terrain "(6 seconds)" parenthetical, the "Chargin" typo
and the Incapacitated row's straight apostrophe. The local-only/New versions.md F39 block is
removed; what remains there is the single Immobile straggler (F34) and the Counter
triggered-use cost block (F40, added later the same day during the Trick Room conversion
review).

**Status update (0.9.4.5).** The Immobile straggler block (F34's last item) was implemented
into the ruleset verbatim and removed from local-only/New versions.md, leaving the Counter
triggered-use cost block (F40) as the file's only content. F40's motivating case is now
live in the ruleset itself: the Trick Room conversion sits in the Example Move conversions
section with its beginning-of-round Counter trigger.

## After adoption

Once the framework is adopted in the source document, the durable conventions
(restriction categories, the two-phase turn model, the demand-driven criterion for new
categories) should be mirrored into AGENTS.md under "Game design conventions
established during analysis", following the precedent of the weather conventions.

**Status (2026-10-21).** The framework is adopted in the source document (0.9.4.2). The
durable conventions have been mirrored into AGENTS.md; D4 (the Stances sentence) was
withdrawn rather than adopted, and the D2 stat-change decision is superseded by the
author's Immobile row (F32, resolved in 0.9.4.3 — see below).

**Status update (2026-10-25, 0.9.4.3).** F32 is resolved (the intro carries the Immobile
exception), and the framework's remaining fix-ups (F30, F35, F36) are all closed — see
the resolved-findings record below. The 0.9.4.3 Priority Turn model and
Charging/Recharging keywords have been mirrored into AGENTS.md alongside the existing
conventions. The 0.9.4.4 out-of-battle timing rule (F39) is likewise mirrored there.

**Status update (2026-10-25, 0.9.4.5).** F18 is resolved (the example conversion set is in
the ruleset itself — see the resolved-findings record below) and the last F34 straggler
is fixed. No framework-adjacent changes: the Counter keyword row is untouched, so F40
remains the only ready-text item outstanding.

**Status update (2026-10-26, 0.9.4.6).** No framework changes. The new General logic
duration-counting rule is the author's own generalization of the duration convention
(formerly spelled out in the Trick Room conversion), and it composes cleanly with the
restriction framework: durations are properties of effects, not turns, so the rule
touches none of the categories. F40 (Counter triggered-use cost) remains the only
ready-text item in local-only/New versions.md — the Counter keyword row is untouched in 0.9.4.6.

**Status update (2026-10-26, 0.9.4.7).** No framework changes; the "steps" → "stages"
rename is purely terminological (the restriction framework never used the term).
F40 (Counter triggered-use cost) remains the only ready-text item in local-only/New versions.md —
the Counter keyword row is untouched in 0.9.4.7.

**Status update (2026-10-26, 0.9.5.0).** No framework changes, but two framework
alignments: F40's resolution puts the triggered-use cost in the Counter keyword row
("requires and expends PP and the user's Main Action normally"), matching Counter
Stance's own reaction, and F38's resolution handles the charged state with the
established maintenance convention (End Phase removal unless 1 PP is paid). F38, F40
and F4 (Tiny/Large exclusion) are all resolved, and local-only/New versions.md no longer holds
any ready-text blocks — the file now serves as the slot for future suggestions only.

---

## Resolved findings (condensed record)

Findings that were open in `RULES_ANALYSIS.md` and have since been resolved in the ruleset
are removed from that document and recorded here in condensed form. Numbers are kept
stable for cross-references. ID schemes: the historical records below use sequential
F-numbers; newer records keep the category-prefixed IDs of the current `RULES_ANALYSIS.md`
(D defect, A ambiguity, B balance, C content gap, E editorial), and IDs are never reused.

- **F2 — skipped turns vs. end-of-turn effects (resolved in 0.9.4.2).** In 0.9.4.1, Sleep and
  Freeze made a character Unconscious and skipped their turn, and no rule said whether a
  skipped turn still has an end-of-turn phase — RAW, Status Condition removal tests could
  never happen and the conditions lasted until damage. Resolved by the two-phase turn
  model: restrictions never remove the End Phase, and the End Phase beat lists condition
  ticks and removal attempts, so both always resolve. Also settles that Burn/Poison damage
  ticks on a fainted character's skipped turn and accumulates as Severe Damage.
- **F28 — Flinch removal on a skipped turn (resolved in 0.9.4.2).** Same mechanism: Flinch
  is always removed at the end of the affected character's turn, and the End Phase of a
  skipped turn still resolves.
- **F31 — ad-hoc action-restriction vocabulary (resolved in 0.9.4.2).** Every condition
  re-listed its own combination of denied actions, and no rule could impose a partial
  restriction by reference. Resolved by the Restrictions section (D1-D9), the condition
  rewrites, and Restrict (Main Action) as the first by-reference use. Residual fix-ups
  were tracked as F32 (intro-sentence contradiction) and F36 (announced Priority
  Move + skipped turn); both are resolved in 0.9.4.3 (records below). The drafted
  Stances sentence was withdrawn (D4).
- **F33 — dropped Accuracy Advantage vs. Unconscious characters (resolved by author
  clarification, 2026-10-21).** 0.9.4.2 removed the "Advantage (+4) to Accuracy against
  Unconscious characters" note from the Freeze and Sleep rows without stating a
  replacement. Author clarification: deliberate — the Speed 0 / Base Evasion 12
  modifications from Immobile (which Unconscious characters have via Incapacitated)
  overlap with and replace the Advantage. Recorded behavior change: unconscious
  characters are 4 points harder to hit than the old Advantage would have made them
  (effective defense 12 vs. 12 − 4 = 8).
- **F30 — charging/recharging turn-structure Moves (resolved in 0.9.4.3).** The
  additional Move keywords were Priority and Counter only, leaving the official charge-
  before (Solar Beam, Sky Attack) and recharge-after (Hyper Beam, Giga Impact) families
  without shared mechanics — the largest content gap flagged by the analysis. Resolved
  by the **Charging** and **Recharging** keywords in the new "Additional keywords" table:
  Recharging grants the No Main Actions restriction during the user's next turn (the
  first by-reference use of a restriction category in a Move keyword), and Charging
  charges on first use, resolves on second use, pays PP on the first use, and is
  cancelled by using another Move or becoming Incapacitated. Hyper Beam and Solar Beam
  now convert directly. Two clauses of the draft were dropped in implementation,
  tracked as findings F37 (Recharging + Turn Skipped carry-over — subsequently resolved
  by author clarification as deliberate; see the F37 record below) and F38 (Charging's
  consecutive-turns limit — open).
- **F32 — Immobile's stat change vs. the Restrictions principle (resolved in 0.9.4.3).**
  The Restrictions intro said restrictions "never change stat values" while the Immobile
  row set Speed 0 / Base Evasion 12. Resolved as proposed: the intro now reads
  "Restrictions only remove capabilities (with the exception of Immobile, which also
  affects character's Speed and Base Evasion)". The table is unchanged; D2 remains
  superseded by the author's intent.
- **F35 — Restrictions section marked "severely incomplete" (resolved in 0.9.4.3).**
  The author's NOTICE row is removed from the section; the framework is no longer
  flagged incomplete. Both items previously tracked against it (F30, F32) are resolved.
- **F36 — announced Priority Move combined with a skipped turn (resolved in 0.9.4.3).**
  The announcement obligation ("must use a Priority Move on their turn") had no defined
  outcome when the turn was skipped. Resolved by the Priority Turn model, which
  supersedes the drafted one-liner: announced Priority Moves grant a Priority Turn
  played before normal turns (Action Phase during the Priority Turn, End Phase on the
  normal turn), and a character unable to use the required Priority Move has their
  Priority Turn skipped along with the Action Phase.
- **F37 — Recharging's No Main Actions vs. a skipped next turn (resolved by author
  clarification, 2026-10-25).** The 0.9.4.3 Recharging keyword omits the drafted
  carry-over clause ("if that turn is Turn Skipped, the restriction carries over")
  and the battle-end cleanup clause. Author clarification: deliberate. A skipped
  next turn does not prevent the recharge — the restriction is spent during that
  turn regardless of what happens in it. Two supporting observations: (1) mechanically,
  Turn Skipped removes the entire Action Phase, a superset of No Main Actions, so the
  recharge penalty is always paid in full even on a skipped turn — there is no
  outcome in which the user comes out ahead; (2) this matches the official games,
  where conditions that would consume the recharge turn (e.g. freeze) do not cancel
  the required recharge turn of Hyper Beam (Bulbapedia: "being frozen does not prevent
  the need for the recharge turn"). The battle-end clause is likewise unnecessary once
  turns are defined to happen outside of battle: the author implemented that rule in
  0.9.4.4 ("When a battle has ended, rules and effects with turn-based timing are
  resolved based on how many seconds have passed."), so a Recharging Move used to end a
  battle leaves its user with No Main Actions for one turn of in-game time, which
  resolves on its own (the turn-to-seconds rate was subsequently defined — see the F39
  record below).
- **F39 — missing turn-to-seconds rate in the out-of-battle timing rule (resolved in the
  0.9.4.4 in-place update, 2026-10-25).** The 0.9.4.4 sentence "resolved based on how
  many seconds have passed" gave no rate for converting a turn into seconds, and the
  round = 6 seconds anchor does not imply one (all turns happen inside a round).
  Resolved by the author's iteration, implemented in the in-place export update verbatim:
  "Because there is no turn order outside of combat, turns and rounds are interchangeable
  outside of combat and both one turn and one round correspond to 6 seconds of in-game
  time." The derivation is self-documenting (turn order is the only difference between a
  turn and a round) and harmonizes the Hazardous Terrain and Suffocation parentheticals
  into one out-of-combat unit. The same update recorded the author's clarification that
  end-of-turn damage (Burn, Poison) intentionally keeps ticking every 6 seconds outside
  combat, self-balanced by the equally accelerated removal tests.
- **F18 — example Move conversions severely incomplete (resolved in 0.9.4.5).** Since
  0.9.4.2 the "Example Move conversions" section held a single example (Trick Room)
  behind a "severely incomplete" NOTICE. Resolved: the NOTICE is removed and the
  section now carries the full worked set — 25 conversions (8 Physical, 8 Special,
  9 Status), implemented from `Rules/Example Move Conversions.md` and verified
  field-by-field against that file programmatically (every converted value matches
  exactly, including the four indirect-conversion markings on Seismic Toss, Fly,
  Trick Room and Stealth Rock). The same release removes the now-redundant
  "Incompatible Moves" sketch list (all four of its example Moves — the same four —
  are now converted in the section itself) and fixes the Immobile row's straight
  apostrophe, the last F34 straggler. The worked-examples file remains as the
  companion document with standing notes (weather, STAB, formatting conventions);
  it was later restructured (2026-10-26, author instruction): renamed to
  `MOVE_CONVERSIONS.md` at the project root, examples removed, refocused on the
  general conversion method and entry formatting.
- **F27 — ruleset vs. character sheet naming (resolved, 2026-10-25).** The character sheet
  files were named "Mystery Dungeon TTRPG character sheet" while the ruleset is
  "Pokémon Mystery Quest". Resolved by the author adding
  `Rules/Character sheet/PMQ Character sheet.xlsx`, named for the ruleset; the old
  PDF/PNG remain as previous-version exports (retained like the older ruleset
  exports). Update (2026-10-28): the author later simplified the naming to the
  "Mystery Quest" branding — the working xlsx (the author's style-corrected version,
  formerly the interim "PMQ Character sheet fixed.xlsx" copy) is now
  `Rules/Character sheet/Mystery Quest character sheet.xlsx`, and the PDF/PNG
  exports are `Mystery Quest character sheet.pdf` / `.png`. The xlsx was iterated the same day to match ruleset 0.9.4.5: level is
  now progress-based ((sum of Core Progress × 1.5) + 5, matching the ruleset's
  level-conversion table), Base Evasion is 12 + Speed, the official-% → Accuracy
  modifier conversion is %/5 − 10 with Basic attack's +10 wired into its To-Hit
  display, damaging AoE Moves add (Sp.) Attack to the To-Hit display and no longer
  add the Power Value to their Attack Power (AoE Power is dice only), the Power
  Dice mapping for Power Value 18 is d10 + d8, the additional-keyword dropdowns
  include Charging and Recharging, the NPC sheet's Basic attack and Move formulas
  no longer reference empty cells, Movement Range uses unbuffed Speed (buffs don't
  apply to move distances), the stat name "Empathy" became "Insight", and an
  Abilities field (characters choose 2) was added — Natures and Held Items are
  correctly absent, as the ruleset excludes the former and discourages the latter.
  All converted values were verified programmatically against the ruleset's
  conversion tables and Example Move conversions, including the Eevee NPC example
  (HP 32, PP 12, Movement 4 m, Base Evasion 20) reproduced exactly.
- **F13 — damaging-Move To-Hit stat term (resolved by author clarification, 2026-10-25).**
  The To-Hit test adds the attacker's (Sp.) Attack against a defense that scales only with
  Speed (Base Evasion 12 + Speed), so hit chance inflates with the attacker's stat: at
  character creation a 100%-accuracy Move hits 90% (Attack 6 vs. Speed 6), and once
  (Sp.) Attack exceeds the target's Speed by roughly 12, every damaging Move auto-hits
  regardless of its official accuracy (verified: Attack 25 vs. Speed 8 → 100% hit on a
  +0-accuracy Move); official accuracy distinctions collapse at large stat gaps and Speed
  becomes the defense stat. Author clarification: **intentional**. The purpose of the
  system is to give the individual skills of characters D&D-like meaning for hitting
  their targets and avoiding attacks, even though the official games do not work that
  way — a skilled attacker reliably hitting a slow target is the desired behavior, and
  the collapse of official accuracy distinctions at large stat gaps is the accepted
  cost. The ruleset's own design note (Base Evasion's flat 12 base, chosen so that
  combat is not "too straightforward") tunes the same axis at low stat values. F14
  (Speed's triple duty as Movement Range / Base Evasion / Initiative) remains a
  separate open playtest note; the "cap the stat term" and "smaller divisor" proposals
  from the original finding are withdrawn.
- **F4 (species-restriction half) — Wonder Guard selectable by any species (resolved in
  0.9.4.6).** The Ability list said all player characters "can choose 2 Abilities from
  the list" with nothing restricting "(Shedinja)" to Shedinja, so as written any species
  could take Wonder Guard. Resolved by the Abilities intro sentence added in 0.9.4.6:
  "The Pokémon-specific Abilities can only be used by the specified Pokémon." The same
  release renamed the "Pokemon-specific" heading to "Pokémon-specific" and added the
  universal Secret Power Ability (STAB bonus for one additional type). The other half of
  F4 — the order of operations between Wonder Guard's "Max HP becomes 1" and Tiny/Large
  Max HP modifiers — was resolved in 0.9.5.0: instead of a modifier order, the author
  excluded the combination outright (Wonder Guard "can't be combined with the 'Tiny'
  or 'Large' Abilities") and gave both Abilities minimum bounds (Tiny's Max HP
  reduction to a minimum of 1; Large's Base Evasion reduction to a minimum of 0), so
  the degenerate Max HP 13 build is impossible twice over. F4 is closed and removed
  from `RULES_ANALYSIS.md`.
- **Example Move wording revision (0.9.4.6, recorded for the description conventions).**
  16 of the 25 example conversions were reworded with no converted value changed
  (verified per Move against both exports). The revision establishes the house style for
  future Move descriptions — full-sentence effects with the beneficiary named
  ("Applies an Attack buff of two stages (+4) to the user." — the one entry that already
  used "stages" while the rest of the ruleset said "steps"), standardized
  secondary-effect chances ("Has a 30% (-4 modifier) chance of applying the Paralysis
  condition to the target."), Placement Type as its own field, and no restating of
  global rules or other Moves' conditionals (Trick Room dropped its counting clause now
  that General logic states duration counting globally; Sunny Day dropped Thunder's and
  Solar Beam's weather clauses) — mirrored into AGENTS.md and recorded with
  per-Move notes in `Rules/Example Move Conversions.md`. Two judgment calls changed
  behavior in the author's hands: Trick Room now also reverses the order of Priority
  Turns (closer to the official bracket-wise reversal), and Stealth Rock's trigger is
  now entering the area or ending a turn inside it (closing the stand-still loophole).
- **Slip notifications from the 0.9.4.6 review (implemented in 0.9.4.7, author
  clarifications).** All seven reported wording slips were fixed in one pass: Close
  Combat's "Defense buff" restored to a Defense debuff; the Flamethrower, Blizzard and
  Body Slam secondary-effect lines standardized; Stealth Rock's "creature" corrected to
  "character"; the weather Moves' duration re-attached to the weather condition ("Sets
  the Rain weather condition in the area. The weather condition lasts for 1 hour and
  removes all previous weather conditions from the area."); Secret Power's article
  added; and Solar Beam's "(after it has been resolved)" parenthetical replaced by a
  **general rule** in the Power section (author's stated choice over a Move-specific
  rule): conditional Power modifications (halved, doubled or otherwise) apply to the
  Move's total Power after the Power Dice have been rolled and summed with the Power
  Value. Two author confirmations on the 0.9.4.6 judgment calls: the Trick Room
  Priority-order reversal and the Stealth Rock trigger change are intentional, and
  Stealth Rock's "enters the area or ends their turn inside the area" deliberately
  mirrors D&D area-damage logic players are assumed to be somewhat familiar with. The
  release also renamed buff/debuff "steps" to "stages" ruleset-wide (the official
  Pokémon term; "step" survives only in procedural prose such as character creation),
  resolving the steps/stages inconsistency in the author's favor of "stage". One
  apparent accidental change was reported back to the author: the new
  Power-modification rule replaced the Power section's Rollout/increasing-Power
  conversion sentence, which is different guidance and is now missing from the
  document.
- **F3 — Chip Damage undefined for AoE Moves (resolved by author clarification,
  2026-10-26).** The analysis flagged that Chip Damage (minimum 1 damage on a failed
  To-Damage test) was defined only for Single-target Moves, leaving AoE damage
  undefined when halved (or full) Attack Power fails to exceed a target's Defense
  Power. Author clarification: **AoE Moves never deal Chip Damage — by design.** The
  two damage floors have opposite roles: single-target Chip Damage keeps single-target
  Moves usable even against high Defense (preventing high Defense from rendering them
  absolutely useless), while AoE Moves deliberately have no damage minimum — their
  halved-damage-on-miss is the intended counter to weak high-speed targets, which
  take damage even when the Move does not properly hit them. The author has added a
  clarifying text to the Google Doc (not yet in a repository export at the time of
  this record; the next export review should verify its wording). F3 is removed from
  `RULES_ANALYSIS.md`, and the ready-text block that extended Chip Damage to AoE
  Moves (drafted 2026-10-26 before the clarification) was removed from
  `local-only/New versions.md` — it proposed the opposite of the design intent. Verified
  in 0.9.5.0: the To-Damage bullet now ends "AoE Moves can't cause Chip Damage."
- **F6 — "one set of Power Dice" for multi-dice Powers (resolved by re-examination,
  2026-10-28).** The analysis read the Power table's multi-dice rows (e.g.,
  125-140 → d10 + d4) as two separate sets and asked which single die a Critical
  Hit's "one set of Power Dice" adds. Re-reading the Power section shows the text
  already defines the unit: the opening sentence states a single-target Move's
  Power "consists of a flat number and **a set of dice**" and that "the set of
  dice is referred to as 'Power Dice'", while an AoE Move rolls "two sets of
  dice" — so one set is the Move's **complete Power Dice expression** for its
  bracket (d10 + d4 for Power Value 14, 2d10 for 20), corroborated by the Mega
  Punch example (single-target 8 + d8, AoE 2d8, STAB "an additional d8"). Both
  the STAB bonus and Critical Hits therefore add a full copy of the Power Dice,
  and no separate clarification in the STAB rule is needed. F6 is removed from
  `RULES_ANALYSIS.md`, and its ready-text block — which proposed adding only the
  largest die, the wrong resolution under the correct reading — is removed from
  `local-only/New versions.md`.
- **F38 — Charging's missing charge-duration limit (resolved in 0.9.5.0).** The
  implemented keyword let the charged state be banked indefinitely for free (charge
  on first use, resolve on second, removed only by another Move or Incapacitated),
  dropping the draft's two-consecutive-turns framing. Resolved with a maintenance
  mechanic instead of a hard limit: the "charged" state is removed in the user's
  End Phase if the user has not used the Move during the round, unless the user pays
  1 PP to maintain it — the charge can still be held across rounds, but at the same
  1-PP-per-prevented-decay price as buffs and debuffs, reusing the established
  maintenance convention (End Phase, 1 PP, per occurrence) rather than inventing new
  structure. Notable alignment: Incapacitated already removes the charged state
  directly, so the maintenance-payment edge case never conflicts with the
  restriction framework.
- **F40 — Counter Moves' cost when triggered outside the user's turn (resolved in
  0.9.5.0).** The Counter keyword restricted Counter Moves to Counter Stance plus the
  trigger but never stated the triggered use's cost, leaving it PP-only as written
  (the Trick Room conversion's beginning-of-round use was the motivating case).
  Resolved by the author, aligned with Counter Stance's own reaction as recommended:
  the Counter keyword row now reads "Using a Counter Move requires and expends PP and
  the user's Main Action normally." The ready-text block is removed from
  `local-only/New versions.md`. A minor grammar note on the sentence was reported to the
  author directly (not recorded as a finding).
- **F1 — weather's role never stated (resolved in 0.9.5.1).** The analysis's
  longest-standing clarity gap: the ruleset implied weather had mechanics (Climate
  Adaptability's "damage and movement penalties") but defined none. Resolved by
  the author's new "Weather conditions" section (Other mechanics): "Weather
  conditions (Harsh Sunlight, Rain, Sandstorm, Snow and Fog) do not have separate
  mechanics in this ruleset. Just like in the official video games, they exist
  simply to fulfill prerequisites and conditions written into individual Moves
  and other effects." The ready-text block is removed from `local-only/New versions.md`
  (the author's section omits the ready text's GM-narrative-Advantage sentence —
  the role statement and the condition list were the finding's requirements).
- **Hail → Snow naming (adopted in 0.9.5.1).** During review the question was
  raised whether the ruleset should use Snow or Hail; the recorded recommendation
  was Snow — the Gen IX official naming (PMQ converts from the latest official
  specs, and "Hail" no longer exists there), one concept one name, and the
  non-damaging name matching PMQ's no-weather-mechanics design. The author
  adopted it: Weather Setter's condition list, Blizzard's official-spec line and
  Description, and Solar Beam's weather list all now say Snow; no "Hail" remains
  in the document.
- **F5 (decay half) — Turn-End Decay granularity (resolved in 0.9.5.1).** The
  author implemented the first branch of the finding's change-needed options,
  not the ready text's branch: Turn-End Decay now removes "one stage (normally 2,
  but 4 in the case of Accuracy and Evasion)" — decay is scale-aware, so decay no
  longer produces off-scale values. The ready-text block (which proposed declaring
  intermediate values legal while keeping flat decay) is superseded and replaced
  by a reduced block for the finding's remaining half: Resist Stance's halving
  can still produce values between stages (half of a 4-stage Accuracy/Evasion
  debuff is -2), and the ruleset still does not say whether such values are
  legal. F5 stays open, trimmed to the halving case.
- **F7 — Hazardous Terrain vs. True Damage (resolved in 0.9.5.1).** The ready
  text was adopted nearly verbatim: "As an exception to True Damage, the
  Resistances and Weaknesses of characters are applied to the damage caused by
  Hazardous Terrains. Other modifiers (such as Defense Power modifiers from
  Stances or items) do not affect this damage." (the author's version names
  "Stances or items" where the draft said "items or Abilities"). The finding and
  the ready-text block are removed.
- **F22 (half) — Power vs. Damage terminology (resolved in 0.9.5.1).** The
  Power section's Mega Punch exhibit was replaced by the Hyper Beam example the
  author notified earlier: "The Move Hyper Beam has a Power of 150 in the
  official video games, so its Power is 16 + d10 + d6. If it were an AoE Move,
  its Power would have been 2d10 + 2d6. If the user is of the Normal type
  similarly to the Move, the Power is increased by an additional d10 + d6 due to
  the STAB bonus." — verified against the conversion tables (150 → PV 16, PD
  d10 + d6), and it doubles as a built-in illustration that "one set of Power
  Dice" means the full dice expression (the F6 resolution). The finding is
  trimmed to the remaining exhibit: the Basic attack entry still reads "Damage
  4 + d4".
- **0.9.5.1 iteration record (other changes).** The Counter keyword's grammar
  slip — notified during the 0.9.5.0 review — was fixed as suggested ("requires
  and expends the Move's PP cost and the user's Main Action as normal"). A new
  additional keyword **Pledge** converts the official pledge family: when a
  character uses a Pledge Move, another character within 1 meter of them can
  immediately use a Pledge Move to double the original Move's Power (the second
  Move has no other effect), with the out-of-turn use following the Counter cost
  pattern. Secondary-effect entries dropped the word "modifier" from their
  parentheticals ("Has a 30% (-4) chance of…"). The document title dropped
  "Pokémon" ("Mystery Quest ruleset", version line "0.9.5+"), matching the
  fan-project naming policy recorded for the website. No numeric content
  changed; all previously verified checks remain valid.
- **F9 — "Move's Accuracy" naming (resolved in 0.9.5.2).** A dedicated
  "Accuracy" subsection now defines the term: "Move's Accuracy is its converted
  Percentage Test modifier." with the Hyper Beam example (90% official accuracy
  converts to +8) — the clarifying-note branch of the finding's options. The
  finding and its ready-text block are removed.
- **F11 — Shielding An Ally vs. AoE Moves (resolved in 0.9.5.2).** The ready text
  was adopted nearly verbatim: "This means that the Move targets both characters,
  whether it is Single-target or Area of Effect, but the To-Hit test of the Move
  succeeds automatically against you and fails automatically against the
  protected ally." The finding and its ready-text block are removed.
- **F5 — Resist Stance off-scale values (fully resolved in 0.9.5.2).** Turn-End
  Decay had already become scale-aware (0.9.5.1); the remaining halving case is
  gone because Resist Stance no longer halves: "New debuffs applied to you are
  immediately reduced by one step." Notable behavior change: the reduction is
  weaker than halving for large debuffs (a 6-stage debuff loses one stage, not
  half), and a new 1-stage debuff is fully negated. With no halving, no source
  of between-stage values remains, so the finding is closed and the reduced
  ready-text block removed. A terminology slip was reported to the author
  directly: the new sentence says "step" where the ruleset's term is "stage"
  (renamed in 0.9.4.7).
- **F8 — short-fall damage (resolved in 0.9.5.2).** Falling was reworked with
  its own mechanics instead of the ready text's distance patch: characters can
  safely drop 5 meters; beyond that they enter free fall, resolved at the end of
  every End Phase; the first move towards the ground is 25 m, doubling to 200 m;
  damage equals the full distance they would have fallen during that End Phase
  divided by 5, further reduced by the character's Speed Progress Modifier. The
  finding and its ready-text block are removed. A minor grammar point was
  reported to the author directly ("if the fall would not have been
  interrupted").
- **0.9.5.2 iteration record (other changes).** The Stances intro clarifies that
  each Stance's Effect is "applied to the user as long as the Stance remains".
  Burn now reduces "the Power of their Physical Moves by 4 as long as the Status
  Condition remains" — fixing the Attack Power terminology exhibit of F10 and
  stating its duration (F10 remains open for the taxonomy itself; its finding
  and ready text were updated to match). The NPC section was rewritten around
  "general values" and "exception modifiers" (added to general values, positive
  or negative, with the Knowledge-category worked example expanded); the
  encounter-table convention (F12) itself is still unpinned, so F12 remains open
  with its finding and ready text updated to the new wording. Two grammar slips
  in the new Accuracy subsection were reported to the author directly (the
  missing article in "Move's Accuracy is its converted Percentage Test
  modifier." and "so it's Accuracy is +8" — should be "its"). No numeric content
  changed; all previously verified checks remain valid.
- **F10 — buff/debuff taxonomy vs. Power and Defense Power modifiers (resolved by
  re-examination, 2026-10-29, after the author's challenge).** The finding asked
  whether Power Stance's "+4 to Attack Power", Defensive Stance's "+4 to Defense
  Power" and Burn's -4 Power are buffs — subject to Turn-End Decay, PP maintenance
  and Resist Stance's reduction — and whether their channel and duration needed
  stating. A closer reading shows the ruleset already answers every part:
  buffs and debuffs are *defined* as "temporary **Core stat** modifiers"
  (Modifiers > Buffs and debuffs), which these are not; the Modifiers section's
  **Other** subsection explicitly names "modifiers tied to specific mechanics
  (like Percentage Tests, Resistances/Weaknesses and Stances)" as their own
  category, so the taxonomy includes them rather than excluding them; Turn-End
  Decay ("all buffs and debuffs"), PP maintenance ("any buffs... / debuffs")
  and Resist Stance ("new debuffs") all operate exclusively on buffs and
  debuffs, so none of them touch Power/Defense Power modifiers; and since
  0.9.5.2 the durations are stated explicitly — Stance Effects are "applied to
  the user as long as the Stance remains" and Burn's reduction applies "as long
  as the Status Condition remains". The finding was a definitional misread (like
  F6) and is withdrawn; its ready-text block, which proposed declaring a
  separate channel the Modifiers section already declares, is removed from
  `local-only/New versions.md` — leaving F12 as the only open P1 finding.
- **F12 — the encounter table's power-level convention (resolved in 0.9.5.3).**
  The last open P1 finding. The table's "General power level" definition now
  reads "the average value of the Core stats of a character, **including both
  their general values and their exception modifiers**" — the final-values
  convention the ready text recommended, in the author's own phrasing. The
  finding and its ready-text block are removed; `local-only/New versions.md` now
  holds no ready-text blocks. With F12 closed, no defects and no P1
  ambiguities remain open anywhere in the analysis.
- **0.9.5.3 iteration record.** All three grammar notifications from the
  0.9.5.2 review were adopted: the Accuracy subsection now reads "The Move's
  Accuracy is its converted Percentage Test modifier." (article added), Resist
  Stance reduces new debuffs by one "**stage**" (the step→stage slip fixed),
  and falling damage uses "if the fall **had** not been interrupted". One
  grammar slip remains in the Accuracy example ("so **it's** Accuracy is +8" —
  should be "its") and was reported to the author again. No other content
  changed; no numeric content changed, so all previously verified checks
  remain valid.
- **F26 — Shove/Pin/Restrict "Attack stats" (resolved by author clarification,
  2026-10-29).** The finding read "add your Attack stats" (plural) as a slip
  that should follow the "(Sp.) Attack" convention — i.e., the applicable
  Attack or Special Attack. Author clarification: **not valid** — the three
  actions deliberately use only the Attack stat, because Attack mirrors
  physical strength while Special Attack mirrors strength with special powers,
  and Shove, Pin and Restrict are physical maneuvers requiring physical
  strength. The finding is withdrawn from `RULES_ANALYSIS.md`, its checklist
  block (which proposed the "(Sp.) Attack" replacement) is removed from
  `local-only/New versions.md`, and the withdrawn recommendation is recorded here
  so future re-reads of the three actions do not re-raise it. Update (0.9.5.4):
  the author polished the wording after all — Shove, Pin and Restrict now read
  "add your Attack" (singular), keeping the Attack-only intent and clearing the
  plural.
- **F22, F23, F25, F34 and F42 — the editorial checklist (resolved in 0.9.5.4).**
  The author implemented the checklist that lived in `local-only/New versions.md`:
  F22 — Basic attack now reads "Power 4 + d4" and "increase the Power" (both
  spots, as drafted); F23 — the PP costs section gained the rationale sentence
  in the author's own wording ("Moves with low official PP values are
  generally powerful, so they are given high PP costs, and Moves with high
  official PP values are given low PP costs"); F25 — Healer adopted the ready
  text verbatim ("This Move is used as a Main Action and costs 3 PP.");
  F34 — every straight apostrophe normalized (including the six Official
  spec lines — the author chose full normalization over the plain-style
  option), and the Additional keywords table gained its "Keyword | Effect"
  header with Counter bolded; F42 — "Placement Type (AoE only)" added to the
  Move format list between Shape Size and Power, and rather than extending
  the keyword enumeration, the sublist was removed entirely ("Additional
  keywords" now stands alone, deferring to the keywords table) — so no
  keyword can go missing from the list again. The it's/its slip in the
  Accuracy example was also fixed ("so its Accuracy is +8"). The checklist is
  removed from `local-only/New versions.md`; all findings are closed in
  `RULES_ANALYSIS.md`.
- **F24 — Form Change's "second Ability" (resolved in 0.9.5.4).** The author
  clarified it in their own way, and differently from the checklist draft's
  flagged assumption (which guessed the character's *other* Ability is shared
  between forms — wrong): the sentence now reads "Both forms have their own
  Core stat Base Values, typing, and second Ability (both forms have
  'Form Change')." — i.e., Form Change itself occupies one of each form's two
  Ability slots, and each form's second Ability is the form-specific one.
  The assumption-flagging in the checklist paid off: had the draft been
  implemented unflagged, it would have stated the wrong rule. Finding closed.
- **F19 — Ability list expansion (resolved by author clarification, 2026-10-29).**
  The finding flagged that the species-specific Ability category holds exactly
  one entry (Wonder Guard, out of 22 Abilities) while iconic official
  Abilities (Levitate, Flash Fire, Sturdy, Speed Boost, Huge Power,
  Intimidate…) have no conversion path. Author clarification: the scope is
  **deliberate** — the missing Abilities have been considered extensively and
  left out for now, and new Abilities are added when a need emerges. The
  already-covered mappings were also corrected: Mimikyu's Disguise is meant to
  be covered by **Substitute** (the one-time damage negation — the analysis
  had attributed it to Form Change), and Aegislash's Stance Change by Form
  Change; weather-setting Abilities are covered by Weather Setter. The finding
  is removed from `RULES_ANALYSIS.md`; the deliberate scope is recorded as a
  design convention in AGENTS.md.
- **F21 — d3 guidance (withdrawn as moot, 2026-10-29).** The finding asked for
  d3-rolling guidance to parallel the existing d2 guidance. Verified
  programmatically: **no rule in any export version — from the 0.9.4 baseline
  through 0.9.5.4 — references a d3 at all.** The dice actually used are d20
  (all tests), d2 and d4-d12 (Power Dice and damage), and d6 (the d2-rolling
  method). The d2 guidance exists because the Power conversion table's lowest
  bracket produces Power Dice d2, and the table jumps straight to d4, so no
  conversion output can ever be a d3. The finding was speculative — guidance
  for rolls that no rule requires — and is removed from `RULES_ANALYSIS.md`.
- **A1 — Shielding An Ally vs damaging AoE Moves (resolved by author clarification, 2026-10-30).**
  The 0.9.5.4-pass analysis read the AoE rules ("damaging AoE Moves hit even on a failed
  To-Hit, halved") together with Shielding An Ally ("replace them as the target… fails
  automatically against the protected ally") as a contradiction. Author clarification:
  **intentional** — a damaging AoE hits both the shielder (full damage) and the protected
  ally (halved damage); the Single-target vs AoE behavior difference of Shielding An Ally is
  deliberate. No rules change.
- **A2 — natural 20 did not explicitly always hit (resolved in 0.9.5.5).** To-Hit tests said
  only "the Move hits if Accuracy exceeds Evasion" while separately defining a natural 20 as
  a Critical Hit, leaving a natural 20 that failed the test undefined. Resolved: "A roll of
  natural 20 from the Accuracy roll of a damaging Move **always hits** and is a Critical
  Hit." (D&D-style, as the author intended.)
- **A3/A4 — modifier propagation to derived values was undefined (resolved in 0.9.5.5).** The
  "buffs and debuffs don't apply to…" list lived under Standard effects (so it read as
  buff/debuff-only) and used the vague "move distances and radiuses" wording, leaving e.g.
  Paralysis's Speed −4 vs Base Evasion/Movement Range/Initiative open. Resolved: a general
  "Unmodified values" list under Core rules > Modifiers (applies to **all** modifiers:
  Initiative rolls, Move Ranges and Shape Sizes, maximum/current PP), plus a new derived
  value "Initiative modifier = Speed". Author clarification: propagation to **Base Evasion
  and Movement Range is intentional** (Speed modifiers reach them; Initiative rolls never
  do). Also fixes the "radiuses" typo (former E1).
- **A5 — type immunity vs True Damage (resolved in 0.9.5.5).** "Immunities reduce all damage
  from a matching-type Move to 0" conflicted with "True Damage is applied as is". Resolved
  by a new True Damage subsection: True Damage has no type by default (even when caused by
  a typed Move); only explicitly typed True Damage (e.g. Hazardous Terrain, which now states
  its damage "has the type of the terrain") is affected by Resistances/Weaknesses and reduced
  to 0 by Immunities. Chip Damage is explicitly reduced to 0 by immunities against the
  Move's type.
- **A6 — maintenance restrictions overlapped between buffs/debuffs and Charging (resolved in
  0.9.5.5).** Buff/debuff maintenance carried a legacy "can't maintain on a skipped turn"
  clause that no longer fit the restriction model, and Incapacitated was listed separately in
  the Charging row. Resolved: the skipped-turn clause is removed (End Phase always resolves,
  and maintenance is allowed there), and the Incapacitated row now covers "buffs, debuffs or
  'charged' states of Moves" in one place.
- **A7 — Stealth Rock used Physical/Special AoE values (resolved in 0.9.5.5).** The
  indirect-converted Status Move had Shape Size "2 m + ½ (Sp.) Attack" and Range "10 m +
  (Sp.) Attack"; corrected to the Status values Shape Size 5 m and Range 15 m.
- **A8 — evolving reorganizes only Social stats (resolved by author clarification,
  2026-10-30).** Intentional: evolution changes the Pokémon's visual style and sometimes
  behavior, not its knowledge.
- **A9 — Wonder Guard's "direct Move damage" scope (resolved in 0.9.5.5).** Reworded to
  "immune to all damage not caused by Status Conditions, except from Moves with elemental
  types you are Weak against" — blocking AoE, Chip and hazard damage too, while Status
  Condition damage (Burn/Poison) and super-effective Moves still get through.
- **A10 — Clash auto-hit vs Critical Hits (resolved in 0.9.5.5).** "In a Clash, Melee
  Single-target Moves hit their targets automatically, but the rolls of d20 included in
  To-Hit tests are still made to see if either Move is a Critical Hit."
- **Layout NOTICE (0.9.5.4-pass content gap C3, resolved in 0.9.5.5).** The "visually bare
  bones" NOTICE row was removed from the Description's contents table in 0.9.5.5.
- **A11 — Range field of a non-Ranged AoE Move undefined (resolved by author directly in the
  0.9.5.5 source, 2026-10-30).** Only the Ranged Placement Type consumes a Move's Range field,
  but Stealth Rock listed Range 15 m with Projected placement. The author fixed it in the
  0.9.5.5 source document rather than cutting a new export: Stealth Rock's Placement Type is
  now **Ranged** (confirmed in the saved `Rules/Mystery Quest ruleset 0_9_5_5.md` export).
- **B3 — single-target vs AoE Power asymmetry (resolved by author clarification,
  2026-10-30).** Single-target Power Values convert at the top of each official bracket
  (e.g. 85–100 → 10 + d10, average 15.5 vs official midpoint 9.25, ~68% inflation) while AoE
  Powers are two dice sets with no flat value, making single-target Moves systematically
  stronger per target. Author clarification: **deliberate** — AoE Moves are weaker per
  target but hit potentially more targets. No change; kept in `RULES_ANALYSIS.md` marked
  accepted by design.
- **B4 — Fate Point maximum too high (resolved in 0.9.5.6).** The 0.9.5.5 analysis flagged
  the Fate Point economy (1/session, cap 4, after-the-fact, stackable — up to 16 guaranteed
  rerolls for a 4-player party) as a strong safety net that would soften "difficult"
  encounter tuning. Resolved in the ruleset: the maximum number of unspent Fate Points is
  now **2**. The character sheet's side-panel label was updated to match ("Fate Points:
  Max 2"). Finding removed from `RULES_ANALYSIS.md`.
- **C3 — keyword candidates for shared Move mechanics (resolved in 0.9.5.7).** Hazards,
  weather-setting and recoil stay custom Description text (too many dependent variables;
  a Move's main purpose should not become a keyword — keywords describe an additional
  characteristic on top of the main effect). The **Trapping** keyword was implemented in
  0.9.5.7: on a hit, the target becomes trapped and can't voluntarily move more than 1
  meter from where they were hit; the "trapped" condition is removed when the Move is no
  longer in effect or if the target is forcibly moved. The keyword deliberately states no
  turn count — removal conditions live in the Move's Description (e.g. Mean Look: "The
  target is trapped as long as the user remains within 15 meters of the target."), and any
  damage (binding Moves' end-of-turn True Damage) is likewise stated in the Description, so
  damage-less trappers aren't confused. The "trapped" state is defined inline in the
  keyword (precedent: the "charged" state), so no Restrictions-table entry was added; a
  single-use No Switching restriction category, Immobile, and a Movement-Action cap were
  all considered and rejected. The ready-text block was removed from `local-only/New versions.md`.
- **C4 — structured Duration field on Move entries (rejected by author, 2026-10-31).** A
  separate Duration field ("Instant" / round or minute count, D&D-style) was considered and
  rejected: it would only ever describe effects already written in the Description, which is
  confusing. Durations stay in Description prose; the global duration-counting and
  out-of-battle 6-seconds-per-round rules apply to them unchanged.
- **A12 — resisting restriction/status-inflicting Moves like Taunt (resolved in 0.9.5.8).**
  The open question was how targets resist Moves like Taunt now that Protect is replaced by
  Protect Stance. Resolved by the new **Condition** additional keyword in 0.9.5.8 ("The
  Move's effect is resolved as a Status Condition with a removal DC of 10"): Taunt-like
  Moves convert as Condition-keyword Moves, so they land in the Status Conditions framework
  where Resist Stance's existing on-receive roll ("when you receive them, before they are
  applied") and the End Phase removal tests apply. Protect Stance stays damage-only (blocking
  Moves outright would recreate the removed Protect Move), and no PP-cost resistance roll was
  added (Fate Point rerolls already cover the To-Hit test).
- **E5 — "end of turn" vs "End Phase" wording (resolved in 0.9.5.8).** The Status Condition
  removal test now reads "During their End Phase"; Resist Stance, Flinch removal, the
  Burn/Poison/Badly-poisoned ticks ("at the start of their every End Phase") and Turn-End
  Decay's trailing clause all use End Phase wording. Semantically identical (the End Phase
  always resolves — restrictions never remove it), and it removes the Priority-Turn ambiguity.
  The End Phase definition's own lead-in ("**End Phase:** At the end of their turn, …") was
  left as the phase's definition. Also in 0.9.5.8: the "Standard effects" section was renamed
  to "Secondary effects" (heading, anchor and cross-references).
