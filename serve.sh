#!/bin/bash
PORT=8000
# Open Python's http.server
python3.9 -m http.server $PORT &
# Open URL in Firefox
firefox http://localhost:$PORT