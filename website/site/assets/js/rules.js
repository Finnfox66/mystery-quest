// rules.js — rules page: two-column layout, outline/contents with accordion headings,
// per-heading subheader counts and "›" jump buttons, and search that replaces the outline
// with results (breadcrumb + snippet + "›" jump). Both columns scroll independently (CSS).

const headings = JSON.parse(document.getElementById("headings-data").textContent);
const sections = JSON.parse(document.getElementById("search-data").textContent);
const site = JSON.parse(document.getElementById("site-data").textContent);

const outlineNav = document.getElementById("outline-nav");
const resultsBox = document.getElementById("outline-results");
const searchInput = document.getElementById("rules-search");
const searchClear = document.getElementById("search-clear");
const main = document.getElementById("rules-main");

document.getElementById("rules-version").textContent = `v${site.version}`;

// ---------- outline ----------

// Build DOM for a heading; children rendered lazily on expand. By default only H2 rows show.
const rowEls = new Map(); // heading index -> {row, childrenBox, expanded}

function makeRow(idx) {
  const h = headings[idx];
  const row = document.createElement("div");
  row.className = `outline-row outline-h${h.level}`;
  const hasChildren = h.children > 0;
  const toggle = document.createElement("button");
  toggle.className = "toggle";
  toggle.textContent = hasChildren ? "▸" : "";
  toggle.setAttribute("aria-label", "Expand/collapse subheadings");
  toggle.addEventListener("click", (e) => { e.stopPropagation(); toggleExpand(idx); });
  const label = document.createElement("button");
  label.className = hasChildren ? "label expandable" : "label"; // expandable headings get the link color
  label.type = "button";
  label.textContent = h.text;
  label.title = hasChildren ? `${h.text} — click to show/hide subheadings` : h.text;
  label.addEventListener("click", () => { if (hasChildren) toggleExpand(idx); });
  const count = document.createElement("span");
  count.className = "count";
  count.textContent = `(${h.children})`;
  const jump = document.createElement("button");
  jump.className = "jump";
  jump.type = "button";
  jump.textContent = "›";
  jump.title = "Scroll to this section";
  jump.addEventListener("click", (e) => { e.stopPropagation(); jumpTo(h.anchor); });
  row.append(toggle, label, count, jump);
  const childrenBox = document.createElement("div");
  childrenBox.className = "outline-children hidden";
  return { row, childrenBox, toggle, expanded: false, built: false };
}

function toggleExpand(idx) {
  const e = rowEls.get(idx);
  e.expanded = !e.expanded;
  e.toggle.textContent = e.expanded ? "▾" : "▸";
  if (e.expanded && !e.built) {
    e.built = true;
    for (let j = 0; j < headings.length; j++) {
      if (headings[j].parent === idx) {
        const c = ensureRow(j);
        e.childrenBox.appendChild(c.row);
        e.childrenBox.appendChild(c.childrenBox);
      }
    }
  }
  e.childrenBox.classList.toggle("hidden", !e.expanded);
}

function ensureRow(idx) {
  if (!rowEls.has(idx)) rowEls.set(idx, makeRow(idx));
  return rowEls.get(idx);
}

function buildOutline() {
  outlineNav.innerHTML = "";
  for (let j = 0; j < headings.length; j++) {
    const h = headings[j];
    if (h.level === 2 && h.parent <= 0) {
      // top-level H2 (parent is H1 title, which is not rendered) — show by default
      const e = ensureRow(j);
      outlineNav.appendChild(e.row);
      outlineNav.appendChild(e.childrenBox);
    } else if (h.level === 2) {
      const e = ensureRow(j);
      outlineNav.appendChild(e.row);
      outlineNav.appendChild(e.childrenBox);
    }
    // deeper levels are added lazily by their parents
  }
}

// ---------- scrolling / jumping ----------

function jumpTo(anchor, markTerm) {
  const el = document.getElementById(anchor);
  if (!el) return;
  const section = el.closest("section") || el;
  if (window.matchMedia("(max-width: 760px)").matches) {
    // small screens: the page itself scrolls (the main column is overflow: visible);
    // scroll past the sticky top bar so the section heading isn't hidden behind it
    const headerH = (document.querySelector(".site-header") || {}).offsetHeight || 0;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - headerH - 8, behavior: "smooth" });
  } else {
    // scroll the main column independently
    main.scrollTo({ top: el.getBoundingClientRect().top - main.getBoundingClientRect().top + main.scrollTop - 8, behavior: "smooth" });
  }
  section.classList.remove("flash");
  void section.offsetWidth;
  section.classList.add("flash");
  if (markTerm) highlightTerm(section, markTerm);
  history.replaceState(null, "", `#${anchor}`);
  closeModal(); // close the contents/search modal (small screens)
}

