"use strict";

/* ============================================================
   PICKWISE — Affiliate Marketing Website
   Full script.js
   ------------------------------------------------------------
   HOW TO EDIT:
   • Your Amazon links are already in the PRODUCTS list below.
   • Replace `img:` with your real product photo (see comments).
   • Fill in PRODUCT #2 where marked "👈 FILL IN".
   • Delete the SAMPLE products once you add your real ones.
   ============================================================ */


/* ==================== PRODUCT DATA ==================== */
const PRODUCTS = [

  /* ─────────────────────────────────────────────
     ✅ YOUR REAL PRODUCT #1 — Audio-Technica AT2020
     ───────────────────────────────────────────── */
  {
    id: 101,
    title: "Audio-Technica AT2020 Cardioid Condenser Microphone",
    cat: "tech",
    price: 104.95,            // ⚠️ verify current Amazon price
    was: 149.00,              // ⚠️ set the real list price
    rating: 4.8,
    flag: "choice",           // choice / value / hot
    // 👇 Replace with your photo: right-click Amazon image → Copy image address
    img: "https://picsum.photos/seed/at2020-mic/600/400",
    video: "",                // 👈 paste a YouTube video ID here (optional)
    url: "https://www.amazon.com/dp/B0006H92QK?tag=shoyebkhan192-20",
    verdict: "The podcast mic that launched a thousand studios — pro sound without the pro price.",
    tags: ["microphone","mic","podcast","streaming","studio","xlr","condenser","audio","recording","music","tech"]
  },

  /* ─────────────────────────────────────────────
     ⬜ YOUR REAL PRODUCT #2 — fill in the blanks
     ───────────────────────────────────────────── */
  {
    id: 102,
    title: "PRODUCT NAME HERE",            // 👈 FILL IN the product name
    cat: "tech",                            // 👈 tech / home / fitness
    price: 0.00,                            // 👈 current price
    was: 0.00,                              // 👈 list price (for discount %)
    rating: 4.5,                            // 👈 Amazon star rating
    flag: "hot",                            // choice / value / hot
    img: "https://picsum.photos/seed/product-2/600/400",   // 👈 your photo
    video: "",                              // 👈 YouTube video ID (optional)
    url: "https://www.amazon.com/dp/B089L9Y6Z1?tag=shoyebkhan192-20",
    verdict: "ONE-SENTENCE VERDICT HERE.",  // 👈 FILL IN
    tags: ["keyword1","keyword2","keyword3"] // 👈 words buyers search
  },

  /* ─────────────────────────────────────────────
     🗑️ SAMPLE PRODUCTS — delete these when ready
     ───────────────────────────────────────────── */
  { id: 1, title: "Aura X3 Wireless Headphones", cat: "tech", price: 89.99, was: 144.99, rating: 4.8, flag: "choice",
    img: "https://picsum.photos/seed/aura-headphones/600/400", video: "",
    url: "https://example.com/affiliate/aura-x3?tag=shoyebkhan192-20",
    verdict: "Best sound-per-dollar we've measured this year.",
    tags: ["headphones","wireless","bluetooth","audio","music","anc","tech"] },

  { id: 2, title: "PulseFit Sport Earbuds", cat: "tech", price: 59.00, was: 79.00, rating: 4.5, flag: "value",
    img: "https://picsum.photos/seed/sport-earbuds/600/400", video: "",
    url: "https://example.com/affiliate/pulsefit-sport?tag=shoyebkhan192-20",
    verdict: "Sweat-proof grip that outlasts pricier rivals.",
    tags: ["earbuds","running","fitness","workout","waterproof","audio","tech"] },

  { id: 3, title: "Bassline Duo Bookshelf Speakers", cat: "tech", price: 129.00, was: 159.00, rating: 4.6, flag: null,
    img: "https://picsum.photos/seed/bookshelf-speakers/600/400", video: "",
    url: "https://example.com/affiliate/bassline-duo?tag=shoyebkhan192-20",
    verdict: "Room-filling stereo without the subwoofer tax.",
    tags: ["speakers","audio","music","home","stereo","tech"] },

  { id: 4, title: "Nova Watch S2", cat: "tech", price: 129.99, was: 179.99, rating: 4.4, flag: "hot",
    img: "https://picsum.photos/seed/nova-smartwatch/600/400", video: "",
    url: "https://example.com/affiliate/nova-watch-s2?tag=shoyebkhan192-20",
    verdict: "Battery for days, sensors that actually track.",
    tags: ["smartwatch","watch","fitness","tracker","health","battery","tech"] },

  { id: 5, title: "CrispChef Air Fryer Pro", cat: "home", price: 99.00, was: 139.00, rating: 4.7, flag: "choice",
    img: "https://picsum.photos/seed/air-fryer-pro/600/400", video: "",
    url: "https://example.com/affiliate/crispchef-pro?tag=shoyebkhan192-20",
    verdict: "Crispier fries, faster preheat, easier cleanup.",
    tags: ["air fryer","kitchen","cooking","healthy","home"] },

  { id: 6, title: "BrewMaster 12-Cup Coffee Maker", cat: "home", price: 74.50, was: 99.00, rating: 4.6, flag: "value",
    img: "https://picsum.photos/seed/coffee-maker/600/400", video: "",
    url: "https://example.com/affiliate/brewmaster-12?tag=shoyebkhan192-20",
    verdict: "The 4-minute morning brew, perfected.",
    tags: ["coffee","kitchen","brew","espresso","home"] },

  { id: 7, title: "RoboGlide Robot Vacuum", cat: "home", price: 199.00, was: 299.00, rating: 4.5, flag: "hot",
    img: "https://picsum.photos/seed/robot-vacuum/600/400", video: "",
    url: "https://example.com/affiliate/roboglide?tag=shoyebkhan192-20",
    verdict: "Maps your home, dodges the socks.",
    tags: ["vacuum","cleaning","robot","smart","home"] },

  { id: 8, title: "FlexFit Resistance Bands Set", cat: "fitness", price: 24.99, was: 39.99, rating: 4.3, flag: "value",
    img: "https://picsum.photos/seed/resistance-bands/600/400", video: "",
    url: "https://example.com/affiliate/flexfit-bands?tag=shoyebkhan192-20",
    verdict: "A full gym that fits in a drawer.",
    tags: ["bands","workout","gym","strength","exercise","fitness","home"] },

  { id: 9, title: "ZenMat Pro Yoga Mat", cat: "fitness", price: 34.99, was: 49.99, rating: 4.8, flag: "choice",
    img: "https://picsum.photos/seed/yoga-mat-pro/600/400", video: "",
    url: "https://example.com/affiliate/zenmat-pro?tag=shoyebkhan192-20",
    verdict: "Grippy, cushioned, and impossible to smell.",
    tags: ["yoga","mat","stretching","exercise","fitness"] },
];

