# Chess Game

A browser-based chess application built with **HTML**, **CSS**, and **JavaScript**. Play a two-player local game, read about chess history and rules, and use demo login/signup pages.

## Features

- **Interactive chessboard** — 8×8 grid with Unicode chess pieces
- **Two-player local play** — White and Black alternate turns on the same device
- **Move validation** — Legal moves enforced for all standard pieces (pawn, rook, knight, bishop, queen, king)
- **Piece capture** — Capture opponent pieces with valid moves
- **User accounts (demo)** — Sign up and log in using browser localStorage (no backend server)
- **Contact form** — Submit messages stored locally in the browser
- **About page** — Chess history, rules, and piece movement guide

## Project Structure

```
ICT project/
├── index.html      # Landing / home page
├── chess.html      # Main chess game board
├── chess.js        # Game logic and move validation
├── styles.css      # Chessboard and piece styling
├── about.html      # About chess — history and rules
├── contact.html    # Contact form page
├── login.html      # User login page
├── signup.html     # User registration page
├── auth.js         # Client-side authentication helpers
├── package.json    # Project metadata and start scripts
└── README.md       # This documentation
```

## Requirements

- A modern web browser (Chrome, Firefox, Edge, Safari)
- **Node.js** (optional) — only needed to run the included dev server

No database or backend is required. Authentication and contact messages are stored in the browser's `localStorage`.

## How to Run

### Option 1: Using the start script (recommended)

```bash
cd "ICT project"
./start.sh
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Using Python

```bash
cd "ICT project"
python3 -m http.server 3000
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 3: Using npm (requires Node.js and npm)

```bash
cd "ICT project"
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 4: Open directly in browser

Double-click `index.html` to open the home page. For full functionality (auth, contact form), use a local server (Options 1 or 2) to avoid browser security restrictions.

## How to Play

1. Go to **Play** (`chess.html`) or click **Start Playing** on the home page.
2. **White moves first.** The current turn is shown above the board.
3. **Click a piece** to select it (the square highlights in yellow).
4. **Click a destination square** to move. Invalid moves show an alert.
5. **Click an opponent's piece** while one of yours is selected to capture it (if the move is legal).
6. Turns switch automatically after each valid move.

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `index.html` | Welcome page with project overview |
| Play | `chess.html` | Interactive chess game |
| About | `about.html` | Chess rules and history |
| Contact | `contact.html` | Contact form |
| Login | `login.html` | Log in to a demo account |
| Sign up | `signup.html` | Create a demo account |

## Authentication (Demo)

Login and signup use **localStorage** only — there is no real server or database.

- **Sign up:** Create an account with first name, last name, email, and password.
- **Login:** Use the email and password you registered with.
- After login, you are redirected to the chess game page.
- Data is stored only in your browser and is cleared if you clear site data.

> **Note:** Passwords are stored in plain text in localStorage. This is for demonstration only and is not suitable for production use.

## Technologies Used

- HTML5
- CSS3 (Grid layout, flexbox)
- Vanilla JavaScript (DOM manipulation, event handling, game logic)
- Unicode chess symbols for pieces

## Known Limitations

- No check/checkmate detection
- No castling, en passant, or pawn promotion
- No online multiplayer — two players share one keyboard/mouse
- No persistent game state across page reloads

## Future Improvements

- Add checkmate and stalemate detection
- Support castling, en passant, and pawn promotion
- Save and resume games
- Add a move history panel
- Connect to a real backend API for authentication

## License

MIT
