// main.js — shared header (logo, nav, download/upload JSON).

const PAGES = [
  ["/", "Home"],
  ["/rules/", "Rules"],
  ["/moves/", "Moves"],
  ["/creator/", "Characters"],
  ["/links-and-downloads/", "Links and downloads"],
  ["/about/", "About"],
];

const STORAGE_KEY = "mq.characters.v1";
const MOVES_KEY = "mq.customMoves.v1";

export function loadCharacters() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function saveCharacters(chars) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(chars));
}

export function loadCustomMoves() {
  try {
    const raw = localStorage.getItem(MOVES_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function saveCustomMoves(moves) {
  localStorage.setItem(MOVES_KEY, JSON.stringify(moves));
}

function headerHtml() {
  const norm = (p) => p.replace(/\/index\.html$/, "/").replace(/\/$/, "") || "/";
  const path = norm(location.pathname);
  const nav = PAGES.map(([href, label]) => {
    const active = path === norm(href) ? ' class="active"' : "";
    return `<a href="${href}"${active}>${label}</a>`;
  }).join("");
  // the last two tabs are shown in the "More" dropdown on narrow screens (Characters never is)
  const moreLinks = PAGES.slice(-2).map(([href, label]) => {
    const active = path === norm(href) ? ' class="active"' : "";
    return `<a href="${href}"${active}>${label}</a>`;
  }).join("");
  return `
  <a class="site-logo" href="/">Mystery Quest</a>
  <nav class="site-nav">${nav}</nav>
  <div class="header-actions">
    <div class="menu-wrap nav-more-wrap">
      <button class="btn small" id="nav-more-btn" type="button" aria-haspopup="true" aria-expanded="false">☰ More ▾</button>
      <div class="menu hidden" id="nav-more" role="menu">${moreLinks}</div>
    </div>
    <div class="menu-wrap">
    <button class="btn small" id="json-menu-btn" type="button" aria-haspopup="true" aria-expanded="false">JSON data ▾</button>
    <div class="menu hidden" id="json-menu" role="menu">
      <button class="menu-item" id="download-json" type="button" role="menuitem">Export JSON</button>
      <button class="menu-item" id="upload-json" type="button" role="menuitem">Import JSON</button>
    </div>
    <input type="file" id="upload-json-input" accept="application/json,.json" class="hidden">
    </div>
  </div>`;
}

function wireDataButtons() {
  const dl = document.getElementById("download-json");
  const ul = document.getElementById("upload-json");
  const input = document.getElementById("upload-json-input");
  const menuBtn = document.getElementById("json-menu-btn");
  const menu = document.getElementById("json-menu");
  if (!dl || !ul || !input || !menuBtn || !menu) return;

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeMenus(menu);
    const open = menu.classList.toggle("hidden");
    menuBtn.setAttribute("aria-expanded", String(!open));
  });
  document.addEventListener("click", (e) => {
    if (!menu.classList.contains("hidden") && !menu.contains(e.target)) {
      menu.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
  for (const item of menu.querySelectorAll(".menu-item")) {
    item.addEventListener("click", () => {
      menu.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  }

  dl.addEventListener("click", () => {
    const data = {
      schemaVersion: 1,
      kind: "mystery-quest-data",
      exportedAt: new Date().toISOString(),
      characters: loadCharacters(),
      customMoves: loadCustomMoves(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "mystery-quest-data.json";
    a.click();
    URL.revokeObjectURL(a.href);
  });

  ul.addEventListener("click", () => input.click());
  input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        const chars = Array.isArray(data) ? data : data.characters;
        if (!Array.isArray(chars)) throw new Error("no characters array found");
        saveCharacters(chars);
        const customMoves = Array.isArray(data) ? [] : data.customMoves;
        if (Array.isArray(customMoves)) saveCustomMoves(customMoves);
        alert(`Imported ${chars.length} character(s), ${Array.isArray(customMoves) ? customMoves.length : 0} custom move(s).`);
        if (location.pathname.includes("/creator/") || location.pathname.includes("/moves/")) location.reload();
      } catch (e) {
        alert(`Could not import: ${e.message}`);
      }
      input.value = "";
    };
    reader.readAsText(file);
  });
}

function init() {
  const h = document.getElementById("site-header");
  if (h) { h.className = "site-header"; h.innerHTML = headerHtml(); }
  wireDataButtons();
  wireMenu("nav-more-btn", "nav-more");
}

// opening any dropdown menu closes every other menu on the page (top bar, toolbars, value lists)
globalThis.mqCloseMenus = (except) => {
  for (const m of document.querySelectorAll(".menu")) {
    if (m === except || m.classList.contains("hidden")) continue;
    m.classList.add("hidden");
    const b = m.parentElement && m.parentElement.querySelector("[aria-haspopup]");
    if (b) b.setAttribute("aria-expanded", "false");
  }
};
function closeMenus(except) { globalThis.mqCloseMenus(except); }

// dropdown menu wiring shared by the top-bar menus (More, JSON data)
function wireMenu(btnId, menuId) {
  const btn = document.getElementById(btnId);
  const menu = document.getElementById(menuId);
  if (!btn || !menu) return;
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeMenus(menu);
    const open = menu.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", String(!open));
  });
  document.addEventListener("click", (e) => {
    if (!menu.classList.contains("hidden") && !menu.contains(e.target) && e.target !== btn) {
      menu.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

// number-input hygiene shared by all pages: on change, normalize a signed integer like "+2" to "2"
// (capture phase, so it runs before the editors' own handlers read the value), and flag unparsable
// text in number inputs (validity.badInput) with the .invalid red outline
document.addEventListener("change", (e) => {
  const inp = e.target;
  if (!inp || inp.tagName !== "INPUT" || inp.type !== "number") return;
  const t = String(inp.value).trim();
  if (t !== "" && /^[+-]?[0-9]+$/.test(t) && String(parseInt(t, 10)) !== t) inp.value = String(parseInt(t, 10));
  inp.classList.toggle("invalid", !!(inp.validity && inp.validity.badInput));
}, true);
document.addEventListener("input", (e) => {
  const inp = e.target;
  if (inp && inp.tagName === "INPUT" && inp.type === "number") inp.classList.toggle("invalid", !!(inp.validity && inp.validity.badInput));
}, true);

document.addEventListener("DOMContentLoaded", init);
