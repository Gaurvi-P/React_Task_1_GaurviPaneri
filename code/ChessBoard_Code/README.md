# (Task-1) Color Changing ChessBoard Game

## Description
This is a React application that renders an 8×8 chessboard using Redux for state management.
- The board alternates between white and black squares.
- Clicking on a white square changes its color to yellow.
- Clicking on a black square changes its color to red.
This project demonstrates React, Redux, and basic styling concepts.

## Features
- Dynamic color change on square click.
- State managed using Redux store.

## Technologies Used
- React (via Vite)
- Redux Toolkit (@reduxjs/toolkit)
- React-Redux (react-redux)
- CSS (for styling)

## Folder Structure
src/
  ├── components/
  │     └── ChessBoard.jsx
  ├── store/
  │     └── store.jsx
  ├── features/
  │     └── boardSlice.jsx
  ├── App.jsx
  ├── index.css
  └── main.jsx

## Installation and Setup
Open the terminal in VS Code and follow the steps:
1. Clone repository
    git clone https://github.com/GaurviP/ChessBoard.git
    cd ChessBoard
2. Install Dependencies
    npm install
3. Run the development Server
    npm run dev

The app will run at: http://localhost:5173

## Working
How it works
- The chessboard is represented as an 8×8 grid with alternating white and black squares.
- The board state (colors of squares) is stored in a Redux store as a 2D array.
- When you click a square, an action is dispatched to Redux to update the color:
    - If the square was white, it changes to yellow.
    - If the square was black, it changes to red.
- The React component subscribes to the Redux store and re-renders the board whenever the state changes.
- This demonstrates how to use Redux for global state management and React for dynamic UI updates.


  