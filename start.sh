#!/bin/bash

# Simple startup script for the Chess Game development server

# Navigate to the project directory
cd "$(dirname "$0")"

echo "Starting Chess Game development server at http://localhost:3000"
echo "Use Ctrl+C to stop the server."

# Launch a local HTTP server
python3 -m http.server 3000
