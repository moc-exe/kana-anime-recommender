
// --------- SCRIPTED DATA (mock recommendation pool) ----------
const SAMPLE_ANIME = [
  {
    id: 1,
    title: "Casshern Sins",
    moodTags: ["Melancholic", "Philosophical", "Slow-burn"],
    themes: ["Regret", "Identity", "Apocalypse"],
    shortDescription:
      "A wandering android in a decaying world, slowly realizing his role in why everything is collapsing.",
    synopsis:
      "In a ruined future where robots and humans are both succumbing to a mysterious 'Ruin', Casshern travels across desolate landscapes, meeting people who blame him for the end of the world. The show is episodic, reflective, and gives you emotional punches through quiet encounters rather than fast plot twists.",
    watchLength: "24 episodes",
    links: [
      { label: "MyAnimeList page (mock)", url: "#" },
      { label: "Trailer (mock)", url: "#" },
    ],
  },
  {
    id: 2,
    title: "Terror in Resonance",
    moodTags: ["Modern", "Psychological", "Suspense"],
    themes: ["Terrorism", "Trauma", "Media"],
    shortDescription:
      "Two enigmatic teens stage elaborate attacks in Tokyo, treating the city like a puzzle to be solved.",
    synopsis:
      "The series follows 'Nine' and 'Twelve', two boys behind cryptic terror attacks, and Lisa, a lonely girl who gets dragged into their plans. The focus is on tension, moral ambiguity, and how society and media react, rather than on big mystery twists alone.",
    watchLength: "11 episodes",
    links: [{ label: "Series page (mock)", url: "#" }],
  },
  {
    id: 3,
    title: "Puella Magi Madoka Magica",
    moodTags: ["Deceptively cute", "Dark", "Mind-bending"],
    themes: ["Hope", "Despair", "Sacrifice"],
    shortDescription:
      "Looks like a typical magical-girl show at first, but gradually turns into something much heavier.",
    synopsis:
      "Madoka and her friends are offered the chance to become magical girls in exchange for a single wish. As they learn more about what that really means, the tone shifts from cute to tragic, exploring the cost of wishes, fate, and repeating timelines. Knowing it gets dark is fine — the card avoids explicit late-series spoilers.",
    watchLength: "12 episodes",
    links: [{ label: "Watchlist entry (mock)", url: "#" }],
  },
  {
    id: 4,
    title: "Sing “Yesterday” for Me",
    moodTags: ["Grounded", "Romantic drama", "Adult life"],
    themes: ["Stagnation", "Unrequited love", "Moving on"],
    shortDescription:
      "Post-grad drifters juggle part-time jobs and stuck feelings while trying to figure out adulthood.",
    synopsis:
      "Rikuo, an ex-student working at a convenience store, crosses paths with an eccentric girl and an old crush. The show focuses on awkward conversations, unresolved relationships, and small choices rather than big dramatic twists. Good if you like slow emotional burn over plot-heavy storytelling.",
    watchLength: "12 episodes (+ specials)",
    links: [{ label: "Character gallery (mock)", url: "#" }],
  },
  {
    id: 5,
    title: "Ghost in the Shell: Stand Alone Complex",
    moodTags: ["Cyberpunk", "Philosophical", "Action"],
    themes: ["Identity", "Networks", "Surveillance"],
    shortDescription:
      "A special-ops unit handles crimes in a wired future where humans and machines deeply overlap.",
    synopsis:
      "Section 9 investigates cybercrimes and political scandals in a society where 'ghosts' (consciousness) can live in fully artificial bodies. Many episodes are stand-alone, with arcs like the Laughing Man tying things together. You get action plus slow, thoughtful episodes about what it means to be human.",
    watchLength: "26 episodes",
    links: [{ label: "Episode list (mock)", url: "#" }],
  },
];


// --------- DOM ELEMENTS ----------
const chatScroll = document.getElementById("chatScroll");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const cardList = document.getElementById("cardList");
const cardListWrapper = document.getElementById("cardListWrapper");
const cardsHint = document.getElementById("cardsHint");
const watchlistInput = document.getElementById("watchlistInput");
const watchlistStatus = document.getElementById("watchlistStatus");
const discordScroll = document.getElementById("discordScroll");
const dataUsageToggle = document.getElementById("dataUsageToggle");
const dataUsagePanel = document.getElementById("dataUsagePanel");
const toast = document.getElementById("toast");
const toastText = document.getElementById("toastText");
const toastLogo = document.getElementById("toastLogo");

// --------- STATE ----------
let usedAnimeIds = new Set(); // tracks which anime have alr been shown
let watchlistSize = 0; // stores the len of the entries in the uploaded json file user dropped
let hasStarted = false; // until the first chat message started