/* Badge labels shown on cards */
const FLAG_LABEL = { choice: "Editor's Choice", value: "Best Value", hot: "Hot Deal" };

/* Words the AI ignores when matching */
const STOP = new Set(["best","the","for","with","under","buy","cheap","good","want","need","please","and","that","this","what","which","how","much","recommend","product","products","something","upgrade"]);


/* ==================== DOM REFERENCES ==================== */
const grid        = document.getElementById("productGrid");
const resultCount = document.getElementById("resultCount");
const searchInput = document.getElementById("searchInput");
const sortSelect  = document.getElementById("sortSelect");
const chatLog     = document.getElementById("chatLog");
const chatForm    = document.getElementById("chatForm");
const chatInput   = document.getElementById("chatInput");
const modal       = document.getElementById("videoModal");
const modalFrame  = document.getElementById("modalFrame");


/* ==================== UTILITY HELPERS ==================== */
/* Escape text so it's safe to insert into HTML */
const esc = (v) => String(v).replace(/[&<>"']/g, (s) =>
  ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[s]));

/* Discount percentage from price vs. list price */
const discount = (p) => Math.round((1 - p.price / p.was) * 100);

/* Only allow safe http/https links */
function safeUrl(u){
  try { const x = new URL(u); return (x.protocol==="http:"||x.protocol==="https:") ? x.href : "#"; }
  catch { return "#"; }
}


/* ==================== PRODUCT GRID ==================== */
function cardEl(p){
  const el = document.createElement("article");
  el.className = "card";
  el.innerHTML = `
    <div class="card-media">
      <img src="${p.img}" alt="${esc(p.title)}" loading="lazy" />
      ${p.flag ? `<span class="flag ${p.flag}">${FLAG_LABEL[p.flag]}</span>` : ""}
      ${p.was > p.price ? `<span class="off">−${discount(p)}%</span>` : ""}
    </div>
    <div class="card-body">
      <div class="card-top">
        <span class="cat">${esc(p.cat)}</span>
        <span class="stars">★ ${p.rating.toFixed(1)}</span>
      </div>
      <h3>${esc(p.title)}</h3>
      <p class="verdict">"${esc(p.verdict)}"</p>
      <div class="price-row">
        <span class="price">$${p.price.toFixed(2)}</span>
        ${p.was > p.price ? `<s>$${p.was.toFixed(2)}</s>` : ""}
      </div>
      <div class="card-actions">
        <a class="btn" href="${safeUrl(p.url)}" target="_blank" rel="sponsored nofollow noopener">View Deal <span class="arr">→</span></a>
        ${p.video ? `<button class="btn ghost watch" data-id="${p.id}">▶ Review</button>` : ""}
      </div>
    </div>`;
  return el;
}

