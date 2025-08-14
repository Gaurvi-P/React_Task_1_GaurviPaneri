import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeColor } from '../features/boardSlice';

const SQUARE = 60; // px

export default function ChessBoard() {
  const squares = useSelector((s) => s.board.squares);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'inline-block' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(8, ${SQUARE}px)`,
          gap: 0,
        }}
      >
        {squares.map((row, r) =>
          row.map((color, c) => (
            <div
              key={`${r}-${c}`}
              onClick={() => dispatch(changeColor({ row: r, col: c }))}
              style={{
                width: SQUARE,
                height: SQUARE,
                backgroundColor: color,
                boxSizing: 'border-box',
                border: '1px solid #222',
                cursor: 'pointer',
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}