// --------- UTILITIES ----------

/**
 * addChatMessage builds a `<div>` with classes like "msg-row bot" or "msg-row user", 
 * puts the text inside, and appends it to #chatScroll.
 * @param {*} sender 
 * @param {*} text 
 */

function addChatMessage(sender, text) {
  const row = document.createElement("div");
  row.className = "msg-row " + sender;

  const bubble = document.createElement("div");
  bubble.className = "msg-bubble " + sender;
  bubble.textContent = text;

  row.appendChild(bubble);
  chatScroll.appendChild(row);

  chatScroll.scrollTop = chatScroll.scrollHeight;
} 

/**
 * Convenience wrapper aroung addChatMessage(sender="bot", text)
 * @param {string} text 
 */
function addBotMessage(text) {
  addChatMessage("bot", text);
}

/**
 * Convenience wrapper aroung addChatMessage(sender="user", text)
 * @param {string} text 
 */
function addUserMessage(text) {
  addChatMessage("user", text);
}


/**
 * 
 * Filters out anime that are already in usedAnimeIds.
 * If everything has been used, it resets the set and starts over.
 * Shuffles the remaining ones randomly and returns the first count items.
 * @param {number} count 
 * @returns 
 */
function pickNextAnimeSet(count = 3) {
  const available = SAMPLE_ANIME.filter((a) => !usedAnimeIds.has(a.id));
  if (available.length === 0) {
    usedAnimeIds = new Set();
    return pickNextAnimeSet(count);
  }
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}


/**
 * nukes all existing cards
 */
function clearCardList() {
  cardList.innerHTML = "";
}

/**
 * flips the wrapper from hidden to visible 
 * (that’s the thing where the recs panel locks until you send the first message). 
 */
function ensureCardsVisible() {
  cardListWrapper.classList.remove("is-hidden");
  cardListWrapper.classList.add("is-visible");
}

/**
 * Creates the outer `<article class="card">.`
  Builds the top section (upper) with title + episode count + small hint text.
  Builds the lower section (lower) with:
  a “progress row” (progressRow) → the little “Step X / 3” text and arrow button
  a content area (content) where we draw the current step
  bottom buttons (“similar”, “skip”, “send to Discord”)

    @param {Record<any,any>} anime an anime object
 * 
 * 
 */
