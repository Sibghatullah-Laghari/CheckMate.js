# Chess Game

A web-based chess application developed using **HTML**, **CSS**, and **JavaScript**. The project allows two players to play a local chess match, understand the fundamentals of chess, and use simple demonstration login and signup pages.

## Features

* **Interactive chessboard** — Standard 8×8 chessboard rendered using Unicode chess symbols
* **Local multiplayer** — Two players can play on the same device by taking alternating turns
* **Move validation** — Standard movement rules are supported for pawns, rooks, knights, bishops, queens, and kings
* **Piece capturing** — Opponent pieces can be captured by performing valid moves
* **Demo authentication** — Register and log in using browser `localStorage` without requiring a backend
* **Contact page** — User messages are saved locally within the browser
* **Information page** — Learn about basic chess history, rules, and chess piece movements

## Project Structure

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
├── package.json    # Project configuration
└── README.md       # Project documentation
```

## Requirements

To run this project, you will need:

* A modern web browser such as Chrome, Firefox, Edge, or Safari
* **Node.js** (optional) to use the included development server

The application does not require a database or backend service. User accounts and contact form submissions are stored through the browser's `localStorage`.

## Running the Project

### Option 1: Start script (recommended)

```bash
cd "ICT project"
./start.sh
```

Then open **http://localhost:3000** in your browser.

### Option 2: Python HTTP Server

```bash
cd "ICT project"
python3 -m http.server 3000
```

Once the server starts, visit **http://localhost:3000**.

### Option 3: npm

```bash
cd "ICT project"
npm start
```

Open **http://localhost:3000** after the server is running.

### Option 4: Open the HTML file directly

Open `index.html` in your browser by double-clicking the file. For a better experience, particularly when using the login and contact features, running the application through a local server is recommended.

## Playing the Game

1. Open **Play** (`chess.html`) or select **Start Playing** from the home page.
2. White always makes the first move.
3. Click a chess piece to select it. The selected square will be highlighted.
4. Click another square to attempt a move. Invalid moves are automatically rejected.
5. Capture an opponent's piece by moving onto its square using a valid move.
6. After each successful move, the turn automatically switches to the other player.

## Project Pages

| Page    | File           | Purpose                             |
| ------- | -------------- | ----------------------------------- |
| Home    | `index.html`   | Introduction and project overview   |
| Play    | `chess.html`   | Main chess gameplay screen          |
| About   | `about.html`   | Chess history and fundamental rules |
| Contact | `contact.html` | User contact form                   |
| Login   | `login.html`   | Demo account login                  |
| Sign Up | `signup.html`  | Demo account registration           |

## Demo Authentication

Authentication is managed entirely within the browser using **localStorage**. No external server or database is needed.

* Register with your first name, last name, email address, and password.
* Log in using the same email address and password.
* Successful authentication redirects the user to the chess game.
* Stored information remains in the browser until the site's local storage is cleared.

> **Note:** Passwords are stored as plain text in `localStorage`. This implementation is intended only for educational and demonstration purposes and must not be used in production environments.

## Technologies

* HTML5
* CSS3 (Grid and Flexbox)
* Vanilla JavaScript (DOM manipulation, events, and game logic)
* Unicode chess characters

## Current Limitations

* Check and checkmate detection are currently not implemented
* Castling, en passant, and pawn promotion are not supported
* Online multiplayer is not currently available
* Game progress is lost after refreshing the page

## Future Enhancements

* Add check and checkmate detection
* Implement castling, en passant, and pawn promotion
* Add support for saving and restoring games
* Display a complete game move history
* Integrate a backend service for user authentication

## License

Released under the **MIT License**.
