import { createSlice } from '@reduxjs/toolkit';

const createInitialBoard = () =>
  Array.from({ length: 8 }, (_, row) =>
    Array.from({ length: 8 }, (_, col) => ((row + col) % 2 === 0 ? 'white' : 'black'))
  );

const initialState = {
  squares: createInitialBoard(), //this will create 8x8 array of 'white'/'black' squares
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    changeColor(state, action) {
      const { row, col } = action.payload;
      const curr = state.squares[row][col];
      // Only the original white/black change color; others stay as-is
      if (curr === 'white') state.squares[row][col] = 'yellow';
      else if (curr === 'black') state.squares[row][col] = 'red';
    },
    resetBoard(state) {
      state.squares = createInitialBoard();
    },
  },
});

export const { changeColor, resetBoard } = boardSlice.actions;
export default boardSlice.reducer;