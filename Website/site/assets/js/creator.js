// creator.js — character creator: characters list (landing view) + sheet editor with
// edit/preview modes. Data lives in localStorage; whole data can be downloaded/uploaded
// as JSON via the top-bar buttons (main.js).

import { loadCharacters, saveCharacters, loadCustomMoves } from "./main.js";
import { moveCardEl, computeMoveFields } from "./moves-lib.js";

// ---------- predefined libraries (static, bundled; NO species base stats — entered manually) ----------

const TYPES = ["Normal","Fire","Water","Electric","Grass","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Dark","Steel","Fairy"];

const ABILITIES = [
  ["Specialized", "You gain a +2 bonus to any one Knowledge, Social, or custom Bonus stat. You can select this Ability multiple times, choosing a different stat each time."],
  ["Resourceful", "Your Maximum Power Points (Max PP) increases by 4."],
  ["Secret Power", "You gain a STAB bonus to one additional type."],
  ["Flight", "You can fly at your normal Movement Range. You ignore ground-based Difficult and Hazardous Terrain, but fall if you are Restrained or if your Speed drops to 0."],
  ["Aquatic", "You can breathe underwater and move through water without movement penalties."],
  ["Burrower", "You can dig and move underground through soft earth or sand using your normal Movement Range."],
  ["Wall Climber", "You can climb and move along vertical surfaces and ceilings using your normal Movement Range."],
  ["Tiny", "Your Base Evasion increases by 2, but your Max HP is reduced by 4 to a minimum of 1."],
  ["Large", "Your Max HP increases by 12, but your Base Evasion is reduced by 2 to a minimum of 0."],
  ["Long Reach", "The range of your Single-target Melee Moves increases from 1 meter to 5 meters."],
  ["Incorporeal", "As a Main Action, you can swap between being ghostly and normal. When you are ghostly, you can move through solid inanimate objects and have Advantage (+4) to hiding, but can\u2019t use Moves or otherwise affect your surroundings."],
  ["Mechanical", "You do not need to eat or sleep, but still need to rest to gain benefits of Short or Long Rest."],
  ["Substitute", "The first time you take damage in a combat encounter, that damage is reduced to 0."],
  ["Element Resistant", "When taking this ability, choose one elemental type. You gain Resistance or remove a x2 Type Weakness against that type."],
  ["Status Resistant", "When taking this ability, choose one Status Condition. You are immune to that condition."],
  ["Climate Adaptability", "You ignore damage and movement penalties caused by environmental weather or extreme hot/cold terrain."],
  ["Technician", "Your \u201cBasic attack\u201d deals 6 + d6 damage instead of 4 + d4."],
  ["Prankster", "Your Status Moves gain the Priority keyword."],
  ["Healer", "You always have access to a special Single-target Melee Move called \u201cHeal\u201d that restores an amount of HP to the target equal to two times their Health (Health \u00d7 2). This Move is used as a Main Action and costs 3 PP."],
  ["Form Change", "As a Main Action, you can switch to an alternate form, swapping between two forms. Both forms have their own Core stat Base Values, typing, and second Ability (both forms have \u201cForm Change\u201d). Currently lost HP carries over when swapping forms."],
  ["Weather Setter", "Once per Long Rest, you can change the local weather in your area to a specific weather condition for 1 hour. The specific weather condition is chosen from Harsh Sunlight, Rain, Sandstorm, Snow and Fog when selecting this Ability."],
  ["Wonder Guard (Shedinja)", "Your Max HP becomes 1. You are immune to all damage not caused by Status Conditions, except from Moves with elemental types you are Weak against. This Ability can\u2019t be combined with the \u201cTiny\u201d or \u201cLarge\u201d Abilities."],
];

const ARRAYS = {
  "Hyper specialized": [14, 11, 8, 6, 5, 4, 4, 3, 3, 2, 2, 1],
  "General specialized": [12, 10, 9, 8, 7, 6, 5, 5, 4, 3, 2, 1],
  "Jack of all trades": [10, 9, 9, 8, 8, 7, 7, 6, 5, 4, 3, 2],
};

// full descriptions from the ruleset's "Basic Status Conditions list" (Status Conditions section)
const STATUS_CONDITIONS = [
  ["Burn", 10, "Inflicts 3 True Damage to the affected character at the end of their every turn and reduces the Power of their Physical Moves by 4 as long as the Status Condition remains. Can’t affect characters with Fire-type."],
  ["Freeze", 15, "The affected character has the Incapacitated restriction. If they are damaged, the condition ends. Can’t affect characters with Ice-type."],
  ["Paralysis", 10, "Reduces the affected character’s Speed by 4. If the character uses a Move on their turn, they roll a d20. If the result of the roll does not exceed 5, the character’s Action Phase ends and any PP required for the attempted Move is spent. Can’t affect characters with Electric-type."],
  ["Poison", 15, "Inflicts 2 True Damage to the affected character at the end of their every turn. Can’t affect characters with Poison-type or Steel-type."],
  ["Badly poisoned", 15, "Inflicts 1 True Damage to the affected character at the end of their every turn. The amount of damage is increased by 1 after every test of removing the condition. Can’t affect characters with Poison-type or Steel-type."],
  ["Sleep", 10, "The affected character has the Incapacitated restriction. If they are damaged, the condition ends."],
  ["Flinch", null, "The affected character has the Turn Skipped restriction. This Status Condition is always removed at the end of the affected character’s turn."],
];

const CORE_STATS = ["health", "attack", "specialAttack", "defense", "specialDefense", "speed"];
const CORE_LABEL = { health: "Health", attack: "Attack", specialAttack: "Special attack", defense: "Defense", specialDefense: "Special defense", speed: "Speed" };
const KNOWLEDGE_STATS = ["awareness", "insight", "pokemonKnowledge", "natureKnowledge", "scientificKnowledge", "societalKnowledge", "crafts", "trickery"];
const KNOWLEDGE_LABEL = { awareness: "Awareness", insight: "Insight", pokemonKnowledge: "Pokémon knowledge", natureKnowledge: "Nature knowledge", scientificKnowledge: "Scientific knowledge", societalKnowledge: "Societal knowledge", crafts: "Crafts", trickery: "Trickery" };
const SOCIAL_STATS = ["cool", "cute", "scary", "elegant"];
const SOCIAL_LABEL = { cool: "Cool", cute: "Cute", scary: "Scary", elegant: "Elegant" };
// Type Resistances/Weaknesses are stored as Defense Power modifiers (ruleset: Weakness x2 = -4, x4 = -8, Resistance x1/2 = +4, x1/4 = +8, and so on; immunity = x0)
const RES_LEVELS = [];
for (let v = -16; v <= 16; v += 4) {
  if (v === 0) continue;
  const mult = v < 0 ? "x" + 2 ** (-v / 4) : "x1/" + 2 ** (v / 4);
  RES_LEVELS.push([(v < 0 ? "Weakness " : "Resistance ") + (v > 0 ? "+" : "") + v + " (" + mult + ")", String(v)]);
}
RES_LEVELS.push(["Immune (x0)", "immune"]);
// stat parts of a stat, in display order; the label text is the key itself, shared
// by the "Add Bonus stat" modal and the added bonus-stat card
const STAT_PARTS = ["base", "progress", "bonus"];

