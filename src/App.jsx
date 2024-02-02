import React from "react";
import { useState } from "react";

function Square({ value, onSquareClick }){
  return <button className="square" onClick={onSquareClick}>{value}</button>
}

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);

  function handleClick(i) {
    if(square[i] || calculateWinner(square)) return;
    const nextSquares = square.slice();
    if(isNext)
    nextSquares[i] = "X";
    else
    nextSquares[i] = "O";

    setSquare(nextSquares);
    setIsNext(!isNext);
  }

  const winner = calculateWinner(square);
  let status;
  if(winner){
    status = "Winner is " + winner;
  }
  else {
  status = "Next Player " + (isNext? "X": "O");
  }

  return (
    <div>
    <div className="status">{status}</div>
    <div className="board-row">
  <Square value={square[0]} onSquareClick={() => handleClick(0)} />
  <Square value={square[1]} onSquareClick={() => handleClick(1)} />
  <Square value={square[2]} onSquareClick={() => handleClick(2)} />
    </div>
  <div className="board-row">
  <Square value={square[3]} onSquareClick={() => handleClick(3)} />
  <Square value={square[4]} onSquareClick={() => handleClick(4)} />
  <Square value={square[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className="board-row">
  <Square value={square[6]} onSquareClick={() => handleClick(6)} />
  <Square value={square[7]} onSquareClick={() => handleClick(7)} />
  <Square value={square[8]} onSquareClick={() => handleClick(8)} />
    </div>
    </div>
  );
}

function calculateWinner(square){
  const lines = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  for(let i = 0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if(square[a] && square[a]===square[b] && square[a]===square[c]){
      return square[a];
    }
  }
  return null;
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
