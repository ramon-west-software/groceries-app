#!/bin/bash

# Root path ".../kitchen-stock"
ROOT_DIR=$(pwd)

# Directory paths for the server and client apps
SERVER_DIR="$ROOT_DIR/mock-backend"
CLIENT_DIR="$ROOT_DIR/react-client"

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

# Wait for client and server to start
sleep 1
open_client

# Wait for both processes to finish (you can add more logic here as needed)
wait


