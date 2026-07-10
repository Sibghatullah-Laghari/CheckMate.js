# Chess Game

A web-based chess application developed using **HTML**, **CSS**, and **JavaScript**. The project allows two players to play locally, explore the basics of chess, and access simple demonstration login and signup pages.

## Features

- **Interactive chessboard** — Standard 8×8 board rendered with Unicode chess symbols
- **Local multiplayer** — Two players take turns playing on the same computer
- **Move validation** — Standard movement rules are applied for pawns, rooks, knights, bishops, queens, and kings
- **Piece capturing** — Opponent pieces can be captured through valid moves
- **Demo authentication** — Register and log in using browser `localStorage` without a backend
- **Contact page** — Messages are saved locally inside the browser
- **Information page** — Learn about chess history, rules, and piece movements

## Project Structure

```text
ICT project/
├── index.html      # Main landing page
├── chess.html      # Chess game interface
├── chess.js        # Core game mechanics and move validation
├── styles.css      # Styling for the board and interface
├── about.html      # Chess information and rules
├── contact.html    # Contact page
├── login.html      # Login screen
├── signup.html     # Registration screen
├── auth.js         # Client-side authentication logic
├── package.json    # Project configuration
└── README.md       # Project documentation
```

## Requirements

To run this project you will need:

- A modern web browser such as Chrome, Firefox, Edge, or Safari
- **Node.js** (optional) if you want to use the included development server

The application does not rely on a database or backend service. User accounts and contact submissions are stored using the browser's `localStorage`.

## Running the Project

### Option 1: Start script (recommended)

```bash
cd "ICT project"
./start.sh
```

Then visit **http://localhost:3000** in your browser.

### Option 2: Python HTTP Server

```bash
cd "ICT project"
python3 -m http.server 3000
```

After the server starts, open **http://localhost:3000**.

### Option 3: npm

```bash
cd "ICT project"
npm start
```

Open **http://localhost:3000** once the server is running.

### Option 4: Open the HTML file directly

Launch `index.html` in your browser by double-clicking it. For the best experience, especially with login and contact features, running a local server is recommended.

## Playing the Game

1. Open **Play** (`chess.html`) or select **Start Playing** from the home page.
2. White always makes the opening move.
3. Select a piece by clicking on it. The chosen square will be highlighted.
4. Click another square to attempt the move. Illegal moves are rejected.
5. Capture an opponent's piece by selecting it as the destination when the move is valid.
6. After a successful move, the turn automatically switches to the other player.

## Project Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Introduction and project overview |
| Play | `chess.html` | Main gameplay screen |
| About | `about.html` | Chess history and rules |
| Contact | `contact.html` | Contact form |
| Login | `login.html` | Demo user login |
| Sign Up | `signup.html` | Demo account registration |

## Demo Authentication

Authentication is handled entirely through the browser using **localStorage**. No external server or database is involved.

- Register using your first name, last name, email address, and password.
- Sign in with the same email and password you registered.
- Successful login redirects you to the chess game.
- All stored data remains in your browser until the site's storage is cleared.

> **Note:** Passwords are saved as plain text in `localStorage`. This implementation is intended only for learning and demonstration purposes and should not be used in production applications.

## Technologies

- HTML5
- CSS3 (Grid and Flexbox)
- Vanilla JavaScript (DOM operations, events, and game logic)
- Unicode chess characters

## Current Limitations

- Check and checkmate are not implemented
- Castling, en passant, and pawn promotion are unavailable
- Online multiplayer is not supported
- Game progress is lost after refreshing the page

## Possible Enhancements

- Implement check and checkmate detection
- Add castling, en passant, and pawn promotion
- Support saving and restoring games
- Display a complete move history
- Integrate a backend service for authentication

## License

Released under the **MIT License**.