function renderGrid(list){
  grid.innerHTML = "";
  resultCount.textContent = `SHOWING ${list.length} OF ${PRODUCTS.length} PICKS`;
  if(!list.length){
    grid.innerHTML = `<p class="empty">▸ No picks match — try clearing filters.</p>`;
    return;
  }
  list.forEach((p, i) => {
    const el = cardEl(p);
    el.style.transitionDelay = `${Math.min(i, 8) * 55}ms`;   // staggered entrance
    grid.appendChild(el);
  });
  /* Trigger entrance animation */
  requestAnimationFrame(() => requestAnimationFrame(() => {
    grid.querySelectorAll(".card").forEach((c) => c.classList.add("in"));
  }));
}

/* ---- Filtering + sorting ---- */
let activeCat = "all";
function applyFilters(){
  const q = searchInput.value.trim().toLowerCase();
  let list = PRODUCTS.filter((p) =>
    (activeCat === "all" || p.cat === activeCat) &&
    (!q || `${p.title} ${p.cat} ${p.verdict} ${p.tags.join(" ")}`.toLowerCase().includes(q))
  );
  const sort = sortSelect.value;
  if(sort === "price-asc")  list = [...list].sort((a,b) => a.price - b.price);
  if(sort === "price-desc") list = [...list].sort((a,b) => b.price - a.price);
  if(sort === "discount")   list = [...list].sort((a,b) => discount(b) - discount(a));
  if(sort === "rated")      list = [...list].sort((a,b) => b.rating - a.rating);
  renderGrid(list);
}

document.querySelectorAll(".chip").forEach((ch) =>
  ch.addEventListener("click", () => {
    document.querySelector(".chip.on")?.classList.remove("on");
    ch.classList.add("on");
    activeCat = ch.dataset.cat;
    applyFilters();
  })
);
searchInput.addEventListener("input", applyFilters);
sortSelect.addEventListener("change", applyFilters);


/* ==================== COUNTDOWN (Deal of the Day) ==================== */
const pad = (n) => String(n).padStart(2, "0");
function tickClock(){
  const now = new Date(), end = new Date(now);
  end.setHours(24, 0, 0, 0);                    // deal ends at midnight
  let s = Math.max(0, Math.floor((end - now) / 1000));
  document.getElementById("cdH").textContent = pad(Math.floor(s / 3600));
  document.getElementById("cdM").textContent = pad(Math.floor((s % 3600) / 60));
  document.getElementById("cdS").textContent = pad(s % 60);
}
tickClock();
setInterval(tickClock, 1000);


