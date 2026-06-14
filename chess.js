const chessboard = document.querySelector('.chessboard');

// Unicode characters for chess pieces
const pieces = {
    wP: '♙',  // White Pawn
    bP: '♟',  // Black Pawn
    wR: '♖',  // White Rook
    bR: '♜',  // Black Rook
    wN: '♘',  // White Knight
    bN: '♞',  // Black Knight
    wB: '♗',  // White Bishop
    bB: '♝',  // Black Bishop
    wQ: '♕',  // White Queen
    bQ: '♛',  // Black Queen
    wK: '♔',  // White King
    bK: '♚',  // Black King
};

let selectedPiece = null;
let selectedSquare = null;
let currentPlayer = 'w';  // White starts

// Create chessboard (8x8 grid)
for (let i = 0; i < 64; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute('data-index', i);

    const row = Math.floor(i / 8);
    const col = i % 8;
    if ((row + col) % 2 === 0) {
        square.classList.add('white');
    } else {
        square.classList.add('black');
    }

    // Initial pieces on the board
    if (row === 1) addPiece(square, 'bP');  // Black pawns
    if (row === 6) addPiece(square, 'wP');  // White pawns
    if (row === 0) {
        if (col === 0 || col === 7) addPiece(square, 'bR');
        else if (col === 1 || col === 6) addPiece(square, 'bN');
        else if (col === 2 || col === 5) addPiece(square, 'bB');
        else if (col === 3) addPiece(square, 'bQ');
        else if (col === 4) addPiece(square, 'bK');
    }
    if (row === 7) {
        if (col === 0 || col === 7) addPiece(square, 'wR');
        else if (col === 1 || col === 6) addPiece(square, 'wN');
        else if (col === 2 || col === 5) addPiece(square, 'wB');
        else if (col === 3) addPiece(square, 'wQ');
        else if (col === 4) addPiece(square, 'wK');
    }

    square.addEventListener('click', () => handleSquareClick(square));
    chessboard.appendChild(square);
}

// Add pieces to board
function addPiece(square, piece) {
    const pieceElement = document.createElement('div');
    pieceElement.classList.add('piece');
    pieceElement.textContent = pieces[piece];
    pieceElement.setAttribute('data-piece', piece);
    square.appendChild(pieceElement);
}

// Handle square click event
function handleSquareClick(square) {
    const pieceElement = square.querySelector('.piece');
    const squareIndex = square.getAttribute('data-index');

    // If a piece is selected already
    if (selectedPiece) {
        if (!pieceElement) {
            if (isValidMove(selectedSquare, square)) {
                movePiece(square);
            } else {
                alert("Invalid move for this piece.");
            }
        } else if (pieceElement) {
            if (pieceElement.dataset.piece[0] !== currentPlayer) {
                if (isValidMove(selectedSquare, square)) {
                    capturePiece(pieceElement);
                    movePiece(square);
                } else {
                    alert("Invalid move.");
                }
            }
            deselectPiece();
            selectPiece(pieceElement);
        }
    } else {
        if (pieceElement && pieceElement.dataset.piece[0] === currentPlayer) {
            selectPiece(pieceElement);
        }
    }
}

// Select and highlight piece
function selectPiece(pieceElement) {
    selectedPiece = pieceElement;
    selectedSquare = pieceElement.parentElement;
    selectedSquare.classList.add('selected');
}

// Deselect the currently selected piece
function deselectPiece() {
    if (selectedSquare) {
        selectedSquare.classList.remove('selected');
    }
    selectedPiece = null;
    selectedSquare = null;
}

// Move the selected piece to a new square
function movePiece(square) {
    // Move the piece to the target square
    square.appendChild(selectedPiece);
    deselectPiece(); // Deselect after move

    // Switch turn after the move
    switchPlayer();
}

// Capture the opponent's piece
function capturePiece(pieceElement) {
    pieceElement.remove();  // Remove the captured piece
}

// Switch turns between players
function switchPlayer() {
    currentPlayer = (currentPlayer === 'w') ? 'b' : 'w';
    updateTurnIndicator();
}

function updateTurnIndicator() {
    const indicator = document.getElementById('turn-indicator');
    if (indicator) {
        indicator.textContent = currentPlayer === 'w' ? 'White' : 'Black';
    }
}