// ---------- character model ----------

function blankStat() { return { base: 0, progress: 0, bonus: 0 }; }

function newCharacter(kind) {
  const coreStats = {}, knowledgeStats = {}, socialStats = {};
  for (const s of CORE_STATS) coreStats[s] = blankStat();
  for (const s of KNOWLEDGE_STATS) knowledgeStats[s] = blankStat();
  for (const s of SOCIAL_STATS) socialStats[s] = blankStat();
  return {
    schemaVersion: 1, kind, id: crypto.randomUUID(),
    name: kind === "pc" ? "New character" : "New NPC",
    species: "", types: [], height: "", weight: "", portrait: null,
    coreStats, knowledgeStats, socialStats, bonusStats: [],
    npcCategories: { core: 0, knowledge: 0, social: 0 },
    abilities: [], moves: [],
    hp: { current: 0, severeDamage: 0 }, pp: { current: 0 }, fatePoints: 0,
    ...(kind === "pc" ? { advancementPoints: { unspent: 0 } } : {}), // NPCs have no Advancement Points data
    statusConditions: [], buffsDebuffs: {}, resistances: [], weaknesses: [],
    notes: "",
  };
}

const finalStat = (c, s) => {
  if (c.kind === "npc") {
    const cat = s === "core" ? c.npcCategories.core : s === "knowledge" ? c.npcCategories.knowledge : c.npcCategories.social;
    return cat + ((c.coreStats[s]?.exception) || 0);
  }
  const st = c.coreStats[s] || c.knowledgeStats[s] || c.socialStats[s] || blankStat();
  return (st.base || 0) + (st.progress || 0) + (st.bonus || 0);
};

function derived(c) {
  const H = finalStat(c, "health"), A = finalStat(c, "attack"), SA = finalStat(c, "specialAttack"), SP = finalStat(c, "speed");
  const prog = CORE_STATS.reduce((a, s) => a + (c.coreStats[s]?.progress || 0), 0);
  // Advancement Points spent: raising one stat's Progress Modifier to v costs v*(v+1)/2 AP in total (ruleset)
  const apCost = (p) => (p * (p + 1)) / 2;
  let apSpent = 0;
  for (const store of [c.coreStats, c.knowledgeStats, c.socialStats]) {
    for (const st of Object.values(store || {})) apSpent += apCost(st?.progress || 0);
  }
  for (const b of c.bonusStats || []) apSpent += apCost(b.progress || 0);
  return {
    maxHP: H * 4,
    maxPP: Math.ceil((H + A + SA) / 2),
    movement: Math.ceil(SP / 2),
    baseEvasion: 12 + SP,
    level: Math.ceil(prog * 1.5) + 5,
    apSpent,
  };
}

// ---------- views ----------

const listView = document.getElementById("char-list-view");
const editView = document.getElementById("char-edit-view");
const filterInput = document.getElementById("char-filter");
const listEl = document.getElementById("char-list");

let chars = loadCharacters();
// normalize older string-form abilities to {name, stat}
for (const c of chars) c.abilities = (c.abilities || []).map((a) => (typeof a === "string" ? { name: a } : a));
let currentId = null;
let mode = "edit"; // "edit" | "preview"
let movesLib = [];

function persist() { saveCharacters(chars); }

function kindLabel(c) { return c.kind === "pc" ? "Player character" : "NPC"; }

function renderList() {
  const q = filterInput.value.trim().toLowerCase();
  listEl.innerHTML = "";
  for (const c of chars) {
    const hay = `${c.name} ${c.species} ${kindLabel(c)}`.toLowerCase();
    if (q && !hay.includes(q)) continue;
    const d = derived(c);
    const row = document.createElement("div");
    row.className = "char-row";
    const img = document.createElement("img");
    img.className = "char-portrait";
    img.alt = "";
    img.src = c.portrait?.data ? `data:${c.portrait.mimeType};base64,${c.portrait.data}` : "/assets/img/placeholder.svg";
    const who = document.createElement("div");
    who.className = "who";
    who.innerHTML = `<div class="name"></div><div class="details"></div>`;
    who.querySelector(".name").textContent = c.name;
    who.querySelector(".details").textContent = `${kindLabel(c)} · ${c.species || "-"} · Level ${d.level}`;
    const actions = document.createElement("div");
    actions.className = "actions";
    const dup = document.createElement("button"); dup.className = "btn small"; dup.textContent = "Duplicate";
    dup.addEventListener("click", () => {
      const copy = JSON.parse(JSON.stringify(c));
      copy.id = crypto.randomUUID(); copy.name = `${c.name} (copy)`;
      chars.push(copy); persist(); renderList();
    });
    const del = document.createElement("button"); del.className = "btn small danger"; del.textContent = "Delete";
    del.addEventListener("click", () => {
      if (!confirm(`Delete ${c.name}?`)) return;
      chars = chars.filter((x) => x.id !== c.id); persist(); renderList();
    });
    const go = document.createElement("button"); go.className = "btn small"; go.textContent = "Edit ›";
    go.title = "Edit character";
    go.addEventListener("click", () => openEditor(c.id, "preview"));
    actions.append(dup, del, go);
    row.append(img, who, actions);
    listEl.appendChild(row);
  }
  if (!listEl.children.length) listEl.innerHTML = '<p class="snippet">No characters match.</p>';
}

function openEditor(id, openMode = "edit") { // new characters open in Edit mode, existing ones in Preview
  currentId = id;
  mode = openMode;
  listView.classList.add("hidden");
  editView.classList.remove("hidden");
  renderEditor();
}

function backToList() {
  currentId = null;
  editView.classList.add("hidden");
  listView.classList.remove("hidden");
  renderList();
}

// ---------- editor ----------

const editorEl = document.getElementById("char-editor");

function current() { return chars.find((c) => c.id === currentId); }

