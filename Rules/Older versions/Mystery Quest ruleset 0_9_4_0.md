# Pokémon Mystery Quest ruleset

TTRPG for Mystery Dungeon and other Pokémon-only adventures.  
By **u/Finnfox66**, version 0.9.4

## Description {#description}

This is an unofficial ruleset for running Pokémon-only tabletop roleplaying games themed loosely around the Mystery Dungeon game series. The ruleset is essentially a conversion kit for converting official **mainline** video game material into a tabletop roleplaying game format. As such, it offers minimal amounts of content for worldbuilding.

The system is based on the **d20** dice, uses **meters** as a unit of distance, is **classless**, and is **not grid-based**.

**The intents of the ruleset are:**

- To make it possible to convert values and descriptions from the official video games as effortlessly as possible while maintaining the simplicity required from a tabletop roleplaying game to run smoothly.  
- To make combat feel like a traditional tabletop roleplaying game instead of a video game.  
- To allow flexibility in character creation and progression instead of forcing strict balance to the combat effectiveness of player characters.  
- To comment as minimally as possible on what a game world should include and how it should work. The ruleset is focused on theme agnostic and plot-independent mechanics instead of for example team/guild and dungeon crawling mechanics.  
- To support a player party of 4 and a campaign lasting anywhere between 1 and 170 sessions.

### Similarities to other games