function highlightTerm(section, term) {
  const walker = document.createTreeWalker(section, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  const needle = term.toLowerCase();
  for (const node of nodes) {
    const idx = node.textContent.toLowerCase().indexOf(needle);
    if (idx === -1) continue;
    const range = document.createRange();
    range.setStart(node, idx);
    range.setEnd(node, idx + term.length);
    const mark = document.createElement("mark");
    try { range.surroundContents(mark); } catch { /* partial node, skip */ }
    break;
  }
}

// ---------- search ----------

function runSearch(q) {
  const needle = q.trim().toLowerCase();
  searchClear.classList.toggle("hidden", !needle);
  if (!needle) {
    resultsBox.classList.add("hidden");
    resultsBox.innerHTML = "";
    outlineNav.classList.remove("hidden");
    return;
  }
  outlineNav.classList.add("hidden");
  resultsBox.classList.remove("hidden");
  resultsBox.innerHTML = "";
  let count = 0;
  for (const s of sections) {
    const text = s.text.toLowerCase();
    const idx = text.indexOf(needle);
    if (idx === -1) continue;
    count++;
    const start = Math.max(0, idx - 90);
    const end = Math.min(s.text.length, idx + needle.length + 140);
    const snippet = (start > 0 ? "…" : "") + s.text.slice(start, end) + (end < s.text.length ? "…" : "");
    const item = document.createElement("div");
    item.className = "result-item";
    const crumb = document.createElement("div");
    crumb.className = "crumb";
    crumb.textContent = [...s.breadcrumb, s.heading].join(" > ");
    const snip = document.createElement("div");
    snip.className = "snippet";
    const before = snippet.slice(0, idx - start);
    const hit = snippet.slice(idx - start, idx - start + needle.length);
    const after = snippet.slice(idx - start + needle.length);
    snip.append(document.createTextNode(before), Object.assign(document.createElement("mark"), { textContent: hit }), document.createTextNode(after));
    const jump = document.createElement("button");
    jump.className = "jump";
    jump.type = "button";
    jump.textContent = "›";
    jump.addEventListener("click", () => jumpTo(s.anchor, q.trim()));
    item.append(crumb, snip, jump);
    resultsBox.appendChild(item);
  }
  if (!count) {
    resultsBox.innerHTML = '<p class="snippet">No matches.</p>';
  }
}

searchInput.addEventListener("input", () => runSearch(searchInput.value));
searchClear.addEventListener("click", () => {
  searchInput.value = "";
  runSearch("");
  searchInput.focus();
});
runSearch(searchInput.value); // re-run on load if the input still holds a search word (e.g. after a reload)

buildOutline();

// deep link on load
if (location.hash) {
  const anchor = decodeURIComponent(location.hash.slice(1));
  setTimeout(() => jumpTo(anchor), 50);
}

// ---------- small screens: contents/search live in a modal behind a floating button ----------

const outlineEl = document.getElementById("rules-outline");
const layoutEl = document.querySelector(".rules-layout");
const mainEl = document.getElementById("rules-main");

const fab = document.createElement("button");
fab.className = "rules-fab btn"; fab.type = "button"; fab.textContent = "☰";
fab.title = "Contents & search"; fab.setAttribute("aria-label", "Contents and search");

const backdrop = document.createElement("div");
backdrop.className = "modal-backdrop hidden";
const modal = document.createElement("div");
modal.className = "modal card"; modal.setAttribute("role", "dialog"); modal.setAttribute("aria-modal", "true");
modal.innerHTML = '<div class="modal-head"><h3>Contents &amp; search</h3><button class="modal-x" type="button" aria-label="Close">×</button></div><div class="modal-body"></div>';
const modalBody = modal.querySelector(".modal-body");
backdrop.appendChild(modal);
const closeModal = () => { backdrop.classList.add("hidden"); document.body.classList.remove("modal-open"); };
modal.querySelector(".modal-x").addEventListener("click", closeModal);
backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
fab.addEventListener("click", () => { backdrop.classList.remove("hidden"); document.body.classList.add("modal-open"); }); // lock page scroll while open
// jumping to a section from the modal closes it
outlineEl.addEventListener("click", (e) => { if (e.target.closest(".jump")) closeModal(); });

const mobileMq = window.matchMedia("(max-width: 760px)");
function placeOutline() {
  if (mobileMq.matches) {
    modalBody.appendChild(outlineEl); // move contents/search into the modal
    document.body.appendChild(fab);
    document.body.appendChild(backdrop);
  } else {
    closeModal();
    fab.remove();
    if (backdrop.parentNode) backdrop.remove();
    layoutEl.insertBefore(outlineEl, mainEl); // back beside the rules view
  }
}
if (mobileMq.addEventListener) mobileMq.addEventListener("change", placeOutline);
placeOutline();