function renderEditor() {
  const c = current();
  if (!c) return backToList();
  const d = derived(c);
  editorEl.innerHTML = "";

  const toolbar = document.createElement("div");
  toolbar.className = "sheet-toolbar";
  const otherMode = mode === "edit" ? "preview" : "edit";
  toolbar.innerHTML = `<div class="toolbar-back"><button class="btn small" id="back-btn">‹ Characters</button> <strong id="edit-title"></strong></div>
    <span class="toolbar-kind" id="edit-kind"></span>
    <span style="flex:1"></span>
    <button class="btn small" id="mode-${otherMode}">${otherMode === "preview" ? "Preview" : "Edit"}</button>
    <div class="header-actions menu-wrap">
      <button class="btn small" id="char-json-btn" type="button" aria-haspopup="true" aria-expanded="false">JSON data ▾</button>
      <div class="menu hidden" id="char-json-menu" role="menu">
        <button class="menu-item" id="export-one" type="button" role="menuitem">Export JSON</button>
        <button class="menu-item" id="import-one-btn" type="button" role="menuitem">Import JSON</button>
      </div>
      <input type="file" id="import-one" accept="application/json,.json" class="hidden">
    </div>`;
  toolbar.querySelector("#back-btn").addEventListener("click", backToList);
  toolbar.querySelector("#edit-title").textContent = c.name;
  toolbar.querySelector("#edit-kind").textContent = ` (${kindLabel(c)})`; // kind in brackets, not bolded
  // only the mode that can actually be clicked is shown — the active mode's button is omitted
  toolbar.querySelector(`#mode-${otherMode}`).addEventListener("click", () => { mode = otherMode; renderEditor(); });
  // "JSON data" dropdown like the top bar's — but scoped to this character only
  const jsonBtn = toolbar.querySelector("#char-json-btn");
  const jsonMenu = toolbar.querySelector("#char-json-menu");
  const closeJsonMenu = () => { jsonMenu.classList.add("hidden"); jsonBtn.setAttribute("aria-expanded", "false"); };
  jsonBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    globalThis.mqCloseMenus && globalThis.mqCloseMenus(jsonMenu);
    const open = jsonMenu.classList.toggle("hidden");
    jsonBtn.setAttribute("aria-expanded", String(!open));
  });
  toolbar.querySelector("#export-one").addEventListener("click", () => {
    closeJsonMenu();
    const exportData = { ...c };
    if (c.kind === "pc") exportData.advancementPoints = { unspent: c.advancementPoints?.unspent ?? 0, spent: d.apSpent };
    else delete exportData.advancementPoints; // NPCs carry no AP data
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = `${c.name || "character"}.pmq.json`; a.click();
  });
  const imp = toolbar.querySelector("#import-one");
  toolbar.querySelector("#import-one-btn").addEventListener("click", () => { closeJsonMenu(); imp.click(); });
  imp.addEventListener("change", () => {
    const f = imp.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        const data = JSON.parse(r.result);
        data.id = c.id; // replace current character, keep slot
        if (data.kind === "pc") data.advancementPoints = { unspent: +data.advancementPoints?.unspent || 0 }; // spent is recomputed from Progress modifiers
        else delete data.advancementPoints;
        chars = chars.map((x) => (x.id === c.id ? data : x));
        persist(); renderEditor();
      } catch (e) { alert(`Could not import: ${e.message}`); }
      imp.value = "";
    };
    r.readAsText(f);
  });
  editorEl.appendChild(toolbar);

  if (mode === "preview") editorEl.appendChild(previewSheet(c, d));
  else editorEl.appendChild(editSheet(c, d));
}

// assistive Base Value Array card (values shown outside the dropdown)
function arrAssistCard(c) {
  const arrSel = document.createElement("select");
  for (const name of Object.keys(ARRAYS)) { const o = document.createElement("option"); o.value = name; o.textContent = name; arrSel.appendChild(o); }
  const arrValues = document.createElement("div");
  arrValues.className = "array-values";
  const renderArrValues = () => { arrValues.textContent = "Values: " + ARRAYS[arrSel.value].join(", "); };
  arrSel.addEventListener("change", renderArrValues);
  renderArrValues();
  const card = document.createElement("div");
  card.className = "assist-card";
  const title = document.createElement("div");
  title.className = "assist-title";
  title.textContent = "Base Value Array";
  const note = document.createElement("div");
  note.className = "assist-note";
  note.textContent = "Assign the numbers to stats manually.";
  card.appendChild(title);
  card.appendChild(arrSel);
  card.appendChild(arrValues);
  card.appendChild(note);
  return card;
}

// ----- edit mode: all sections stacked -----

