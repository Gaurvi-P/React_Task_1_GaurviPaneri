import React from 'react';
import ChessBoard from './components/ChessBoard';

function App() {
  

  return (
    <>
      <div style={{ padding: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh'}}>
      <div style={{display:'block', textAlign: 'center'}}>
      <h2> Color changing Chess Board </h2>
      <ChessBoard />
      </div>
    </div>
    </>
  )
}

export default App
