
// --------- SCRIPTED DATA (mock recommendation pool) ----------
const SAMPLE_ANIME = [
  {
    "id": 1,
    "title": "Casshern Sins",
    "cover": "assets/shows/casshern.jpg",
    "malScore" : 7.50,
    "moodTags": ["Melancholic", "Philosophical", "Slow-burn"],
    "themes": ["Regret", "Identity", "Apocalypse"],
    "shortDescription": "A wandering android in a decaying world, slowly realizing his role in why everything is collapsing.",
    "synopsis": "In a ruined future where robots and humans are both succumbing to a mysterious 'Ruin', Casshern travels across desolate landscapes, meeting people who blame him for the end of the world. The show is episodic, reflective, and gives you emotional punches through quiet encounters rather than fast plot twists.",
    "watchLength": "24 episodes",
    "links": [
      { "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/4981/Casshern_Sins" },
      { "label": "Trailer", "url": "https://youtu.be/kMACcRttess?si=SzWNahtJHC3lrkkO" }
    ]
  },
  {
    "id": 2,
    "title": "Terror in Resonance",
    "cover": "assets/shows/terror-in-resonance.jpg",
    "malScore" : 8.08,
    "moodTags": ["Modern", "Psychological", "Suspense"],
    "themes": ["Terrorism", "Trauma", "Media"],
    "shortDescription": "Two enigmatic teens stage elaborate attacks in Tokyo, treating the city like a puzzle to be solved.",
    "synopsis": "The series follows 'Nine' and 'Twelve', two boys behind cryptic terror attacks, and Lisa, a lonely girl who gets dragged into their plans. The focus is on tension, moral ambiguity, and how society and media react, rather than on big mystery twists alone.",
    "watchLength": "11 episodes",
    "links": [
        { "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/23283/Zankyou_no_Terror"},
        { "label": "Trailer", "url": "https://www.youtube.com/watch?v=nLVy50LnLMM&t=1s" }
    ]
    
  },
  {
    "id": 3,
    "title": "Puella Magi Madoka Magica",
    "cover": "assets/shows/madoka-magica.jpg",
    "malScore" : 8.38,
    "moodTags": ["Deceptively cute", "Dark", "Mind-bending"],
    "themes": ["Hope", "Despair", "Sacrifice"],
    "shortDescription": "Looks like a typical magical-girl show at first, but gradually turns into something much heavier.",
    "synopsis": "Madoka and her friends are offered the chance to become magical girls in exchange for a single wish. As they learn more about what that really means, the tone shifts from cute to tragic, exploring the cost of wishes, fate, and repeating timelines. Knowing it gets dark is fine — the card avoids explicit late-series spoilers.",
    "watchLength": "12 episodes",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/9756/Mahou_Shoujo_Madoka%E2%98%85Magica" },
                { "label": "Trailer", "url": "https://www.youtube.com/watch?v=laTRlKXrCXk" }   
            ]
        },
  {
    "id": 4,
    "title": "Sing “Yesterday” for Me",
    "cover": "assets/shows/sing-yesterday.jpg",
    "malScore" : 6.87,
    "moodTags": ["Grounded", "Romantic drama", "Adult life"],
    "themes": ["Stagnation", "Unrequited love", "Moving on"],
    "shortDescription": "Post-grad drifters juggle part-time jobs and stuck feelings while trying to figure out adulthood.",
    "synopsis": "Rikuo, an ex-student working at a convenience store, crosses paths with an eccentric girl and an old crush. The show focuses on awkward conversations, unresolved relationships, and small choices rather than big dramatic twists. Good if you like slow emotional burn over plot-heavy storytelling.",
    "watchLength": "12 episodes (+ specials)",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/39710/Yesterday_wo_Utatte?q=sing%20yesterday&cat=anime" },
                { "label": "Trailer", "url": "https://www.youtube.com/watch?v=Acwat8MO51A"} 
    ]
  },
  {
    "id": 5,
    "title": "Ghost in the Shell: Stand Alone Complex",
    "cover": "assets/shows/ghost-shell.jpg",
    "malScore" : 8.27,
    "moodTags": ["Cyberpunk", "Philosophical", "Action"],
    "themes": ["Identity", "Networks", "Surveillance"],
    "shortDescription": "A special-ops unit handles crimes in a wired future where humans and machines deeply overlap.",
    "synopsis": "Section 9 investigates cybercrimes and political scandals in a society where 'ghosts' (consciousness) can live in fully artificial bodies. Many episodes are stand-alone, with arcs like the Laughing Man tying things together. You get action plus slow, thoughtful episodes about what it means to be human.",
    "watchLength": "26 episodes",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/43/Koukaku_Kidoutai" },
            { "label": "Trailer", "url": "https://www.youtube.com/watch?v=8RF09G8Ymqg"}  
    ]
  },
  {
    "id": 6,
    "title": "Ergo Proxy",
    "cover": "assets/shows/ergo-proxy.jpg",
    "malScore" : 7.90,
    "moodTags": ["Cyberpunk", "Existential", "Noir"],
    "themes": ["Identity", "Consciousness", "Isolation"],
    "shortDescription": "A dark philosophical sci-fi where humans and androids coexist under a mysterious dome city.",
    "synopsis": "Inspector Re-l Mayer investigates a series of murders linked to sentient androids and uncovers truths about humanity’s survival. The series blends cyberpunk visuals with existential monologues, exploring what separates man from machine.",
    "watchLength": "23 episodes",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/790/Ergo_Proxy" },
    { "label": "Trailer", "url": "https://www.youtube.com/watch?v=47LU6BJxVxA"}  ]
  },
  {
    "id": 7,
    "title": "Paranoia Agent",
    "cover": "assets/shows/paranoia-agent.jpg",
    "malScore" : 7.66,
    "moodTags": ["Psychological", "Surreal", "Dark humor"],
    "themes": ["Society", "Delusion", "Fear"],
    "shortDescription": "An urban legend about a boy with a golden bat spreads chaos and paranoia across Tokyo.",
    "synopsis": "As 'Lil' Slugger' attacks random people, detectives uncover how fear and stress manifest in society. Each episode examines a different perspective, blurring reality and imagination until the truth no longer matters.",
    "watchLength": "13 episodes",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/323/Mousou_Dairinin" },
    { "label": "Trailer", "url": "https://www.youtube.com/watch?v=nF-KtYm-9Po"} ]
  },
  {
    "id": 8,
    "title": "Texhnolyze",
    "cover": "assets/shows/texhnolyze.jpg",
    "malScore" : 7.75,
    "moodTags": ["Bleak", "Slow", "Philosophical"],
    "themes": ["Decay", "Human nature", "Technology"],
    "shortDescription": "A man loses his limbs and gains prosthetics in a city slowly collapsing into silence.",
    "synopsis": "Set in a dystopian underground city, Texhnolyze explores survival, despair, and meaning when civilization has decayed beyond repair. It’s visually haunting and requires patience, but offers profound reflection on existence.",
    "watchLength": "22 episodes",
    "links": [  { "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/26/Texhnolyze?q=tex&cat=anime" },
                { "label": "Trailer", "url": "https://www.youtube.com/watch?v=Z19QTGvwg9I"}]
    },
  {
    "id": 9,
    "title": "Mushishi",
    "cover": "assets/shows/mushishi.jpg",
    "malScore" : 8.65,
    "moodTags": ["Tranquil", "Mystical", "Anthology"],
    "themes": ["Nature", "Spirituality", "Impermanence"],
    "shortDescription": "A wanderer studies invisible life forms that influence human fates in subtle, mysterious ways.",
    "synopsis": "Ginko travels through rural Japan helping people affected by 'Mushi', primitive spirits that blur the line between nature and life. Each episode feels like a folk tale, offering quiet beauty and melancholy reflection.",
    "watchLength": "26 episodes (+ sequel)",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/457/Mushishi?q=mushi&cat=anime" },
    { "label": "Trailer", "url": "https://www.youtube.com/watch?v=h371H0KIuPo"}]

    },
  {
    "id": 10,
    "title": "Serial Experiments Lain",
    "cover": "assets/shows/lain.jpg",
    "malScore" : 8.10,
    "moodTags": ["Cyber-mystery", "Abstract", "Psychological"],
    "themes": ["Reality", "Isolation", "Internet"],
    "shortDescription": "A shy girl’s discovery of the virtual world spirals into questions of existence itself.",
    "synopsis": "After a classmate’s suicide, Lain receives an email from the deceased. As she becomes obsessed with the Wired, the boundaries between her self and the digital world dissolve in a haunting meditation on connection.",
    "watchLength": "13 episodes",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/339/Serial_Experiments_Lain" },
     { "label": "Trailer", "url": "https://www.youtube.com/watch?v=t5y4nQ5Y1V8"}]
  },
  {
    "id": 11,
    "title": "Welcome to the NHK",
    "cover": "assets/shows/welcome-nhk.jpg",
    "malScore" : 8.31,
    "moodTags": ["Depressive", "Dark comedy", "Slice of life"],
    "themes": ["Anxiety", "Isolation", "Society"],
    "shortDescription": "A reclusive man convinced of conspiracy theories tries to rejoin society with help from a mysterious girl.",
    "synopsis": "Satou believes a shadowy organization controls his life. Through failed jobs, friendships, and an awkward romance, he faces mental illness and self-loathing with both painful honesty and humor.",
    "watchLength": "24 episodes",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/1210/NHK_ni_Youkoso" },
    { "label": "Trailer", "url": "https://www.youtube.com/watch?v=QYLsjJ8RThQ"}]
  },
  {
    "id": 12,
    "title": "Death Parade",
    "cover": "assets/shows/death-parade.jpg",
    "malScore" : 8.13,
    "moodTags": ["Psychological", "Philosophical", "Emotional"],
    "themes": ["Judgment", "Morality", "Afterlife"],
    "shortDescription": "Souls play deadly games to determine whether they’re reincarnated or sent to oblivion.",
    "synopsis": "Decim, a stoic bartender in a mysterious afterlife bar, judges souls through subtle emotional games. The series questions morality, regret, and what makes a life worth remembering.",
    "watchLength": "12 episodes",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/28223/Death_Parade" },
    { "label": "Trailer", "url": "https://www.youtube.com/watch?v=O1X6czI74UQ"}]
    },
    {
    "id": 13,
    "title": "A Place Further Than the Universe",
    "cover": "assets/shows/place-further-than-universe.jpg",
    "malScore" : 8.13,
    "moodTags": ["Inspiring", "Coming-of-age", "Adventure"],
    "themes": ["Friendship", "Dreams", "Growth"],
    "shortDescription": "Four girls embark on a journey to Antarctica to chase something beyond their comfort zone.",
    "synopsis": "With humor and heart, the series shows youthful impulsiveness turning into courage. It’s less about where they go and more about what they discover about themselves.",
    "watchLength": "13 episodes",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/35839/Sora_yori_mo_Tooi_Basho" },
    { "label": "Trailer", "url": "https://www.youtube.com/watch?v=jFgvK5BzGck"}]
  },
  {
    "id": 14,
    "title": "Made in Abyss",
    "cover": "assets/shows/made-in-abyss.jpg",
    "malScore" : 8.63,
    "moodTags": ["Adventure", "Dark", "Beautifully tragic"],
    "themes": ["Exploration", "Loss", "Survival"],
    "shortDescription": "A girl descends into a mysterious abyss to find her mother, joined by a boy who isn’t human.",
    "synopsis": "Beneath a seemingly endless pit lies beauty, horror, and truth. Each layer brings breathtaking wonder and emotional brutality in equal measure.",
    "watchLength": "13 episodes (+ movies)",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/34599/Made_in_Abyss" },
    { "label": "Trailer", "url": "https://www.youtube.com/watch?v=AQbaZeby2zA"}]
  },
  {
    "id": 15,
    "title": "The Tatami Galaxy",
    "cover": "assets/shows/tatami-galaxy.jpg",
    "malScore" : 8.55,
    "moodTags": ["Fast-paced", "Existential", "Surreal"],
    "themes": ["Regret", "Choice", "Youth"],
    "shortDescription": "A college student endlessly rewinds his life, seeking the perfect campus experience.",
    "synopsis": "Every episode reimagines the same years differently as the protagonist chases happiness through clubs, friends, and love, only to discover the choices that really mattered were never far away.",
    "watchLength": "11 episodes",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/7785/Yojouhan_Shinwa_Taikei" },
    { "label": "Trailer", "url": "https://www.youtube.com/watch?v=hzvU8t3TRio"}]
  },
  {
    "id": 16,
    "title": "Haibane Renmei",
    "cover": "assets/shows/haibane-renmei.jpg",
    "malScore" : 7.99,
    "moodTags": ["Gentle", "Philosophical", "Mystery"],
    "themes": ["Redemption", "Memory", "Acceptance"],
    "shortDescription": "Winged beings live quietly in a walled town, haunted by vague memories of their past lives.",
    "synopsis": "Following Rakka, a newly born 'Haibane', the series gently explores guilt and forgiveness. It’s an introspective story about healing and letting go.",
    "watchLength": "13 episodes",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/387/Haibane_Renmei" },
    { "label": "Trailer", "url": "https://www.youtube.com/watch?v=B2yKFMPgXmA"}]
  },
  {
    "id": 17,
    "title": "Erased",
    "cover": "assets/shows/erased.jpg",
    "malScore" : 8.30,
    "moodTags": ["Thriller", "Emotional", "Mystery"],
    "themes": ["Regret", "Childhood", "Redemption"],
    "shortDescription": "A man sent back to his childhood must prevent a series of kidnappings to change the future.",
    "synopsis": "Balancing suspense and nostalgia, Erased tells a story about loss and second chances as its protagonist confronts both his past and his powerlessness.",
    "watchLength": "12 episodes",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/31043/Boku_dake_ga_Inai_Machi" },
    { "label": "Trailer", "url": "https://www.youtube.com/watch?v=DwmxEAWjTQQ"}]
  },
  {
    "id": 18,
    "title": "Vivy: Fluorite Eye’s Song",
    "cover": "assets/shows/vivy.jpg",
    "malScore" : 8.38,
    "moodTags": ["Sci-fi", "Action", "Tragic"],
    "themes": ["AI", "Purpose", "Sacrifice"],
    "shortDescription": "An AI songstress is tasked with saving humanity across a century-long mission.",
    "synopsis": "From concert halls to battlefields, Vivy explores emotion in artificial intelligence, pairing stunning visuals with themes of duty and self-worth.",
    "watchLength": "13 episodes",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/46095/Vivy__Fluorite_Eyes_Song" },
    { "label": "Trailer", "url": "https://www.youtube.com/watch?v=t3IHpQZHPFY"}]
  },
  {
    "id": 19,
    "title": "Wolf’s Rain",
    "cover": "assets/shows/wolf-rain.jpg",
    "malScore" : 7.79,
    "moodTags": ["Mythic", "Melancholic", "Adventure"],
    "themes": ["Survival", "Faith", "Endings"],
    "shortDescription": "In a dying world, wolves disguised as humans search for paradise.",
    "synopsis": "Their journey blends action, tragedy, and philosophy, with each character’s dream slowly unraveling. A poetic reflection on persistence even when hope fades.",
    "watchLength": "26 episodes (+ OVAs)",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/202/Wolfs_Rain" },
    { "label": "Trailer", "url": "https://www.youtube.com/watch?v=iqFpI__mdTI"}]
  },
  {
    "id": 20,
    "title": "Revolutionary Girl Utena",
    "cover": "assets/shows/utena.jpg",
    "malScore" : 8.23,
    "moodTags": ["Symbolic", "Avant-garde", "Emotional"],
    "themes": ["Identity", "Gender", "Rebellion"],
    "shortDescription": "A girl who wants to be a prince enters duels to protect her mysterious classmate.",
    "synopsis": "Utena redefines the fairy-tale formula with surreal imagery and psychological depth. It’s both a deconstruction and a love story drenched in symbolism.",
    "watchLength": "39 episodes",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/440/Shoujo_Kakumei_Utena" },
    { "label": "Trailer", "url": "https://www.youtube.com/watch?v=prZEurI2QiM"}]
  },
  {
    "id": 21,
    "title": "Land of the Lustrous",
    "cover": "assets/shows/houseki-no-kuni.jpg",
    "malScore" : 8.39,
    "moodTags": ["Beautiful", "Philosophical", "Lonely"],
    "themes": ["Change", "Identity", "Immortality"],
    "shortDescription": "Gem-like beings fight mysterious enemies while one of them begins to question their eternal cycle.",
    "synopsis": "Through breathtaking CGI and emotional storytelling, the series turns a fantasy premise into a meditation on impermanence and personal evolution.",
    "watchLength": "12 episodes",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/35557/Houseki_no_Kuni" },
    { "label": "Trailer", "url": "https://www.youtube.com/watch?v=jL3vytC1140"}]
  },
  {
    "id": 22,
    "title": "Kaiba",
    "cover": "assets/shows/kaiba.jpg",
    "malScore" : 8.14,
    "moodTags": ["Surreal", "Emotional", "Sci-fi"],
    "themes": ["Memory", "Class", "Love"],
    "shortDescription": "In a world where memories can be stored and traded, identity itself is a currency.",
    "synopsis": "A man wakes up with no memories, clutching a photo of a woman. His journey through strange worlds and bodies explores love’s persistence beyond the physical self.",
    "watchLength": "12 episodes",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/3701/Kaiba" },
    { "label": "Trailer", "url": "https://www.youtube.com/watch?v=KFI_Fl1sRWg"}]
  },
  {
    "id": 23,
    "title": "The Eccentric Family",
    "cover": "assets/shows/eccentric-family.jpg",
    "malScore" : 7.82,
    "moodTags": ["Whimsical", "Heartfelt", "Philosophical"],
    "themes": ["Family", "Tradition", "Change"],
    "shortDescription": "Tanuki, humans, and tengu coexist in Kyoto — but a family rivalry threatens their peace.",
    "synopsis": "Mixing comedy and melancholy, the story explores belonging and acceptance in a fantastical yet deeply human Kyoto.",
    "watchLength": "13 episodes (+ sequel)",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/17909/Uchouten_Kazoku" },
    { "label": "Trailer", "url": "https://www.youtube.com/watch?v=QVu8qiE7Yv4"}]
  },
  {
    "id": 24,
    "title": "Odd Taxi",
    "cover": "assets/shows/odd-taxi.jpg",
    "malScore" : 8.64,
    "moodTags": ["Modern", "Crime", "Dialogue-heavy"],
    "themes": ["Secrets", "Society", "Loneliness"],
    "shortDescription": "A walrus taxi driver’s mundane life unravels as his passengers’ stories connect in unexpected ways.",
    "synopsis": "Odd Taxi hides a clever mystery behind small talk and deadpan humor. Every detail matters as a portrait of urban isolation slowly forms.",
    "watchLength": "13 episodes",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/anime/46102/Odd_Taxi" },
    { "label": "Trailer", "url": "https://www.youtube.com/watch?v=rS228HesD9g"}]
  },
  {
    "id": 25,
    "title": "Nana",
    "cover": "assets/shows/nana.jpg",
    "malScore" : 8.81,
    "moodTags": ["Romantic drama", "Urban", "Emotional"],
    "themes": ["Friendship", "Love", "Ambition"],
    "shortDescription": "Two women named Nana share an apartment and navigate Tokyo’s music scene and heartbreak.",
    "synopsis": "Stylish and raw, Nana captures the vulnerability of youth, dreams, and toxic relationships with emotional realism and timeless melancholy.",
    "watchLength": "47 episodes",
    "links": [{ "label": "MyAnimeList page", "url": "https://myanimelist.net/manga/28/Nana" }]
  }
]


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

  if (sender === "bot") {
    // Kana avatar on the left
    const avatar = document.createElement("div");
    avatar.className = "msg-avatar bot";

    const img = document.createElement("img");
    img.src = "assets/main-logo-2.png";
    img.alt = "Kana avatar";
    img.className = "msg-avatar-img";

    avatar.appendChild(img);

    row.appendChild(avatar);
    row.appendChild(bubble);
  } else {
    // user: just the bubble, aligned right via CSS
    row.appendChild(bubble);
  }

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

  // Cover image (if present)
  if (anime.cover) {
    const img = document.createElement("img");
    img.src = anime.cover;
    img.alt = `${anime.title} cover`;
    img.className = "card-cover";
    upper.appendChild(img);
  }

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

    if (typeof anime.malScore === "number") {
    const metaRow = document.createElement("div");
    metaRow.className = "card-meta-row";

    const rating = document.createElement("div");
    rating.className = "card-rating";

    const malImg = document.createElement("img");
    malImg.src = "assets/mal-logo.png";
    malImg.alt = "MyAnimeList logo";
    malImg.className = "mal-logo";

    const scoreSpan = document.createElement("span");
    scoreSpan.textContent = `${anime.malScore.toFixed(2)} MAL`;

    rating.appendChild(malImg);
    rating.appendChild(scoreSpan);

    metaRow.appendChild(rating);
    upper.appendChild(metaRow);
  }

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

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  meta.textContent = `${hours}:${minutes} You just shared a card with friends!`;

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
