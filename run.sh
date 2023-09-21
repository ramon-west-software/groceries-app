#!/bin/bash

# Directory paths for the server and client apps
SERVER_DIR="/Users/ramonwest/Projects/kitchen-stock/server"
CLIENT_DIR="/Users/ramonwest/Projects/kitchen-stock/client"

# Function to start the server app
start_server() {
  echo "Starting the server app..."
  cd "$SERVER_DIR" || exit 1
  # Call command to start your server app
  npm run dev &
}

# Function to start the React client app
start_client() {
  echo "Starting the React client app on port 5173 ..."
  cd "$CLIENT_DIR" || exit 1
  # Call command to start your React app
  npm run dev &
}

# Function to open the React client app in browser
open_client() {
    open "http://localhost:5173"
}

# Start the server app and React client app in parallel
start_server
start_client
open_client

# Wait for both processes to finish (you can add more logic here as needed)
wait