The basics of the ruleset share similarities with 5th edition D\&D. Compared to the other PMD TTRPGs like “[Pokémon Mystery Dungeon: Explorers of Fate](https://drive.google.com/file/d/18Zw5BQBiZNy8FS2N4LbotHFfhjtJCDa9/view)” and “[Explorers PMD RPG](https://www.explorers-pmd-rpg.com/)”, this ruleset is less tied to mechanics and themes specific to the Mystery Dungeon games, is entirely backgroundless/classless, lacks any kind of thematically inspirational material and probably feels more like D\&D. If you want combat that feels like the PMD games, or visually clean material that inspires your adventures, use the aforementioned rulesets instead of this one. If you want a more loosely PMD-themed adventure and total control over narrative elements, this ruleset can be worth a try.  
Contents and material

| NOTICE: The document is visually bare bones and sometimes the content is split horribly between pages. This is because the layout and visual style of the document will not be improved until the rules have been iterated and playtested sufficiently. |
| :---- |

[Description	1](#description)

[Core rules	4](#core-rules)

[Building and advancing characters	9](#building-and-advancing-characters)

[Combat tests and Moves	13](#combat-tests-and-moves)

[Rounds, turns and actions	22](#rounds,-turns-and-actions)

[Standard effects	28](#standard-effects)

[Health and recovery	31](#health-and-recovery)

[Other mechanics	33](#other-mechanics)

[Material for game masters	37](#material-for-game-masters)

### Links to material

**Ruleset document**

- [Google Docs](https://docs.google.com/document/d/1pGBBnfJUGPJDmITAn_SOs2XYqmhM37sTh_qE9ZLSDkk/edit?usp=sharing)  
- [PDF](https://drive.google.com/file/d/1GK5fFCGtOKWCH2BN0lxq7Ep6UCM8WaSp/view?usp=sharing)

**Character sheet**

- [PDF](https://drive.google.com/file/d/1F5cidvM-SbC9Nm0DtPg26kUIhx-BPrQ3/view?usp=sharing)  
- [PNG](https://drive.google.com/file/d/1-8yNhccBujwMVD3fN2b0Jjqvg9r185zU/view?usp=sharing)  
- [Google Sheets](https://docs.google.com/spreadsheets/d/1Zi-Tzo_H76E2EQ_0G8YDQdU7tWkTkN58ewEK0jv_GDM/edit?usp=sharing)  
- [Google Sheets](https://docs.google.com/spreadsheets/d/183g-Y_4EaSjbXwSgOqx3ilKOecgOtrFFJ8WOj7lisRs/edit?usp=sharing) (by u/gimlisab)

### Acknowledgments

- Special thanks to **u/gimlisab** for their active and invaluable help with the rules.

### Character sheet

![][image1]

## Core rules {#core-rules}

### Gameplay and measurements

The game uses meters as a unit of distance. The game is intended to be played using tokens or miniatures to represent characters and using distance measurement tools instead of a grid. This means that there are no rules for managing things like grid movement or translation of character sizes into a grid. But due to this being a tabletop roleplaying game and not a miniature wargame, the general advice is that the game master should be on the side of players in situations where minor distances can cause major consequences for the players.

***For example**, a player character that is half a meter away from being able to strike an enemy character with a Melee Move could be allowed to move that half a meter despite not normally being able to do so.*

Distances from characters are measured from the edges of their general shape, discarding things like wings and tails from measurements. If the tokens or miniatures have a base, the edges of the base can also be used for measurements. The distance between two characters is the shortest distance between their general shapes or bases.

If you are using physical tokens or miniatures, the recommended size is 1:33, where 1 meter converts to 3 centimeters. If you prefer using inches instead, the recommended size is 1:39, where 1 meter converts to 1 inch, making it slightly smaller in scale compared to 1:33.

If you are used to the classic TTRPG grid size of 5 feet and want to use it as a reference for sizes and distances, it is roughly equivalent to 1.5 meters (4.5 cm in 1:33 scale and 1.5 inches in 1:39 scale).

### Stats

Stats of a character consist of four stat categories: Core, Knowledge, Social and Bonus. Of these categories, the first three are considered main stat categories and the last is considered an additional stat category. Core stats represent combat effectiveness, although they can also be used in non-combat situations, whereas Knowledge, Social and Bonus stats represent non-combat effectiveness. The categories and the individual stats they include are listed below.

Core stats:

- **Health**  
- **Attack** *(Physical strength)*  
- **Special attack** *(Special strength)*  
- **Defense** *(Physical toughness)*  
- **Special defense** *(Special toughness)*  
- **Speed** *(Agility & initiative)*

Knowledge stats:

- **Awareness** *(Perception & simple memory)*  
- **Empathy** *(Reading emotions & interpreting intentions)*  
- **Pokémon knowledge** *(Pokémon species, Moves, capabilities & anatomy)*  
- **Nature knowledge** *(Navigation, survival, plants & weather)*  
- **Scientific knowledge** *(Technology, chemistry & mathematics)*  
- **Societal knowledge** *(Locations, history, cultures, languages & famous individuals)*  
- **Crafts** *(Cooking food, shaping materials, building things & creating art)*  
- **Trickery** *(Stealth, sleight of hand, thievery & manipulating mechanisms)*

Social stats

- **Cool** *(Appearing calm, brave, strong and/or capable)*  
- **Cute** *(Appearing caring, adorable, harmless and/or friendly)*  
- **Scary** *(Appearing spooky, dangerous, threatening and/or devious)*  
- **Elegant** *(Appearing stylish, captivating, graceful and/or noble)*

Bonus stats:

- **Named custom topic** *(For example “Art”, “Cooking” or “Mountains”)*

Bonus stats can include multiple stats, each with their own named custom topic.

The value of a stat consists of a base value and modifiers that are summed together when determining the value of the stat:

- **Base value** is a static starting value for a stat, given to the character when the character is created. These values represent a character’s background and their innate ability to do something.  
- **Progress Modifier** is an accumulating modifier which can be increased by playing sessions. These modifiers represent a character’s experience and what they have learnt during their journey.  
- **Bonuses** represent any other long-lasting modifiers that the character has. These modifiers can come for example from assistive equipment that a character has or from custom special abilities that the game master has given to the character. This category of modifiers can also be used to keep track of how the environment and situations are strengthening or weakening the character.

Descriptions for total stat values are:

- 0: Weak  
- 5: Average  
- 10: Trained  
- 15: Skilled  
- 20: Exceptional  
- 25: Legendary  
- 30: Unheard of

If a rule can refer either to Attack or to Special attack depending on the scenario, the combination is referred to as “(Sp.) Attack”. Similarly, if a rule can refer either to Defense or Special defense depending on the scenario, the combination is referred to as “(Sp.) Defense”.

### Derived combat values

In addition to their stats, characters have additional values for combat purposes that are calculated from their Core stats. These values along with the formulas used for calculating them are listed below.

- **Maximum Health Points** (Max HP) \= Health \* 4  
- **Maximum Power Points** (Max PP) \= (Health \+ Attack \+ Special attack) / 2 (rounded up)  
- **Movement Range** \= Speed / 2 (rounded up)

### Bonus stats

Bonus stats represent custom topics that a character is especially knowledgeable of, and they give their bonus to every test that is about the custom topic. The game master needs to confirm the validity of these custom topics when they are given to characters to prevent them from being too broad. New bonus stats can be added without cost, as they start from a base value of 0\. Bonus stats can only be paired with Knowledge or Social stats. They can never be added to Core stats, nor can multiple Bonus stats be used together on a single test.

***For example**, a Bonus stat with the title of “Cooking” is added to the Knowledge stat “Crafts” when testing a character’s ability to cook a meal, or to “Societal knowledge” when testing a character’s ability to know what kind of food there is available in a city.*

### Tests

All tests made using characters’ stats are resolved by rolling a 20-sided die (d20) and by then adding the character’s stat to the result, plus any bonus stats that apply. The result is then compared to the difficulty of the test, set by the game master. If the result meets or exceeds the difficulty, the test is passed. This difficulty is referred to as the test’s “Difficulty Class” (DC)

**A basic test:**  
d20 \+ Stat value \+ Bonus stat value (if applicable) ≥ Difficulty Class

Descriptions for the Difficulty Classes:

- 5: Mundane  
- 10: Easy  
- 15: Medium  
- 20: Challenging  
- 25: Difficult  
- 30: Very difficult  
- 35: Insanely difficult  
- 40: Nearly impossible  
- 45: Should be impossible

In a basic test, no result from the die is an automatic success or failure.

All halves are always rounded up, unless otherwise stated.

### Reliability Tests

**Reliability Tests** are conversions of the percentage checks from the official video games. They are primarily used by Moves to hit and affect their targets. Like an ordinary test, Reliability Test consists of a roll and a Difficulty Class (DC). But in a Reliability Test, the DC is always 1 and the roll has a modifier based on an official percentage chance, where \-1 is added to the modifier for each missing full 5% of chance in the official percentage value. This modifier is referred to as “Chance Penalty”.

**Reliability Test:**  
d20 \+ Chance Penalty ≥ 1

**Conversion examples for official Accuracy %**

| Official Accuracy % | Chance Penalty | Test |
| :---- | :---- | :---- |
| 100% | 0 | d20 ≥ 1 |
| 90% | \-2 | d20 \- 2 ≥ 1 |
| 55% | \-9 | d20 \- 9 ≥ 1 |
| 30% | \-14 | d20 \- 14 ≥ 1 |

### Advantages and Disadvantages

If a character is performing tasks under especially favorable or unfavorable conditions, an **Advantage** or **Disadvantage** modifier can be applied to the roll or DC of a test or directly to a character’s stat to represent the ongoing condition. Some rules call for these modifiers to be applied, but the game master can use them freely to represent conditions that are not covered by the rules.

An Advantage is a \+4 modifier and a Disadvantage is a \-4 modifier. There are also **Half Advantages** and **Half Disadvantages**, which are \+2 and \-2 versions of the modifiers, and **Double Advantages** and **Double Disadvantages**, which are \+8 and \-8 versions of the modifiers. These modifiers stack, meaning that a character can have multiple Advantages or multiple Disadvantages to a test or a stat at the same time.

The reason for why Advantages and Disadvantages are handled differently in this game compared to the most popular TTRPGs is that in this ruleset the chances of landing hits on targets are often so high that rerolls and equivalent rules do not modify them in a meaningful way.

### Passive and temporary Advantages

In addition to providing more momentary benefits, Advantages can also be given to characters as long-term **passive** or short-term **temporary** benefits that characters have due to persisting favorable conditions. These rules are meant for handling improvised Advantages and do not affect any separately defined rules like Stance, item, buff or debuff rules.

Passive Advantages are generally provided by assistive equipment or items that characters are wearing or have with them.

***For example**, a player character wearing a luxurious cape could be given a passive Half Advantage (+2) to Elegant, or a player character that has a cookbook with them could be given a passive Advantage (+4) to “Cooking” Bonus stat.*

Temporary Advantages represent short-term boosts in confidence and ability. They are removed from a character after they have performed a Short Rest or Long Rest. These Advantages are especially appropriate for Social stats because Social stats represent the changing nature, confidence and social status of characters. Such Advantages could be provided for example by experiencing something inspiring or encouraging.

***For example**, seeing a heroic statue could give player characters a short-term Half Advantage (+2) to Cool, or a visit to a really good café could give them a short-term Half Advantage (+2) to Cute or Elegant depending on the experience. These bonuses last until the end of the character’s next Short Rest or Long Rest.*

## Building and advancing characters {#building-and-advancing-characters}

When creating a new player character, the first step is to choose what Pokémon species they are. Then the Core stats are defined by converting the official Pokémon base stats of the species into the Core stats by dividing them by 10 and rounding to the nearest number.

***For example**, the official base stats of an Eevee are: 55 (HP), 55 (Attack), 50 (Defense), 45 (Sp. Atk), 65 (Sp. Def) and 55 (Speed). These translate to Core stats of 6 (Health), 6 (Attack), 5 (Defense), 5 (Sp. Atk), 7 (Sp. Def) and 6 (Speed).*

Knowledge, Social and Bonus stats also have base values. When creating player characters, players choose a Base Value Array and allocate its numbers to their Knowledge, Social and Bonus stats, using each number once. Then, all remaining stats with no number allocated to them are given 0 as their base value.

**Base Value Arrays**

| Description | Numbers | (Total) |
| :---- | :---- | :---- |
| Hyper specialized | 14, 11, 8, 6, 5, 4, 4, 3, 3, 2, 2, 1 | 63 |
| General specialized | 12, 10, 9, 8, 7, 6, 5, 5, 4, 3, 2, 1 | 72 |
| Jack of all trades | 10, 9, 9, 8, 8, 7, 7, 6, 5, 4, 3, 2 | 78 |

### Type Resistances/Weaknesses

Each character has type Resistances and Weaknesses according to the official type Resistances and Weaknesses of the Pokémon species that they are. The number 4 is used as a base value for converting the type Resistances and Weaknesses into modifiers that can be used as additions and reductions rather than multipliers. These modifiers are applied to the character’s Defense Power when the character is the target of a Move. This means that a Weakness of x2 is translated into a modifier of \-4, a Weakness of x4 is translated into a modifier of \-8 and so on. Similarly, a Resistance of x1/2 is translated into a modifier of \+4 and a Resistance of x1/4 is translated into a modifier of \+8 and so on.

Type immunities still reduce all damage taken from a Move with a matching type to 0\.

***For example**, Eevee is Normal type and therefore has a type Weakness against Fighting (x2 in the official rules, meaning that the character has \-4 to their Defense Power against Moves of the type) and type immunity against Ghost (x0 in the official rules, meaning that Moves of the type don’t damage the character).*

### Starting Moves and learning new Moves

In a standard campaign, all player characters start the game with one learnt Move chosen from the official list of egg Moves available to the character’s species in addition to a “Basic attack” Move that every character has by default. The maximum amount of learnt Moves a character can have is 4 (“Basic attack” does not count as a learnt Move).

To use the official sources to determine which Moves a Pokémon can learn, a character's official level is determined using the formula **(X \* 1.5) \+ 5**, where X is the total sum of the Progress Modifiers of the character’s Core stats and the final result is rounded up.

**Examples for level conversions**

| Total sum of the Progress Modifiers of Core stats | Official level | Minimum Advancement Point cost for reaching the level |
| :---- | :---- | :---- |
| 0 | 5 | 0 |
| 5 | 13 | 5 |
| 10 | 20 | 14 |
| 25 | 43 | 65 |
| 40 | 65 | 154 |
| 50 | 80 | 234 |
| 60 | 95 | 330 |

The process of learning new Moves is determined by the game master, but the general recommendation is that learning a new Move should not happen by itself. A new Move could be either learnt through trial and error or taught by a proficient instructor character. It’s generally a good idea to include non-player battle instructor characters in the game world and to use those characters to explain what Moves are available to the player characters and what the requirements are for learning them. Such characters can also replace TMs and TRs.

### Increasing stats with Advancement Points

Increases to the Progress Modifiers of stats are purchased using Advancement Points. Each player character gains 2 Advancement Points after every session. Each new increase to a Progress Modifier of a stat costs an amount of Advancement Points equal to the new value of the Progress Modifier.

***For example**, getting a Progress Modifier from \+0 to \+1 costs 1 Advancement Point. Getting a Progress Modifier from \+1 to \+2 costs 2 Advancement Points. Getting a Progress Modifier from \+2 to \+3 costs 3 Advancement Points, and so on. This means that getting a Progress Modifier from \+0 to \+10 costs a total of 55 Advancement Points.*

If you need a reference for what it costs in total to get a Progress Modifier from 0 to some certain number, here is a quick example:

| Progress Modifier | Total cost |
| :---- | :---- |
| \+1 | 1 |
| \+2 | 3 |
| \+3 | 6 |
| \+4 | 10 |
| \+5 | 15 |
| \+6 | 21 |
| \+7 | 28 |
| \+8 | 36 |
| \+9 | 45 |
| \+10 | 55 |

### Evolving

The conditions for evolving are set entirely by the game master, as the achievement of evolving is better used to serve the story of the game rather than its rules. Due to the flexible nature of the character progression in this ruleset, the game master is encouraged to break all official rules related to evolving, including level requirements, to prevent the players from trying to achieve evolutions as fast as possible by focusing only on their combat effectiveness.

When evolving, the base Core stats of the evolving character are changed to match the official stats of their new form. The character can also freely reorganize the base numbers of their Social stats, which can be used to represent the changing style of the character.

### Abilities

Using Abilities found in the official Pokémon games is optional, but not supported by the ruleset as they would complicate the system.

There can be cases where an official Ability needs to be converted, such as with Shedinja’s Wonder Guard. There can also be Abilities that have high thematic impact and could therefore be converted, such as Mimikyu’s Disguise and Aegislash’s Stance Change. However, there are no rules for converting these Abilities to be used in a game, so creative freedom is required.

### Natures

Similarly to Abilities, Natures used in the Pokémon games are not included in this ruleset as the general character customization provides the possibility to customize a character to fit various natures.

### Held Items

Generally, conversions for held items are not provided in this ruleset and the overall advice is to use them sparingly and to modify their triggers and effects heavily if they are added. Some item templates are provided under the “Material for game masters” section.

### Flying

Whether a character is able to fly or not is left for the game master to decide. When building player characters, it is recommended not to allow players to choose Pokémon species capable of flight on their first stage form. This is because being able to fly is a highly potent ability and the ruleset doesn’t set guardrails for its use.

Movement Range for flying is the same as for ground-based movement.

## Combat tests and Moves {#combat-tests-and-moves}

### Combat tests

In order for a Move to cause damage to its target, it first needs to hit the target by succeeding in a **To-Hit test** and then it needs to overcome the target’s defenses in a **To-Damage test**.

A To-Hit test is resolved using a Reliability Test performed by the attacker, where the roll of the test is referred to as the attacker’s **Accuracy** and the DC is referred to as the target’s **Evasion**. If the attacker’s Accuracy meets or exceeds the target’s Evasion, the Move hits the target.

- The attacker’s Accuracy is resolved by rolling a d20 and adding the Move’s Chance Penalty, adding the attacker’s (Sp.) Attack (modified by buff/debuff) and applying any applicable Advantages and Disadvantages.  
- The target’s Evasion is resolved by taking a flat number of 1 and adding their Speed (modified by buff/debuff), adding their Evasion buff/debuff (if applicable), and applying any applicable Advantages and Disadvantages.

**To-Hit test**

|  | Base value | Modifiers | Modifiers applied if applicable |
| :---- | :---- | :---- | :---- |
| **Attacker’s Accuracy** | d20 \+ Move’s Chance Penalty | \+ (Sp.) Attack | \+ (Sp.) Attack buff/debuff \+ Advantages \+ Disadvantages |
| **Target’s Evasion** | 1 | \+ Speed | \+ Speed buff/debuff \+ Evasion buff/debuff \+ Advantages \+ Disadvantages |

In a To-Hit test, the result of a natural 20 from the Accuracy roll is an automatic success. No other results from the dice are automatic successes or failures. Also an Advantage (+4) is added to Accuracy if the target of the Move is unable to move.

If the Move hits its target, a To-Damage test is made where the attacker resolves their **Attack Power** and the target resolves their **Defense Power**. The amount with which the Attack Power exceeds the Defense Power is dealt to the target as damage. If this damage reduces the target to 0 HP, any excess damage becomes Severe Damage.

- The attacker’s Attack Power is resolved by rolling the Move’s Power Dice and adding the Move’s Power Value, adding their (Sp.) Attack (modified by buff/debuff), and applying any applicable Advantages and Disadvantages.  
- The target’s Defense Power is resolved by summing together their (Sp.) Defense (modified by buff/debuff), their type Resistance/Weakness (if applicable), their Stance’s Effect (if applicable), and any applicable Advantages and Disadvantages.

**To-Damage test**

|  | Base value | Modifiers applied if applicable |
| :---- | :---- | :---- |
| **Attacker’s Attack Power** | Move’s Power Dice \+ Move’s Power Value \+ (Sp.) Attack | \+ (Sp.) Attack buff/debuff \+ Advantages \+ Disadvantages |
| **Target’s Defense Power** | (Sp.) Defense | \+ (Sp.) Defense buff/debuff \+ type Resistance/Weakness \+ Advantages \+ Disadvantages |

### Move categories and resolution

Each Move belongs to a **Physical**, **Special** or **Status** category, based on its official Category. In general, Physical and Special Moves are affected by the user’s (Sp.) Attack and the target’s (Sp.) Defense and deal damage to their targets, whereas Status Moves are not affected by the characters’ stats and do not apply direct damage to their targets. Status Moves therefore use a simplified version of the To-Hit test and apply their effects directly without To-Damage tests.

All **Area of Effect (AoE)** Moves also use a simplified version of the To-Hit test regardless of their category, but these To-Hit tests and the following To-Damage tests (if the Move is Physical or Special) are performed separately for each target.

In a simplified To-Hit test, only the Evasion buff/debuff of the target is added as a modifier to the target’s Evasion if applicable.

**Simplified To-Hit test**

|  | Base value | Modifiers applied if applicable |
| :---- | :---- | :---- |
| **Attacker’s Accuracy** | d20 \+ Move’s Chance Penalty |  |
| **Target’s Evasion** | 1 | \+ Evasion buff/debuff |

If Physical or Special Moves have secondary effects in addition to their Power that rely on percentage chances in the official games, Reliability Tests are used to see if those effects are applied. With AoE Moves, these checks are performed separately for each target. If necessary, custom tests or conditions can be created when conditions for applying secondary effects do not rely on percentage chances in the official games. In general, some secondary effects and the chances of applying them might not follow any standard patterns in the official games and might therefore require creative freedom during conversion.

**Summary of hitting and damaging methods**

| Move category | Single-target / AoE | Hitting | Damaging and applying secondary effects |
| :---- | :---- | :---- | :---- |
| Physical or Special | Single-target | To-Hit test | To-Damage test, and Reliability Test (or custom test) for applying secondary effects |
| Physical or Special | AoE | Simplified To-Hit test | To-Damage tests per target using a single Attack Power against all targets, and Reliability Tests per target (or custom tests) for applying secondary effects |
| Status | Single-target | Simplified To-Hit test | Effects are applied if the Move hits |
| Status | AoE | Simplified To-Hit test | Effects are applied if the Move hits |

### Chip and True Damage

A Single-target Move that hits its target but has lower Attack Power compared to the Defense Power of the target always deals 1 damage to the target. This is referred to as “Chip Damage”. However, AoE Moves can’t cause Chip Damage and multi-attack Moves can cause it only once.

Sometimes it might make sense to have Moves deal damage that skips the To-Damage test and is simply applied as is. This is referred to as “True Damage”.

### Moves

Moves are powerful attacks or assistances that characters can use during or outside of combat to damage and/or otherwise affect other characters. By default, Moves are converted from the latest versions of the official Moves of the Pokémon games (NOT from the Moves used in Mystery Dungeon).

Moves consist of:

- **Name**  
- **Type**  
- **PP cost**  
- **Main keywords**  
  - **Single-target / Area of Effect (AoE)**  
  - **Physical / Special / Status**  
  - **Melee / Long Range**  
- **Additional keywords**  
  - **Priority**  
  - **Counter**  
- **Range**  
- **Chance Penalty**  
- **Shape** (AoE only)  
- **Shape Size** (AoE only)  
- **Power** (Physical and Special Moves only)  
- **Other effects & descriptions**  
  - **Standard effects**  
    - Includes buffs, debuffs and status effects. Explained in the “Standard effects” section.  
  - **Non-standard effects**  
  - **Description**  
    - Used for rule exceptions and improvisation.

### PP costs

Contrary to the official video game rules, the Power Points in this ruleset are a singular pool of points that is used as a resource for performing powerful Moves.

**Conversion table for PP cost**

| Official PP of a Move | Converted PP cost |
| :---- | :---- |
| **5** | **3** |
| **10** | **2** |
| **15** | **1** |
| **20+** | **0** |

### Power

Power values are also created differently for **single-target** and **Area of Effect** (AoE) Moves. The Power of a single-target Move consists of a **flat number and a set of dice**, whereas the Power of an AoE Move consists of a roll of **two sets of dice**. The flat value is referred to as “**Power Value**” and the dice set is referred to as “**Power Dice**”. Both of these are converted from the official base Power value by dividing it by 10 and rounding up to the nearest number that can be represented by commonly available dice.

**Power conversion table**

| Official Power value | Power Value | Power Dice |
| :---- | :---- | :---- |
| 5-20 | 2 | d2 |
| 25-40 | 4 | d4 |
| 45-60 | 6 | d6 |
| 65-80 | 8 | d8 |
| 85-100 | 10 | d10 |
| 105-120 | 12 | d12 |
| 125-140 | 14 | d10 \+ d4 |
| 145-160 | 16 | d10 \+ d6 |
| 165-180 | 18 | d10 \+ d8 |
| 185-200 | 20 | 2d10 |
| 205-220 | 22 | d10 \+ d12 |
| 225-240 | 24 | 2d10 \+ d4 |
| 245-260 | 26 | 2d10 \+ d6 |

The Damage dice of AoE Moves are rolled once and a single Attack Power value is applied to all targets caught in an AoE Move.

***For example:** The Move “Mega Punch” has a Power of 80 in the official video games, so its Power is 8\. It is a single-target Move so its Damage is 8 \+ d8. If it were an AoE Move, its damage would have been 2d8. If the user is of the Normal type similarly to the Move, the Damage is increased by an additional d8 due to the STAB bonus.*

Moves that have low official base Power but can increase in Power beyond the base value (such as "Rollout") are handled by adding more of the existing dice into the roll instead of making the face count of the dice higher.

A roll of d2 can be made for example by rolling d6 and treating 1-3 as a 1 and 4-6 as a 2\.

### STAB and Critical Hits

If the Move is of the same type as the character, one set of Power Dice is added to Attack Power. This is known as the **STAB bonus**.

A single attack included in a Move receives a Critical Hit if a natural 20 is rolled on the Accuracy roll of the attack. When an attack receives a Critical Hit, one set of Power Dice is added to Attack Power.

### Melee / Long Range

Whether a Move is Melee or Long Range is determined based on the Move’s official “Makes contact?” information. If the Move officially makes contact, it is a Melee Move. If it doesn’t make contact, it is a Long Range Move. This information is more meaningful for single-target Moves than it is for AoE Moves.

### Single-target

The Range of Single-target Melee Moves is **1 meter**. When used during a character’s own turn, Single-target Melee Moves include one **free Movement Action** that has to reach the target. This Movement Action must be used before the Move. Also, the movement provided by the free Movement Action must be performed through the shortest available route to the target (choosing freely between options if there are multiple equally short routes available) and can’t be used to move past the target.

The Range of Single-target Long Range Physical or Special Moves is **20 m \+ 2x (Sp.) Attack** and the Range of Single-target Long Range Status Moves is **15 m**. If a character using a Single-target Long Range Move is within 1 meter of an enemy character, they have a Disadvantage (-4) to their Accuracy.

### Area of Effect

Area of Effect (AoE) Moves are Moves that affect all targets within an area instead of only targeting a single character at a time. They are converted from the official video game material by using the Range rule of a Move.

**Conversion table for AoE Moves**

| Official Range rule | Shape | Shape Size (blast radius / cone length) | Placement Type |
| :---- | :---- | :---- | :---- |
| All Adjacent | Blast (small) | **Physical/Special:** 2 m \+ ½ (Sp.) Attack**Status:** 5 m | Projected |
| Your Party / Your Side | Blast (small) | **Physical/Special:** 2 m \+ ½ (Sp.) Attack**Status:** 5 m | Projected |
| All Adjacent Foes | Cone (small) | **Physical/Special:** 4 m \+ (Sp.) Attack**Status:** 10 m | Flared |
| All Foes / Opposing Side | Blast (large) | **Physical/Special:** 4 m \+ (Sp.) Attack**Status:** 10 m | Ranged |
| All | Blast (large) | **Physical/Special:** 4 m \+ (Sp.) Attack**Status:** 10 m | Projected |
| Entire Field | Blast (all) | **Status:** 50 m (encounter-wide) | Radial |

Explanations for Placement Types:

- **Projected:** Power radiates in a uniform circular blast outward from the user. The blast can be positioned anywhere, as long as at least part of the user’s shape or base remains inside the blast area.  
- **Radial:** Power radiates in a uniform circular blast outward from the user. The blast is always centered on the user.  
- **Flared:** A triangular cone expands outward, starting narrow at the user's shape or base and widening as it travels.  
- **Ranged:** The center point of a uniform circular blast can be freely positioned anywhere that’s within the Move’s Range and that the using character has a line of sight to. The Range of a Physical or Special Ranged AoE Move is **10 m \+ (Sp.) Attack** and the Range of a Status Ranged AoE Move is **15 m**.

If there are multiple options for Placement Type, the used Placement Type needs to be decided while converting the Move, not when it is being used in a game. When calculating Shape Sizes, the final result is rounded up.

The cone shape used in the conversion table refers to a common TTRPG cone shape with width that at any point equals its distance from the point of origin. So a cone with the length of 15 m is also 15 m wide at the end of it.

An AoE Move does not affect the user of the Move unless the user wants it to.

### Counter

Counter Moves have specific triggers for when they can be used, for example some form of activity performed by enemy characters. Counter Moves are restricted in their use as they can only be used when the user has the Counter Stance and when the trigger of the Move occurs.

The game master decides if it is possible to use any particular Counter Move outside of Counter Stance. If it is possible, it should be written into the Move’s description.

### Basic attack

Every character always has access to a Move called a “Basic attack” that is a single-target Move with PP cost 0, Chance Penalty 0 and Damage 4 \+ d4 (plus 1d4 if STAB applies). The user can freely decide if the Move is a Physical Melee Move (with the Range of 1 m and includes one free Movement Action) or a Special Ranged Move (with the Range of 20 m \+ 2x (Sp.) Attack) when using it. Additionally, the type of the Move can be any one of the using character’s types. This Move is not counted towards how many learnt Moves a character has.

Basic attack replaces low-level Moves with official Power value of 40 like “Tackle” and “Ember”. However, this does not prevent characters from having such Moves in addition to “Basic attack” if they want to get more type coverage.

The “Basic attack” remains unchanged even in scenarios where the using character is using additional weapons like swords to perform the Move, unless the character has custom special rules that doing so will increase the Damage. But using a weapon can change the type of the attack.

***For example**, a character wielding a sword could perform their “Basic attack” using the Steel type, and a character wielding a torch could perform their “Basic attack” using the Fire type.*

### Healing Moves

Healing Moves work similarly to their video game counterparts and their effectiveness is tied to the multiplier value used in the Health to Health Points conversion.

**Conversion table for healing effects**

| Official effect | Converted effect |
| :---- | :---- |
| Restores **100%** of target’s Max HP | Restores all of the target’s lost HP |
| Restores **75%** of target’s Max HP | Restores target’s HP equal to the target’s **Health \* 3** |
| Restores **50%** of target’s Max HP | Restores target’s HP equal to the target’s **Health \* 2** |
| Restores **25%** of target’s Max HP | Restores target’s HP equal to the target’s flat **Health** value |
| Draining attack | Restores user’s HP equal to **half of the final damage dealt** to the target (rounded up) |

### Multi-attack Moves

Moves with multiple attacks roll their Attack Power only once, but roll their Accuracy separately for each attack. Also, the target character of the Move resolves their Evasion only once. This means that the same damage (user’s Attack Power \- target’s Defense Power) is applied from each attack included in the Move, with the exception of Critical Hits. Also, the chances of applying additional effects are tested separately for each hit.

### Intentionally reducing damage

There are two ways for a character to reduce the amount of damage they deal to their target while using a damaging Move: by **preventing Severe Damage** and by **reducing their (Sp.) Attack**.

Intentionally preventing Severe Damage represents a character trying not to exceed the capabilities of the one they are fighting against. This can be practical for example when having a friendly battle between two allied characters. When using this limitation for a Move, the Move does not cause any Severe Damage to its target. The use of this limitation is decided before the damage from the Move is applied. This limitation can only be used with Single-target Moves and can only be used if the target is not already at 0 HP before the damage from the Move is applied.

Intentionally reducing their (Sp.) Attack represents a character holding back their power to use a Move as a careful tool rather than as a strong knock-out punch. When using this limitation for a Move, a character can perform the Move using any (Sp.) Attack value that is below their actual value. The use of this limitation is decided when resolving the Attack Power of the Move. This limitation can be used with any damaging Move.

### Incompatible Moves

There are some official Moves that should never be included in a tabletop roleplaying game. This includes especially Moves that can violate player agency by affecting characters in potentially degrading ways, like “Charm”. This is because players have more control and creative freedom over how they use their Moves in a tabletop roleplaying game compared to the video games.

The Move “Protect” shouldn’t be included in the game, as it has been replaced with the Protect Stance.

There are also many official Moves that require creative freedom when converting them. Some examples include:

- Moves with variable damage like “Seismic Toss”. These could use basic underived Damage values or numbers derived from a specific Core stat.  
- Moves with thematically difficult semi-invulnerable turns like “Fly”. These could have their semi-invulnerable turns removed entirely, or they could provide bonuses to Evasion on the first turn.  
- Moves with entry hazards like “Stealth Rock”. These could be given a duration like 5 rounds and could affect characters performing a Movement Action through the AoE shape.  
- Heavy speed control Moves like “Trick Room” that would need to affect the initiative order.

## Rounds, turns and actions {#rounds,-turns-and-actions}

### Flow of a battle

**At the beginning of a battle**, all characters roll their Initiative, which is **d20 \+ Speed**. The Initiatives of player characters are announced to everyone and written up. The character with the highest Initiative goes first. If two characters have the same Initiative, player characters go first and players can decide among themselves who goes first. Initiative values cannot be lowered voluntarily, but they can be changed through the Reset Stance and temporarily improved through the Quick Stance.

**At the beginning of a round**, all characters choose one Stance (or choose not to take one) and choose if they are using a Priority Move or not. Players announce their decisions to everyone. If any other rules or Move effects refer to the “beginning of a round”, they are resolved after the Stance and Priority decisions have been announced.

**Turns with Priority Moves** are played before turns without Priority Moves, regardless of the Initiative order. If there are many characters that use Priority Moves, their turns are played in the order of their Initiative before other turns are played.

**During their turn**, characters can use Movement Actions, and a Main Action (such as a Move) if their Stance allows them to do so. If a character has announced at the beginning of a round that they are using a Priority Move and are therefore playing their turn in advance, they must use a Priority Move on their turn. If a character announced that they are not using a Priority Move on their turn and are playing their turn normally, they can still choose to use a Priority Move without its Priority. In such a case, the Move is simply not counted as being a Priority Move.

**At the end of their turn**, buffs and debuffs affecting characters are reduced through Turn-End Decay, and characters can spend PP to prevent it (this is explained further under “Standard effects”).

**Outside their turn**, characters can use a Reaction if their Stance allows them to do so. Reactions are used as responses to actions performed by other characters. By default, Reactions are resolved before the triggering action is resolved (Counter Stance can create exceptions to this). If a Reaction is performed as a response to a Movement Action, the movement is interrupted until the Reaction has been resolved.

**At the end of a round**, all Stances along with their Effects and the actions they provide are removed from characters.

Unconscious and Surprised characters can’t choose Stances or use Movement Actions, Main Actions or Reactions. Turns of Unconscious and Surprised characters are skipped.

A single round of combat lasts 6 seconds of in-game time.

### Hidden information

The game master generally decides what information to keep hidden and what to reveal to players about decisions made by non-player characters (NPCs) during a battle. The game master is encouraged to use their best practices for this, but these rules can be considered the standard practices for the game:

- Initiatives of NPCs are kept hidden until their turns arrive for the first time.

- Stance and Priority decisions of NPCs are kept hidden until the information is revealed using Observative Stance or by the effects granted by the decisions. In other words, players should be made aware if an ongoing interaction with an NPC is being affected by the NPC’s Stance.

- The accurate remaining HP of NPCs is kept hidden. An NPC with less than half of their HP remaining is considered “Exhausted”, and this information is communicated to the players. As an exception, the accurate remaining HP of NPCs is revealed when Observative Stance is used on them.

- Buffs and debuffs affecting characters are always revealed to all characters that can observe the affected character. Advantages and Disadvantages are revealed to all characters that can observe the source of the modifiers.

Thematically, information about player characters is considered to be hidden from NPCs to the same extent as information about NPCs is hidden from player characters, even if the game master would know the information.

### Stances

Stances represent a character’s focus on achieving something during a battle. They also provide variety to combat. Therefore players should always have access to Stances, but NPC characters can be made to not use Stances if they are considered untrained and act based on their instincts during combat.

Stances determine how many Movement Actions, Main Actions and Reactions a character can use during a round. Each Stance also provides an additional Effect. They are divided into Basic Stances and Advanced Stances, but this separation exists only for the purpose of making Stance selection more approachable. New players can be encouraged to choose from the Basic Stances, as the Advanced Stances are more situational.

**Basic Stances**

| Stance name | Effect | Movement Actions | Main Actions | Reactions |
| :---- | :---- | :---- | :---- | :---- |
| Fleet Stance | You have an Advantage (+4) to Evasion and Movement Range | 2 | **0** | 1 |
| Quick Stance | You have an Advantage (+4) to Initiative | 1 | 1 | 1 |
| Power Stance | You have an Advantage (+4) to Attack Power | 1 | 1 | 1 |
| Defensive Stance | You have an Advantage (+4) to Defense Power | 1 | 1 | 1 |
| Protect Stance | You have a Double Advantage (+8) to Defense Power | **0** | **0** | **0** |

**Advanced Stances**

| Stance name | Effect | Movement Actions | Main Actions | Reactions |
| :---- | :---- | :---- | :---- | :---- |
| Reset Stance | At the beginning of the round, reroll your Initiative value with Advantage (+4). Use the new value as your Initiative value. The new value stays in effect and is not removed with the Stance at the end of the round. | 1 | **0** | 1 |
| Resist Stance | New debuffs applied to you are halved immediately, and you roll attempts to remove Status Conditions both when you receive them (before they are applied) and at the end of your turn. | 1 | 1 | 1 |
| Counter Stance | When targeted by a Move from an enemy, you can immediately expend your Main Action (if you have it available) to use a Move against the enemy. The Move is resolved simultaneously with the enemy’s Move (see the Clash mechanic). You also have access to Counter Moves. | 1 | 1 | 1 |
| Observative Stance | At the beginning of the round, after all characters have locked in their Stances and Priority decisions, choose 1 target. Reveal the Stance of the target character and if they are using a Priority Move. | 1 | 1 | 1 |

A character can also choose not to take a Stance even if they could. A character that does not have a Stance can choose during their turn if they want to do **2 Movement Actions**, or **both 1 Movement Action and 1 Main Action**. They do not have a Reaction available.

A character that chooses a Stance can’t change or completely lose it during a round, even if they lose access to its Effect by for example becoming Unconscious.

### Movement Action

You move a distance in meters equal to your Movement Range. If you interrupt the movement to use a Main Action, you can’t continue it further afterwards. You need to be able to move in order to use a Movement Action.

Characters can move through ally characters, as long as they don’t end their movement inside other characters. Characters can’t move through enemy characters.

### Move (Main Action)

You use one of your Moves. If the Move costs PP, you need to pay its PP cost in order to use it.

### Disengage (Main Action)

When using Disengage, your Movement Actions do not provoke Opportunity Attacks for the rest of the turn.

### Shove (Main Action)

When using Shove, both you and the target character roll a d20 and add your Attack stats to your rolls. If your result is higher than the target character’s result, they are pushed away from you by a distance in meters equal to the difference in the two results. The direction of this forced movement can be any direction that is not in an upwards angle and where the distance between you and the target does not decrease at any point during the movement. This is interrupted by objects or other characters. To Shove a target, you need to be within 1 meter of the target.

### Pin (Main Action)

When using Pin, both you and the target character roll a d20 and add your Attack stats to your rolls. If your result is higher than the target’s, they are **Pinned Down** by you. If they were already Pinned Down, the action succeeds automatically. You are unable to move as long as you keep imposing Pinned Down on your target. You can stop imposing the Pinned Down condition as a free action whenever you want. To Pin a target, you need to be able to move and you need to be within 1 meter of the target.

When Pinned Down, characters are unable to move and their AoE Moves can only target the characters pinning them. AoE Moves of Pinned Down characters target all characters pinning them down, but do not target any other characters regardless of their range. Pinned characters can still target other characters with their Single-target Moves, but have a Disadvantage (-4) to their Accuracy when doing so.

***Notice** that due to the pinned and the pinning character being unable to move, Moves have an Advantage (+4) to Accuracy when made against them.*

Characters stop imposing Pinned Down if they are more than 1 meter away from them or are unable to move due to any other reason than imposing the Pinned Down condition. A Shove action performed while Pinned Down is performed against all pinning characters simultaneously. In the Shove action, the pinned character makes one roll of **d20 \+ Attack** and succeeds only if their result is the highest compared to the results of all of the characters being shoved. If this happens, the Pinned Down condition is removed and the effects of Shove are applied to each individual target according to their individual results and in the order decided by the shoving character.

### Item Interaction (Main Action)

Performing an Item Interaction like consuming a consumable item during battle is a Main Action and therefore prevents you from using a Move during your turn.

A character that is unable to move needs to succeed on a Trickery test against a DC of 25 in order to successfully perform the Item Interaction. If they fail, the Item Interaction fails and the Main Action is wasted.

### Opportunity Attacks (Reaction)

If an enemy character within 1 meter of you uses a Movement Action in an attempt to get away from you, you can immediately perform a free Melee “Basic Attack” against them. To perform an Opportunity Attack, you need to be able to move.

### Shielding An Ally (Reaction)

If an ally character near you is targeted by a Move (or forced movement from a Shove) from an enemy character and you could reach the ally character using a Movement Action, you can perform a free Movement Action to move to the ally character and replace them as the target of the Move. If the Move is Single-target, the To-Hit test is skipped and the Move hits you automatically. If the Move is AoE, both you and the ally character are hit by the Move but the ally character gets an Advantage (+4) to their Defense Power against the Move.

You only need to touch the ally character to provide the effect. Neither you nor the ally character can be targeted with further Shielding An Ally actions during the round. To perform a Shielding An Ally reaction, you need to be able to move.

### Other interactions during combat

The Movement Action or Main Action costs of other types of interactions performed during battle are decided by the game master.

Generally, characters talking to each other does not have a cost defined to it by the rules, but the game master might want to limit the amount of time available for talking during combat situations.

## Standard effects {#standard-effects}

When converting Moves to be used in the ruleset, the chances of applying standard effects are kept unchanged. These chances are handled by using Reliability Tests (d20 \+ Chance Penalty ≥ 1).

***For example**, The Move “Volt Tackle” has a 10% chance of applying Paralysis to the target. This is resolved using a Reliability Test where the Chance Penalty is \-18. Therefore, the final formula for the test is d20 \- 18 ≥ 1\. This chance is not affected by the stats of the user or the target.*

### Buffs and debuffs

Conversion of buffs and debuffs from official sources is done so that “one step” refers to a Half Advantage (+2). The maximum amount of steps a buff can have is 6 (+12 modifier). Likewise, the maximum amount of steps a debuff can have is 6 (-12 modifier).

As an exception, in the case of Evasion buffs and debuffs “one step” refers to an Advantage (+4) instead of the normal Half Advantage (+2).

Buffs and debuffs are not tracked individually. This means that if there are multiple buffs and/or debuffs affecting a single stat, they are simply summed together into one buff with multiple steps and the original sources are forgotten. The total sums are still referred to as buffs or debuffs depending on if they are positive or negative in value. A buff or debuff that is 0 is removed.

To make it easier to keep track of things during a game, there are a couple of places where buffs and debuffs don’t apply:

- Initiatives and the rolls for determining it.  
- Move distances and radiuses.  
- Maximum or current PP.

### Status Conditions

Status Conditions are temporary harmful conditions caused by some Moves. Their effects range from damaging to immobilizing the affected character.

**Basic Status Conditions list**

| Name | Effect |
| :---- | :---- |
| Burn | Inflicts 3 True Damage at the end of every turn of the affected character and reduces the Attack Power of the affected character’s Physical Moves by 4\. Can’t affect characters with Fire-type. |
| Freeze | The affected character is considered Unconscious. If they are damaged, the condition ends. The test for removing this condition always has a difficulty of 6+. Can’t affect characters with Ice-type.*(The Speed and Evasion of an Unconscious character are 0, and Moves made against them have an Advantage (+4) to Accuracy.)* |
| Paralysis | Reduces the affected character’s Speed by 4\. If the character uses a Move on their turn that is not “Basic attack”, they roll a d6. If the result of this roll is 1 or 2, the character’s turn ends and any PP required for the attempted Move is spent. Can’t affect characters with Electric-type. |
| Poison | Inflicts 2 True Damage at the end of every turn of the affected character. The test for removing this condition always has a difficulty of 6+. Can’t affect characters with Poison-type or Steel-type. |
| Badly poisoned | Inflicts 1 True Damage at the end of every turn of the affected character. The test for removing this condition always has a difficulty of 6+. The amount of damage is increased by 1 after every test of removing the condition. Can’t affect characters with Poison-type or Steel-type. |
| Sleep | The affected character is considered Unconscious. If they are damaged, the condition ends. *(The Speed and Evasion of an Unconscious character are 0, and Moves made against them have an Advantage (+4) to Accuracy.)* |
| Flinch | The affected character’s next turn is skipped. This Status Condition is always removed at the end of a round. |

If a character is given a Status Condition that they already have, the previous one is removed. This means that adding an overlapping Status Condition only resets the difficulty of removing the condition.

### Turn-End Decay

At the end of a character’s turn, all buffs, debuffs and Status Conditions affecting them experience Turn-End Decay. This means that they are reduced and/or removed. The rules of Turn-End Decay are different for buffs and debuffs compared to Status Conditions.

Turn-End Decay of **buffs and debuffs** is handled by reducing them by 2 (one step). Turn-End Decay is skipped on the turn a buff or debuff is initially applied (gained from 0, or flipped between a buff and a debuff). Increasing an already existing buff or debuff does not prevent Turn-End Decay at the end of that turn.

Turn-End Decay of **Status Conditions** is handled by rolling a d6 for each Status Condition in an attempt to remove it. If the result from the roll is 6+, the condition ends. The difficulty of this roll is reduced by 1 each time the removal of the condition has been attempted unsuccessfully. Any effects of a Status Condition that trigger at the end of the affected character’s turn are applied after the test of removing the Status Condition has been attempted, and such effects are not applied if the test has been successful.

### Maintaining buffs and debuffs

Characters can pay PP to prevent any buffs affecting them from decaying through Turn-End Decay by paying 1 PP. This cost has to be paid separately for each maintained buff and prevents a single occurrence of Turn-End Decay.

Characters can also pay 1 PP to prevent any debuffs affecting enemies within 1 meter of them from decaying through Turn-End Decay. This cost has to be paid separately for each maintained debuff and prevents a single occurrence of Turn-End Decay. The decisions to maintain debuffs affecting enemy characters are done as the Turn-End Decays of the debuffs happen, so at the end of the affected enemy characters’ turns. This means that the enemy character can try to take distance from any characters that could maintain their debuffs before the Turn-End Decay happens.

## Health and recovery {#health-and-recovery}

### Fainting, Unconsciousness and death

When a character’s current Health Points (HP) have been reduced to 0, they faint and become **Unconscious** until their HP is no longer 0\.

An Unconscious character can’t talk, is unable to move, has both Speed and Evasion of 0 (they do not perform Evasion rolls), can’t choose Stances and their turns are skipped in a battle.

Any further damage that a character receives after their HP has been reduced to 0 is tracked as Severe Damage. If a character accumulates Severe Damage that exceeds either 10 or their Max HP (whichever is higher), the character dies.

### Rest and recovery

To recover lost HP and to recover PP, characters can perform either a Short Rest or a Long Rest. Multiple rests can be performed in a row.

**Short Rest** consists of 20 minutes of light activities (or sleep). It restores lost HP equal to **(Health \* 2\) \- accumulated Severe Damage**. If the result of the calculation is equal to or less than 0, damage is not healed from the character.

**Long Rest** consists of 8 hours of sleep. It restores all lost HP and heals Severe Damage equal to the character’s **Health**. It also restores all used PP. If the sleep is interrupted for a short period of time, the timer is also interrupted but the rest can be continued later. A character performing a Long Rest is always counted as healing damage from themselves as if they were having consecutive Short Rests, so if their rest is interrupted by a battle, damage is immediately healed from them according to the duration of the rest that they already got.

Being unconscious counts as sleeping and therefore as resting.

### Starvation and Sleep Deprivation

Characters need to eat **one meal per day** and if they don’t, they are considered to be **Starving**. Characters also need to sleep at least **6 hours per day** and if they don’t, they are considered to be **Sleep Deprived**. Both of these conditions are tracked separately, but added together when resolving their consequences. The conditions are tracked as “days spent Starving or Sleep Deprived”. What counts as a “day” of not eating or sleeping enough can be solved by asking: “did the characters eat or sleep enough yesterday?”

***For example**, Eevee did not sleep well last night and had only 4 hours of sleep. This is thought to have been “yesterday” and therefore results in one day of Sleep Deprivation. The night before that Eevee did sleep a good 8 hours and a lot of it happened after the clock hit 00:00, but this is still thought to have been “two days ago”.*

Characters’ current and maximum HP and PP are reduced by 2 for each day spent Starving or Sleep Deprived. If their maximum HP is already at 0, the reduction is applied as Severe Damage instead.

If a character has a maximum PP of 0, their Movement Range is halved (rounded up) and they get a Disadvantage (-4) to all their stats.

Eating and sleeping reduces the tracked amount of days spent Starving or Sleep Deprived, and restores missing maximum HP and PP. The strength of these effects are decided by the game master based on the quality of the food and rest.

Some Pokémon species fare better without eating or sleeping than others. The game master can therefore decide to give some species exceptions to these rules.

## Other mechanics {#other-mechanics}

### Fate Points

Fate Points are used to overcome unfortunate moments where it matters the most. A Fate Point can be expended to grant any single player one reroll to any of their d20 dice rolls. The decision to use a Fate Point for a test can be made after knowing the end result of the test. Multiple Fate Points can be used for a single roll.

Player characters start their journeys with 0 Fate Points and gain a new Fate Point at the beginning of every session. Fate Points can also be given to players by the game master as rewards for exceptional roleplaying. The maximum number of unspent Fate Points a player character can have is 4\.

### Clash

Clashes happen when two characters use Moves against each other simultaneously. This can happen for example when characters use the Counter Stance. In a Clash, both characters use their Moves against each other normally, but the damage and any other effects from the Moves are applied only after both Moves have been resolved. This means that both of the involved characters can end up fainting simultaneously.

In a Clash, Melee Single-target Moves hit their targets automatically.

### Difficult Terrain

Using a Movement Action to move through designated Difficult Terrain (like water or deep snow) doubles the movement cost, effectively halving a character's Movement Range while inside the zone (rounded up).

Pokémon are completely immune to Difficult Terrain matching their innate elemental typing (for example, Water-type Pokémon move normally in water and Ice-type Pokémon move normally through deep snow). Characters capable of flight ignore all ground-based Difficult Terrain entirely.

### Hazardous Terrain (new rule)

Hazardous Terrains are areas where the conditions are too hostile towards most characters to journey through them unscathed.

Hazardous Terrains cause True Damage to characters who spend time inside them. The amount of this damage is determined using a test of Special defense, where the result determines the damage based on the severity of the Hazardous Terrain. There are three possible severities: **Harmful**, **Dangerous** and **Deadly**.

**Severities of Hazardous Terrain**

| Severity | True Damage on a result of 0-19 (Full) | True Damage on a result of 20-29 (Half) | True Damage on a result above 30 (Minimal) |
| :---- | :---- | :---- | :---- |
| Harmful | 4 | 2 | 0 |
| Dangerous | 8 | 4 | 1 |
| Deadly | 16 | 8 | 2 |

The test timer for when the test is made has two options: **Slow** and **Instant**. Slow means that the test is performed after every full hour spent inside the area. Instant means that the test is performed when a character enters the area and after every full turn (6 seconds) spent inside the area.

Each Hazardous Terrain also has a type. Despite the damage caused by Hazardous Terrains being True Damage, the Resistances and Weaknesses of characters are applied to the damage. Flying characters are also not affected by ground-based Hazardous Terrain.

***For example**, Hazardous Terrain based on extreme cold can vary between “Harmful” and “Dangerous”, has the “Ice” type, and its test timer is “Slow”, which means that a test is performed against it after every full hour spent inside the area.*

***For example**, directly touching a lava field is “Deadly”, has the “Fire” type, and its test timer is “Instant”, which means that a test is performed against it when entering the area and after every full turn (6 seconds) spent inside the area.*

Due to the difficulty of reducing damage from Hazardous Terrains, the game master is encouraged to provide especially low-level characters with protective items and other protective means against their effects.

### Stealth and surprising

When moving stealthily, sneaking characters perform a Trickery test, and perceiving characters perform an Awareness test. The results of the tests are compared, and if any of the perceiving characters get a higher result than any of the sneaking characters, they become more aware of the sneaking characters. As with any test, the sneaking characters and the perceiving characters can be given Advantages (+4) or Disadvantages (-4) based on the conditions of the situation they are in. Especially, unsuspecting perceiving characters should be given Disadvantages (-4) to represent the fact that they are not paying proper attention in the moment. Sneaking without any kind of cover or camouflage is generally considered impossible.

Characters caught off-guard by a battle are Surprised for their first round of the battle. Surprised characters can’t choose Stances or use Movement Actions, Main Actions or Reactions. Turns of Surprised characters are skipped.

A character has a Disadvantage (-4) to their Accuracy when using a Move against a character that they can’t see properly. Similarly, a character has Advantage (+4) to their Accuracy when using a Move against a character that can’t see them.

All Moves are considered to be too loud and visible to be performed stealthily, meaning that a hidden character can’t use a Move without being spotted immediately after using the Move. If there is visual cover like heavy smoke cover, a Move might not be visible but the general presence of the user is heard.

### Cover

If a character is considered to be behind Cover that protects them against a Move, for example by being partially hidden by a strong solid environmental obstacle, they get an Advantage (+4) to their Evasion if the Move is Single-target or to their Defense Power if the Move is AoE.

A character behind Total Cover can’t be targeted or hit by a Single-target Move. Additionally, they can’t be damaged or otherwise affected by an AoE Move when there is no direct line of sight to the character from either the user of the Move, or from the center point of the area if the Move has the Ranged Placement Type.

### Restrained

The game master determines when a character is too restrained to move, to use Moves or to talk.

### Falling

A flying character is falling if it is restrained or if its Speed drops to 0\. If a character ends up in a free fall, it is moved towards the ground at the end of each of their turns. On the first turn of free falling, the character’s falling distance is 25 meters per turn, and on every consecutive turn this number is multiplied by 2 until it becomes 200 meters per turn. Falling to the ground deals True Damage equal to the character’s falling speed at the moment when they hit the ground, divided by 5\.

### Jumping

A character can jump half of their Movement Range (rounded down) in meters.

### Suffocating

A character that is unable to breathe is considered to be Suffocating. A Suffocating character becomes Unconscious after not getting air for an amount of rounds (6 seconds) equal to their **Health**. While Unconscious, the character gains 2 Severe Damage after every full minute of not getting air. The game master decides which Pokémon species are able to breathe underwater and are therefore not Suffocating underwater.

## Material for game masters {#material-for-game-masters}

### NPCs

Non-player characters (NPCs) are simplified versions of player characters, but otherwise they work in the same way as player characters.

NPCs can be simplified by giving them general stat values for the three main stat categories (Core, Knowledge and Social), that represent their power level in that stat category. In addition to those stats, they can have Bonus stats based on their profession and exception modifiers to individual stats under the three main categories based on what individual stats they are good or bad at.

Due to there being official values for individual Core stats, it makes sense to combine the general value of the stat category with the official values of the stats to generate their final values. But notice that if the official values are counted on top of the general value of Core, it should be understood as being 5 stronger than what it actually is when compared to the strength of the other general values.

***For example**, an Eevee NPC might have:*

- *Core: 2*  
  - *Health: 2 (core) \+ 6 (official) \= 8*  
  - *Attack: 2 \+ 6 \= 8*  
  - *Defense: 2 \+ 5 \= 7*  
  - *Sp. Atk: 2 \+ 5 \= 7*  
  - *Sp. Def: 2 \+ 7 \= 9*  
  - *Speed: 2 \+ 6 \= 8*  
- *Knowledge: 10*  
- *Social: 7*  
- *“Books” (Bonus stat): 5*  
- *Scientific knowledge (modifier to Knowledge): \+5*  
- *Societal knowledge (modifier to Knowledge): \+5*  
- *Empathy (modifier to Knowledge): \-5*

*In this example, Core 2 and Social 7 are understood as being equivalent in strength due to the official stat values being counted on top of Core and Core being 5 lower than Social.*

Remember also to define the derived combat values.

***For example**, the previously mentioned Eevee NPC would have:*

- *Health Points (HP): 8 (Health) \* 4 \= 32*  
- *Power Points (PP) maximum: (8 (Health) \+ 8 (Attack) \+ 7 (Sp. Atk)) / 2 \= 12*  
- *Movement Range: 8 (Speed) / 2 \= 4 m*

In addition, each NPC has 0-4 Moves in addition to the “Basic attack” Move.

### Encounter balance

Here are suggestions for the general power levels of enemies when building encounters. “General power level” refers to the average value of the Core stats of a character. Encounters built using the reference table are assumed to be difficult, but to end in the victory of the player characters. Players are assumed to be able to fully heal themselves in between encounters. But be careful with calculating stat averages, as a low Attack or Special attack stat might not mean anything for combat balance if the character uses only Moves of a different category.

| 4 player characters | 6 enemies | 4 enemies | 2 enemies | 1 enemy |
| :---- | :---- | :---- | :---- | :---- |
| 5 | \- | 4 | 9 | 10(Has 1 Legendary Action) |
| 10 | 5 | 9 | 14 | 15(Has 1 Legendary Action) |
| 15 | 10 | 14 | 19 | 20(Has 1 Legendary Action) |
| 20 | 15 | 19 | 24 | 25(Has 1 Legendary Action) |

### Legendary Actions

Strong NPCs can be given Legendary Actions to make them capable of fighting multiple player characters on their own. Legendary Actions are “Basic attack” Moves that can only be performed immediately after another character has completed their turn. This means that they are used outside the using character’s own turn. After using, they are refreshed at the start of the using character’s next turn. Legendary Actions do not expend Main Actions or Reactions from the character.

A character can’t use Legendary Actions if they are considered unable to use Reactions.

### Items

To assist with creating items that players can find, buy and use during their adventures, a list of templates for items and their effects has been included in the ruleset. The list includes only templates for items that could be available for purchase in many locations of the game world. Possible game-breaking “legendary” items are not included in the list.

Finding an individual item for sale from a city or town could be a test made using Societal Knowledge and with a Difficulty Class (DC) that scales depending on the item’s price/rarity.

Bonuses provided by items do not decay through Turn-End Decay.

**Availability of items**

| Price | Rarity | Societal Knowledge DC |
| :---- | :---- | :---- |
| Cheap | Always available | Always succeeds |
| Valuable | Common | DC 10 |
| Expensive | Uncommon | DC 15 in a large city / DC 20 in a small town |
| Very expensive | Rare | DC 25 in a large city / DC 30 in a small town |
| Legendary | Unique / Very rare | Not for sale |

**Templates for items**

| Price | Usage | Effect |
| :---- | :---- | :---- |
| Cheap | Consumable (Main Action) | Recover 8 HP |
| Cheap | Consumable (Main Action) | Recover 3 PP |
| Cheap | Consumable (during Short Rest) | During Short Rest, Heal 2 Severe Damage before applying the effects of the Short Rest |
| Cheap | Consumable (Main Action) | Provides \+2 Defense Power against one predefined element for 10 minutes |
| Cheap | Consumable (Main Action) | Remove 1 predefined Status Condition affecting the character |
| Valuable | Consumable (Main Action) | Recover 16 HP |
| Valuable | Consumable (Main Action) | Recover 6 PP |
| Valuable | Consumable (during Short Rest) | Heal 4 Severe Damage before applying the effects of the Short Rest |
| Valuable | Consumable (Main Action) | Provides \+2 for a predefined stat for 10 minutes |
| Valuable | Consumable (Main Action) | Provides \+4 Defense Power against one predefined element for 10 minutes |
| Valuable | Consumable (Main Action) | Remove all Status Conditions affecting the character |
| Valuable | Passive (wearable) | Provides \+1 for a predefined Social stat |
| Expensive | Consumable (Main Action) | Recover 32 HP |
| Expensive | Consumable (Main Action) | Recover 12 PP |
| Expensive | Consumable (during Short Rest) | Heal 8 Severe Damage before applying the effects of the Short Rest |
| Expensive | Consumable (Main Action) | Provides \+4 for a predefined stat for 10 minutes |
| Expensive | Consumable (Main Action) | Provides \+8 Defense Power against one predefined element for 10 minutes |
| Expensive | Passive (wearable) | Provides \+2 for a predefined Social stat or \+1 for other predefined stat |
| Expensive | Passive (wearable) | Provides \+2 Defense Power against one predefined element |
| Expensive | Consumable (reactive) | If the character dies, restore them to 1 less Severe Damage than what is required to kill them |
| Very expensive | Consumable (Main Action) | Recover all HP and all PP |
| Very expensive | Consumable (during Short Rest) | Heal all Severe Damage before applying the effects of the Short Rest |
| Very expensive | Consumable (Main Action) | Provides \+8 for a predefined stat for 10 minutes |
| Very expensive | Consumable (Main Action) | Immunity against one predefined element for 10 minutes |
| Very expensive | Passive (wearable) | Provides \+3 for a predefined Social stat or \+2 for other predefined stat |
| Very expensive | Passive (wearable) | Provides \+4 Defense Power against one predefined element |