function createAnimeCard(anime) {
  const card = document.createElement("article");
  card.className = "card";

  // ===== ALWAYS VISIBLE: title + length =====
  const upper = document.createElement("div");
  upper.className = "card-upper";

  const titleRow = document.createElement("div");
  titleRow.className = "card-title-row";

  const title = document.createElement("div");
  title.className = "card-title";
  title.textContent = anime.title;

  const lengthPill = document.createElement("div");
  lengthPill.className = "pill pill-accent";
  lengthPill.textContent = anime.watchLength;

  titleRow.appendChild(title);
  titleRow.appendChild(lengthPill);
  upper.appendChild(titleRow);

  const hint = document.createElement("div");
  hint.className = "card-tagline";
  hint.textContent = "Use the arrow to move from mood → description → synopsis.";
  upper.appendChild(hint);

  // ===== LOWER: dynamic content + actions =====
  const lower = document.createElement("div");
  lower.className = "card-lower";

  // Content area that will change with the step
  const content = document.createElement("div");
  content.className = "card-section"; // simple container

  // Progress / arrow row
  const progressRow = document.createElement("div");
  progressRow.className = "progress-row";

  const progressLeft = document.createElement("div");
  progressLeft.className = "progress-left";

  const stepLabel = document.createElement("div");
  stepLabel.className = "progress-step-label";

  const stepCounter = document.createElement("div");
  stepCounter.className = "progress-counter";

  progressLeft.appendChild(stepLabel);
  progressLeft.appendChild(stepCounter);

  const arrowBtn = document.createElement("button");
  arrowBtn.type = "button";
  arrowBtn.className = "progress-arrow-btn";
  const arrowSpan = document.createElement("span");
  arrowSpan.className = "arrow";
  arrowSpan.textContent = "▶";
  const arrowText = document.createElement("span");
  arrowText.textContent = "More detail";
  arrowBtn.appendChild(arrowSpan);
  arrowBtn.appendChild(arrowText);

  progressRow.appendChild(progressLeft);
  progressRow.appendChild(arrowBtn);

  // Bottom buttons
  const btnRow = document.createElement("div");
  btnRow.className = "card-buttons-row";

  const againBtn = document.createElement("button");
  againBtn.type = "button";
  againBtn.className = "btn-sm";
  againBtn.textContent = "Show something similar"; // marks this anime as “used” and refreshes recs with “similar” mode (just copy text, still same pool).

  const skipBtn = document.createElement("button");
  skipBtn.type = "button";
  skipBtn.className = "btn-sm danger";
  skipBtn.textContent = "Skip"; // same idea, but only removes that card; if the list becomes empty, it pulls a new set.

  const shareBtn = document.createElement("button");
  shareBtn.type = "button";
  shareBtn.className = "btn-sm";
  shareBtn.textContent = "Send to Discord";

  btnRow.appendChild(againBtn);
  btnRow.appendChild(skipBtn);
  btnRow.appendChild(shareBtn);

  // Assemble lower
  lower.appendChild(progressRow);
  lower.appendChild(content);
  lower.appendChild(btnRow);

  // Assemble card
  card.appendChild(upper);
  card.appendChild(lower);

  // ===== STEP RENDERING =====
  let step = 1; // 1..3


  /**
   * Step 1:
   * Sets label: "Step 1 · Mood & themes"
   * Shows moodTags as pills and themes as text.
   * 
   * Step 2:
   * Label: "Short description"
   * Shows shortDescription.
   * 
   * Step 3:
   * Label: "Synopsis & links"
   * Shows synopsis + links as clickable pills.
   */
  function renderStep() {
    // clear content
    content.innerHTML = "";

    if (step === 1) {
      stepLabel.textContent = "Step 1 · Mood & themes";
      stepCounter.textContent = "1 / 3 · quickest preview";
      arrowText.textContent = "Next: short description";

      const moodRow = document.createElement("div");
      moodRow.className = "pill-row";
      anime.moodTags.forEach((tag) => {
        const pill = document.createElement("div");
        pill.className = "pill";
        pill.textContent = tag;
        moodRow.appendChild(pill);
      });

      const themesText = document.createElement("div");
      themesText.style.marginTop = "4px";
      themesText.textContent = "Themes: " + anime.themes.join(" · ");

      content.appendChild(moodRow);
      content.appendChild(themesText);
    } else if (step === 2) {
      stepLabel.textContent = "Step 2 · Short description";
      stepCounter.textContent = "2 / 3 · a bit more detail";
      arrowText.textContent = "Next: synopsis + links";

      const shortDesc = document.createElement("div");
      shortDesc.className = "card-teaser";
      shortDesc.textContent = anime.shortDescription;
      content.appendChild(shortDesc);
    } else if (step === 3) {
      stepLabel.textContent = "Step 3 · Synopsis & links";
      stepCounter.textContent = "3 / 3 · richest view";
      arrowText.textContent = "Back to mood & themes";

      const synopsis = document.createElement("div");
      synopsis.textContent = anime.synopsis;

      const linkRow = document.createElement("div");
      linkRow.className = "link-row";
      anime.links.forEach((lnk) => {
        const a = document.createElement("a");
        a.href = lnk.url;
        a.target = "_blank";
        a.rel = "noreferrer";
        a.className = "link-pill";
        a.textContent = lnk.label;
        linkRow.appendChild(a);
      });

      content.appendChild(synopsis);
      content.appendChild(linkRow);
    }
  }

  // Initial render (user lands on Step 1)
  renderStep();

  // Arrow click: 1 → 2 → 3 → 1 …
  arrowBtn.addEventListener("click", () => {
    step = step === 3 ? 1 : step + 1;
    renderStep();
  });

  // ===== Bottom actions =====
  againBtn.addEventListener("click", () => {
    usedAnimeIds.add(anime.id);
    refreshRecommendations("similar");
  });

  skipBtn.addEventListener("click", () => {
    usedAnimeIds.add(anime.id);
    card.remove();
    if (!cardList.children.length) {
      refreshRecommendations("fresh");
    }
  });

  shareBtn.addEventListener("click", () => {
    addDiscordShare(anime);
  });

  return card;
}



function renderRecommendationSet(modeText) {
  clearCardList();
  const set = pickNextAnimeSet(3);
  set.forEach((anime) => {
    const card = createAnimeCard(anime);
    cardList.appendChild(card);
  });
  ensureCardsVisible();
  cardsHint.textContent = modeText;
}



/**
 * 
 * @param {string} mode "similar" or any other
 * Asks for 3 anime, builds cards for each, appends them to #cardList.
 * Updates the hint line (“Initial recommendations…”, “Fresh picks…”, etc.).
 */
function refreshRecommendations(mode) {
  if (mode === "similar") {
    renderRecommendationSet(
      "Adjusting picks based on your skips and “similar” requests."
    );
  } else {
    renderRecommendationSet(
      "Fresh picks based on your latest message and watchlist."
    );
  }
}