/* ==================== SCROLL REVEALS ==================== */
const revIO = new IntersectionObserver((entries) =>
  entries.forEach((en) => {
    if(en.isIntersecting){ en.target.classList.add("in"); revIO.unobserve(en.target); }
  }), { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => revIO.observe(el));


/* ==================== STAT COUNT-UP ==================== */
const statIO = new IntersectionObserver((entries) =>
  entries.forEach((en) => {
    if(!en.isIntersecting) return;
    statIO.unobserve(en.target);
    en.target.querySelectorAll("[data-count]").forEach((el) => {
      const target = parseFloat(el.dataset.count), pre = el.dataset.prefix || "";
      const t0 = performance.now(), dur = 1400;
      (function step(t){
        const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        el.textContent = pre + Math.round(target * e).toLocaleString();
        if(k < 1) requestAnimationFrame(step);
      })(t0);
    });
  }), { threshold: 0.4 });
statIO.observe(document.querySelector(".stats"));


/* ==================== AI ADVISOR ENGINE ==================== */
/* Pull meaningful words out of a question */
const tokensOf = (q) => q.toLowerCase().split(/[^a-z0-9+#]+/)
  .filter((w) => w.length > 2 && !STOP.has(w) && !/^\d+$/.test(w));

/* Detect a budget like "under $100" or "$50" */
function budgetOf(q){
  const patterns = [
    /(?:under|below|less than|budget|max|around|about|up to)\s*\$?\s*(\d+(?:\.\d+)?)/i,
    /\$\s*(\d+(?:\.\d+)?)/,
    /(\d+(?:\.\d+)?)\s*(?:dollars|usd|bucks)/i,
  ];
  for(const p of patterns){ const m = q.match(p); if(m) return parseFloat(m[1]); }
  return null;
}

/* Score every product against the question */
function recommend(q){
  const words = tokensOf(q), budget = budgetOf(q);
  const scored = PRODUCTS.map((p) => {
    let s = 0;
    const hay = `${p.title} ${p.cat} ${p.verdict} ${p.tags.join(" ")}`.toLowerCase();
    words.forEach((w) => {
      if(p.title.toLowerCase().includes(w)) s += 5;
      else if(p.tags.some((t) => t.includes(w))) s += 4;
      else if(p.cat.includes(w)) s += 3;
      else if(hay.includes(w)) s += 2;
    });
    s += p.rating;
    if(budget){ if(p.price <= budget) s += 6; else if(p.price <= budget * 1.15) s += 2; else s -= 8; }
    return { p, s };
  }).sort((a, b) => b.s - a.s);

  let top = scored.filter((x) => x.s > 2).slice(0, 3).map((x) => x.p);
  if(!top.length) top = [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 3);
  return { top, budget, words };
}

/* Build the AI's reply (with product mini-cards) */
function aiReply(q){
  const { top, budget, words } = recommend(q);
  const wrap = document.createElement("div");
  wrap.className = "msg ai";

  const intro = document.createElement("p");
  intro.textContent = budget
    ? `Budget spotted: $${budget}. These score highest at or under it:`
    : words.length
      ? `Matching "${words.slice(0, 2).join('", "')}" against ${PRODUCTS.length} lab-tested picks — here's what wins:`
      : `Here are our highest-scoring picks right now:`;
  wrap.appendChild(intro);

  top.forEach((p, i) => {
    const pick = document.createElement("div");
    pick.className = "ai-pick";
    pick.innerHTML = `
      <strong>${i + 1}. ${esc(p.title)}</strong>
      <span class="pick-meta">$${p.price.toFixed(2)} ${p.was > p.price ? `<s>$${p.was.toFixed(2)}</s> · −${discount(p)}%` : ""} · ★ ${p.rating}</span>
      <a href="${safeUrl(p.url)}" target="_blank" rel="sponsored nofollow noopener">View deal →</a>`;
    wrap.appendChild(pick);
  });

  const tip = document.createElement("p");
  tip.className = "tip";
  tip.textContent = `⏱ Prices verified today at ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} · Affiliate links, no extra cost to you.`;
  wrap.appendChild(tip);
  return wrap;
}

/* ---- Chat helpers ---- */
function addMsg(text, who){
  const m = document.createElement("div");
  m.className = `msg ${who}`;
  m.textContent = text;
  chatLog.appendChild(m);
  chatLog.scrollTop = chatLog.scrollHeight;
}
function typingEl(){
  const t = document.createElement("div");
  t.className = "msg ai typing";
  t.innerHTML = "<i></i><i></i><i></i>";
  return t;
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const q = chatInput.value.trim();
  if(!q) return;
  addMsg(q, "user");
  chatInput.value = "";
  const t = typingEl();
  chatLog.appendChild(t);
  chatLog.scrollTop = chatLog.scrollHeight;
  setTimeout(() => {
    t.remove();
    chatLog.appendChild(aiReply(q));
    chatLog.scrollTop = chatLog.scrollHeight;
  }, 800);
});

/* Suggestion chips fill + submit the question */
document.querySelectorAll(".suggest").forEach((b) =>
  b.addEventListener("click", () => {
    chatInput.value = b.textContent.trim();
    chatForm.requestSubmit();
  })
);


/* ==================== VIDEO MODAL ==================== */
function openVideo(p){
  modalFrame.innerHTML = p.video.endsWith(".mp4")
    ? `<video controls autoplay src="${p.video}"></video>`
    : `<iframe src="https://www.youtube-nocookie.com/embed/${p.video}?autoplay=1"
         title="${esc(p.title)} review"
         allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
         allowfullscreen></iframe>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}
function closeVideo(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalFrame.innerHTML = "";   // stops the video
}

/* "▶ Review" button on cards (event delegation) */
grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".watch");
  if(!btn) return;
  const p = PRODUCTS.find((x) => x.id == btn.dataset.id);
  if(p) openVideo(p);
});
document.getElementById("modalClose").addEventListener("click", closeVideo);
modal.addEventListener("click", (e) => { if(e.target === modal) closeVideo(); });
document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeVideo(); });


/* ==================== NEWSLETTER ==================== */
document.getElementById("nlForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("nlMsg").textContent = "✓ You're in — first Wire lands this Friday, 7:00 AM.";
  e.target.reset();
});


/* ==================== START THE SITE ==================== */
applyFilters();
addMsg("Hey — I'm Wire. Tell me what you're shopping for (and your budget) and I'll pull the best lab-tested picks.", "ai");
