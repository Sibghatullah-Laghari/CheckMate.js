#!/bin/bash
# ============================================
# Chess Game – Development Server Starter...
# ============================================
# Purpose:  Launches a simple HTTP server...
#           to serve the Chess Game frontend...
# Updated:  2026-07-16...
# ============================================

# Navigate to the script's directory (project root)
cd "$(dirname "$0")"

# ---- Configuration ----
PORT=3000
HOST="localhost"

# ---- Check if port is already in use ----
if lsof -i ":$PORT" > /dev/null 2>&1; then
    echo "⚠️  Port $PORT is already in use."
    echo "   Try: kill $(lsof -t -i ":$PORT")"
    echo "   Or use a different port: ./start_server.sh -p 8080"
    exit 1
fi

# ---- Detect Python version ----
if command -v python3 &> /dev/null; then
    PYTHON_CMD="python3"
elif command -v python &> /dev/null; then
    PYTHON_CMD="python"
else
    echo "❌ Python is not installed. Please install Python 3."
    exit 1
fi

# ---- Display startup message ----
echo "♟️  Chess Game development server"
echo "📂 Serving from: $(pwd)"
echo "🌐 URL: http://$HOST:$PORT"
echo "🛑 Use Ctrl+C to stop the server."
echo ""

# ---- Launch the server ----
$PYTHON_CMD -m http.server "$PORT"

# ---- Note: This line runs after the server stops ----
echo ""
echo "✅ Server stopped."