/**
 * Removes the placeholder text (“No cards shared yet…”) the first time you share.
  Appends a fake Discord-style bubble: “You · shared a card” + title + teaser.
  Scrolls that panel to the bottom as messages accumulate.
 * @param {Record} anime 
 */
function addDiscordShare(anime) {
  const emptyMsg = discordScroll.querySelector(".discord-empty");
  if (emptyMsg) emptyMsg.remove();

  const msg = document.createElement("div");
  msg.className = "discord-msg";

  const meta = document.createElement("div");
  meta.className = "discord-meta";
  meta.textContent = `${new Date().getHours()}:${new Date().getMinutes()} You just shared a card with friends!`;

  const body = document.createElement("div");
  body.className = "discord-text";
  body.textContent = `${anime.title} ${anime.teaser ?? ""}`;

  msg.appendChild(meta);
  msg.appendChild(body);

  discordScroll.appendChild(msg);
  discordScroll.scrollTop = discordScroll.scrollHeight;

  showToast("Shared to Discord (mock only – nothing actually sent)", true);
}


// --------- toast bubble (usually for discord) --------
let toastTimeoutId = null;

function showToast(message, withLogo = false) {
  if (!toast) return;

  if (toastText) {
    toastText.textContent = message;
  }

  if (toastLogo) {
    toastLogo.style.display = withLogo ? "block" : "none";
  }

  toast.classList.add("toast-visible");

  if (toastTimeoutId) {
    clearTimeout(toastTimeoutId);
  }

  toastTimeoutId = setTimeout(() => {
    toast.classList.remove("toast-visible");
  }, 2200);
}


// --------- WATCHLIST UPLOAD ----------
watchlistInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (evt) => {
    try {
      const json = JSON.parse(evt.target.result);

      let size = 0;
      if (Array.isArray(json)) size = json.length;
      else if (typeof json === "object" && json !== null)
        size = Object.keys(json).length;

      watchlistSize = size;
      watchlistStatus.textContent =
        size > 0
          ? `Watchlist loaded · ${size} titles`
          : "Watchlist loaded (mock format)";
      watchlistStatus.classList.remove("bad");
      watchlistStatus.classList.add("good");
    } catch (err) {
      watchlistSize = 0;
      watchlistStatus.textContent = "Could not read JSON file";
      watchlistStatus.classList.remove("good");
      watchlistStatus.classList.add("bad");
    }
  };
  reader.readAsText(file);
});

// --------- DATA USAGE TOGGLE (progressive disclosure) ----------
dataUsageToggle.addEventListener("click", () => {
  const isShown = dataUsagePanel.style.display === "block";
  dataUsagePanel.style.display = isShown ? "none" : "block";
});

// --------- CHAT FLOW ----------


/**
 * 
 * Logs the user message.
 * Builds an intro bot line (referencing watchlist size if available).
 * Adds an extra “you can tell me things like…” line.
 * Calls renderRecommendationSet("Initial recommendations...").
 * @param {string} text 
 */
function handleFirstMessage(text) {
  addUserMessage(text);

  let intro =
    "Got it — I’ll keep things spoiler-safe and light on text. I’ll start with a few teasers you can expand when you’re ready.";
  if (watchlistSize > 0) {
    intro += ` I’m also quietly using your watchlist (mock, ${watchlistSize} titles) to avoid obvious repeats.`;
  }
  addBotMessage(intro);
  addBotMessage(
    "You can tell me things like “short and melancholic”, “adult drama, no isekai”, or “philosophical sci-fi but not too bleak.”"
  );
  renderRecommendationSet(
    "Initial recommendations based on your first message."
  );
}

/**
 * Logs the user message.
 * Bot replies with “Thanks, I’ll gently adjust the vibe…”
 * Calls refreshRecommendations("fresh") (new 3-card batch).
 * @param {string} text 
 */
function handleFollowupMessage(text) {
  addUserMessage(text);
  addBotMessage(
    "Thanks, I’ll gently adjust the vibe. Try expanding a card, skipping one that feels off, or asking for something similar."
  );
  refreshRecommendations("fresh");
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;
  chatInput.value = "";

  if (!hasStarted) {
    hasStarted = true;
    handleFirstMessage(text);
  } else {
    handleFollowupMessage(text);
  }
});

// --------- SEED OPENING BOT MESSAGES ----------
addBotMessage(
  "Hey, I’m Kana. Tell me what you feel like watching — mood, length, or vibes — and I’ll surface spoiler-safe anime cards you can expand at your own pace."
);
addBotMessage(
  "Nothing you see here is a real AI response: this is a scripted prototype for your HCI study."
);
