# Kana – Conversational Anime Guide 🎴  
**Spoiler-safe, dialogue-based anime discovery prototype**

## 🧭 Overview
Kana is an interactive **HCI study prototype** that explores how conversational interfaces can improve the anime discovery experience compared to traditional list-based systems like MyAnimeList or Anilist.

Rather than static lists, Kana uses a **chat-style UI** where users express their preferences (“short and melancholic”, “adult drama, no isekai”) and receive **interactive anime cards** in reply.  
All responses are **scripted** (no real AI model), allowing realistic yet controlled user testing for usability, engagement, and cognitive load.

This prototype is part of a **SOEN 357 User Interaction Design** course project at Concordia University.

---

## 💡 Research Goal
To test whether **conversational discovery** with progressive disclosure improves:
- Enjoyment and engagement  
- Perceived personalization  
- Spoiler safety  
- Cognitive simplicity  

---

## 🧱 Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Prototype tools:** Figma (early design)  
- **Data:** JSON mock files simulating MyAnimeList/AniList exports  
- **Evaluation:** Google Forms + Excel/Sheets (for SUS / NASA-TLX surveys)

---

## 📂 Project Structure
```
📁 project-root/
├── index.html # Main interface
├── styles.css # Styling and layout
├── app.js # Chat logic, card rendering, watchlist handling
├── assets/ # Images, logos, anime covers
└── mock_data/ # Example anime data (JSON)
```
---

## ✨ Key Features
- **Chat Interface:** Simulated dialogue flow between user and “Kana”  
- **Spoiler-safe Cards:** Each recommendation expands progressively  
- **Watchlist Import:** Upload mock JSON exports from MyAnimeList/AniList  
- **Discord-style Sharing:** Fake share-to-Discord panel for realism  
- **Progressive Disclosure:** “How is my data used?” info panel

---

## 🧪 How to Run
1. Clone or download the repository.  
2. Open `index.html` in any modern browser (Chrome, Firefox, Safari).  
3. (Optional) Upload a `.json` mock file via the **Upload watchlist** button.  
4. Type your mood or preferences to start the scripted conversation.

No server or backend setup required — everything runs client-side.

---

## 🎓 Authors
**Lev Ustinov**
Concordia University, SOEN 357 (Fall 2025)   

---

## 📜 License
This project is for **educational and research purposes only**.  
No real data collection or network calls occur in the prototype.

---
