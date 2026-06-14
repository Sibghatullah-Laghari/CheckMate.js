#!/bin/bash
# Start the Chess Game local development server
cd "$(dirname "$0")"
echo "Starting Chess Game server at http://localhost:3000"
echo "Press Ctrl+C to stop."
python3 -m http.server 3000
