# ♟️ Chess Game

> **📅 README Status:** Updated on **2026-07-16** – reflects the current state of the project.  
> **🎯 Goal:** A web-based chess application for two players on the same device, with demo authentication.

A web-based chess application developed using **HTML**, **CSS**, and **JavaScript**. The project allows two players to play a local chess match, understand the fundamentals of chess, and use simple demonstration login and signup pages.

---

## ✨ Features

* **Interactive chessboard** — Standard 8×8 chessboard rendered using Unicode chess symbols (♔♕♖♗♘♙)
* **Local multiplayer** — Two players can play on the same device by taking alternating turns
* **Move validation** — Standard movement rules are supported for pawns, rooks, knights, bishops, queens, and kings
* **Piece capturing** — Opponent pieces can be captured by performing valid moves
* **Demo authentication** — Register and log in using browser `localStorage` without requiring a backend
* **Contact page** — User messages are saved locally within the browser
* **Information page** — Learn about basic chess history, rules, and chess piece movements

> 💡 *Tip:* The board automatically highlights the selected piece – click a valid destination square to move.

---

## 📁 Project Structure:-

```text
ICT project/
├── index.html      # Main landing page
├── chess.html      # Primary chess game interface
├── chess.js        # Chess logic and move validation
├── styles.css      # Interface styling and board layout
├── about.html      # Chess information and basic rules
├── contact.html    # Contact form page
├── login.html      # Demo user login page
├── signup.html     # Demo user registration page
├── auth.js         # Client-side authentication logic
├── package.json    # Project configuration (npm start)
└── README.md       # Project documentation (this file)
