// move-editor.js — create/edit a custom Move (stored in localStorage), styled like the character editor.

import { loadCustomMoves, saveCustomMoves } from "./main.js";

const TYPES = ["Normal","Fire","Water","Electric","Grass","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Dark","Steel","Fairy"];
const EXTRA_KEYWORDS = ["Priority","Charging","Recharging","Counter","Single-target (self)"]; // checkbox keywords
// mutually exclusive keyword groups chosen with dropdowns (defaults: Single-target, Physical, Melee)
const KW_GROUPS = [
  ["Area of Effect/Single-target", ["Single-target", "Area of Effect"]],
  ["Physical/Special/Status", ["Physical", "Special", "Status"]],
  ["Melee/Long Range", ["Melee", "Long Range"]],
];

// value lists from the ruleset's conversion tables (PP cost, Power, Accuracy/Percentage Tests, Range, AoE shapes)
const PP_COSTS = ["0", "1", "2", "3"]; // official PP 20+ / 15 / 10 / 5
// Range menu options depend on the Melee/Long Range keyword (the value itself is never set automatically)
const RANGES_MELEE = ["1 m", "Self", "-"];
const RANGES_LONG = ["20 m + 2x (Sp.) Attack", "15 m", "10 m + (Sp.) Attack", "Self", "-"];
function rangeList() {
  return move.keywords.includes("Melee") ? RANGES_MELEE : RANGES_LONG;
}
const ACCURACIES = ["+10","+9","+8","+7","+6","+5","+4","+3","+2","+1","+0","-1","-2","-3","-4","-5","-6","-7","-8","Hits automatically","-"]; // 100% down to 10% in 5% steps
// Power options: only the examples directly shown in the ruleset's Power conversion table
// (single-target: flat value + one set of Power Dice; AoE: two sets of Power Dice, no flat
// value), and "-"; any custom value can be typed freely. The Power menu shows the list
// matching the Move's current targeting keyword.
const POWERS_ST = ["2 + d2","4 + d4","6 + d6","8 + d8","10 + d10","12 + d12","14 + d10 + d4","16 + d10 + d6","18 + d10 + d8","20 + 2d10","22 + d10 + d12","24 + 2d10 + d4","26 + 2d10 + d6","-"];
const POWERS_AOE = ["2d2","2d4","2d6","2d8","2d10","2d12","2d10 + 2d4","2d10 + 2d6","2d10 + 2d8","4d10","2d10 + 2d12","4d10 + 2d4","4d10 + 2d6","-"];
function powerList() {
  return move.keywords.some((k) => k.toLowerCase().includes("area of effect")) ? POWERS_AOE : POWERS_ST;
}
const SHAPES = ["-","Blast (small)","Cone (small)","Blast (large)","Blast (all)"];
const SHAPE_SIZES = ["-","2 m + half (Sp.) Attack","4 m + (Sp.) Attack","5 m","10 m","50 m (encounter-wide)"];
const PLACEMENTS = ["-","Projected","Ranged","Radial","Flared"];

function blankMove() {
  return { id: crypto.randomUUID(), custom: true, conversion: "custom", official: "", name: "New Move", type: "Normal", keywords: ["Single-target", "Physical", "Melee"], ppCost: 0, range: "1 m", shape: "", shapeSize: "", placementType: "", accuracy: "+10", power: "4 + d4", secondaryEffect: "", description: "" };
}

let moves = loadCustomMoves();
const params = new URLSearchParams(location.search);
let move = moves.find((m) => m.id === params.get("id")) || null;
if (!move) {
  move = blankMove();
  moves.push(move);
  saveCustomMoves(moves);
  history.replaceState(null, "", `?id=${move.id}`);
}

const persist = () => saveCustomMoves(moves);

// ---------- small builders (same style as the character editor) ----------

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

function kvInput(label, value, onChange, type = "text") {
  const inp = document.createElement("input");
  inp.type = type; inp.value = value ?? "";
  inp.addEventListener("change", () => onChange(inp.value));
  return kvRow(label, inp);
}

