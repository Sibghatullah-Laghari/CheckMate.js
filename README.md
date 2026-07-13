# Chess Game

A web-based chess application built using **HTML**, **CSS**, and **JavaScript**. The project enables two players to enjoy a local chess match, learn the fundamentals of the game, and access simple demonstration login and signup pages.

## Features

- **Interactive chessboard** — Standard 8×8 board displayed using Unicode chess symbols
- **Local multiplayer** — Two players can play on the same device by taking alternate turns
- **Move validation** — Standard movement rules are implemented for pawns, rooks, knights, bishops, queens, and kings
- **Piece capturing** — Opponent pieces can be captured through valid moves
- **Demo authentication** — Register and log in using browser `localStorage` without a backend
- **Contact page** — User messages are stored locally in the browser
- **Information page** — Explore basic chess history, rules, and piece movements

## Project Structure

```text
ICT project/
├── index.html      # Landing page
├── chess.html      # Main chess game interface
├── chess.js        # Game logic and move validation
├── styles.css      # UI styling and board layout
├── about.html      # Chess information and rules
├── contact.html    # Contact page
├── login.html      # User login page
├── signup.html     # User registration page
├── auth.js         # Client-side authentication logic
├── package.json    # Project configuration
└── README.md       # Project documentation
```

## Requirements

To run this project, you will need:

- A modern web browser such as Chrome, Firefox, Edge, or Safari
- **Node.js** (optional) if you want to use the included development server

The application does not require a database or backend service. User accounts and contact form submissions are stored using the browser's `localStorage`.

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

Open `index.html` in your browser by double-clicking it. For the best experience, especially for the login and contact features, running the project through a local server is recommended.

## Playing the Game

1. Open **Play** (`chess.html`) or click **Start Playing** from the home page.
2. White always takes the first move.
3. Click on a piece to select it. The selected square will be highlighted.
4. Click another square to attempt the move. Invalid moves are automatically rejected.
5. Capture an opponent's piece by moving onto its square with a valid move.
6. After a successful move, the turn automatically changes to the other player.

## Project Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Introduction and project overview |
| Play | `chess.html` | Main gameplay screen |
| About | `about.html` | Chess history and basic rules |
| Contact | `contact.html` | Contact form |
| Login | `login.html` | Demo user login |
| Sign Up | `signup.html` | Demo account registration |

## Demo Authentication

Authentication is handled completely within the browser using **localStorage**. No external server or database is required.

- Register using your first name, last name, email address, and password.
- Log in using the same email address and password.
- Successful authentication redirects you to the chess game.
- All stored information remains in your browser until the site's storage is cleared.

> **Note:** Passwords are stored as plain text in `localStorage`. This implementation is designed only for educational and demonstration purposes and should not be used in production environments.

## Technologies

- HTML5
- CSS3 (Grid and Flexbox)
- Vanilla JavaScript (DOM manipulation, events, and game logic)
- Unicode chess characters

## Current Limitations

- Check and checkmate detection are not implemented
- Castling, en passant, and pawn promotion are not available
- Online multiplayer is not supported
- Game progress is not saved after refreshing the page

## Future Enhancements

- Implement check and checkmate detection
- Add castling, en passant, and pawn promotion
- Support saving and restoring games
- Display a complete move history
- Integrate a backend service for authentication

## License

Released under the **MIT License**.