function editSheet(c, d) {
  const wrap = document.createElement("div");

  wrap.appendChild(section("Identity", (sec) => {
    sec.appendChild(kvInput("Name", c.name, (v) => { c.name = v; persist(); }));
    sec.appendChild(kvInput("Species", c.species, (v) => { c.species = v; persist(); })); // free text entry, not a list
    sec.appendChild(typesEditor(c));
    sec.appendChild(kvInput("Height", c.height, (v) => { c.height = v; persist(); }, "text", "m"));
    sec.appendChild(kvInput("Weight", c.weight, (v) => { c.weight = v; persist(); }, "text", "kg"));
    sec.appendChild(portraitEditor(c));
  }));

  wrap.appendChild(section("Core stats", (sec) => {
    if (c.kind === "npc") {
      // NPC: the general Core value first, then one exception input per stat below
      sec.appendChild(kvInput("Core stats base value", c.npcCategories.core, (v) => { c.npcCategories.core = +v || 0; persist(); refreshDerivedPanel(); }, "number"));
    }
    const grid = statGrid(CORE_STATS, CORE_LABEL, c.coreStats, c, "core");
    sec.appendChild(grid);
    sec.appendChild(derivedPanel(d));
  }));

  wrap.appendChild(section("Knowledge / Social / Bonus stats", (sec) => {
    sec.appendChild(arrAssistCard(c)); // assistive array selection above the stat inputs
    if (c.kind === "npc") sec.appendChild(kvInput("Knowledge stats base value", c.npcCategories.knowledge, (v) => { c.npcCategories.knowledge = +v || 0; persist(); }, "number"));
    sec.appendChild(statGrid(KNOWLEDGE_STATS, KNOWLEDGE_LABEL, c.knowledgeStats, c, "knowledge"));
    if (c.kind === "npc") sec.appendChild(kvInput("Social stats base value", c.npcCategories.social, (v) => { c.npcCategories.social = +v || 0; persist(); }, "number"));
    sec.appendChild(statGrid(SOCIAL_STATS, SOCIAL_LABEL, c.socialStats, c, "social"));
    const bAdd = document.createElement("button"); bAdd.className = "btn small add-btn"; bAdd.type = "button"; bAdd.textContent = "Add Bonus stat";
    bAdd.addEventListener("click", () => {
      const bInp = document.createElement("input"); bInp.placeholder = "Custom topic (e.g. Cooking)"; bInp.style.width = "220px";
      const parts = c.kind === "npc" ? ["base"] : STAT_PARTS; // NPCs have no progress/bonus inputs
      const fields = {};
      for (const key of parts) {
        const f = statPartField(key, 0, () => {});
        f.inp.style.width = "70px";
        fields[key] = f;
      }
      const m = openModal("Add Bonus stat", (body) => {
        const row = document.createElement("div"); row.className = "kv-row";
        row.append(bInp, ...parts.map((k) => fields[k].field));
        body.appendChild(row);
        const preview = modalPreview(body);
        const upd = () => {
          const vals = parts.map((k) => +fields[k].inp.value || 0);
          preview.set("<strong>" + (bInp.value || "Custom") + "</strong> — " + parts.map((k, i) => k + " " + vals[i]).join(", ") + " = " + vals.reduce((a, b) => a + b, 0));
        };
        bInp.addEventListener("input", upd);
        for (const k of parts) fields[k].inp.addEventListener("input", upd);
        upd();
      }, [{
        label: "Add", primary: true,
        onClick: () => {
          const entry = { topic: bInp.value || "Custom" };
          for (const k of parts) entry[k] = +fields[k].inp.value || 0;
          c.bonusStats.push(entry); persist(); renderEditor(); m.close();
        },
      }]);
    });
    sec.appendChild(kvRow("Bonus stats", bAdd));
    for (const b of c.bonusStats) {
      const content = document.createElement("div");
      content.className = "kv-row";
      const name = document.createElement("strong"); name.textContent = b.topic; name.style.marginRight = "8px";
      content.append(name, ...(c.kind === "npc" ? ["base"] : STAT_PARTS).map((key) => statPartField(key, b[key], (v) => { b[key] = v; persist(); }).field));
      const card = itemCard("", () => { c.bonusStats = c.bonusStats.filter((x) => x !== b); persist(); renderEditor(); });
      card.querySelector(".grow").appendChild(content);
      sec.appendChild(card);
    }
  }));

  wrap.appendChild(section("Abilities", (sec) => {
    for (let i = 0; i < 2; i++) {
      const slot = document.createElement("div");
      slot.className = "ability-slot";
      const sel = document.createElement("select");
      const empty = document.createElement("option"); empty.value = ""; empty.textContent = "-"; sel.appendChild(empty);
      for (const [name] of ABILITIES) { const o = document.createElement("option"); o.value = name; o.textContent = name; sel.appendChild(o); }
      const cur = c.abilities[i];
      sel.value = cur?.name || "";
      const desc = document.createElement("div");
      desc.className = "ability-desc";
      const statRow = document.createElement("div");
      statRow.className = "kv-row";
      const renderSlot = () => {
        const info = ABILITIES.find(([n]) => n === sel.value);
        desc.textContent = info ? info[1] : "";
        statRow.innerHTML = "";
        if (sel.value === "Specialized") {
          // Specialized: choose which stat gets the +2
          const statSel = document.createElement("select");
          const opts = [...KNOWLEDGE_STATS.map((k) => KNOWLEDGE_LABEL[k]), ...SOCIAL_STATS.map((k) => SOCIAL_LABEL[k]), ...c.bonusStats.map((b) => `Bonus: ${b.topic}`)];
          for (const o of opts) { const op = document.createElement("option"); op.value = o; op.textContent = o; statSel.appendChild(op); }
          statSel.value = cur?.stat || opts[0];
          statSel.addEventListener("change", () => { if (c.abilities[i]) { c.abilities[i].stat = statSel.value; persist(); } });
          const lab = document.createElement("span");
          lab.style.cssText = "font-size:12px;color:var(--muted)";
          lab.textContent = "Stat that gets the +2:";
          statRow.append(lab, statSel);
        }
      };
      sel.addEventListener("change", () => {
        const prev = c.abilities[i];
        c.abilities[i] = sel.value ? { name: sel.value, stat: prev?.stat } : undefined;
        c.abilities = c.abilities.filter(Boolean);
        persist(); renderEditor();
      });
      renderSlot();
      slot.append(sel, desc, statRow);
      sec.appendChild(slot);
    }
  }));

  wrap.appendChild(section("Resistances / Weaknesses", (sec) => sec.appendChild(resEditor(c))));

  wrap.appendChild(section("Moves (max 4 learnt + Basic attack)", (sec) => {
    movesEditor(c).then((el) => sec.appendChild(el)); // async: fetch library, then append
  }));


  wrap.appendChild(section("Notes", (sec) => {
    const ta = document.createElement("textarea"); ta.rows = 8; ta.style.width = "100%"; ta.style.resize = "vertical"; ta.value = c.notes;
    ta.addEventListener("change", () => { c.notes = ta.value; persist(); });
    sec.appendChild(ta);
  }));

  return wrap;
}

// ----- preview mode: full character sheet in two columns (XLSX layout); only in-play
// values and the Buff/debuff column are editable -----

