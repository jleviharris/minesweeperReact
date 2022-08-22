import logo from "./logo.svg";
import "./App.css";
import GameBoard from "./Components/GameBoard";
import React, { useState } from "react";
import ButtonBoard from "./Components/ButtonBoard";

//TODO:
// create board
//create timer
// create numer of flags
// left click open , right click flag

function App() {
  let numCols = 25;
  let numRows = 25;

  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(
        Array.from(Array(numCols), () => (Math.random() > 0.5 ? 1 : 0))
      );
    }
    return rows;
  });

  // const runApp = useCallback(() => {
  //   setGrid((g) => {
  //     return produce(g, (gridCopy) => {
  //       for (let i = 0; i < numRows - 1; i++) {
  //         for (let k = 0; k < numCols - 1; k++) {

  //         }
  //       }
  //     });
  //   });

  //   setTimeout(runApp, speedRef.current);
  // }, []);

  return (
    <div className="App">
      <ButtonBoard />
      <GameBoard grid={grid} setGrid={setGrid} numCols={numCols} />
    </div>
  );
}

export default App;