// text input + dropdown-icon button: type freely, or pick a value from the official list
function kvInputWithMenu(label, value, list, onChange) {
  const wrap = document.createElement("span");
  wrap.className = "menu-wrap input-menu-wrap";
  const inp = document.createElement("input");
  inp.type = "text"; inp.value = value ?? "";
  inp.addEventListener("change", () => onChange(inp.value));
  const btn = document.createElement("button");
  btn.className = "input-menu-btn"; btn.type = "button"; btn.textContent = "▾";
  btn.setAttribute("aria-label", "Choose from list"); btn.setAttribute("aria-haspopup", "true"); btn.setAttribute("aria-expanded", "false");
  const menu = document.createElement("div");
  menu.className = "menu hidden"; menu.setAttribute("role", "menu");
  const close = () => { menu.classList.add("hidden"); btn.setAttribute("aria-expanded", "false"); };
  const build = () => {
    menu.innerHTML = "";
    for (const o of (typeof list === "function" ? list() : list)) {
      const item = document.createElement("button");
      item.className = "menu-item"; item.type = "button"; item.textContent = o;
      item.addEventListener("click", () => { inp.value = o; onChange(o); close(); });
      menu.appendChild(item);
    }
  };
  build();
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    globalThis.mqCloseMenus && globalThis.mqCloseMenus(menu);
    const open = menu.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", String(!open));
  });
  document.addEventListener("click", (e) => { if (!menu.classList.contains("hidden") && !wrap.contains(e.target)) close(); });
  wrap.append(inp, btn, menu);
  const row = kvRow(label, wrap);
  row.refreshMenu = build; // re-read the list (the Power list depends on the AoE keyword)
  return row;
}

function kvSelect(label, options, current, onChange) {
  const sel = document.createElement("select");
  for (const o of options) { const op = document.createElement("option"); op.value = o; op.textContent = o; sel.appendChild(op); }
  sel.value = current;
  sel.addEventListener("change", () => onChange(sel.value));
  return kvRow(label, sel);
}

// ---------- editor ----------

const editorEl = document.getElementById("move-editor");