function previewSheet(c, d) {
  const el = document.createElement("div");
  el.className = "sheet-preview";

  const cols = document.createElement("div");
  cols.className = "pv-cols";
  const left = document.createElement("div");
  const right = document.createElement("div");
  right.className = "pv-right";
  cols.append(left, right);
  el.appendChild(cols);

  // ----- left column: high-level info, stats table, Moves -----
  const idRow = (label, value) => {
    const r = document.createElement("div"); r.className = "pv-row";
    const l = document.createElement("label"); l.textContent = label;
    const v = document.createElement("span"); v.textContent = value || "-";
    r.append(l, v); left.appendChild(r);
  };
  idRow("Name", c.name);
  idRow("Species", c.species);
  idRow("Types", c.types.join(", "));
  idRow("Height", c.height ? c.height + " m" : "");
  idRow("Weight", c.weight ? c.weight + " kg" : "");
  idRow("Resistances", c.resistances.map((r) => `${r.type} (${r.level})`).join(", "));
  idRow("Weaknesses", c.weaknesses.map((r) => `${r.type} (${r.level})`).join(", "));
  idRow("Abilities", c.abilities.map((a) => typeof a === "string" ? a : a.name + (a.stat ? " (" + a.stat + ")" : "")).join(", ") || "-");

  const statTable = (title, stats, labels, store, cat) => {
    const h = document.createElement("div"); h.className = "pv-h"; h.textContent = title;
    left.appendChild(h);
    const t = document.createElement("table");
    t.className = "pv-table";
    const npc = c.kind === "npc";
    t.innerHTML = npc
      ? "<thead><tr><th></th><th>Base value</th><th>Exception</th><th>Buff/debuff</th><th>Total</th></tr></thead>"
      : "<thead><tr><th></th><th>Base value</th><th>Progress</th><th>Bonuses</th><th>Buff/debuff</th><th>Total</th></tr></thead>";
    const tb = document.createElement("tbody");
    for (const s of stats) {
      if (!store[s]) store[s] = blankStat();
      const st = store[s];
      const base = npc ? (c.npcCategories[cat] || 0) : (st.base || 0); // NPC: the category's general value
      const mid = npc ? (st.exception || 0) : (st.progress || 0); // NPC: Exception instead of Progress
      const bon = npc ? 0 : (st.bonus || 0); // NPC: no Bonuses column
      const total = base + mid + bon;
      const tr = document.createElement("tr");
      const buffKey = labels[s];
      tr.innerHTML = npc
        ? `<td>${labels[s]}</td><td>${base}</td><td>${mid}</td>`
        : `<td>${labels[s]}</td><td>${base}</td><td>${mid}</td><td>${bon}</td>`;
      const tdBuff = document.createElement("td");
      const inp = document.createElement("input");
      inp.type = "number"; inp.value = c.buffsDebuffs[buffKey] || 0; inp.className = "pv-buff";
      inp.title = "Buff/debuff stages (editable in preview)";
      inp.addEventListener("change", () => {
        const v = +inp.value || 0;
        if (v) c.buffsDebuffs[buffKey] = v; else delete c.buffsDebuffs[buffKey];
        persist(); renderEditor();
      });
      tdBuff.appendChild(inp);
      tr.appendChild(tdBuff);
      const tdTotal = document.createElement("td");
      tdTotal.textContent = total + (c.buffsDebuffs[buffKey] || 0);
      tr.appendChild(tdTotal);
      tb.appendChild(tr);
    }
    t.appendChild(tb);
    left.appendChild(t);
  };
  statTable("CORE STATS", CORE_STATS, CORE_LABEL, c.coreStats, "core");
  statTable("KNOWLEDGE STATS", KNOWLEDGE_STATS, KNOWLEDGE_LABEL, c.knowledgeStats, "knowledge");
  statTable("SOCIAL STATS", SOCIAL_STATS, SOCIAL_LABEL, c.socialStats, "social");
  if (c.bonusStats.length) {
    const h = document.createElement("div"); h.className = "pv-h"; h.textContent = "BONUS STATS";
    left.appendChild(h);
    const t = document.createElement("table");
    t.className = "pv-table pv-bonus";
    const npc = c.kind === "npc";
    t.innerHTML = npc
      ? "<thead><tr><th></th><th>Base value</th><th>Total</th></tr></thead>"
      : "<thead><tr><th></th><th>Base value</th><th>Progress</th><th>Bonuses</th><th>Total</th></tr></thead>";
    const tb = document.createElement("tbody");
    for (const b of c.bonusStats) {
      const tr = document.createElement("tr");
      tr.innerHTML = npc
        ? "<td>" + b.topic + "</td><td>" + (b.base || 0) + "</td><td>" + (b.base || 0) + "</td>"
        : "<td>" + b.topic + "</td><td>" + (b.base || 0) + "</td><td>" + (b.progress || 0) + "</td><td>" + (b.bonus || 0) + "</td><td>" + ((b.base || 0) + (b.progress || 0) + (b.bonus || 0)) + "</td>";
      tb.appendChild(tr);
    }
    t.appendChild(tb);
    left.appendChild(t);
  }

  const mh = document.createElement("div"); mh.className = "pv-h"; mh.textContent = "MOVES";
  left.appendChild(mh);
  const mv = document.createElement("div"); mv.className = "pv-moves";
  mv.appendChild(basicAttackCard(c, d)); // Basic attack is always available — shown as the first Move
  for (const m of c.moves) {
    mv.appendChild(moveCardEl(m, computeMoveFields(m, (k) => finalStat(c, k), d.level, c.types)));
  }
  left.appendChild(mv);

  // ----- right column: portrait, derived values, expendable points, conditions, notes -----
  const img = document.createElement("img");
  img.className = "char-portrait pv-portrait";
  img.alt = "Portrait";
  img.src = c.portrait?.data ? `data:${c.portrait.mimeType};base64,${c.portrait.data}` : "/assets/img/placeholder.svg";
  right.appendChild(img);

  const rRow = (label, value, editable, onSet, max) => {
    const r = document.createElement("div"); r.className = "pv-row";
    const l = document.createElement("label"); l.textContent = label;
    r.appendChild(l);
    if (editable) {
      const inp = document.createElement("input");
      inp.type = "number"; inp.value = value;
      if (max !== undefined) inp.max = max;
      inp.addEventListener("change", () => { onSet(+inp.value || 0); persist(); });
      r.appendChild(inp);
    } else {
      const v = document.createElement("span"); v.textContent = value; r.appendChild(v);
    }
    right.appendChild(r);
  };
  rRow("Level", d.level);
  rRow("Max HP", d.maxHP);
  rRow("Current HP", c.hp.current, true, (v) => { c.hp.current = v; }, d.maxHP);
  rRow("Severe Damage", c.hp.severeDamage, true, (v) => { c.hp.severeDamage = v; });
  rRow("Max PP", d.maxPP);
  rRow("Current PP", c.pp.current, true, (v) => { c.pp.current = v; }, d.maxPP);
  rRow("Movement Range (m)", d.movement);
  rRow("Base Evasion", d.baseEvasion);
  rRow("Evasion buff/debuff", c.buffsDebuffs["Evasion"] || 0, true, (v) => { if (v) c.buffsDebuffs["Evasion"] = v; else delete c.buffsDebuffs["Evasion"]; });
  rRow("Initiative modifier", finalStat(c, "speed"));
  if (c.kind === "pc") { // Advancement Points are only tracked for player characters
    rRow("Advancement Points (unspent)", c.advancementPoints?.unspent ?? 0, true, (v) => { (c.advancementPoints ||= { unspent: 0 }).unspent = v; });
    rRow("Advancement Points (spent)", d.apSpent);
  }
  if (c.kind === "pc") rRow("Fate Points (max 2)", c.fatePoints, true, (v) => { c.fatePoints = Math.max(0, Math.min(2, v)); }, 2);

  const ch = document.createElement("div"); ch.className = "pv-h"; ch.textContent = "Status Conditions";
  right.appendChild(ch);
  right.appendChild(conditionsEditor(c, false));

  const nh = document.createElement("div"); nh.className = "pv-h"; nh.textContent = "Notes";
  right.appendChild(nh);
  const notes = document.createElement("textarea");
  notes.className = "pv-notes";
  notes.rows = 16; notes.style.width = "100%"; notes.style.resize = "vertical";
  notes.value = c.notes || "";
  notes.addEventListener("change", () => { c.notes = notes.value; persist(); });
  right.appendChild(notes);

  return el;
}