// Validate if the move is legal for the given piece
function isValidMove(fromSquare, toSquare) {
    const fromPiece = fromSquare.querySelector('.piece').dataset.piece;
    const toPiece = toSquare.querySelector('.piece');
    const fromRow = Math.floor(fromSquare.getAttribute('data-index') / 8);
    const fromCol = fromSquare.getAttribute('data-index') % 8;
    const toRow = Math.floor(toSquare.getAttribute('data-index') / 8);
    const toCol = toSquare.getAttribute('data-index') % 8;

    const pieceType = fromPiece[1];

    // Check if destination square is occupied by own piece
    if (toPiece && toPiece.dataset.piece[0] === currentPlayer) {
        return false;  // Can't capture own piece
    }

    switch (pieceType) {
        case 'P': // Pawn
            return isValidPawnMove(fromRow, fromCol, toRow, toCol, fromPiece[0]);
        case 'R': // Rook
            return isValidRookMove(fromRow, fromCol, toRow, toCol);
        case 'N': // Knight
            return isValidKnightMove(fromRow, fromCol, toRow, toCol);
        case 'B': // Bishop
            return isValidBishopMove(fromRow, fromCol, toRow, toCol);
        case 'Q': // Queen
            return isValidQueenMove(fromRow, fromCol, toRow, toCol);
        case 'K': // King
            return isValidKingMove(fromRow, fromCol, toRow, toCol);
        default:
            return false;
    }
}

// Helper function to check if a pawn move is valid
function isValidPawnMove(fromRow, fromCol, toRow, toCol, color) {
    const direction = color === 'w' ? -1 : 1;  // White moves up, Black moves down
    const startRow = color === 'w' ? 6 : 1;    // White pawns start at row 6, Black pawns at row 1

    // Regular one-square move
    if (fromCol === toCol && (toRow - fromRow) === direction && !document.querySelector(`[data-index="${toRow * 8 + toCol}"] .piece`)) {
        return true;
    }

    // First-time two-square move (only if pawn is on starting row)
    if (fromCol === toCol && (toRow - fromRow) === 2 * direction && fromRow === startRow) {
        // Check if both squares are empty
        const firstSquareEmpty = !document.querySelector(`[data-index="${(fromRow + direction) * 8 + fromCol}"] .piece`);
        const secondSquareEmpty = !document.querySelector(`[data-index="${toRow * 8 + toCol}"] .piece`);
        if (firstSquareEmpty && secondSquareEmpty) {
            return true;
        }
    }

    // Capture diagonally
    if (Math.abs(fromCol - toCol) === 1 && (toRow - fromRow) === direction) {
        const targetPiece = document.querySelector(`[data-index="${toRow * 8 + toCol}"] .piece`);
        if (targetPiece && targetPiece.dataset.piece[0] !== color) {
            return true;
        }
    }

    return false;
}

// Helper function to check if a rook move is valid
function isValidRookMove(fromRow, fromCol, toRow, toCol) {
    if (fromRow === toRow || fromCol === toCol) {
        return isPathClear(fromRow, fromCol, toRow, toCol);
    }
    return false;
}

// Helper function to check if a bishop move is valid
function isValidBishopMove(fromRow, fromCol, toRow, toCol) {
    if (Math.abs(fromRow - toRow) === Math.abs(fromCol - toCol)) {
        return isPathClear(fromRow, fromCol, toRow, toCol);
    }
    return false;
}

// Helper function to check if a queen move is valid
function isValidQueenMove(fromRow, fromCol, toRow, toCol) {
    return isValidRookMove(fromRow, fromCol, toRow, toCol) || isValidBishopMove(fromRow, fromCol, toRow, toCol);
}

// Helper function to check if a knight move is valid
function isValidKnightMove(fromRow, fromCol, toRow, toCol) {
    const rowDiff = Math.abs(fromRow - toRow);
    const colDiff = Math.abs(fromCol - toCol);
    return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
}

// Helper function to check if a king move is valid
function isValidKingMove(fromRow, fromCol, toRow, toCol) {
    const rowDiff = Math.abs(fromRow - toRow);
    const colDiff = Math.abs(fromCol - toCol);
    return (rowDiff <= 1 && colDiff <= 1);
}

// Helper function to check if a path is clear (for Rook, Bishop, Queen)
function isPathClear(fromRow, fromCol, toRow, toCol) {
    const rowDir = toRow > fromRow ? 1 : (toRow < fromRow ? -1 : 0);
    const colDir = toCol > fromCol ? 1 : (toCol < fromCol ? -1 : 0);

    let row = fromRow + rowDir;
    let col = fromCol + colDir;

    while (row !== toRow || col !== toCol) {
        const square = document.querySelector(`[data-index="${row * 8 + col}"]`);
        if (square.querySelector('.piece')) {
            return false;  // Path is blocked
        }
        row += rowDir;
        col += colDir;
    }
    return true;
}