function render() {
  editorEl.innerHTML = "";

  // toolbar, styled like the character sheet toolbar
  const toolbar = document.createElement("div");
  toolbar.className = "sheet-toolbar";
  toolbar.innerHTML = `<a class="btn small" href="/moves/">‹ Moves</a>
    <strong id="mv-title"></strong>
    <span style="flex:1"></span>
    <a class="btn small" id="mv-preview" href="/moves/preview/?id=${encodeURIComponent(move.id)}">Preview</a>
    <div class="header-actions menu-wrap">
      <button class="btn small" id="mv-json-btn" type="button" aria-haspopup="true" aria-expanded="false">JSON data ▾</button>
      <div class="menu hidden" id="mv-json-menu" role="menu">
        <button class="menu-item" id="export-one" type="button" role="menuitem">Export JSON</button>
        <button class="menu-item" id="import-one-btn" type="button" role="menuitem">Import JSON</button>
      </div>
      <input type="file" id="import-one" accept="application/json,.json" class="hidden">
    </div>`;
  toolbar.querySelector("#mv-title").textContent = move.name || "New Move";
  editorEl.appendChild(toolbar);

  // "JSON data" dropdown, scoped to this Move only
  const jsonBtn = toolbar.querySelector("#mv-json-btn");
  const jsonMenu = toolbar.querySelector("#mv-json-menu");
  const closeJson = () => { jsonMenu.classList.add("hidden"); jsonBtn.setAttribute("aria-expanded", "false"); };
  jsonBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    globalThis.mqCloseMenus && globalThis.mqCloseMenus(jsonMenu);
    const open = jsonMenu.classList.toggle("hidden");
    jsonBtn.setAttribute("aria-expanded", String(!open));
  });
  document.addEventListener("click", (e) => {
    if (!jsonMenu.classList.contains("hidden") && !jsonMenu.contains(e.target) && e.target !== jsonBtn) closeJson();
  });
  toolbar.querySelector("#export-one").addEventListener("click", () => {
    closeJson();
    const blob = new Blob([JSON.stringify(move, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = `${move.name || "move"}.pmq-move.json`; a.click();
  });
  const imp = toolbar.querySelector("#import-one");
  toolbar.querySelector("#import-one-btn").addEventListener("click", () => { closeJson(); imp.click(); });
  imp.addEventListener("change", () => {
    const f = imp.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        const data = JSON.parse(r.result);
        const { id, custom, conversion, ...fields } = data; // keep this Move's id and custom flag
        Object.assign(move, fields);
        move.conversion = "custom";
        persist(); render();
      } catch (e) { alert(`Could not import: ${e.message}`); }
      imp.value = "";
    };
    r.readAsText(f);
  });

  const set = (key, v) => { move[key] = v; persist(); };

  editorEl.appendChild(section("Identity", (sec) => {
    sec.appendChild(kvInput("Name", move.name, (v) => { set("name", v); toolbar.querySelector("#mv-title").textContent = v || "New Move"; }));
    sec.appendChild(kvSelect("Type", TYPES, move.type, (v) => set("type", v)));
  }));

  editorEl.appendChild(convSection());

  let powerRow = null; let rangeRow = null; // Values fields whose menu lists depend on keywords

  editorEl.appendChild(section("Keywords", (sec) => {
    const setGroup = (options, picked) => {
      move.keywords = move.keywords.filter((k) => !options.includes(k));
      move.keywords.push(picked);
      persist();
      for (const r of [powerRow, rangeRow]) if (r && r.refreshMenu) r.refreshMenu();
    };
    for (const [label, options] of KW_GROUPS) {
      const current = options.find((o) => move.keywords.includes(o)) || options[0];
      sec.appendChild(kvSelect(label, options, current, (v) => setGroup(options, v)));
    }
    const list = document.createElement("div");
    list.className = "keyword-list";
    const boxes = [];
    for (const k of EXTRA_KEYWORDS) {
      const lab = document.createElement("label");
      const cb = document.createElement("input");
      cb.type = "checkbox"; cb.checked = move.keywords.includes(k);
      boxes.push([k, cb]);
      cb.addEventListener("change", () => {
        const groups = KW_GROUPS.flatMap(([, opts]) => opts);
        move.keywords = [...groups.filter((g) => move.keywords.includes(g)), ...boxes.filter(([, b]) => b.checked).map(([k]) => k)];
        persist();
      });
      lab.append(cb, k);
      list.appendChild(lab);
    }
    sec.appendChild(list);
  }));

  editorEl.appendChild(section("Values", (sec) => {
    sec.appendChild(kvInputWithMenu("PP cost", String(move.ppCost ?? 0), PP_COSTS, (v) => set("ppCost", +v || 0)));
    rangeRow = kvInputWithMenu("Range", move.range, rangeList, (v) => set("range", v));
    sec.appendChild(rangeRow);
    sec.appendChild(kvInputWithMenu("Accuracy", move.accuracy, ACCURACIES, (v) => set("accuracy", v)));
    powerRow = kvInputWithMenu("Power", move.power, powerList, (v) => set("power", v));
    sec.appendChild(powerRow);
    sec.appendChild(kvInputWithMenu("Shape", move.shape, SHAPES, (v) => set("shape", v)));
    sec.appendChild(kvInputWithMenu("Shape size", move.shapeSize, SHAPE_SIZES, (v) => set("shapeSize", v)));
    sec.appendChild(kvInputWithMenu("Placement type", move.placementType, PLACEMENTS, (v) => set("placementType", v)));
  }));

  editorEl.appendChild(section("Effects", (sec) => {
    const sec2 = document.createElement("textarea"); sec2.rows = 3; sec2.style.width = "100%"; sec2.style.resize = "vertical"; sec2.value = move.secondaryEffect || "";
    sec2.addEventListener("change", () => set("secondaryEffect", sec2.value));
    sec.appendChild(kvRow("Secondary effect", sec2));
    const desc = document.createElement("textarea"); desc.rows = 5; desc.style.width = "100%"; desc.style.resize = "vertical"; desc.value = move.description || "";
    desc.addEventListener("change", () => set("description", desc.value));
    sec.appendChild(kvRow("Description", desc));
  }));
}