// condensed "Basic attack" card shown as the first Move in the preview (ruleset > Moves > Basic attack)
function basicAttackCard(c, d) {
  const card = document.createElement("div");
  card.className = "move-card";
  card.innerHTML = `<h3>Basic attack</h3><p>Single target, <strong>Physical &amp; Melee</strong> (1 m, includes free Movement Action) or <strong>Special &amp; Long Range</strong> (20 m + 2x (Sp.) Attack), Type <strong>one of the user’s types</strong>, PP cost <strong>0</strong>, Accuracy <strong>+10</strong>, Damage <strong>4 + 2d4</strong> (includes STAB bonus)</p>`;
  // calculated values at the bottom, like the other Move cards
  const atkP = finalStat(c, "attack"), atkS = finalStat(c, "specialAttack");
  const calc = document.createElement("div");
  calc.className = "move-calc";
  calc.innerHTML = `<div class="calc-title">Calculated</div><dl><dt>Range</dt><dd>1 m (Physical &amp; Melee) or ${20 + 2 * atkS} m (Special &amp; Long Range)</dd><dt>Attack Power</dt><dd>${4 + atkP} + 2d4 (Physical) or ${4 + atkS} + 2d4 (Special)</dd></dl>`;
  card.appendChild(calc);
  return card;
}

// ---------- small builders ----------

// Modal: closed by the X button (top right), the Cancel button (bottom right,
// left of the confirm buttons), the Escape key, or clicking outside the modal
// (on the backdrop).
function openModal(title, buildBody, confirms = []) {
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  const modal = document.createElement("div");
  modal.className = "modal card";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  const head = document.createElement("div");
  head.className = "modal-head";
  const h = document.createElement("h3");
  h.textContent = title;
  const x = document.createElement("button");
  x.className = "modal-x"; x.type = "button"; x.textContent = "\u00d7";
  x.setAttribute("aria-label", "Close");
  x.addEventListener("click", close);
  head.append(h, x);
  const body = document.createElement("div");
  body.className = "modal-body";
  buildBody(body);
  const foot = document.createElement("div");
  foot.className = "modal-foot";
  // right-aligned group: Cancel first, then the confirm buttons (Add / Confirm / ...)
  const cancel = document.createElement("button");
  cancel.className = "btn"; cancel.type = "button"; cancel.textContent = "Cancel";
  cancel.addEventListener("click", close);
  foot.appendChild(cancel);
  for (const c of confirms) {
    const btn = document.createElement("button");
    btn.className = "btn" + (c.primary ? " primary" : ""); btn.type = "button"; btn.textContent = c.label;
    btn.addEventListener("click", () => { c.onClick(); });
    foot.appendChild(btn);
  }
  modal.append(head, body, foot);
  backdrop.appendChild(modal);
  function onKey(e) { if (e.key === "Escape") close(); }
  function close() { backdrop.remove(); document.removeEventListener("keydown", onKey); }
  document.addEventListener("keydown", onKey);
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) close(); });
  document.body.appendChild(backdrop);
  return { close, body };
}

// live preview of the current modal selection (for selections whose meaning
// is not obvious from the control itself)
function modalPreview(body) {
  const pv = document.createElement("div");
  pv.className = "modal-preview";
  body.appendChild(pv);
  return { el: pv, set(html) { pv.innerHTML = html; } };
}

// An added item shown as a card: Remove button on the right side when there is
// horizontal room, under the content when there is not (narrow screens).
function itemCard(contentHtml, onRemove) {
  const card = document.createElement("div");
  card.className = "item-card";
  const grow = document.createElement("div");
  grow.className = "grow";
  grow.innerHTML = contentHtml;
  const rm = document.createElement("button");
  rm.className = "btn small danger"; rm.type = "button"; rm.textContent = "Remove";
  rm.addEventListener("click", onRemove);
  card.append(grow, rm);
  return card;
}


function section(title, build) {
  const sec = document.createElement("div");
  sec.className = "sheet-section card";
  const h = document.createElement("h3"); h.textContent = title;
  sec.appendChild(h);
  build(sec);
  return sec;
}

function kvRow(label, control) {
  const r = document.createElement("div"); r.className = "kv-row";
  const l = document.createElement("span"); l.textContent = label; l.style.minWidth = "180px"; l.style.fontSize = "13px"; l.style.color = "var(--muted)";
  r.append(l, control);
  return r;
}

function kvInput(label, value, onChange, type = "text", unit = "") {
  const inp = document.createElement("input");
  inp.type = type; inp.value = value ?? "";
  inp.addEventListener("change", () => onChange(inp.value));
  if (!unit) return kvRow(label, inp);
  const wrap = document.createElement("span");
  wrap.style.cssText = "display:inline-flex;align-items:center;gap:4px";
  const u = document.createElement("span");
  u.style.cssText = "font-size:12px;color:var(--muted)";
  u.textContent = unit;
  wrap.append(inp, u);
  return kvRow(label, wrap);
}

function kvSelect(label, sel, hint) {
  const wrap = document.createElement("div");
  wrap.appendChild(sel);
  if (hint) { const p = document.createElement("div"); p.style.cssText = "font-size:12px;color:var(--muted)"; p.textContent = hint; wrap.appendChild(p); }
  return kvRow(label, wrap);
}

// one labeled number field for a stat part (base / progress / bonus); the label
// under the input is the key itself, shared by the bonus-stat modal and cards
function statPartField(key, val, onChange) {
  const inp = document.createElement("input");
  inp.type = "number"; inp.value = val || 0; inp.style.width = "60px";
  inp.addEventListener("change", () => onChange(+inp.value || 0));
  const w = document.createElement("label");
  w.style.cssText = "display:flex;flex-direction:column;font-size:11px;color:var(--muted)";
  w.append(inp, key);
  return { field: w, inp };
}

function statGrid(stats, labels, store, c, cat) {
  const grid = document.createElement("div");
  grid.className = "stat-grid";
  for (const s of stats) {
    if (!store[s]) store[s] = blankStat();
    const cell = document.createElement("div");
    cell.className = "stat-cell";
    cell.innerHTML = `<div class="sname"></div><div class="fields"></div>`;
    cell.querySelector(".sname").textContent = labels[s];
    const fields = cell.querySelector(".fields");
    const mk = (key, val) => {
      const wrap = document.createElement("label");
      const inp = document.createElement("input");
      inp.type = "number"; inp.value = val || 0;
      inp.addEventListener("change", () => { store[s][key] = +inp.value || 0; persist(); if (cat === "core") refreshDerivedPanel(); });
      const cap = document.createElement("span");
      cap.textContent = key; // full word, no vague abbreviations
      wrap.append(inp, cap);
      fields.appendChild(wrap);
    };
    if (c.kind === "npc") {
      // NPC: exception modifier instead of base/progress/bonus
      mk("exception", store[s].exception || 0);
    } else {
      mk("base", store[s].base); mk("progress", store[s].progress); mk("bonus", store[s].bonus);
    }
    grid.appendChild(cell);
  }
  return grid;
}

