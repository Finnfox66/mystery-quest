# Mystery Quest ruleset

TTRPG ruleset for Mystery Dungeon and other Pokémon-only adventures.  
By **u/Finnfox66**, version 0.9.5+

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

[Description	1](#description)

[Core rules	4](#core-rules)

[Building and advancing characters	10](#building-and-advancing-characters)

[Combat tests and Moves	15](#combat-tests-and-moves)

[Rounds, turns and actions	24](#rounds,-turns-and-actions)

[Secondary effects	31](#secondary-effects)

[Health and recovery	34](#health-and-recovery)

[Other mechanics	36](#other-mechanics)

[Material for game masters	40](#material-for-game-masters)

[Example Move conversions	44](#example-move-conversions)

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

### General logic

The purpose of this section is to outline some basic mathematical rules followed by the rules system. However, these rules are also repeated later on in the ruleset every time they become relevant. These rules are:

- In all tests, the comparisons between the rolled value and the target value are made with the logic of “exceeds” instead of “meets or exceeds”, unless otherwise stated.

- All halves are always rounded up, unless otherwise stated.

- If an effect states that it lasts x amount of turns or rounds of combat, the turn or round it was used in is counted as the first one of them, unless otherwise stated.

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
- **Insight** *(Reading emotions & interpreting intentions)*  
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

Descriptions for stat values:

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
- **Base Evasion** \= 12 \+ Speed  
- **Initiative modifier** \= Speed

### Bonus stats

Bonus stats represent custom topics that a character is especially knowledgeable of, and they give their bonus to every test that is about the custom topic. The game master needs to confirm the validity of these custom topics when they are given to characters to prevent them from being too broad. New bonus stats can be added without cost, as they start from a base value of 0\. Bonus stats can only be paired with Knowledge or Social stats. They can never be added to Core stats, nor can multiple Bonus stats be used together on a single test.

***For example**, a Bonus stat with the title of “Cooking” is added to the Knowledge stat “Crafts” when testing a character’s ability to cook a meal, or to “Societal knowledge” when testing a character’s ability to know what kind of food there is available in a city.*

### Tests

All tests made using characters’ stats are resolved by rolling a 20-sided die (d20) and by then adding the character’s stat to the result, plus any bonus stats that apply. The result is then compared to the difficulty of the test, set by the game master. If the result exceeds the difficulty, the test is passed. This difficulty is referred to as the test’s “Difficulty Class” (DC).

**A basic test:**  
d20 \+ Stat value \+ Bonus stat value (if applicable) \> Difficulty Class

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

### Percentage Tests

**Percentage Tests** are used for resolving random chances that are handled using percentage values in the official video games. These include primarily the chances of Moves hitting their targets and causing secondary effects to them.

Like an ordinary test, Percentage Test consists of a roll of d20 and a Difficulty Class (DC). But in a Percentage Test, the DC is 10, and a modifier is applied to the roll based on the percentage chance. The modifier is determined by taking \+10 and reducing it by 1 for each missing full 5% of chance in the official percentage value.

**Percentage Test:**  
d20 \+ modifier \> 10

**Conversion examples for official Accuracy %**

| Official Accuracy % | Modifier | Test |
| :---- | :---- | :---- |
| 100% | \+10 | d20 \+ 10 \> 10 |
| 85% | \+7 | d20 \+ 7 \> 10 |
| 50% | \+0 | d20 \> 10 |
| 30% | \-4 | d20 \- 4 \> 10 |
| 10% | \-8 | d20 \- 8 \> 10 |

### Modifiers

Modifiers are plus or minus values that are added either to the value of a Stat or to the result of a roll directly. The different types of modifiers are **Progress Modifiers**, **buffs/debuffs**, **Advantages/Disadvantages**. However, there are also **other** modifiers that don’t fall into these types.

#### Progress Modifiers

**Progress Modifiers** are accumulating permanent modifiers that are gained by playing sessions. These modifiers represent a character’s experience and what they have learnt during their journey.

#### Buffs and debuffs

**Buffs** and **debuffs** are temporary Core stat modifiers that represent sudden changes in a character’s combat capabilities. They are primarily gained through Moves. Their durations are handled using a Turn-End Decay mechanic (see the “Secondary effects” section).

#### Advantages and Disadvantages

**Advantages** and **Disadvantages** represent the effects of external conditions on a character, for example from the environment or from strong experiences. Many rules in this system utilize Advantages and Disadvantages, but the game master can also give them to players when they are being assisted or hindered by the ongoing conditions.

An Advantage is a \+4 modifier and a Disadvantage is a \-4 modifier. These modifiers stack, meaning that a character can have multiple Advantages or multiple Disadvantages to a test or a stat at the same time.

***For example**, a character that is testing their ability to recall information about a famous historical figure while being inside a library and using its services could be given Advantage (+4) to the test.*

The reason for why Advantages and Disadvantages are handled differently in this game compared to the most popular TTRPGs is that in this ruleset the chances of landing hits on targets are often so high that rerolls and equivalent rules do not modify them in a meaningful way.

#### Other

Modifiers that don’t fall into the named modifier types include for example modifiers tied to specific mechanics (like Percentage Tests, Resistances/Weaknesses and Stances), modifiers gained through item effects and modifiers given by the game master as part of custom special skills.

***For example**, a player character wearing a luxurious cape could be given \+2 to Elegant, or a player character that has a cookbook with them could be given \+4 to “Cooking” Bonus stat.*

***For example**, a character consuming a potion of strength could be given \+2 to their Attack stat for 10 minutes.*

#### Unmodified values

To make it easier to keep track of things during a game, there are a couple of values that modifiers are never applied to:

- Initiatives and the rolls for determining them.  
- Move Ranges and Shape Sizes.  
- Maximum or current PP.

## Building and advancing characters {#building-and-advancing-characters}

When creating a player character, every stat is given a **Base Value** that represents the character’s background and their innate capability with the stat.

The first step is to choose what Pokémon species the character is. Then the Base Values of the Core stats of the character are defined by converting the official Pokémon base stats of the species by dividing them by 10 and rounding to the nearest number.

***For example**, the official base stats of an Eevee are: 55 (HP), 55 (Attack), 50 (Defense), 45 (Sp. Atk), 65 (Sp. Def) and 55 (Speed). These translate to Core stats of 6 (Health), 6 (Attack), 5 (Defense), 5 (Sp. Atk), 7 (Sp. Def) and 6 (Speed).*

The next step is to choose a Base Value Array and allocate its numbers to the character’s Knowledge, Social and Bonus stats, using each number once. Then, all remaining stats with no number allocated to them are given 0 as their base value.

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

To use the official sources to determine which Moves a Pokémon can learn, a character’s official level is determined using the formula **(X \* 1.5) \+ 5**, where X is the total sum of the Progress Modifiers of the character’s Core stats and the final result is rounded up.

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

All player characters can choose 2 Abilities for their characters from the list. The Pokémon-specific Abilities can only be used by the specified Pokémon.

#### Universal & General

- **Specialized:** You gain a \+2 bonus to any one Knowledge, Social, or custom Bonus stat. You can select this Ability multiple times, choosing a different stat each time.  
- **Resourceful:** Your Maximum Power Points (Max PP) increases by 4\.  
- **Secret Power:** You gain a STAB bonus to one additional type.

#### Anatomy & Mobility

- **Flight:** You can fly at your normal Movement Range. You ignore ground-based Difficult and Hazardous Terrain, but fall if you are Restrained or if your Speed drops to 0\.  
- **Aquatic:** You can breathe underwater and move through water without movement penalties.  
- **Burrower:** You can dig and move underground through soft earth or sand using your normal Movement Range.  
- **Wall Climber:** You can climb and move along vertical surfaces and ceilings using your normal Movement Range.  
- **Tiny:** Your Base Evasion increases by 2, but your Max HP is reduced by 4 to a minimum of 1\.  
- **Large:** Your Max HP increases by 12, but your Base Evasion is reduced by 2 to a minimum of 0\.  
- **Long Reach:** The range of your Single-target Melee Moves increases from 1 meter to 5 meters.  
- **Incorporeal:** As a Main Action, you can swap between being ghostly and normal. When you are ghostly, you can move through solid inanimate objects and have Advantage (+4) to hiding, but can’t use Moves or otherwise affect your surroundings.  
- **Mechanical:** You do not need to eat or sleep, but still need to rest to gain benefits of Short or Long Rest.

#### Defense & Resilience

- **Substitute:** The first time you take damage in a combat encounter, that damage is reduced to 0\.  
- **Element Resistant:** When taking this ability, choose one elemental type. You gain Resistance or remove a x2 Type Weakness against that type.  
- **Status Resistant:** When taking this ability, choose one Status Condition. You are immune to that condition.  
- **Climate Adaptability:** You ignore damage and movement penalties caused by environmental weather or extreme hot/cold terrain.

#### Tactical & Utility

- **Technician:** Your "Basic attack" deals 6 \+ d6 damage instead of 4 \+ d4.  
- **Prankster:** Your Status Moves gain the Priority keyword.  
- **Healer:** You always have access to a special Single-target Melee Move called “Heal” that restores an amount of HP to the target equal to two times their Health (Health \* 2). This Move is used as a Main Action and costs 3 PP.  
- **Form Change:** As a Main Action, you can switch to an alternate form, swapping between two forms. Both forms have their own Core stat Base Values, typing, and second Ability (both forms have “Form Change”). Currently lost HP carries over when swapping forms.  
- **Weather Setter:** Once per Long Rest, you can change the local weather in your area to a specific weather condition for 1 hour. The specific weather condition is chosen from Harsh Sunlight, Rain, Sandstorm, Snow and Fog when selecting this Ability.

#### Pokémon-specific

- **Wonder Guard (Shedinja):** Your Max HP becomes 1\. You are immune to all damage not caused by Status Conditions, except from Moves with elemental types you are Weak against. This Ability can’t be combined with the “Tiny” or “Large” Abilities.

### Natures

Natures used in the Pokémon games are not included in this ruleset as the general character customization provides the possibility to customize a character to fit various natures.

### Held Items

Generally, conversions for held items are not provided in this ruleset and the overall advice is to use them sparingly and to modify their triggers and effects heavily if they are added. Some item templates are provided under the “Material for game masters” section.

## Combat tests and Moves {#combat-tests-and-moves}

### Combat tests

In order for a Move to cause damage to its target, it first needs to hit the target by succeeding in a **To-Hit test** and then it needs to overcome the target’s defenses in a **To-Damage test**.

#### To-Hit tests

In a To-Hit test, the attacker resolves their **Accuracy** and the target resolves their **Evasion**. If the attacker’s Accuracy exceeds the target’s Evasion, the Move hits the target. The test is resolved differently for Status Moves compared to Physical/Special (damaging) Moves:

- **Status Moves** use a Percentage Test based purely on the Move’s Accuracy.

- **Damaging Moves** use a modified version of the Percentage Test where the attacker adds in their (Sp.) Attack along with any Accuracy modifiers they have, and the defender uses their Base Evasion together with any Evasion modifiers they have.

**To-Hit test of Status Moves**

| Attacker’s Accuracy | Target’s Evasion |
| :---- | :---- |
| d20 \+ Move’s Accuracy | 10 |

**To-Hit test of damaging Moves**

| Attacker’s Accuracy | Target’s Evasion |
| :---- | :---- |
| d20 \+ Move’s Accuracy \+ (Sp.) Attack \+ Accuracy modifiers | Base Evasion (12 \+ Speed) \+ Evasion modifiers |

***Design note:** Base Evasion uses 12 as a flat base value instead of the more accurate 10 because Moves often have 100% accuracy in the official sources and such chances would make combat too straightforward if given to damaging Moves as is.*

There are also additional rules for **Area of Effect (AoE)** Moves:

- To-hit tests are performed separately for each target.

- Damaging AoE Moves hit their targets even if the To-Hit test fails.

A roll of natural 20 from the Accuracy roll of a damaging Move always hits and is a Critical Hit, and one set of Power Dice is added to the Power of the Move for the attack. Critical Hits are resolved separately for each attack included in a Move and each target of a Move.

#### To-Damage tests

If the Move hits its target and it is damaging, a To-Damage test is made where the attacker resolves their **Attack Power** and the target resolves their **Defense Power**. The amount with which the Attack Power exceeds the Defense Power is dealt to the target as damage. If this damage reduces the target to 0 HP, any excess damage becomes Severe Damage.

**To-Damage test of damaging Moves**

| Attacker’s Attack Power | Target’s Defense Power |
| :---- | :---- |
| Move’s Power \+ (Sp.) Attack \+ Attack Power modifiers | (Sp.) Defense \+ type Resistance/Weakness \+ Defense Power modifiers |

There are also additional rules for both Single-target and Area of Effect (AoE) Moves:

- If the Attack Power of a **Single-target** Move fails to exceed the target’s Defense Power, it still deals 1 damage to the target. This is referred to as **Chip Damage**. Multi-attack Moves can cause Chip Damage only once. AoE Moves can’t cause Chip Damage. Chip Damage is reduced to 0 by Immunities against the Move’s type.

- Only one Attack Power is resolved for an **AoE** Move and this value is applied separately against the Defense Power of each target. If the To-Hit test of an AoE Move failed against a target, the Attack Power is halved (rounded up) against that target.

#### True Damage

Any damage referred to as **True Damage** skips the To-Damage test and is applied to the target as is.

By default, True Damage doesn’t have a type, even if it is caused by a Move that has a type. If True Damage is explicitly mentioned to be of certain type, then it is modified by Resistances/Weaknesses similarly to how they affect normal damage in a To-Damage test, and it is reduced to 0 by Immunities.

#### Tests for applying secondary effects

If Physical or Special Moves have secondary effects in addition to their Power that rely on percentage chances in the official games, Percentage Tests are used to see if those effects are applied.

There are also additional rules for **Area of Effect (AoE)** Moves:

- The tests for applying secondary effects are performed separately for each target.

- If the To-Hit test of an **AoE** Move failed against a target, its secondary effects are not applied to that target.

If necessary, custom tests or conditions can be created when conditions for applying secondary effects do not rely on percentage chances in the official games. In general, some secondary effects and the chances of applying them might not follow any standard patterns in the official games and might therefore require creative freedom during conversion.

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
- **Range**  
- **Accuracy**  
- **Shape** (AoE only)  
- **Shape Size** (AoE only)  
- **Placement Type** (AoE only)  
- **Power** (Physical and Special Moves only)  
- **Effects**  
  - **Secondary effects**  
    - Includes buffs, debuffs and Status Conditions. These are explained in the “Secondary effects” section.  
  - **Other effects**  
    - Other effects and interactions.  
- **Description**  
  - Descriptive text for how the Move appears in the game world. No rules text.

#### PP costs

Power Points are used as a resource for performing powerful Moves. Contrary to the official video game rules, in this ruleset they are a singular pool of points that all Moves take points from. Moves with low official PP values are generally powerful, so they are given high PP costs, and Moves with high official PP values are given low PP costs.

**Conversion table for PP cost**

| Official PP of a Move | Converted PP cost |
| :---- | :---- |
| **5** | **3** |
| **10** | **2** |
| **15** | **1** |
| **20+** | **0** |

#### Power

The Power of a Move is also created differently for **single-target** and **Area of Effect** (AoE) Moves. The Power of a single-target Move consists of a **flat number and a set of dice**, whereas the Power of an AoE Move consists of a roll of **two sets of dice**. The flat value is referred to as “**Power Value**” and the set of dice is referred to as “**Power Dice**”. Both of these are converted from the official base Power value by dividing it by 10 and rounding up to the nearest number that can be represented by commonly available dice.

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

***For example:** The Move “Hyper Beam” has a Power of 150 in the official video games, so its Power is 16 \+ d10 \+ d6 in this ruleset. If it were an AoE Move, its Power would have been 2d10 \+ 2d6. If the user is of the Normal type similarly to the Move, the Power is increased by an additional d10 \+ d6 due to the STAB bonus.*

If the Move is of the same type as the character, one set of Power Dice is added to the Move’s Power. This is known as the **STAB bonus**.

If a Move states that its Power is halved, doubled or otherwise modified under certain conditions (like “Solar Beam” and “Rollout”), these modifications are applied to the Move’s total Power after the Power Dice have been rolled and summed together with the Power Value.

A roll of d2 can be made for example by rolling d6 and treating 1-3 as a 1 and 4-6 as a 2\.

#### Accuracy

The Move’s Accuracy is its converted Percentage Test modifier.

***For example:** The Move “Hyper Beam” has an Accuracy of 90% in the official video games, so its Accuracy is \+8 in this ruleset.*

#### Melee / Long Range

Whether a Move is Melee or Long Range is determined based on the Move’s official “Makes contact?” information. If the Move officially makes contact, it is a Melee Move. If it doesn’t make contact, it is a Long Range Move. This information is more meaningful for single-target Moves than it is for AoE Moves.

#### Single-target range

The Range of Single-target Melee Moves is **1 meter**. When used during a character’s own turn, Single-target Melee Moves include one **free Movement Action** that has to reach the target. This Movement Action must be used before the Move. Also, the movement provided by the free Movement Action must be performed through the shortest available route to the target (choosing freely between options if there are multiple equally short routes available) and can’t be used to move past the target.

The Range of Single-target Long Range Physical or Special Moves is **20 m \+ 2x (Sp.) Attack** and the Range of Single-target Long Range Status Moves is **15 m**. If a character using a Single-target Long Range Move is within 1 meter of an enemy character, they have a Disadvantage (-4) to their Accuracy.

#### Area of Effect range

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
- **Flared:** A triangular cone expands outward, starting narrow at the user’s shape or base and widening as it travels.  
- **Ranged:** The center point of a uniform circular blast can be freely positioned anywhere that’s within the Move’s Range and that the using character has a line of sight to. The Range of a Physical or Special Ranged AoE Move is **10 m \+ (Sp.) Attack** and the Range of a Status Ranged AoE Move is **15 m**.

If there are multiple options for Placement Type, the used Placement Type needs to be decided while converting the Move, not when it is being used in a game. When calculating Shape Sizes, the final result is rounded up.

The cone shape used in the conversion table refers to a common TTRPG cone shape with width that at any point equals its distance from the point of origin. So a cone with the length of 15 m is also 15 m wide at the end of it.

An AoE Move does not affect the user of the Move unless the user wants it to.

#### Additional keywords

| Keyword | Effect |
| :---- | :---- |
| **Counter** | Counter Moves have specific triggers for when they can be used, for example some form of activity performed by enemy characters. These triggers and therefore also the Counter Moves themselves can happen outside of the using character’s turn. Counter Moves are restricted in their use as they can only be used when the user has the Counter Stance and when the trigger of the Move occurs. Using a Counter Move requires and expends the Move’s PP cost and the user’s Main Action as normal. |
| **Charging** | On the first use of a Charging Move, the Move is charged instead of resolved. On the second use of the Move, the Move is resolved and is no longer charged. The PP cost of the Move is paid on the first use. Using any other Move removes the “charged” state from the Move. The “charged” state is removed in the user’s End Phase if the user has not used the Move during the round, unless the user pays 1 PP to maintain the “charged” state. |
| **Recharging** | After using a Recharging Move, the user has the No Main Actions restriction until their next End Phase. |
| **Condition** | The Move’s effect is resolved as a Status Condition with a removal DC of 10\. |
| **Trapping** | When a Trapping Move hits its target, the target becomes trapped and can’t voluntarily move more than 1 meter away from the position where they were hit. The “trapped” condition is removed from the target when the Trapping Move is no longer in effect or if the target is forcibly moved. |
| **Pledge** | When a character uses a Pledge Move, another character within 1 meter of them can immediately use a Pledge Move to double the original Move’s Power. The second Move does not have any other effect. Using a Pledge Move outside of a character’s turn still requires and expends the Move’s PP cost and the user’s Main Action as normal. |

#### Basic attack

Every character always has access to a Move called a “Basic attack” that is a Single-target Move with PP cost 0, Accuracy \+10, Power 4 \+ d4 (plus 1d4 if STAB applies). The user can freely decide if the Move is a Physical Melee Move (with the Range of 1 m and includes one free Movement Action) or a Special Ranged Move (with the Range of 20 m \+ 2x (Sp.) Attack) when using it. Additionally, the type of the Move can be any one of the using character’s types. This Move is not counted towards how many learnt Moves a character has.

Basic attack replaces low-level Moves with official Power value of 40 like “Tackle” and “Ember”. However, this does not prevent characters from having such Moves in addition to “Basic attack” if they want to get more type coverage.

The “Basic attack” remains unchanged even in scenarios where the using character is using additional weapons like swords to perform the Move, unless the character has custom special rules that doing so will increase the Power. But using a weapon can change the type of the attack.

***For example**, a character wielding a sword could perform their “Basic attack” using the Steel type, and a character wielding a torch could perform their “Basic attack” using the Fire type.*

#### Healing Moves

Healing Moves work similarly to their video game counterparts and their effectiveness is tied to the multiplier value used in the Health to Health Points conversion.

**Conversion table for healing effects**

| Official effect | Converted effect |
| :---- | :---- |
| Restores **100%** of target’s Max HP | Restores all of the target’s lost HP |
| Restores **75%** of target’s Max HP | Restores target’s HP equal to the target’s **Health \* 3** |
| Restores **50%** of target’s Max HP | Restores target’s HP equal to the target’s **Health \* 2** |
| Restores **25%** of target’s Max HP | Restores target’s HP equal to the target’s flat **Health** value |
| Draining attack | Restores user’s HP equal to **half of the final damage dealt** to the target (rounded up) |

#### Multi-attack Moves

Moves with multiple attacks roll their Attack Power only once, but roll their Accuracy separately for each attack. Also, the target character of the Move resolves their Evasion only once. This means that the same damage (user’s Attack Power \- target’s Defense Power) is applied from each attack included in the Move, with the exception of Critical Hits. Also, the chances of applying additional effects are tested separately for each hit.

#### Incompatible Moves

There are some official Moves that should never be included in a tabletop roleplaying game. This includes especially Moves that can violate player agency by affecting characters in potentially degrading ways, like “Charm”. This is because players have more control and creative freedom over how they use their Moves in a tabletop roleplaying game compared to the video games.

The Move “Protect” shouldn’t be included in the game, as it has been replaced with the Protect Stance.

### Intentionally reducing damage

There are two ways for a character to reduce the amount of damage they deal to their target while using a damaging Move: by **preventing Severe Damage** and by **reducing their (Sp.) Attack**.

Intentionally preventing Severe Damage represents a character trying not to exceed the capabilities of the one they are fighting against. This can be practical for example when having a friendly battle between two allied characters. When using this limitation for a Move, the Move does not cause any Severe Damage to its target. The use of this limitation is decided before the damage from the Move is applied. This limitation can only be used with Single-target Moves and can only be used if the target is not already at 0 HP before the damage from the Move is applied.

Intentionally reducing their (Sp.) Attack represents a character holding back their power to use a Move as a careful tool rather than as a strong knock-out punch. When using this limitation for a Move, a character can perform the Move using any (Sp.) Attack value that is below their actual value. The use of this limitation is decided when resolving the Attack Power of the Move. This limitation can be used with any damaging Move.

## Rounds, turns and actions {#rounds,-turns-and-actions}

### Flow of a battle

**At the beginning of a battle**, all characters roll their Initiative, which is **d20 \+ Speed**. The Initiatives of player characters are announced to everyone and written up. The character with the highest Initiative goes first. If two characters have the same Initiative, player characters go first and players can decide among themselves who goes first. Initiative values cannot be lowered voluntarily, but they can be changed through the Reset Stance and temporarily improved through the Quick Stance.

#### Round

**At the beginning of a round**, all characters choose one Stance (or choose not to take one) and choose if they are using a Priority Move or not. Players announce their decisions to everyone. If any other rules or Move effects refer to the “beginning of a round”, they are resolved after the Stance and Priority decisions have been announced.

Characters that have announced themselves to be using Priority Moves gain access to Priority Turns. These turns are played before any normal turns and they are played in the Initiative order of the characters. The Action Phase of a character with a Priority Turn is resolved during the Priority Turn instead of the character’s normal turn, but the End Phase is resolved on the character’s normal turn.

**At the end of a round**, all Stances along with their Effects and the actions they provide are removed from characters.

A single round of combat lasts 6 seconds of in-game time. When a battle has ended, rules and effects with turn-based timing are resolved based on how many seconds have passed. Because there is no turn order outside of combat, turns and rounds are interchangeable outside of combat and both one turn and one round correspond to 6 seconds of in-game time.

#### Character’s turn

**Action Phase:** During their turn, characters can use Movement Actions, and a Main Action (such as a Move) if their Stance allows them to do so.

A character using a Priority Turn must use a Priority Move as part of their Action Phase. If the character is unable to use the required Priority Move, their Priority Turn is skipped along with the Action Phase. If a character is not using a Priority Turn and is playing their turn normally, they can still choose to use a Priority Move during their turn without its Priority. In such a case, the Move is simply not counted as being a Priority Move.

**End Phase:** At the end of their turn, buffs and debuffs affecting characters are reduced through Turn-End Decay and characters can spend PP to prevent it, their Status Conditions inflict their end-of-turn effects, and their attempts to remove Status Conditions are rolled. These mechanics are explained under “Secondary effects”.

**Outside their turn**, characters can use a Reaction if their Stance allows them to do so. Reactions are used as responses to actions performed by other characters. By default, Reactions are resolved before the triggering action is resolved (Counter Stance can create exceptions to this). If a Reaction is performed as a response to a Movement Action, the movement is interrupted until the Reaction has been resolved.

### Restrictions

Some effects restrict what a character can do. These restrictions are defined once here and referred to by name in other rules. Restrictions only remove capabilities (with the exception of Immobile, which also affects character’s Speed and Base Evasion), and they never remove the End Phase of a character’s turn.

**Restriction categories**

| Restriction | Effect |
| :---- | :---- |
| **Mute** | The character can’t talk. |
| **Immobile** | The character can’t move on their own. They can’t use Movement Actions, can’t move as part of other actions, can’t perform interactions that require being able to move (such as Pin or Shielding An Ally). Their Speed is 0 and their Base Evasion is 12\. Forced movement like Shove still affects them. If the character is Flying, they fall. |
| **No Reactions** | The character can’t use Reactions. |
| **No Main Actions** | The character can’t use Main Actions. |
| **Turn Skipped** | The character’s Action Phase is skipped. |
| **Incapacitated** | The character can’t act or make decisions. An Incapacitated character has the **Turn Skipped**, **No Main Actions**, **No Reactions**, **Immobile** and **Mute** restrictions. In addition, they can’t choose a Stance and can’t pay PP to maintain buffs, debuffs or “charged” states of Moves |

### Hidden information

The game master generally decides what information to keep hidden and what to reveal to players about decisions made by non-player characters (NPCs) during a battle. The game master is encouraged to use their best practices for this, but these rules can be considered the standard practices for the game:

- Initiatives of NPCs are kept hidden until their turns arrive for the first time.

- Stance and Priority decisions of NPCs are kept hidden until the information is revealed using Observative Stance or by the effects granted by the decisions. In other words, players should be made aware if an ongoing interaction with an NPC is being affected by the NPC’s Stance.

- The accurate remaining HP of NPCs is kept hidden. An NPC with less than half of their HP remaining is considered “Exhausted”, and this information is communicated to the players. As an exception, the accurate remaining HP of NPCs is revealed when Observative Stance is used on them.

- Buffs and debuffs affecting characters are always revealed to all characters that can observe the affected character. Advantages and Disadvantages are revealed to all characters that can observe the source of the modifiers.

Thematically, information about player characters is considered to be hidden from NPCs to the same extent as information about NPCs is hidden from player characters, even if the game master would know the information.

### Stances

Stances represent a character’s focus on achieving something during a battle. They also provide variety to combat. Therefore players should always have access to Stances, but NPC characters can be made to not use Stances if they are considered untrained and act based on their instincts during combat.

Stances determine how many Movement Actions, Main Actions and Reactions a character can use during a round. Each Stance also provides an additional Effect that is applied to the user as long as the Stance remains. Stances are divided into Common Stances and Situational Stances, but this separation exists only for the purpose of making Stance selection more approachable. New players can be encouraged to choose from the Common Stances.

**Common Stances**

| Stance name | Effect | Movement Actions | Main Actions | Reactions |
| :---- | :---- | :---- | :---- | :---- |
| Quick Stance | You have \+4 to Initiative | 1 | 1 | 1 |
| Power Stance | You have \+4 to Attack Power | 1 | 1 | 1 |
| Defensive Stance | You have \+4 to Defense Power | 1 | 1 | 1 |
| Resist Stance | New debuffs applied to you are immediately reduced by one stage, and you roll attempts to remove Status Conditions both when you receive them (before they are applied) and in your End Phase. | 1 | 1 | 1 |
| Fleet Stance | You have \+4 to Evasion and Movement Range | 2 | **0** | 1 |

**Situational Stances**

| Stance name | Effect | Movement Actions | Main Actions | Reactions |
| :---- | :---- | :---- | :---- | :---- |
| Protect Stance | You have \+8 to Defense Power | **0** | **0** | **0** |
| Reset Stance | At the beginning of the round, reroll your Initiative value with Advantage (+4). Use the new value as your Initiative value. The new value stays in effect and is not removed with the Stance at the end of the round. | 1 | **0** | 1 |
| Counter Stance | When targeted by a Move from an enemy, you can immediately expend your Main Action (if you have it available) to use a Move against the enemy. The Move is resolved simultaneously with the enemy’s Move (see the Clash mechanic). You also have access to Counter Moves. | 1 | 1 | 1 |
| Observative Stance | At the beginning of the round, after all characters have locked in their Stances and Priority decisions, choose 1 target. Reveal the Stance of the target character and if they are using a Priority Turn. | 1 | 1 | 1 |

A character can also choose not to take a Stance even if they could. A character that does not have a Stance can choose during their turn if they want to do **2 Movement Actions**, or **both 1 Movement Action and 1 Main Action**. They do not have a Reaction available.

A character that chooses a Stance can’t change or completely lose it during a round, even if they lose access to its Effect by for example becoming Unconscious.

### Main Actions and Movement Action

#### Movement Action

You move a distance in meters equal to your Movement Range. If you interrupt the movement to use a Main Action, you can’t continue it further afterwards. You need to be able to move in order to use a Movement Action.

Characters can move through ally characters, as long as they don’t end their movement inside other characters. Characters can’t move through enemy characters.

#### Move (Main Action)

You use one of your Moves. If the Move costs PP, you need to pay its PP cost in order to use it.

#### Disengage (Main Action)

When using Disengage, your Movement Actions do not provoke Opportunity Attacks for the rest of the turn.

#### Shove (Main Action)

When using Shove, both you and the target character roll a d20 and add your Attack to your rolls. If your result is higher than the target character’s result, they are pushed away from you by a distance in meters equal to the difference in the two results. The direction of this forced movement can be any direction that is not in an upwards angle and where the distance between you and the target does not decrease at any point during the movement. This is interrupted by objects or other characters. To Shove a target, you need to be within 1 meter of the target.

#### Pin (Main Action)

When using Pin, both you and the target character roll a d20 and add your Attack to your rolls. If your result is higher than the target’s, they are **Pinned Down** by you. If they were already Pinned Down, the action succeeds automatically. You have the Immobile restriction as long as you keep imposing Pinned Down on your target. You can stop imposing the Pinned Down condition as a free action whenever you want. To Pin a target, you need to be able to move and you need to be within 1 meter of the target.

When Pinned Down, characters have the Immobile restriction and their AoE Moves can only target the characters pinning them. AoE Moves of Pinned Down characters target all characters pinning them down, but do not target any other characters regardless of their range. Pinned characters can still target other characters with their Single-target Moves, but have a Disadvantage (-4) to their Accuracy when doing so.

Characters stop imposing Pinned Down if they are more than 1 meter away from them or are unable to move due to any other reason than imposing the Pinned Down condition. A Shove action performed while Pinned Down is performed against all pinning characters simultaneously. In the Shove action, the pinned character makes one roll of **d20 \+ Attack** and succeeds only if their result exceeds the results of all of the characters being shoved. If this happens, the Pinned Down condition is removed and the effects of Shove are applied to each individual target according to their individual results and in the order decided by the shoving character.

#### Restrict (Main Action)

When using Restrict, both you and the target character roll a d20 and add your Attack to your rolls. If your result is higher than the target character’s result, they gain the No Main Actions and No Reactions restrictions until their next End Phase.

#### Item Interaction (Main Action)

Performing an Item Interaction like consuming a consumable item during battle is a Main Action and therefore prevents you from using a Move during your turn.

A character that is unable to move needs to succeed on a Trickery test against a DC of 25 in order to successfully perform the Item Interaction. If they fail, the Item Interaction fails and the Main Action is wasted.

### Reactions

#### Opportunity Attacks (Reaction)

If an enemy character within 1 meter of you uses a Movement Action in an attempt to get away from you, you can immediately perform a free Melee “Basic Attack” against them. To perform an Opportunity Attack, you need to be able to move.

#### Shielding An Ally (Reaction)

If an ally character near you is targeted by a Move (or forced movement from a Shove) from an enemy character and you could reach the ally character using a Movement Action, you can perform a free Movement Action to move to the ally character and replace them as the target of the Move. This means that the Move targets both characters, whether it is Single-target or Area of Effect, but the To-Hit test of the Move succeeds automatically against you and fails automatically against the protected ally.

You only need to touch the ally character to provide the effect. Neither you nor the ally character can be targeted with further Shielding An Ally actions during the round. To perform a Shielding An Ally reaction, you need to be able to move.

### Other interactions during combat

The Movement Action or Main Action costs of other types of interactions performed during battle are decided by the game master.

Generally, characters talking to each other does not have a cost defined to it by the rules, but the game master might want to limit the amount of time available for talking during combat situations.

## Secondary effects {#secondary-effects}

When converting Moves to be used in the ruleset, the chances of applying secondary effects are kept unchanged. These chances are handled by using Percentage Test (d20 \+ modifier \> 10).

***For example**, The Move “Volt Tackle” has a 10% chance of applying Paralysis to the target. This is resolved using a Percentage Test where the modifier is \-8. Therefore, the final formula for the test is d20 \- 8 \> 10\. This chance is not affected by the stats of the user or the target.*

### Buffs and debuffs

Conversion of buffs and debuffs from official sources is done so that “one stage” refers to the value of 2\. The maximum amount of stages a buff can have is 6 (+12 modifier). Likewise, the maximum amount of stages a debuff can have is 6 (-12 modifier).

As an exception, Accuracy and Evasion buffs and debuffs use stages of 4 instead of the normal 2\.

Buffs and debuffs are not tracked individually. This means that if there are multiple buffs and/or debuffs affecting a single stat, they are simply summed together into one buff with multiple stages and the original sources are forgotten. The total sums are still referred to as buffs or debuffs depending on if they are positive or negative in value. A buff or debuff that is 0 is removed.

#### Turn-End Decay

In the End Phase of a character’s turn, all buffs and debuffs experience Turn-End Decay. It is handled by reducing the buffs and debuffs by one stage (normally 2, but 4 in the case of Accuracy and Evasion). Turn-End Decay is skipped on the turn a buff or debuff is initially applied (gained from 0, or flipped between a buff and a debuff). Increasing an already existing buff or debuff does not prevent Turn-End Decay in the End Phase of that turn.

#### Maintaining buffs and debuffs

Characters can pay PP to prevent any buffs affecting them from decaying through Turn-End Decay by paying 1 PP. This cost has to be paid separately for each maintained buff and prevents a single occurrence of Turn-End Decay.

Characters can also pay 1 PP to prevent any debuffs affecting enemies within 1 meter of them from decaying through Turn-End Decay. This cost has to be paid separately for each maintained debuff and prevents a single occurrence of Turn-End Decay. The decisions to maintain debuffs affecting enemy characters are done as the Turn-End Decays of the debuffs happen, so in the End Phases of the affected enemy character’s turns. This means that the enemy character can try to take distance from any characters that could maintain their debuffs before the Turn-End Decay happens.

### Status Conditions

Status Conditions are temporary harmful special conditions caused by some Moves. Their effects range from damaging to immobilizing the affected character.

In their End Phase, characters can attempt to remove all status conditions affecting them. The test for removing a Status Condition is done for every condition individually, and is done simply by rolling a d20 and comparing it to the DC of removing the condition. If the result of the roll exceeds the DC of removing the condition, the condition is removed from the character.

**The test for removing a Status Condition:**  
d20 \> Difficulty Class

**Basic Status Conditions list**

| Name | DC of removing | Effect |
| :---- | :---- | :---- |
| Burn | 10 | Inflicts 3 True Damage to the affected character at the start of their every End Phase and reduces the Power of their Physical Moves by 4 as long as the Status Condition remains. Can’t affect characters with Fire-type. |
| Freeze | 15 | The affected character has the Incapacitated restriction. If they are damaged, the condition ends. Can’t affect characters with Ice-type. |
| Paralysis | 10 | Reduces the affected character’s Speed by 4\. If the character uses a Move on their turn, they roll a d20. If the result of the roll does not exceed 5, the character’s Action Phase ends and any PP required for the attempted Move is spent. Can’t affect characters with Electric-type. |
| Poison | 15 | Inflicts 2 True Damage to the affected character at the start of their every End Phase. Can’t affect characters with Poison-type or Steel-type. |
| Badly poisoned | 15 | Inflicts 1 True Damage to the affected character at the start of their every End Phase. The amount of damage is increased by 1 after every test of removing the condition. Can’t affect characters with Poison-type or Steel-type. |
| Sleep | 10 | The affected character has the Incapacitated restriction. If they are damaged, the condition ends. |
| Flinch | \- | The affected character has the Turn Skipped restriction. This Status Condition is always removed in the affected character’s End Phase. |

A character can’t be given a Status Condition that they already have.

## Health and recovery {#health-and-recovery}

### Fainting, Unconsciousness and death

When a character’s current Health Points (HP) have been reduced to 0, they faint and become **Unconscious** until their HP is no longer 0\. An Unconscious character has the Incapacitated restriction.

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

Player characters start their journeys with 0 Fate Points and gain a new Fate Point at the beginning of every session. Fate Points can also be given to players by the game master as rewards for exceptional roleplaying. The maximum number of unspent Fate Points a player character can have is 2\.

### Clash

Clashes happen when two characters use Moves against each other simultaneously. This can happen for example when characters use the Counter Stance. In a Clash, both characters use their Moves against each other normally, but the damage and any other effects from the Moves are applied only after both Moves have been resolved. This means that both of the involved characters can end up fainting simultaneously.

In a Clash, Melee Single-target Moves hit their targets automatically, but the rolls of d20 included in To-Hit tests are still made to see if either Move is a Critical Hit.

### Difficult Terrain

Using a Movement Action to move through designated Difficult Terrain (like water or deep snow) doubles the movement cost, effectively halving a character’s Movement Range while inside the zone (rounded up).

Pokémon are completely immune to Difficult Terrain matching their innate elemental typing (for example, Water-type Pokémon move normally in water and Ice-type Pokémon move normally through deep snow). Characters capable of flight ignore all ground-based Difficult Terrain entirely.

### Hazardous Terrain

Hazardous Terrains are areas where the conditions are too hostile towards most characters to journey through them unscathed.

Hazardous Terrains cause True Damage to characters who spend time inside them. The amount of this damage is determined using a test of Special defense, where the result determines the damage based on the severity of the Hazardous Terrain. There are three possible severities: **Harmful**, **Dangerous** and **Deadly**.

**Severities of Hazardous Terrain**

| Severity | True Damage on a result of 0-19 (Full) | True Damage on a result of 20-29 (Half) | True Damage on a result above 30 (Minimal) |
| :---- | :---- | :---- | :---- |
| Harmful | 4 | 2 | 0 |
| Dangerous | 8 | 4 | 1 |
| Deadly | 16 | 8 | 2 |

The test timer for when the test is made has two options: **Slow** and **Instant**. Slow means that the test is performed after every full hour spent inside the area. Instant means that the test is performed when a character enters the area and after every full turn spent inside the area.

Each Hazardous Terrain also has a type. True Damage caused by Hazardous Terrains has the type of the terrain, so it is affected by Resistances, Weaknesses and Immunities. Other modifiers (such as Defense Power modifiers from Stances or items) do not affect this damage. Flying characters are also not affected by ground-based Hazardous Terrain.

***For example**, Hazardous Terrain based on extreme cold can vary between “Harmful” and “Dangerous”, has the “Ice” type, and its test timer is “Slow”, which means that a test is performed against it after every full hour spent inside the area.*

***For example**, directly touching a lava field is “Deadly”, has the “Fire” type, and its test timer is “Instant”, which means that a test is performed against it when entering the area and after every full turn spent inside the area.*

Due to the difficulty of reducing damage from Hazardous Terrains, the game master is encouraged to provide especially low-level characters with protective items and other protective means against their effects.

### Weather conditions

Weather conditions (Harsh Sunlight, Rain, Sandstorm, Snow and Fog) do not have separate mechanics in this ruleset. Just like in the official video games, they exist simply to fulfill prerequisites and conditions written into individual Moves and other effects.

### Stealth and surprising

When moving stealthily, sneaking characters perform a Trickery test, and perceiving characters perform an Awareness test. The results of the tests are compared, and if any of the perceiving characters get a higher result than any of the sneaking characters, they become more aware of the sneaking characters. As with any test, the sneaking characters and the perceiving characters can be given Advantages (+4) or Disadvantages (-4) based on the conditions of the situation they are in. Especially, unsuspecting perceiving characters should be given Disadvantages (-4) to represent the fact that they are not paying proper attention in the moment. Sneaking without any kind of cover or camouflage is generally considered impossible.

Characters caught off-guard by a battle are Surprised for their first round of the battle. A Surprised character is Incapacitated during that round.

A character has a Disadvantage (-4) to their Accuracy when using a Move against a character that they can’t see properly. Similarly, a character has Advantage (+4) to their Accuracy when using a Move against a character that can’t see them.

All Moves are considered to be too loud and visible to be performed stealthily, meaning that a hidden character can’t use a Move without being spotted immediately after using the Move. If there is visual cover like heavy smoke cover, a Move might not be visible but the general presence of the user is heard.

### Cover

If a character is considered to be behind Cover that protects them against a Move, for example by being partially hidden by a strong solid environmental obstacle, they get an Advantage (+4) to their Evasion against the Move.

A character behind Total Cover can’t be targeted or hit by a Single-target Move. Additionally, they can’t be damaged or otherwise affected by an AoE Move when there is no direct line of sight to the character from either the user of the Move, or from the center point of the area if the Move has the Ranged Placement Type.

### Restrained

The game master determines when a character is restrained and has one or more restrictions based on how they have been restrained. Generally, the character has the Immobile restriction if they are unable to move, the No Main Actions restriction if they are unable to use Moves and the Mute restriction if they are unable to talk.

### Falling

A character can safely drop 5 meters during a fall. If they would drop more than that, they enter free fall. If a character is free falling, they are moved towards the ground at the end of their every End Phase. On the first time the character is moved towards the ground, the falling distance is 25 meters, and on every consecutive time this number is multiplied by 2 until it becomes 200 meters. Falling to the ground deals True Damage to the character equal to the full distance they would have fallen during that End Phase if the fall had not been interrupted, divided by 5 and further reduced by the character’s Speed Progress Modifier.

A flying character is falling if they are restrained or if their Speed drops to 0\.

### Jumping

A character can jump half of their Movement Range (rounded down) in meters.

### Suffocating

A character that is unable to breathe is considered to be Suffocating. A Suffocating character becomes Unconscious after not getting air for an amount of rounds (6 seconds) equal to their **Health**. While Unconscious, the character gains 2 Severe Damage after every full minute of not getting air. The game master decides which Pokémon species are able to breathe underwater and are therefore not Suffocating underwater.

## Material for game masters {#material-for-game-masters}

### NPCs

Non-player characters (NPCs) are simplified versions of player characters, but otherwise they work in the same way as player characters.

NPCs can be simplified by giving them **general values** for the three main stat categories (Core, Knowledge and Social), that represent their power level in that stat category. NPCs can also be given **exception modifiers** to individual stats, and Bonus stats, to define their skills more accurately. Exception modifiers can be positive or negative, and are added to the general values when creating the final values for individual stats.

The exception modifiers of the Core stat category can be derived directly from the official species stats by converting them according to the normal rules. However, this means that the strength of the general value of the Core stat category is 5 higher than the strengths of the general values of the other stat categories due to the converted species stats providing large positive exception modifiers.

***For example**, an Eevee NPC might have:*

- *Core: 2*  
  - *Health: 2 (general value) \+ 6 (exception modifier) \= 8*  
  - *Attack: 2 \+ 6 \= 8*  
  - *Defense: 2 \+ 5 \= 7*  
  - *Sp. Atk: 2 \+ 5 \= 7*  
  - *Sp. Def: 2 \+ 7 \= 9*  
  - *Speed: 2 \+ 6 \= 8*  
- *Knowledge: 10*  
  - *Scientific knowledge: 10 (general value) \+ 5 (exception modifier) \= 15*  
  - *Societal knowledge: 10 \+ 5 \= 15*  
  - *Insight: 10 \- 5 \= 5*  
- *Social: 7*  
- *“Books” (Bonus stat): 5*

*In this example, stats that are not included in the list are understood to be using the unmodified general values of their stat category. Also, the general values of Core (2) and Social (7) are understood as being equivalent in strength due to the general value of Core being 5 stronger than the general value of Social.*

Remember also to define the derived combat values.

***For example**, the previously mentioned Eevee NPC would have:*

- *Health Points (HP): 8 (Health) \* 4 \= 32*  
- *Power Points (PP) maximum: (8 (Health) \+ 8 (Attack) \+ 7 (Sp. Atk)) / 2 \= 12*  
- *Movement Range: 8 (Speed) / 2 \= 4 m*  
- *Base Evasion: 12 \+ 8 (Speed) \= 20*

In addition, each NPC has 0-4 Moves in addition to the “Basic attack” Move.

### Encounter balance

Here are suggestions for the general power levels of enemies when building encounters. “General power level” refers to the average value of the Core stats of a character, including both their general values and their exception modifiers. Encounters built using the reference table are assumed to be difficult, but to end in the victory of the player characters. Players are assumed to be able to fully heal themselves in between encounters. But be careful with calculating stat averages, as a low Attack or Special attack stat might not mean anything for combat balance if the character uses only Moves of a different category.

| 4 player characters | 6 enemies | 4 enemies | 2 enemies | 1 enemy |
| :---- | :---- | :---- | :---- | :---- |
| 5 | \- | 4 | 9 | 10(Has 1 Legendary Action) |
| 10 | 5 | 9 | 14 | 15(Has 1 Legendary Action) |
| 15 | 10 | 14 | 19 | 20(Has 1 Legendary Action) |
| 20 | 15 | 19 | 24 | 25(Has 1 Legendary Action) |

#### Legendary Actions

Strong NPCs can be given Legendary Actions to make them capable of fighting multiple player characters on their own. Legendary Actions are “Basic attack” Moves that can only be performed immediately after another character has completed their turn. This means that they are used outside the using character’s own turn. After using, they are refreshed at the start of the using character’s next Action Phase. Legendary Actions do not expend Main Actions or Reactions from the character.

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

## Example Move conversions {#example-move-conversions}

### Physical Moves

#### Quick Attack

**Official:** Normal \| Physical \| Power 40 \| Accuracy 100% \| PP 30 \| Priority \+1 \| Contact

- **Type:** Normal  
- **Keywords:** Single-target, Physical, Melee, Priority  
- **PP cost:** 0  
- **Range:** 1 m  
- **Accuracy:** \+10  
- **Power:** 4 \+ d4

#### Body Slam

**Official:** Normal \| Physical \| Power 85 \| Accuracy 100% \| PP 15 \| 30% paralysis \| Contact

- **Type:** Normal  
- **Keywords:** Single-target, Physical, Melee  
- **PP cost:** 1  
- **Range:** 1 m  
- **Accuracy:** \+10  
- **Power:** 10 \+ d10  
- **Secondary effects:** Has a 30% (-4) chance of applying the Paralysis condition to the target.

#### Iron Head

**Official:** Steel \| Physical \| Power 80 \| Accuracy 100% \| PP 15 \| 30% flinch \| Contact

- **Type:** Steel  
- **Keywords:** Single-target, Physical, Melee  
- **PP cost:** 1  
- **Range:** 1 m  
- **Accuracy:** \+10  
- **Power:** 8 \+ d8  
- **Secondary effects:** Has a 30% (-4) chance of applying the Flinch condition to the target.

#### Crunch

**Official:** Dark \| Physical \| Power 80 \| Accuracy 100% \| PP 15 \| 20% chance to lower target’s Defense \| Contact

- **Type:** Dark  
- **Keywords:** Single-target, Physical, Melee  
- **PP cost:** 1  
- **Range:** 1 m  
- **Accuracy:** \+10  
- **Power:** 8 \+ d8  
- **Secondary effects:** Has a 20% (-6) chance of applying a Defense debuff of one stage (-2 Defense) to the target.

#### Close Combat

**Official:** Fighting \| Physical \| Power 120 \| Accuracy 100% \| PP 5 \| Lowers the user’s Defense and Special Defense by one stage \| Contact

- **Type:** Fighting  
- **Keywords:** Single-target, Physical, Melee  
- **PP cost:** 3  
- **Range:** 1 m  
- **Accuracy:** \+10  
- **Power:** 12 \+ d12  
- **Secondary effects:** Applies a Defense debuff of one stage (-2) and a Special defense debuff of one stage (-2) to the user.

#### Earthquake

**Official:** Ground \| Physical \| Power 100 \| Accuracy 100% \| PP 10 \| Hits all adjacent Pokémon \| No contact

- **Type:** Ground  
- **Keywords:** Area of Effect, Physical, Long Range  
- **PP cost:** 2  
- **Shape:** Blast (small)  
- **Shape Size:** 2 m \+ half the user’s Attack  
- **Placement Type:** Projected  
- **Range:** \-  
- **Accuracy:** \+10  
- **Power:** 2d10

#### Seismic Toss \- indirect conversion

**Official:** Fighting \| Physical \| Power — \| Accuracy 100% \| PP 20 \| Deals damage equal to the user’s level \| Contact

- **Type:** Fighting  
- **Keywords:** Single-target, Physical, Melee  
- **PP cost:** 0  
- **Range:** 1 m  
- **Accuracy:** \+10  
- **Power:** Equal to half the user’s level (rounded up), to a maximum of 20\.

#### Fly \- indirect conversion

**Official:** Flying \| Physical \| Power 90 \| Accuracy 95% \| PP 15 \| User flies up on the first turn, dodging attacks, and strikes on the second \| Contact

- **Type:** Flying  
- **Keywords:** Single-target, Physical, Melee, Charging  
- **PP cost:** 1  
- **Range:** 1 m  
- **Accuracy:** \+9  
- **Power:** 10 \+ d10  
- **Other effects:** On the turn the Move is charged, the user has Advantage (+4) to Evasion. From the moment the Move is charged to the moment it is used, the user has the Flight Ability if they don’t have it already.

### Special Moves

#### Surf

**Official:** Water \| Special \| Power 90 \| Accuracy 100% \| PP 15 \| Hits all adjacent Pokémon \| No contact

- **Type:** Water  
- **Keywords:** Area of Effect, Special, Long Range  
- **PP cost:** 1  
- **Shape:** Blast (small)  
- **Shape Size:** 2 m \+ half the user’s Special attack  
- **Placement Type:** Projected  
- **Range:** \-  
- **Accuracy:** \+10  
- **Power:** 2d10

#### Thunderbolt

**Official:** Electric \| Special \| Power 90 \| Accuracy 100% \| PP 15 \| 10% paralysis \| No contact

- **Type:** Electric  
- **Keywords:** Single-target, Special, Long Range  
- **PP cost:** 1  
- **Range:** 20 m \+ 2x the user’s Special attack  
- **Accuracy:** \+10  
- **Power:** 10 \+ d10  
- **Secondary effects:** Has a 10% (-8) chance of applying the Paralysis condition to the target.

#### Thunder

**Official:** Electric \| Special \| Power 110 \| Accuracy 70% \| PP 10 \| 10% paralysis \| No contact \| Accuracy 100% in Rain, 50% in Harsh Sunlight

- **Type:** Electric  
- **Keywords:** Single-target, Special, Long Range  
- **PP cost:** 2  
- **Range:** 20 m \+ 2x the user’s Special attack  
- **Accuracy:** \+4  
- **Power:** 12 \+ d12  
- **Secondary effects:** Has a 10% (-8) chance of applying the Paralysis condition to the target.  
- **Other effects:** During Rain, the Move’s Accuracy modifier is \+10. During Harsh Sunlight, the Move’s Accuracy modifier is \+0.

#### Flamethrower

**Official:** Fire \| Special \| Power 90 \| Accuracy 100% \| PP 15 \| 10% burn \| No contact

- **Type:** Fire  
- **Keywords:** Single-target, Special, Long Range  
- **PP cost:** 1  
- **Range:** 20 m \+ 2x the user’s Special attack  
- **Accuracy:** \+10  
- **Power:** 10 \+ d10  
- **Secondary effects:** Has a 10% (-8) chance of applying the Burn condition to the target.

#### Ice Beam

**Official:** Ice \| Special \| Power 90 \| Accuracy 100% \| PP 10 \| 10% freeze \| No contact

- **Type:** Ice  
- **Keywords:** Single-target, Special, Long Range  
- **PP cost:** 2  
- **Range:** 20 m \+ 2x the user’s Special attack  
- **Accuracy:** \+10  
- **Power:** 10 \+ d10  
- **Secondary effects:** Has a 10% (-8) chance of applying the Freeze condition to the target.

#### Blizzard

**Official:** Ice \| Special \| Power 110 \| Accuracy 70% \| PP 5 \| 10% freeze \| Hits all foes \| No contact \| Never misses during Snow

- **Type:** Ice  
- **Keywords:** Area of Effect, Special, Long Range  
- **PP cost:** 3  
- **Shape:** Blast (large)  
- **Shape Size:** 4 m \+ the user’s Special attack  
- **Placement Type:** Ranged  
- **Range:** 10 m \+ the user’s Special attack  
- **Accuracy:** \+4  
- **Power:** 2d12  
- **Secondary effects:** Has a 10% (-8) chance of applying the Freeze condition to the target.  
- **Other effects:** During Snow, the To-Hit test succeeds automatically against all targets.

#### Hyper Beam

**Official:** Normal \| Special \| Power 150 \| Accuracy 90% \| PP 5 \| User must recharge on the following turn \| No contact

- **Type:** Normal  
- **Keywords:** Single-target, Special, Long Range, Recharging  
- **PP cost:** 3  
- **Range:** 20 m \+ 2x the user’s Special attack  
- **Accuracy:** \+8  
- **Power:** 16 \+ d10 \+ d6

#### Solar Beam

**Official:** Grass \| Special \| Power 125 \| Accuracy 100% \| PP 10 \| Charges on the first turn, attacks on the second \| No contact \| Instant in Harsh Sunlight; damage halved in other weather

- **Type:** Grass  
- **Keywords:** Single-target, Special, Long Range, Charging  
- **PP cost:** 2  
- **Range:** 20 m \+ 2x the user’s Special attack  
- **Accuracy:** \+10  
- **Power:** 14 \+ d10 \+ d4  
- **Other effects:** Does not need to be charged during Harsh Sunlight weather condition. During Rain, Sandstorm, Snow or Fog weather conditions, the Move’s Power is halved.

### Status Moves

#### Thunder Wave

**Official:** Electric \| Status \| Accuracy 90% \| PP 20 \| Paralyzes the target \| No contact

- **Type:** Electric  
- **Keywords:** Single-target, Status, Long Range  
- **PP cost:** 0  
- **Range:** 15 m  
- **Accuracy:** \+8  
- **Other effects:** Applies the Paralysis condition to the target.

#### Will-O-Wisp

**Official:** Fire \| Status \| Accuracy 85% \| PP 15 \| Burns the target \| No contact

- **Type:** Fire  
- **Keywords:** Single-target, Status, Long Range  
- **PP cost:** 1  
- **Range:** 15 m  
- **Accuracy:** \+7  
- **Other effects:** Applies the Burn condition to the target.

#### Toxic

**Official:** Poison \| Status \| Accuracy 90% \| PP 10 \| Badly poisons the target \| No contact \| Never misses when used by a Poison-type

- **Type:** Poison  
- **Keywords:** Single-target, Status, Long Range  
- **PP cost:** 2  
- **Range:** 15 m  
- **Accuracy:** \+8  
- **Other effects:** Applies the Badly poisoned condition to the target. If the user is a Poison-type character, the To-Hit test succeeds automatically.

#### Swords Dance

**Official:** Normal \| Status \| PP 20 \| Raises the user’s Attack by two stages \| Self

- **Type:** Normal  
- **Keywords:** Single-target (self), Status  
- **PP cost:** 0  
- **Range:** Self  
- **Other effects:** Applies an Attack buff of two stages (+4) to the user.

#### Recover

**Official:** Normal \| Status \| PP 10 \| Restores 50% of the user’s max HP \| Self

- **Type:** Normal  
- **Keywords:** Single-target (self), Status  
- **PP cost:** 2  
- **Range:** Self  
- **Other effects:** Restores HP equal to the user’s Health \* 2\.

#### Rain Dance

**Official:** Water \| Status \| PP 5 \| Sets Rain \| Entire field

- **Type:** Water  
- **Keywords:** Area of Effect, Status, Long Range  
- **PP cost:** 3  
- **Shape:** Blast (all)  
- **Shape Size:** 50 m (encounter-wide)  
- **Placement Type:** Radial  
- **Range:** \-  
- **Accuracy:** Hits automatically  
- **Other effects:** Sets the Rain weather condition in the area. The weather condition lasts for 1 hour and removes all previous weather conditions from the area.

#### Sunny Day

**Official:** Fire \| Status \| PP 5 \| Sets Harsh Sunlight \| Entire field

- **Type:** Fire  
- **Keywords:** Area of Effect, Status, Long Range  
- **PP cost:** 3  
- **Shape:** Blast (all)  
- **Shape Size:** 50 m (encounter-wide)  
- **Placement Type:** Radial  
- **Range:** \-  
- **Accuracy:** Hits automatically  
- **Other effects:** Sets the Harsh Sunlight weather condition in the area. The weather condition lasts for 1 hour and removes all previous weather conditions from the area.

#### Trick Room \- indirect conversion

**Official:** Psychic \| Status \| Power — \| Accuracy — \| PP 5 \| Priority \-7 \| Reverses the turn order within each priority bracket so slower Pokémon act first for 5 turns (using it counts as the first); using it again while its effect is active ends the effect \| Entire field

- **Type:** Psychic  
- **Keywords:** Area of Effect, Status, Long Range, Counter  
- **PP cost:** 3  
- **Shape:** Blast (all)  
- **Shape Size:** 50 m (encounter-wide)  
- **Placement Type:** Radial  
- **Range:** \-  
- **Accuracy:** Hits automatically  
- **Other effects:** When a round starts, this Move can be used to reverse the turn order. Initiative modifiers of affected characters are ignored while the effect lasts. Priority Turns are still taken before normal turns, but their order is also reversed. The effect lasts for 5 rounds. If this Move is used while its effect is active, the effect ends instead.

#### Stealth Rock \- indirect conversion

**Official:** Rock \| Status \| Power — \| Accuracy — \| PP 20 \| Sets a hazard on the target field; Pokémon switching in take damage equal to 12.5% of their max HP, multiplied by Rock’s type effectiveness \| No contact

- **Type:** Rock  
- **Keywords:** Area of Effect, Status, Long Range  
- **PP cost:** 0  
- **Shape:** Blast (small)  
- **Shape Size:** 5 m  
- **Placement Type:** Ranged  
- **Range:** 15 m  
- **Accuracy:** Hits automatically  
- **Other effects:** Creates an area that lasts for 5 rounds. A character that enters the area or ends their turn inside the area takes 4 True Damage. A character can be affected by this Move only once per turn.

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAloAAANUCAYAAABrJoMuAACAAElEQVR4Xuy9B7gURfq+/VMUBURQQVSUYAYxIWZdhTWhK2sABRRzQsxpRV3jsq6KYhZUzDkr5gC6ZlAUIyIKgoKAYs669X13+X/79BRzzsycntDnzHNfV13dXd3T3dOh6um33nrr/5wQQgghhCgJ/xdmCCGEEEKI4iChJYQQQghRIiS0hBBCCCFKhISWEEIIIUSJkNASQgghhCgRElpCCCGEECVCQksIIYQQokRIaAkhhBBClAgJLSGEEEKIEiGhJYQQQghRIiS0hBBCCCFKhISWEEIIIUSJkNASQgghhCgRElpCCCGEECWiwQqtU0891XXr1k2pnun8888PL2nZOProoxc4H6XipY4dO7opU6aEl10IIUQFaJBCC5F15513htmiAK6++uqKiC1E1iOPPBJmiyKz4447uokTJ4bZQgghykyDFFqieLz77rthlmgkfPvtt2FWVdOiRQu3xBJL+PmZM2e6iy66yP3f//2fe+2113zeRx995J544gl3++23u8suu8zn8UFy3nnnue+++84v85tnnnnGz99///3u8ssvj7Y799xz3S+//OIuuOACn/fHH3/4PJgxY4Z766233IgRI9ykSZP8cW+77Ta/TgjRuJHQqnIktES18Oabb3qBA0yx+NkyQqhly5ZeBJ1xxhnuuuuui7a76667vEh7+umn3SuvvOJWXXVVL6x22WUX9+qrr0bbXXLJJa5Vq1Z+uw8++MDnTZ061S255JLu0UcfdaNHj3adO3d2X375pV/34Ycf/nliQohGjYRWlSOhJaqBIUOGuEUXXdQttNBC7tdff80QXLDrrrtG82yz6aabZqxfbLHF3NChQ/08/O1vf3PLL7+894ebPn263+69995zPXr08Ovffvttn8d6EkILDj30UD+1/QohGj9626scCS1RDZiw+d///ucGDBjgrr/+ep9n+c2bN3c333xztO3w4cMzfofQsmX839jP2muv7UWZ5YdCyyxX//3vfxcQWv369fNCTQjR+JHQqnIktIQQQojSIaFV5UhoCSGEEKUjkdCimz69bp566qlwlc//6quvMvIuvvjijGVReeoSWtxDS+PGjQtXi0ZOr1693EMPPRRm1wnNaWmkadOmvhnvsMMOC1dFzX9x7rvvvjArFRx++OEZTZ5x3njjjTArgu0XWWQR36syzk8//eSWW265jDy48cYbwywhRD1Z8G0tgL///e/upJNOcm3btnW33HKLz/v888/9lBebnje1Ydv9+OOPUd68efOiebAu1aJ01CW0Xn75ZX8fmU6bNi1cnXF/7H5CKLBFwyQUWpdeeqk77bTTfOX8+uuv+7yddtrJPffcc35bQGjhbE4YgzSB0AITKAcddJAvv4D/cPDBB7vvv//e/fWvf/XPLz5bfEC++OKLrnfv3n67NHxsILRIxpVXXhn5fa2yyiruwAMP9PP8j7lz50bb8f9//vnn6P+z3uLo7b333v4aELpizz339OEs2O63335zxx13nNt22239doMHD472J4TIn8RCa6uttvKOosSWiTuGkuiZQwGG8ylfSO3bt/fCinXPP/+869Kli1t99dXdnDlzfN7vv/8e/RaRxgsPY8eOjR9WFJG6hBZYwUxMICqepZde2r3wwgtu8cUX9/kU4Outt553BGbd119/7Y499ljfrR0mTJgQ7Us0LOJC68wzz3Qrrriif1/POecc165dO7fvvvtGYpzKmGmaLVqEaEBA0fvQhCLiifNebbXV/H+x9wHRAs2aNfPiIy0gstZZZx13yCGH+GUELWEpcLY/+eSTfV78fuC0b3kkBOagQYN8ngknnPLtPd9yyy2j7RHMlOmU40KI+pNYaPGi84UL9rLaS00XaUQYX0uYtflSpMJmHcuINHrpmNCK/3bWrFnujjvuiI4lSkO+Qgso4FlGaBEbyNZj0eTekijY4/GJRMMlLrReeuklP7wPPfP4SOL+Uglzv+1e/+c//4mElvWySwtm0YKNN97Y/etf//Ji6+OPP/bnb0Jr8uTJfhsTWkcddZT/L8THYttKE7docb78l549e2YILfsIIh6YEf//V1xxhRdRyyyzjF+OCy3KZGCZYZy4p/Pnz/cfTBZbTAhRGIlqw9mzZ7tvvvkmI+/BBx/0JmcsGrzMiCgKYwICkoB1mLE/++wzH6EZSxYCjMKCedYztaapxx57LH4IUURyCS2zTAGF7/jx473Qwq/DrAKAKKY7O2AlIDgkvP/++9E2ovESdwEA3t80Q3lDOVUXZg2y/2LLaYIyNg7/C+zjtzYof/OFaPcQHksIkR+JhJZo+OQSWgaCGosGEB27a9euwRZCCCGECJHQqnLyFVpCCCGE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KmTGjBl+FI40wUgeRx11VJhdMBJaIk1IaAkhRJUxderU1Iks48EHH4xG7qgvEloiTUhoCSFElZE0TlWpSXp+EloiTUhoCSFElZFUyJSapOcnoSXShIRWHvzvf/9zDz30kJJSVaU333wzfBVEIyGpkCk1Sc9PQkukCQmtHPz+++/ugQceCLOFaPQQsLd58+ZhdsH06tXLjRgxwo9mP378eJ/3+eefR+tt8F9gfLo4VJavv/66TyHff/+9fz+N+fPn++msWbP8NPTzmTNnTsZyNZNUyJSapOcnoSXShIRWDjQgqah2mjZtGmYVBELr7LPPdgsttJAXPx07dnR33323a9u2ra8Mb731Vn+MM88806200koZlSzz11xzjRs3bpy76KKLvHWZPIKo9u/f3y2//PJecNl29psTTzzRrb766v4YltepUyfXtWtXN2nSJDd37tzoGNVIUiFTapKen4SWSBMSWkKIOkk61iFCi6bIkSNHug033NALLhNHWKTo0s/8Kqus4n788UefjLDCHT58uFtnnXW89QqBtvvuu/t8BNyRRx7ppkyZ4n/TrFkzN23aNC/M2B95X3/9tVtyySUz9lethNc1bSQ9PwktkSYktIQQdVIMoUWlRzMkAmnVVVf1Q/uQR4gBpksttZT74osv3CKLLOItTwbrLNnyhx9+GM1369bNzy+++OIZ27z33ntu4YUXzsgzofXyyy9XfTNiUiFTapKen4SWSBMSWkKIOkkqtET6SCpkSk3S85PQEmlCQksIUScSWo2PpEKm1CQ9PwktkSYktIQQdVIqoTVx4sRo/i9/+Yv76quvYmuzs9FGG3lfLJGMpEKm1CQ9PwktkSZSIbSefvpp98svv7j3338/6g1EXm1w0j/88EOYLYQoAUmFFj5V22yzjU8GTurGzJkz/XTZZZeN8oBwEHGmT5+esbznnnu6PfbYw/dAhC5durihQ4f6efzCVlttNT/PfrfeeuvodyK5kCk1Sc9PQkukiVQIrR49evg4OzjLmnPrgQceGGxVQ/v27d2nn34aZgshSkBSoZUvDHJsHH300Qs4xsP+++/vWrRo4edHjRrlp6ecckoUhmWnnXZykydPjraH3377LWNZJBcypSbp+UloiTSRCqHFF+/aa6/tmjRpEr1g9BBivnv37u6CCy7wia9X8hBadN1m/o033nCtWrXyIu2Z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+eU+MRBrKLQQXzasDyC0XnrpJXfaaae5Z555xo0dO9bn4xgNCK17773Xz/fr128BoXXAAQf8uaNGhIRWDRJamUholZajjjrKv3/lSPXl/fffX2BfpUjdu3cPD10vJLREmki90KKZzirotdZay1177bVeOCG04PDDD/eDR19//fX+pdpiiy0yhBZNf7vssotbaqml/DKFmgkt1m255ZZuhRVW8OviQmvrrbf2wU75LVa0nj17SmglREKrBgktAZRHjzzySJhdMoYPHx5m5eTVV1/1wqUczJgxw5fzSZHQEmkiFUKrLjbccENvpSo366+/vjv44IPdTjvtFK5qlOy6665u4sSJYXbRIFL/KaecEmYvwOjRo8OsosJYmLlo3rx55BNYChhuigqlLjh+WkYzaNOmTZhVEDTJL7fccr7i4yMpCYwUwYcRI0iEZBvP1FwP0kjc6l5OCvmowl3jyy+/DLNLDh/PSZDQEmki9UJLlA+z6JWCc845J8zKyogRI9x1110XZhcFhm7KR7xgRW3RokWYXRSwVL311lthdlYYESHuf1gJWrdundFBpD4gtB566CF33HHHubPPPtsXNlSC//jHP6JKn+n06dO9MGrbtm2U36pVK7fqqqtG+9p7772j7V9//XU/6DwfRZZHYnxTxBiWcpbpLYxYxFL+9ddfe/GQBgYPHhxmlQWGJMuXQkRZMUl6XAktkSYktEQGNItScRUzFfrljjUn3EfSNGDAgPAwOQn3UYyEv2Eh4JsY7qNc6YQTTghPp14gtFZeeeUoJEtcXG2zzTY+n+apLl26+OZ8rFVYwLD8IbTiFm3WcW5PP/20/z3CmejmuAuY0GL4lvgxgKC0iDKOkxYktGon6XEltESakNASQpQUs2gZDAiPZQsRhVWKChFxHRdHt99+uzvvvPMWEFpm0QLE07bbbhsJh9qElg1av/rqq/t9durUKdpHJZHQqp2kx5XQEmlCQksIUXZoJqyLDz/8MMzKyuzZs8OsBbC4dxZ5P+mAxcVCQqt2kh5XQkukCQktIYSoABJatZP0uBJaIk1IaAkhKsLLL78cZlUVaRNal156aZiVWPDUl6THldASaUJCSwhRETbZZBPvf0VMOyDECBATz3qpsu6YY47x8zizM3/GGWf4ZYbsCguuSZMmZSzDySef7A477DA/T49Eft+1a1e/fPfdd8c3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wqyy8Oabb4ZZC3D//feHWYkZN26cn0poCQ+9JHBSLmbaYostwsPUyTrrrOOmTJmywH6SpKFDhxb0AtG8xcsR7idpWmqppcJD1ckSSyyxwD7Klfr3759XwZQLE1rnnntusOZP3nvvPf/Ft8MOO3gT+5NPPhluksHkyZPdBhtsEGZ7WrZsGWblxS233BJmuY8//tiNGDHC95LEiT9fh9ZJkyaFWRHWEcCgOXXJJZeMln/44QffacDIdsxsedmgyRauvvpq98wzzwRra4d7Xx922WWXMGsBHn744TCrTjp06OCuvfZaP3/DDTcUvbu8sf/++2csP/XUU27FFVfMyCuUfMYzBe7n9ddfX3Dcpddeey1j+ZRTTnGHH364n+ed6tGjh1t66aWj9ccee6y77LLLouVC6NSpkzv//PMTN33Bcsst56cHHXSQn7Zq1cpdc801fqi2pk2bxjetk9tvvz1juXv37n76yiuvZOQbffr08dPdd9/dT+vymdprr73CrEQwvB1IaAlfqZeKZZddNszKCi8hPTZKwZFHHuleeumlMHsBqAwLGRexECh8//GPf4TZWaGizLewLhW9evXyojcJuYQWgjYUF4x5yQDjzP/73//2BfxKK63kl01oLb/88m777bd3Z555pv8dTqdsd+GFF/rtunbt6itq5kmLLbaYF2KtW7f223N9KdgnTpzo86ygNhBaMG/ePF9Qxvdzxhln+HXsA2Gy6qqr+nzg2aGJlPNj+zvvvNMfl21DocVx48sILa45lQXjXNo6pgzuPXr06CiPyo95E2ebbbaZmzZtWrSvk08+2U9nzZqVIbT4DefPtXvooYeifKNdu3Z+f/z/gw8+2Ocx4HxcxO6zzz5+iiC5+OKL3fz5832lzj244oor3B133OHXI1LjY5dyLXi/ETGMf8rvWKZ8ePvtt919992XIQZ4BkwscF0RWn/5y1/87zbffHN37733RuvgwAMPjO4vFtTjjz/e/fOf/3QtWrTweR9++KGv4BHOW221ld8PULHSQ8zgGrz++ut+fubMme66667zgpjOHJzvnDlz/L3s0qWLnwfO86OPPnKnn366X46P78o58bt3333XHXfccf4aGdwPEw2vvvqqF1zkcQ0RYMSdW2SRRbzQ5L6wjmeSKdeNjibMx4UWztf8xu4DhEKLa2LPkh3zxBNP9PeUZ42PwhtvvNGv51kDPoJ5X9mWeWCe87KPSJ4TQhrstNNOfr89e/bMOA8TWgbXxuoHng+DZ+6NN97w9RL/l/sVZ7fddstYNnhup06d6ucpK4zmzZv7qb2nwPXmA2/LLbf018yg3CgmElrCEy/sSwUvfqXBITEXVOilBPFU21eXQYGeFuqy0ORDLqGFeKBSoyJq1qyZfxYRWiYQEFVxwWFCi/lnn33WJ8PEABXlW2+9FVVM9lug8mXf9nvuRW0WLdZbhRvu56qrrnJrrLGGnx8+fHj0tU+lf8ghh/h5RNjAgQO9qOF3caH14IMPum+++cYLMPstookve7axxLNA5ca5PP/88z6P39p/f+edd3ylxzxCwrCKKJvQsvxscO1MmHCdL7roogUEf1xo2babbrqp22677XwlZxUdFWT8o8UsWmYtQhzY9ltvvXXGbwGhxf9H6PDuIrQQ0MC+gUqSZwJhGv6ee8f/RBBx7W091/3pp5/223DNQ4vW+uuv74UclqFsA6ub0CLoLnBfTBByPhAXvbfddpuf9u3b1wutOGeffbafIkip+Cl/ZsyY4c+B62T32cQIxzWhRZmK0GU+LrRWWGEF/+whkPbbbz+fFxda9rxjFUNgmDil9cE+OHgO4kLr0UcfjSxOvGdPPPGEn4+/Fw888IDf34svvuiFFuIrfEftOvEfsJKBlbmnnnpqtB1CC8yKae+aEQotnpN4Xmh9C+NZUTZwvTkPhDfvkWHPWLFIhdDiT/KikPh6yAVfioWYGEVu7GUpJWkQWvlQaqEFDUloYWlIQi6hhSXBBBGVOtNQaJl1i2RCa/XVV/dfqVgqDdZTeFP5U6DHhRbNksxjMQK+bFnGmjB+/Hi3yiqrZAhxs2gZ8QrFplaAMm9WOYSFRb2nsD/ggAN8pcVyaNFiHqG1+OKL+2UTWnvvvbe79NJLM45FwhIS5n3wwQf+3aJMjN8r+3LPR2jx341QaAFigyYeg/UXXHCBF1pUouwfocD/ponG7jXWp3gFFwotLGD8ljIdkTh48GB30kknRdtz36Fz585+SqV72GGH+QrdLCNHH320be7/h4kGiAstQNQjdnANiAstrjXNVxC3bGyyySZ+euihh0YV/SWXXBIJLcoKs6qFQiveu5bzevzxx/0zFQot7ps9B1T89lzyTNKMzrNBGjNmTHTPTWjxfPHfmI8LLSyW5CF0TjjhBJ+H0LLfQ3w+LrTmzp3r8xFXoUWL7bACst6ekfj+bIqVCKHFNSHRfG2YSOee85yQuFb77ruv69atW7RdLqEVguWLfSHysP7BXXfdFa3HsskHAx9z3HvuOdebZ9z+n22Dy0AxSYXQQknaTY/f/Npg/eWXXx5miwTkuubFQEKrBgmtwqAJioo4yXO68847+4IVy0tt5OtDRMUQb+5MI/R2Qgzkg1lVRGUxi1YlofkWazAiDhFfKLhnIOriAjgOz+TLL78cZpcFrm+4jHUzzj333JOxXAxSJbQMnPhQ7xCKL5tHlcaXrf0Wkyl/hjxrRqCisO2sDXjIkCFRXr6FUWMmSQWWLxJaNUhoCSFEdZBKoYVZD7Phc8895/bYYw+fh8Nr2CZ82mmnRW3N5GHSRGjZ1xl55iPw/vvve5Mg7cw0Vdg+aKocMGCAn69mJLRqkNDKpFxCK/yyzAV+Ska2DgY0s1kqJ1jOrEeVkc0HLCkEgS0VlJFcN5qvgK98ls15PAk0DWJty8ZNN90UZpUcXFfsGcGB3ZrfQtgm3gRWCvBFqwvqMKxFIdYzE2gejfPYY495p/q6CH9TH2gSpemda2TvnfmpWTMqTcvkUw8XC8rKTz/9NMxOFakUWiaMeCFpd6ZnDMlumm2L8yQvpq3n5UVoGWxnfgg4StLOT/s37fass99l63lTbUho1SChlUk5hNYLL7zgezoBzyKFNr4rVDyY9/HH4v2mgKZb9jnnnOObEwGfGTDfjzjmxG3vOD5ggA+J+Xzgz7Haaqv9+YP/B0615nyMhZ1jWvdwnJTNp8PAD6lfv37eP4cmReuVSE818tk//j7mg0JPrLiTtfVcsx6UOGLjKwX4AOHPgu8MfiX4PSEIWMaHyfyPgGtH0yjXC5iSqEjt//B/+R1iioQPTVh503uOBNwDu9bhs4DTMCIM3yN6apmAwu8FPyo6BcSbaq2cYRo+4/wffJJMFOB7x3WCRx55xN8D/KksrAG+dvjd4f/EsbgO9DqE9dZbz7uX4KPDOXHd4sTjOFGv2HmtvPLKfmr+R9mw+8bx7dnmf/I8WS9H4NrQCQJoccHXiP+IWOVcQ9HKcxM63uOrF8f8u+x8eWdwtLcef5SxYQgZHP2tOQzDBfcJwcP14dngHYn7tdk95hlca621/DzXkGfYrhvnb47sYK1HFpAYP0P894DjWJlqgui3337zU4N3y94pnk/uKdvw3HIsu6Zx8Cezd5hev2kmVUKLl5OCyR4iHkqaCHkh1157bd+zA2w9TphWGNGejANtNqFFQcJNpycH29kgjzwMfHlaAVrNSGjVIKGVSVi5Fko+QovKwXpE2bNoDtNYHICKi4oVqKSo/DfeeGO/DFYpxDGhZdYfi51j+XyBEw4C6NoOVM6UI2xDJUX5YWUGhT++YpRNBpUp680ZOh4mxcQflRTHYh9ffvmlvxYs05sQLBQALg2IFvbBehyzzReMyhABh9gAKhoqOxzKDbt2JpxwYCcPh3PKQipCltkvZSfhG+jtGfZARGRRORNziFYBrjW+N/EQD3zoAuWoxYBCoPC8kLJZ3Oz8KOf5XRw6DYAJBUIhcF05V3uG+K9WafHhHO9EAAhoi9tn8cCo3OI9H3G65jxIFrrEzis+ikFtEEbDOOaYY6J5eihiIIgLS7u/1smC+2znHBc3iHDuTVxo2TmG54JIwqGfd4CPEI7JNaMjAc9DKLSoN0282juC1ckcvrlP8XMh3AnXON4pwIQ776C9O3GrJNefZ8N6fMaFFvcaQwfXAKHFM2LXwIgfi44H0Lt3b9+bF7I5whP2xSD+Y5pJhdDiYedLgsTXY7znDy8zD068V4x9dQBKlvV88UC84GU7KxDpoRLv/cJDyssXfkFUK+HLXApCoUXBVGmoZMKQDxJamZRaaFHIUkFS0SJ2QqFlH0+IFauM+Q2VfzzaPGVHSDwsAVaj0HqNcIr3TIIrr7wy8vmk0jQBZUKL2D7xpgqr2O2jrzahBewD4fKvf/3LV7rWXGpCiw8/nkfKRD4AcUqmNxrrEXhmKQMEKEF47bhg147zxIpj/qqcMxUjlTLL7A8xRSVLs2v4/sctWmAWrThY9gAfVyuf4xVo2J0eOI6J1vAZp4zm/iIiwMQTWDwv7ruFCkBoma8ugpL/gjC03ogm9HiOrNI3wsjk9v/NMlJXr3asSJw71/e8886L8rm2OI+bEOPDnzyIC624qDFqE1WhRYt6ywLRIo4RNjTLUQfG9xF/pnnmTWhZ/Thq1KiMmFXxc6K5mN6G8XIxrCd5PuOBdj/55BM/NQueCS2eUQQT95XWp9qa+Ow9ZWohHjhXE1rxej3uU21NvmF4jrSRCqElKk/4gpeCuNAi7g8vqnXfrgRUkDTJhOcgoZVJsYRWbUPwmKUa8CcBmoKwXljvJISC+WgiNijArcKllxQVMB9VdflCxQUQ+zN/GwruuIABKkQ7XxNnVExmhUKMxUE4WcVu3f0NOvaYTwr7QPAQmyzsQk4ziVlYWE/4BMOsbuHHCSEJ4r5qWMPMz8neaabkjxw5MtqOitbgfyLM4mEHEDnxAJ619RLjulklGRcd1r0ewv+Jb61hQSRDuJZh7zTzI0IwY8nhutq1RrCyX5qgwT68IW4tqQ0THYiWsBnVYBtCBxh33313RkBMfsszO3bsWL9MM2Lc2sg1NUFdW4UbP+9scA6WgGeY/8f7YoTPHxYkWnPARl0wAWj33H7D82SxwfBf5t0yEOTW5Md/C8HNx54Fyi8sivFRHvgo4Nnn3OPXDRCNcf889gXW69GECu+dCS16CFv4CbOuphV7Jmq77/lS+lpalJRyCy0wE3El4QW2gsUot9AisjMp/oXZGIUWz1h9uovngxW4FpU7hIIccVUtEE3cKl+adMKYYNmwptNykrTiyQXiJh6ZvhCK2RudJutsFtdykK0JtzGR9v+Hq4DVr0mf99LX0gFh5SiSUQmhlVbKLbSy0ZiEFo7lREenQMRHEiuiEEI0dmjytGZyhsSyYLb1JVEtjXmRni30ysAMms/gmnHzcwj7iJvd6aWTL5hU42NUVQsSWjVIaGWSVGgBPe9o3rHI6NaUIYQQjRGauCnrsKri6mAdeZKQqJa2dlwKYppyEFo4OtJubOM0IcLouYCjIV/GNhwETnzme4EjJuEb4kKLdv14rx3rQm6OtnR3pWsu5mWashBaVArWFRpHU5xhcWDFtE63YcBR1JxB6R3D+FDxccYaGhJaNUhoZVIMoQW8h/wviS0Rh6FaGHSYcA6kuH9XNuI+fUmhs4FBGW+DO0O8GTrumC9ELugIQRln8cOKNYpEoloaoUW3ZusJYhYteurgrEczIY6vOILiQI1DHr1N4o6h9B5DFNHrJLRoEZ/DnPoQafGeOmxvjrA4rJpFC2dRtjVhhviiyYPurcRqQRTGB8ekp0vc8bGhIaFVg4RWJsUSWkCvJBxXTWxZbyVRveAYjSO09SA0+Ki1MpaPbHqf8tzwYWtlc9wJnGYa6/HH7xBRfIRTZvNBzcc0ztp0mqDHOZ0rzPmcbaiH4vG24qGCrL6gXuC4lPX2Mc6UgZ3p5R4P9yCqExuHEo0QHyOzGCSqpeM9EyAutDC5meWIwGWILHqW2EvJA4/liz9E5cTXTii0bBRveudYzxUCB06bNs0LLV4cFCiCrC6hRddf8ggQR9dr5okCjbMvx2aw04aKhFYNElqZFFNoAYEerVcZz51S9aS64KsfsWIChnLcemFSXts7QY/MbO4lPE8Wm8tiLFl4BHqLIrDo9Rbv6YjQshhRIQgti+1m8bAs9AShK+zDmjH9aHlh/0OHDvV5IeF1UGrcySz3Nih7saj7DUoAcTdKPYQGMUiwmmHCrlaIzRKPOVRsKOho1s1FPl2xk0DQxVxYQV8qEPjh4KYhaRJa1qOvmGB52HHHHf17p1Q9qS74eEaAWzMdrRDWjLjddtv5j24+UBBa+LtQkeFiYvCRbT0FEUiUZ8TfYp/EZqJsQWhZxwyEFEKL42ULPcJ6BFs8phaWMo5hISDs+HyQs3+aPrMRXgelxp0If0GQ9WJTMqElygOWwnjU52JjPnW5wI+utnHQkkLBXVtBGIdQAIV0oCgULDr5UFuMoXJy1VVXZQy1UUwYy1SpulJd2DYWKJWWhXjQTPPNMr8Xi7lmENE8HpgUdxJgO6KuE2PN9mfb2TY2rE8ci+FlEeYNxuI1bCxIYP92biHhdVBq/KkUSGg1AhBbN998c5idGL7+wujrtcFXKP4TNuxKsUBk1WbWzwZNFvFhVoqFDQGTD3x1VzIUAkEyCWAohBCi8khoCSGEEEKUCAktIYQQQogSIaElhBBCCFEiJLSEEEIIIUqEhJYQQgghRImQ0BJCCCGEKBESWkIIIYQQJUJCSwghhBCiREhoCSGEEEKUCAmtRsImm2ziB1ktZmKcskJgGItwH0nThhtuGB4mJ+E+ipEYpqMQnn322QX2Ua5UymGIhBBCFIaEViOAAbxtRPpiMnv27FrHAAthnEMGaC02DPTZpk2bMLtWhg8fHmYVBYYBynfw7vfff9/1798/zC4bX375pWvfvn2YLYQQogJIaDVwqNS33nrrMLtorLzyyl7s5GLFFVcMs4rGN998k5eIGzFihB9MuVQwcHY+Yz8OGjQozCo7X3zxRUlGoRdCCFEYEloNnP/7v9LfwkUWWSTMSiUrrbRSmFV0XnnllTArg59++inMqhhvv/12mCWEEKLMJK6l8UWhIsbiMHbs2HB1Qbz33nu1Coejjz66TqvJKqusEmZFLLroorXut6FTjv8loVWDhJbzvntKSkpKjTHl02pRKIlqaSodq+h/+eWXaP6SSy5xn332mTvxxBPdRx99FG0/bNgw9+9//ztahlNPPdVdeeWVfp4mKn4Lv/76q/vXv/7l7r33Xr88YMCABUQF6/g9NG/e3E/nz5/vTjvtNHfRRRf55UceecT/zvY7a9Ys72/z1Vdf+WXy2eb+++93d9xxh8+DG2+80R177LEZFef555/vzjzzzGg5DYTXpBRIaNVQzUILH7UllljCz7/55ptKSkpKjSoBRpvff/89XvQlJlEtPXPmTF/Rn3XWWRn55GFFWmyxxSIhsOWWW7q11lrLW74WWmghn7fCCiu4Dh06uCZNmrimTZt6p27bnik+JkzXX3/9rEKLZZx+EVkmtMjbYIMN3LLLLuuuv/56d9JJJ/m87t27u5deesnP77zzzn5KRcSUc+L3zP/3v/91Sy+9tD8nBJsdk2UqmY022shtvvnm8dOoKOE1KQUSWjVUs9Bq1qyZn2LF5rlTUlJSakxp9OjRvoxDu+Tb+SkfEtfSNPdREduJgk3j80yxIpGYx1k3vt2QIUMyhBZ/EgsXDsgInFBoYd5D/MCcOXMiobX44otHx0Hsgf2uXbt2Xq3aOXTp0sVPcfi27VZbbTUv+rjQkydPji52eP5poRznIqFVQzUKLd4B3is6XkyZMqUsz5wQQpQbyrYHH3zQffLJJ36+WGIrUYn597//PaPQtflceZw8YQPieR07doyEFn+UKWKK/GxCC2z5ww8/zLBoGXGRBJ07d46aPlhHYh0WM9sOoWXrLG/q1KlZ95sGwmtSCiS0aqhGoWWWrA8++CCyRgshRGOE+u6+++7z8y1btgzW1o9EtTSxm6jo4wmy5fXt2zdq4rO8VVddNdqGP2RCa8KECX66++67+z9dl9AiEWcpLrRo+mN5r732ivJg4sSJfh6rFtOLL77YT0Ohtfzyy/v5v/71r36K/xmVDfOsS1OMovCalAIJrRqqSWjxQbHkkkv6+eeff74sz5oQQlQayroHHnjAz9PCldRnqyQlpwrk8lGOax0KrUMPPTRjuRLgSxfG9yq30MLaSrrsssuivMYktPhggaWWWipqphdCiGoAgWXW/E6dOgVrC6MktXQ5Kn/xJ+W41nGhdfjhh/thXg444IDYFuXlmGOO8R0awsCg5RZaH3/8sU/WgxUak9DCNQC4/7/99luwVgghGjeILfjPf/4TrCmM0tfSoqSUW2iBLFp/QqgQUnyYosYotM4999xgjRDp5/TTT68zNXTC/xOmNBCeU5jMFyqtUM9AxYUWhfmMGTPC7Dq5+uqrM5bHjRuXsVwIzzzzTJhVVVRCaKWVcgutbEhoCZEOylE2ppUnn3wyzKoIue7BPvvsE2alilQIrSeeeMJXLI8++qibPn26dxiLNzGwnK2HnkVetW2Jp2WMGjUq+k3YXGH5/N7mCf9gjmrkhce3Y8V7EjYmcj3IxUBCqwYJrRpuu+226Pkrx3Moygs9TC3GIS4DCy+8sL/PDFpeCMQdpIm93BTyTFI3ECQbCJSdi7BuShtxocW5kqyezOfcf/zxRzdt2rQwOyKsa2sj1z2IC60k9bP9x2KTCqEFDGhs/jrWnknPPOsWidChxxI9FImdBfjY2ENND8O40DJrF35AQI9DmmeAAKIQvyGtWrXyUyoFApTCZpttFq23bXl57EawH3oSNgZyPcjFQEKrBgmtGhBaG264oRszZox/DhlNIR7yhSnDZlEuWB6VNyNBEPiXvCSFqygt3FvgPiG0KF8POuigqHKk13i/fv2ikB9st9xyy/nB3RFls2fP9uvo1f30009H8QrLRb5l42OPPeaDaX/99df+fA8++GD3888/uyOOOML97W9/89sgLnfYYQc3cuRIP/oI9RN12G677ebDnsTp1q2b23777f383nvv7esa3AuorMePH+9HISH+5HHHHee3YdiXuXPn+l729JbnuiUlLrTsPWPkE86ZnsS9e/f26/ivcNhhh/npfvvt526//Xb38ssvu2uuucb98MMPfls7J3Mbeffdd/O6vrm2iQutW265JZqnlWunnXby88cff7zXD5wTHHLIIT52pp07EOIJccj9o57nuYSbbrrJ6w/2AVdddZW78847o98yeo1pkWykQmiZAPr888991HUTWjgqI5DeeOMNnyiAeXANhFbXrl19ZPnahNauu+7qp/R8CoVWHCxaEBdaPORcbDu+QRgIQPxZPK2GTq4HuRhIaNUgoVUDQgvBhNWD55DCLj6uKNPzzjvPV848Q1wb8ujBk7QXjyg9BG3mPlHuIrQoP+OjYsTLHiq0Hj16+PKckTbWWGMNv56wPGm3aFHR8l95lvH75HcIDKb8d0YVYZ51POsmtMijcl9mmWX89mYB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NBkyT080LYeu9xq3qCog1AhhQQ83mgMpk55grtAiOCX56hRdCKFFDzr2gfNB93/mEV4cP87kJrQMwzDyhwktoyhB9NDbil5jRrwxoWUYRiljQsswjEgxoWUYRiljQsswjEgxoWUYRiljQsswjEgxoWUYRiljQsswjEgxoWUYRiljQsswjEgxoWUYRiljQsswjEgxoWUYRiljQsswjEgxoWUYRiljQstIoFatWsFll12W07TFFlv4f1Mp9913nwyj45eTTdpmm23C8RDTpUWLFuXKyTY1adLE/5tKOeKII8qVka+01VZblRssvSqY0DIMo5QxoWWEIG6iQgc2TsWTTz4pEdajoGbNmjKEUDowTmIUMDTQ2rVr/eykMMTP119/7WfnFaLJZzNGJJjQMgyjlDGhZQg6jE1UUFm7AzNXRLaVeipWr17tZ5WjTp06flZOIZo94w5WBkP8xIW5c+f6WRlhQsswjFLGhJYhRC20YMMNN/SzYsnOO+/sZ+WcYhJajO2YDSa0DMMoZWIltKjsNRn5JR/n3IRWGSa0yhg+fLglS5YsVYuUjNgJrYsuuiis9L/99tvgnHPOkflffvkl9CEaPHhwOP/6668Hp556anD99df/VUjwl6/R+++/H7Rp00Z+//TTTzKPg6+7Ds7RXbp0CebNmxfmv/fee0G3bt2CMWPGhHn/+c9/ZP1evXol+Newrz169Ag++uijMK9YMaFVhgmtRHIltDp06OAtMQzDqP5ceOGFMo2N0Pr9999l+vPPP4u/jgqAoUOHyvxvv/0WrL/++kHt2rXDbZo1aybTzTbbLMyrW7euTH/88UeZtmvXTqazZs0K18HRlykJIaf5u+yyi0y33377MK9GjRrSc033h31Yb731wv8pdvJxDCa0yigloXXCCSfIlHvsxBNP9JYahmFUX3r37h3Wr9l29Mq6lj777LNFMMGwYcPCSpkdvP/++8WRGqHTr18/yfvhhx9k+fjx44NWrVqFgkm3ueeee2S+Xr168nv//fcPGjduLAJJ11GYHzhwYPDoo48Gm2yyiazbsGHDhPJIxxxzTPDpp59KHvtDXvPmzYOFCxeGZRUrJrTKMKGVSLZC69133w023XRTmacnJR8ohmEY1R10goY3Yrpo0SJvjczIupZWMeMmzT/66KNl2rdv34RlNAkyP2PGjODggw9O2GbSpEky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bcJLGB8WLEBw0kknBTfffHNw9913h194/fr1C66++mqZv+KKK0RIsf1zzz0nPl7jxo0Ly1q2bJn08PO7Xc6fPz9YvHixzLPt+++/n7AP7nyfPn3CygJoBtTlL7zwQoXbdezYMTjrrLPk+GDt2rVBz5495UvZXY/ej7y43Rd17969RWytXLkyzIsSv5KIAhNaZZjQKoOOEvR2pYcjbgMPPPBA6NcIBx10UNC5c2eZ33fffcXFgHcBVm7eD9p7mPXosYrQOv/886WMyy+/PDjggAPkPy699NLg9ttvl3Wffvppma5YsULWa9++fdC2bVt5DnhmmZ544oniEoCIgjfffFPujffeey/YY4895P8V1teXqaK9bfFN/Pe//y3ls/1bb70VjB07Vv73888/l3UaNWok/p68+zgHN954o5R/wgknBK+88opY+rkn8CG9/vrrQ0s/+bvvvrvMsz4uEiNGjBDLXKE7UhiG8RexEFqlzNChQ8Mv30zDIOQSE1plmNBKJGqhBXxotGzZMthzzz3lXqRZn16iWKv1YwMhxnn57rvvwmcGmFI2QoYXGkKrU6dOQb169WQZTfxsq36VZ555Zvi/+l90VNHf7hSrEssRPu4z4osY/oMOLVjOFX2e99lnHwlhs9VWW0lZlIPLA1ZsOkWoBR74GMMqD6y33377BR988IG4QNBxp3nz5rKM/cLyTWsA0FPX33fDMOKBCa0YQMiBqHvbpSIfL2cTWmWY0CqDJvxNNtlEwov4PXKxSGG9wZID55xzjliltFcvMEV8sS3WJ4SWWnlUaClYfNyQFdoTVvfRFys06+OXOX36dFkXaxaCCqGlgggQdeQdeeSRYR7/M23atLAs9g1rNgKSGGXA/mCVwjJHuQitr776Spap0FLx+eOPP4rQ+u2330RoYblHgPESZ1/cfed9kosYaIZhZE/RCa104iBFKVq++eYbP6taUAihRSVaaOgxqj1NFRNaiUQttPIFAqVp06bS27hYQGh9+umnfrZhGEVELITWM888E8aoOuKII7yliaQSWvhvpFonGz788EM/KwTfrS+++MLPDiE+VmV89NFHflYIlYPrE5Jr8i20iGfVvXv3YPXq1c4a+YUKDEuFNr8o+RZal112mST8/RQTWoZhGNWD2AgtrXhUaCEscGJftGhRggkcp3bM9DiT4qOAszvO6jiuUgb+DjjEv/zyy8Euu+wS3HDDDcGgQYPE/E4vQJzMfXAeTSZiMNPj+4CzPSCi8LNQ59ibbrpJmj3UIT+Z0MIng5PLcSC08EXByX3AgAGyvHHjxkGrVq2kByU9KXHOJf4XzR+uHwjOt5ynqMi30IK+ffsm/C4EPAB+N/p8Cy16w5LwwVFMaBmGYVQPYiO0AH8FFVp0rdbeg/Qm0nhZCC3ECOBIjnhBkGnoBSxaKrRUoNHrCKEFGsHdhVAPur2LRsTGd+Ttt9+WeYQWvQjx1WAfzz77bBFv9IZKJrQITwGIPvb1yy+/DI499tjgrrvuknxCOLC/OMWqRYvfnAuNZI+Iw0qH9WXixIl/FZxjCiG04kq+hVYyTGgZhmFUD2IltDQYKNDT5tRTT5X50aNHixgChBbOpIR7wBp07bXXyrq6HctUaOHfQNMUFihfaD388MMyBYRbhw4dZJ6wERo/R4UWDqw6LAtCCxBOQM8iehS5QmvKlCmyDHDE/eSTT0RYIbRmzJgRLF++XCxt4AotrFrM4+CKoCLkBLAfjz32mOw73cSjwIRWGSa0EjGhZRiGUXViIbQyBSFy3333hU14mULsGnr3RIXGxgGaBYsBE1plmNBKxISWYRhG1SlKoWXkHhNaZZjQSsSElmEYRtUpWqFFTBkjd5jQKsOEViImtAzDMKpOLISWhna46qqrZEpzG75YRIUGfKBwcic+1lFHHSW983hp03y4dOlSWee4444LrrvuOplfsGCBjE1opE+pCK10Bgp2h3+JAjo2FJPQ0mesqpjQMgyjlImF0Jo7d65MifYMOJSvWrVK5nGQJ4QDEGVZ0Zc2w1u44FiPo7yRGYz7WNkgutlCZwF/IN5k0NsyKuhskKx3qQ8dL2bNmuVn5ww6VPz5559+djl0AOFCQueLZKFPMsGElmEYpUwshBYwdAXhDRo2bCi/CZ+gMDwFMNiqoi9tDZ+gEOWbQViNqoHYwiKYy4Q1MhOwWjJQsF9ONqlXr17SEzVdCA0yefLkcuVkm7TXarqwvl9GvhKWZj9cSVUwoWUYRikTG6FFmAZgHDMgnAHxseDJJ5+UIJ+ETwCChD777LMyP378eJkSAHTw4MEyTzgFo2oQJJWx1nKZ0rFk+fhlZJu+//57/y9S4peRi5TpqAVYvvwy8pU0jlu2mNAyDKOUiY3QMgyjemJCyzCMUsaElmEYkWJCyzCMUsaElmEYkWJCyzCMUsaElmEYkWJCyzCMUsaElmEYkWJCyzCMUsaElmEYkWJCyzCMUsaElmEYkZJKaB1yyCGWLFmyVC1SMkxoGYYRKSq0dtllF2+JYRhG9We//faTqQktQ2AMvieeeCKn6YMPPvD/JiV+Gdmml156yf+LlPhl5CL98ssv/t9Uym+//VaujHylt99+29+dKrH++utL0No+ffrImJpff/21v4phGEa1gyHMeOcxygbj7G6wwQb+KhmRtdC65pprZIdIFY3xxkDTmQ5+/Oabb4bDiOi2DJLL/BlnnCEDCL/11lvuJuVgXY1Ynyu4ANtuu62fnZRMj7mqEIU818cJDOvDgODpwHpbb721CIxccv/99wdjxozxsytk7dq1wXfffednZ03t2rX9rAohinzNmjX97Lxx+eWXB08//bSfnTEMi7XeeuvJPKM95Ot+NgzDKCS86w444IBwnpFXsiGrN+fHH38sO4EgGjVqVMKLuCoVLspRoayxY8c6S4Ng4MCBFb7skw0XU5nQYtDrquALLSojHz12d1+T7V8uYGy/KCv1dAZzBtaL6hgnTJgQ3HLLLX52ObC46ADnUdC5c2c/Kyk1atTws/LOZZddFjz00EN+dsYwoHf37t1lng+cevXqeWsYhmFUH5o3bx60b99e5ocOHZq1yILkqiVNsBwgJhhM+IUXXgjzyTv99NODxo0byzwOZSo6mOJ4xiDUm2yyiYyHSB4DGDMljRs3LixXt0EYsR3zr776qviNrFy5Mvjyyy8l76abbionwlRoMcUqsnDhQplv0KCBTDEHIoqYP+aYY4LNN99cmktOPPHE0FTIsh49eoT75wotftN2e+yxx4oQ0LLOP/98qWx1f5j27Nkz2HvvvRPyLr300qBfv35BkyZN/trhKuAfcxRsuOGGflYs2Xnnnf2snEMTbWX897//9bMKxr/+9S8/q0ogtngu+Kjo1q1bXu45o7QYMmRIOM/75scff5R5bQbX1g2t9HLVPG4YLrzb2rZtK3U51nzq+1yQ9RuTQX9322032UFXRCiIGxVaCCOmfG1feOGFMq9CCx588MGEMtSipXl9+/YN51Vo1apVKxQCPHxUCgrr1q1bV0QUqNACfFmYp2lK85YtWybziDrNa9GihcyT2EaFFtYbrDgcC4nlb7zxhog4wDrnHovi5um2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d9993eM333zT2yMB3YmVERWtNddc0y1pARs1apRbTydaQELS/fbbL2jSpIm/KYnoeWywwQaRLRVFC3hdWtgOPPBAf1PJgty+9957wamnnhpmJOczfvLJJ51U0cr4zTffBE8//XTwxRdfSLSEEEKIPJMX0Yry66+/OtnxeeONN9zykksucd1ZUSxTu4kW2dpZ/8Mf/uCKtZplIlpRHnzwQb8qBPGw4yN10Va2VKJlfPDBB35VyfKnP/0p6Nevn1ufOnWq6y7s27eve8x4uIkTJ7r1gQMHBvvss8//PUsIIYQQ+SIn0UKIRo4cmVRn3XCzZs1KqqfFC5YvXx507do1adu6667rliZaDFaPducdeeSRbplOtPyWqZNPPjnpcZRnnnkmXKfV56677gofR0Xr3//+d/Diiy+Gj/1uTyGEEEKIyshJtICxVLQOUY455piwHllhZiH1f/nLXyLP+B269th29913h3XMXoSjjjoqrAPr0po3b54bOG/l22+/TdoP6tev747La1cG45F8dtppp3Cd7soodLXZexw2bFjSNiHKCf4Hoj9ShBCitvD222+Hw2zySf6PKEqaOL5E0LFjx1BGGXRfSiDfjK8bP358sGjRouD000939cy2LCYXX3xx+Jn5f5c777wzKfQJ8ANh1113TaorJE888UTw0ksvuXVaoVVUVFRqUwFCIt12223RS1/OxHPXFUWFFkBu3HTfMjGA9UsvvdR139oN3cZq8bhz587BaaedljTDs7ogWsxmhNtvv90d949//GPQvXt3N/7LwmgQm2zzzTcPNt54Y7dP69atg6222sq1eiJD1mpp50n3b/Pmzd1g/Wywfx7gmLxvYrsx05XXOeKII4J33nknGDJkSNCtW7dwf84XMSsEFn9um222CQYMGBC0atXKxYNjFi1/y8GDBwd169YtqmjxecyYMSOYOXNmBSkUQojaANe2+++/P5gzZ05er3P5O5IoKbhZ77LLLm5cGzMsGb8WbTmJihbFunKzJdqiZaIH0SUxyD7//HP32ETLtvH6tDzRbcvjdu3auW2M29tiiy3cJIts8EWLpmGEBjhnuOyyy5I+A8bhERy3UJhoRT8PuqhNXAkGTF2xRIvP0CazcB6XX365t4cQQtR87rvvvvA6zL3K4n/mSvZ3VlHS2Ng5IEo+XxoeWx3j4W688cZQMOhSq2pc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>