// grey reference section above Values: input official values, get the converted values as text (never written into the form)
const AOE_RULES = ["All Adjacent","Your Party / Your Side","All Adjacent Foes","All Foes / Opposing Side","All","Entire Field"];
const AOE_TABLE = {
  "All Adjacent": ["Blast (small)", { ps: "2 m + ½ (Sp.) Attack", st: "5 m" }, "Projected", "-"],
  "Your Party / Your Side": ["Blast (small)", { ps: "2 m + ½ (Sp.) Attack", st: "5 m" }, "Projected", "-"],
  "All Adjacent Foes": ["Cone (small)", { ps: "4 m + (Sp.) Attack", st: "10 m" }, "Flared", "-"],
  "All Foes / Opposing Side": ["Blast (large)", { ps: "4 m + (Sp.) Attack", st: "10 m" }, "Ranged", { ps: "10 m + (Sp.) Attack", st: "15 m" }],
  "All": ["Blast (large)", { ps: "4 m + (Sp.) Attack", st: "10 m" }, "Projected", "-"],
  "Entire Field": ["Blast (all)", { ps: "50 m (encounter-wide)", st: "50 m (encounter-wide)" }, "Radial", "-"],
};
const POWER_ROWS = [[5,20,"2","d2"],[25,40,"4","d4"],[45,60,"6","d6"],[65,80,"8","d8"],[85,100,"10","d10"],[105,120,"12","d12"],[125,140,"14","d10 + d4"],[145,160,"16","d10 + d6"],[165,180,"18","d10 + d8"],[185,200,"20","2d10"],[205,220,"22","d10 + d12"],[225,240,"24","2d10 + d4"],[245,260,"26","2d10 + d6"]];
const doubleDice = (d) => d.replace(/(\d*)d(\d+)/g, (m, n, f) => `${(n ? +n : 1) * 2}d${f}`);
const convertPP = (pp) => { pp = +pp; return Number.isNaN(pp) || pp < 0 ? "Not valid" : pp <= 5 ? 3 : pp <= 10 ? 2 : pp <= 15 ? 1 : 0; }; // same boundaries as the XLSX OFFICIAL VALUES formula
const convertPower = (power, aoe) => {
  const p = +power;
  if (Number.isNaN(p) || p < 5 || p > 260) return "Not valid"; // as in the XLSX; the table starts at official Power 5
  const row = POWER_ROWS.find(([lo, hi]) => p >= lo && p <= hi);
  return aoe ? doubleDice(row[3]) : `${row[2]} + ${row[3]}`;
};
const convertAccuracy = (pct) => {
  const p = +pct;
  if (Number.isNaN(p) || p < 0 || p > 100) return "Not valid";
  const m = 10 - Math.floor((100 - p) / 5); // +10, minus 1 per missing full 5%
  return (m >= 0 ? "+" : "") + m;
};

function convSection() {
  const sec = section("Conversion reference", (sec) => {
    sec.classList.add("conv-section");
    const catSel = document.createElement("select");
    for (const c of ["Physical", "Special", "Status"]) { const o = document.createElement("option"); o.value = c; o.textContent = c; catSel.appendChild(o); }
    catSel.value = "Physical";
    sec.appendChild(kvRow("Official category", catSel));
    const pp = document.createElement("input"); pp.type = "number"; pp.placeholder = "e.g. 15";
    const power = document.createElement("input"); power.type = "number"; power.placeholder = "e.g. 90";
    const acc = document.createElement("input"); acc.type = "number"; acc.placeholder = "e.g. 100";
    const contact = document.createElement("input"); contact.type = "checkbox";
    const aoeRule = document.createElement("select");
    const noneOpt = document.createElement("option"); noneOpt.value = ""; noneOpt.textContent = "-"; aoeRule.appendChild(noneOpt);
    for (const r of AOE_RULES) { const o = document.createElement("option"); o.value = r; o.textContent = r; aoeRule.appendChild(o); }
    sec.appendChild(kvRow("Official PP", pp));
    sec.appendChild(kvRow("Official Power", power));
    sec.appendChild(kvRow("Official Accuracy %", acc));
    sec.appendChild(kvRow("Makes contact (Melee)", contact));
    sec.appendChild(kvRow("Official AoE range rule", aoeRule));
    const out = document.createElement("div");
    out.className = "conv-output";
    sec.appendChild(out);
    const upd = () => {
      const aoe = aoeRule.value !== ""; // the converter is isolated: the Move's keywords play no role here
      const status = catSel.value === "Status";
      const parts = [];
      if (pp.value !== "") parts.push(`PP cost ${convertPP(pp.value)}`);
      if (power.value !== "") parts.push(`Power ${convertPower(power.value, false)}` + (aoe ? ` (AoE: ${convertPower(power.value, true)})` : ""));
      if (acc.value !== "") parts.push(`Accuracy ${convertAccuracy(acc.value)}`);
      if (aoe) {
        const [shape, size, placement, range] = AOE_TABLE[aoeRule.value];
        const sizeTxt = status ? size.st : size.ps;
        const rangeTxt = range === "-" ? "-" : status ? range.st : range.ps;
        parts.push(`Shape ${shape} · size ${sizeTxt} · placement ${placement}` + (rangeTxt !== "-" ? ` · Range ${rangeTxt}` : ""));
      } else if (contact.checked) {
        parts.push("Range 1 m (Melee)");
      } else {
        parts.push(status ? "Range 15 m" : "Range 20 m + 2x (Sp.) Attack (Long Range)");
      }
      out.textContent = parts.length ? "Converted: " + parts.join("  ·  ") : "Enter official values to see the converted output here.";
    };
    for (const el of [pp, power, acc, contact]) el.addEventListener("input", upd);
    aoeRule.addEventListener("change", upd);
    catSel.addEventListener("change", upd);
    upd();
  });
  return sec;
}
render();