function derivedPanel(d) {
  const p = document.createElement("div");
  p.className = "derived-panel";
  p.id = "derived-panel";
  p.innerHTML = [["Max HP", "maxHP", d.maxHP], ["Max PP", "maxPP", d.maxPP], ["Movement Range", "movement", `${d.movement} m`], ["Base Evasion", "baseEvasion", d.baseEvasion], ["Level", "level", d.level]]
    .map(([k, key, v]) => `<div class="drow"><span>${k}</span><strong data-d="${key}">${v}</strong></div>`).join("");
  return p;
}

// recompute derived values and update the panel in place (live, no Update button, no focus loss)
function refreshDerivedPanel() {
  const c = current();
  if (!c) return;
  const d = derived(c);
  const panel = document.getElementById("derived-panel");
  if (!panel) return;
  for (const el of panel.querySelectorAll("[data-d]")) {
    const k = el.getAttribute("data-d");
    el.textContent = k === "movement" ? `${d.movement} m` : d[k];
  }
}

// Pokémon have at most two types: two dropdowns with an empty option each,
// instead of an "Add type" button adding to a list
function typesEditor(c) {
  const wrap = document.createElement("div");
  const row = document.createElement("div"); row.className = "kv-row";
  const selects = [];
  for (let i = 0; i < 2; i++) {
    const sel = document.createElement("select");
    const empty = document.createElement("option"); empty.value = ""; empty.textContent = "-"; sel.appendChild(empty);
    const other = c.types[1 - i];
    for (const t of TYPES) {
      if (t === other) continue; // a type can occupy only one of the two slots
      const o = document.createElement("option"); o.value = t; o.textContent = t; sel.appendChild(o);
    }
    sel.value = c.types[i] || "";
    sel.addEventListener("change", () => {
      c.types = [selects[0].value, selects[1].value].filter(Boolean);
      persist(); renderEditor();
    });
    selects.push(sel);
    row.appendChild(sel);
  }
  wrap.appendChild(kvRow("Types", row));
  return wrap;
}

function resEditor(c) {
  const wrap = document.createElement("div");
  const addBtn = document.createElement("button");
  addBtn.className = "btn small add-btn"; addBtn.type = "button"; addBtn.textContent = "Add resistance / weakness";
  addBtn.addEventListener("click", () => {
    const sel = document.createElement("select");
    for (const t of TYPES) { const o = document.createElement("option"); o.value = t; o.textContent = t; sel.appendChild(o); }
    const lvl = document.createElement("select");
    for (const [label, val] of RES_LEVELS) { const o = document.createElement("option"); o.value = val; o.textContent = label; lvl.appendChild(o); }
    lvl.value = "-4"; // a x2 Weakness (-4) is the most common case
    const m = openModal("Add resistance / weakness", (body) => {
      const row = document.createElement("div"); row.className = "kv-row";
      row.append(sel, lvl);
      body.appendChild(row);
      const preview = modalPreview(body);
      const upd = () => preview.set("<strong>" + sel.value + "</strong> \u2014 " + lvl.options[lvl.selectedIndex].textContent);
      sel.addEventListener("change", upd); lvl.addEventListener("change", upd);
      upd();
    }, [{
      // the dropdown already decides resistance vs weakness vs immunity
      label: "Add", primary: true,
      onClick: () => {
        const entry = { type: sel.value, level: lvl.value };
        if (lvl.value === "immune" || +lvl.value > 0) c.resistances.push(entry);
        else c.weaknesses.push(entry);
        persist(); renderEditor(); m.close();
      },
    }]);
  });
  wrap.appendChild(addBtn); // no extra label — the section heading already says it
  const list = (arr, label) => {
    for (const e of arr) {
      wrap.appendChild(itemCard("<strong>" + label + ":</strong> " + e.type + " (" + e.level + ")", () => { arr.splice(arr.indexOf(e), 1); persist(); renderEditor(); }));
    }
  };
  list(c.resistances, "Resistance"); list(c.weaknesses, "Weakness");
  return wrap;
}

async function movesEditor(c) {
  if (!movesLib.length) movesLib = [...loadCustomMoves(), ...(await (await fetch("/assets/data/moves.json")).json())]; // custom Moves first
  const wrap = document.createElement("div");
  const addBtn = document.createElement("button");
  addBtn.className = "btn small add-btn"; addBtn.type = "button"; addBtn.textContent = "Add Move from library";
  addBtn.addEventListener("click", () => {
    const search = document.createElement("input");
    search.type = "search"; search.placeholder = "Filter Move library\u2026"; search.style.flex = "1"; search.style.minWidth = "160px";
    const typeSel = document.createElement("select");
    const allTypes = document.createElement("option"); allTypes.value = ""; allTypes.textContent = "All types"; typeSel.appendChild(allTypes);
    for (const t of TYPES) { const o = document.createElement("option"); o.value = t; o.textContent = t; typeSel.appendChild(o); }
    const pick = document.createElement("div"); pick.className = "move-pick";
    const renderPick = () => {
      const q = search.value.toLowerCase();
      const ty = typeSel.value;
      pick.innerHTML = "";
      for (const m of movesLib.filter((m) => (!ty || m.type === ty) && (!q || m.name.toLowerCase().includes(q)))) {
        const b = document.createElement("button");
        b.className = "btn small" + (c.moves.some((x) => x.name === m.name) ? " added" : "");
        b.type = "button"; b.textContent = m.name + (m.custom ? " (custom)" : "");
        b.disabled = c.moves.length >= 4 && !c.moves.some((x) => x.name === m.name);
        b.addEventListener("click", () => {
          if (c.moves.some((x) => x.name === m.name)) c.moves = c.moves.filter((x) => x.name !== m.name);
          else c.moves.push(JSON.parse(JSON.stringify(m)));
          persist(); renderEditor(); renderPick(); // keep the added/active state live in the dialog
        });
        pick.appendChild(b);
      }
    };
    search.addEventListener("input", renderPick);
    typeSel.addEventListener("change", renderPick);
    openModal("Add Move from library", (body) => {
      const row = document.createElement("div"); row.className = "kv-row";
      row.append(typeSel, search);
      body.appendChild(row);
      body.appendChild(pick);
    });
    renderPick();
  });
  wrap.appendChild(addBtn); // no extra label — the section heading already says it
  for (const m of c.moves) {
    wrap.appendChild(itemCard("<strong>" + m.name + "</strong> \u2014 " + m.type + ", PP " + (m.ppCost ?? 0) + (m.conversion === "indirect" ? ", indirect" : ""), () => { c.moves = c.moves.filter((x) => x !== m); persist(); renderEditor(); }));
  }
  const hint = document.createElement("div");
  hint.style.cssText = "font-size:12px;color:var(--muted);margin-top:6px";
  hint.textContent = "Basic attack is always available and not counted in the 4 learnt Moves.";
  wrap.appendChild(hint);
  return wrap;
}

