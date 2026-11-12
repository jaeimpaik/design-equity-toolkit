// Landing page: builds phase tabs + a swipeable row of flip cards from cards-data.js

const phaseOf = key => PHASES.find(p => p.key === key);
const tabsEl = document.getElementById("tabs");
const rowEl = document.getElementById("row");

// Cards in phase order (so the row, tabs and NFC arrows all agree)
const ORDERED = PHASES.flatMap(p => CARDS.filter(c => c.phase === p.key));

function el(tag, attrs = {}, ...kids) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") n.className = v; else if (k === "text") n.textContent = v; else n.setAttribute(k, v);
  }
  kids.forEach(k => n.append(k));
  return n;
}

function buildCard(c) {
  const ph = phaseOf(c.phase);
  const badge = () => {
    const b = el("span", { class: "badge", text: ph.name });
    b.style.background = ph.bg; b.style.color = ph.ink; return b;
  };
  const card = el("div", { class: "card" });
  const inner = el("div", { class: "inner" });

  // FRONT: title + illustration
  const front = el("div", { class: "face front" });
  front.append(badge(), el("h3", { text: c.title }),
    el("img", { src: "assets/illustrations/" + c.image, alt: c.imageAlt, loading: "lazy" }));
  const flipF = el("button", { class: "flipbtn", "aria-label": "Flip card to see instructions for " + c.title, text: "Flip ↻" });
  front.append(flipF);

  // BACK: question + steps + link to full page
  const back = el("div", { class: "face back" });
  back.setAttribute("inert", ""); back.setAttribute("aria-hidden", "true");
  const ol = el("ol", { class: "steps" }); buildSteps(ol, c.steps);
  const flipB = el("button", { class: "flipbtn", "aria-label": "Flip card back to the front", text: "Flip back ↻" });
  const opens = el("p", { class: "opens" }, el("a", { href: "card.html?id=" + c.id, text: "Open full card →" }));
  const scroller = el("div", { class: "scrollbox", tabindex: "0", "aria-label": "Instructions for " + c.title });
  scroller.append(el("p", { class: "question", text: c.question }), ol);
  const foot = el("div", { class: "backfoot" }, flipB, opens);
  back.append(badge(), el("h3", { text: c.title }), scroller, foot);

  inner.append(front, back); card.append(inner);

  const setFlip = on => {
    card.classList.toggle("flipped", on);
    front.toggleAttribute("inert", on); front.setAttribute("aria-hidden", on);
    back.toggleAttribute("inert", !on); back.setAttribute("aria-hidden", !on);
    (on ? flipB : flipF).focus({ preventScroll: true });
  };
  flipF.addEventListener("click", () => setFlip(true));
  flipB.addEventListener("click", () => setFlip(false));

  const slide = el("div", { class: "slide", "data-phase": c.phase }); slide.append(card);
  return slide;
}

ORDERED.forEach(c => rowEl.append(buildCard(c)));

// Tabs
let tabs = [];
PHASES.forEach(p => {
  const t = el("button", { class: "tab", role: "tab", "aria-selected": "false", text: p.name });
  t.style.background = p.bg; t.style.color = p.ink;
  t.addEventListener("click", () => {
    const first = rowEl.querySelector('[data-phase="' + p.key + '"]');
    if (first) first.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", inline: "center", block: "nearest" });
  });
  tabsEl.append(t); tabs.push(t);
});

// Keep the active tab in sync with the card in view
const slides = [...rowEl.children];
function currentIndex() {
  const mid = rowEl.scrollLeft + rowEl.clientWidth / 2;
  let best = 0, bestD = Infinity;
  slides.forEach((s, i) => { const d = Math.abs(s.offsetLeft + s.offsetWidth / 2 - mid); if (d < bestD) { bestD = d; best = i; } });
  return best;
}
function sync() {
  const i = currentIndex(), key = ORDERED[i].phase;
  PHASES.forEach((p, n) => tabs[n].setAttribute("aria-selected", p.key === key ? "true" : "false"));
  document.getElementById("prev").disabled = i === 0;
  document.getElementById("next").disabled = i === slides.length - 1;
}
let ticking = false;
rowEl.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { sync(); ticking = false; }); } });
const go = d => slides[Math.max(0, Math.min(slides.length - 1, currentIndex() + d))]
  .scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", inline: "center", block: "nearest" });
document.getElementById("prev").addEventListener("click", () => go(-1));
document.getElementById("next").addEventListener("click", () => go(1));
rowEl.addEventListener("keydown", e => { if (e.key === "ArrowRight") { e.preventDefault(); go(1); } if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); } });
sync();