function conditionsEditor(c, showBuffs = true) {
  const wrap = document.createElement("div");
  const addBtn = document.createElement("button");
  addBtn.className = "btn small add-btn"; addBtn.type = "button"; addBtn.textContent = "Add condition";
  addBtn.addEventListener("click", () => {
    const sel = document.createElement("select");
    for (const [name] of STATUS_CONDITIONS) { const o = document.createElement("option"); o.value = name; o.textContent = name; sel.appendChild(o); }
    const m = openModal("Add Status Condition", (body) => {
      body.appendChild(sel);
      const preview = modalPreview(body);
      const upd = () => {
        const info = STATUS_CONDITIONS.find(([n]) => n === sel.value);
        preview.set("<strong>" + sel.value + "</strong>" + (info ? " \u2014 (Removal DC " + (info[1] ?? "\u2014") + ") " + info[2] : ""));
      };
      sel.addEventListener("change", upd);
      upd();
    }, [{
      label: "Add", primary: true,
      onClick: () => { if (!c.statusConditions.includes(sel.value)) { c.statusConditions.push(sel.value); persist(); renderEditor(); } m.close(); },
    }]);
  });
  wrap.appendChild(addBtn); // no extra label — the section heading already says it
  for (const name of c.statusConditions) {
    const info = STATUS_CONDITIONS.find(([n]) => n === name);
    const dc = info && info[1] != null ? info[1] : "\u2014";
    wrap.appendChild(itemCard("<strong>" + name + "</strong><span class=\"cond-desc\">(Removal DC " + dc + ") " + (info ? info[2] : "") + "</span>", () => { c.statusConditions = c.statusConditions.filter((x) => x !== name); persist(); renderEditor(); }));
  }
  if (!showBuffs) return wrap;
  const bAdd = document.createElement("button"); bAdd.className = "btn small add-btn"; bAdd.type = "button"; bAdd.textContent = "Set buff/debuff stages";
  bAdd.addEventListener("click", () => {
    const statSel = document.createElement("select");
    for (const s of [...CORE_STATS.map((s) => CORE_LABEL[s]), "Accuracy", "Evasion"]) { const o = document.createElement("option"); o.value = s; o.textContent = s; statSel.appendChild(o); }
    const stageInp = document.createElement("input"); stageInp.type = "number"; stageInp.min = -6; stageInp.max = 6; stageInp.value = 1; stageInp.style.width = "70px";
    const m = openModal("Set buff/debuff stages", (body) => {
      const row = document.createElement("div"); row.className = "kv-row";
      row.append(statSel, stageInp);
      body.appendChild(row);
      const preview = modalPreview(body);
      const upd = () => {
        const stages = +stageInp.value || 0;
        const per = (statSel.value === "Accuracy" || statSel.value === "Evasion") ? 4 : 2;
        preview.set("<strong>" + statSel.value + "</strong>: " + (stages > 0 ? "+" : "") + stages + " stages \u2192 " + (stages > 0 ? "+" : "") + (stages * per) + " (stage = " + per + ", max \u00b16 stages" + (stages === 0 ? "; 0 removes the entry" : "") + ")");
      };
      statSel.addEventListener("change", upd); stageInp.addEventListener("input", upd);
      upd();
    }, [{
      label: "Set", primary: true,
      onClick: () => {
        const v = +stageInp.value || 0;
        if (v) c.buffsDebuffs[statSel.value] = v; else delete c.buffsDebuffs[statSel.value];
        persist(); renderEditor(); m.close();
      },
    }]);
  });
  wrap.appendChild(kvRow("Buffs/debuffs (stages; stage = 2, or 4 for Accuracy/Evasion, max \u00b16)", bAdd));
  for (const [stat, stages] of Object.entries(c.buffsDebuffs)) {
    wrap.appendChild(itemCard("<strong>" + stat + ":</strong> " + (stages > 0 ? "+" : "") + stages + " stages", () => { delete c.buffsDebuffs[stat]; persist(); renderEditor(); }));
  }
  return wrap;
}

function portraitEditor(c) {
  const wrap = document.createElement("div");
  const row = document.createElement("div"); row.className = "kv-row";
  const inp = document.createElement("input"); inp.type = "file"; inp.accept = "image/*";
  let rm = null;
  const addRemove = () => {
    if (rm) return;
    rm = document.createElement("button"); rm.className = "btn small danger"; rm.textContent = "Remove portrait";
    rm.addEventListener("click", () => { c.portrait = null; persist(); renderEditor(); });
    row.appendChild(rm);
  };
  inp.addEventListener("change", () => {
    const f = inp.files[0]; if (!f) return;
    const img = new Image();
    img.onload = () => {
      const size = 96;
      const cv = document.createElement("canvas");
      cv.width = cv.height = size;
      const ctx = cv.getContext("2d");
      // downscale to the small square and stretch to fit it
      const scale = Math.max(size / img.width, size / img.height);
      const w = img.width * scale, h = img.height * scale;
      ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
      c.portrait = { mimeType: "image/png", data: cv.toDataURL("image/png").split(",")[1] };
      persist();
      addRemove(); // no full re-render here, so the file selector keeps showing the chosen file
    };
    img.src = URL.createObjectURL(f);
  });
  row.appendChild(inp);
  if (c.portrait) addRemove();
  wrap.appendChild(kvRow("Portrait (downscaled to a small square, stored as base64)", row));
  return wrap;
}

// ---------- init ----------

document.getElementById("new-pc").addEventListener("click", () => { const c = newCharacter("pc"); chars.push(c); persist(); openEditor(c.id); });
document.getElementById("new-npc").addEventListener("click", () => { const c = newCharacter("npc"); chars.push(c); persist(); openEditor(c.id); });
filterInput.addEventListener("input", renderList);
// close an open dropdown menu (top bar or character toolbar) when clicking outside it
document.addEventListener("click", (e) => {
  for (const menu of document.querySelectorAll(".menu:not(.hidden)")) {
    if (!menu.contains(e.target)) {
      menu.classList.add("hidden");
      const btn = menu.parentElement && menu.parentElement.querySelector("[aria-haspopup]");
      if (btn) btn.setAttribute("aria-expanded", "false");
    }
  }
});
renderList();
fetch("/assets/data/moves.json").then((r) => r.json()).then((m) => { movesLib = [...loadCustomMoves(), ...m]; });
