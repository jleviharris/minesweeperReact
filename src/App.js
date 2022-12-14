import logo from "./logo.svg";
import "./App.css";
import GameBoard from "./Components/GameBoard";
import React, { useState } from "react";
import ButtonBoard from "./Components/ButtonBoard";

//TODO:
// create board
// have flags count down when placed
// left click open , right click flag
// create logic to see what number a block should be if touching a mine
// 1 = mine , 0 = empty

function App() {
  let numCols = 25;
  let numRows = 25;
  const [running, setRunning] = useState(false);

  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(
        Array.from(Array(numCols), () => (Math.random() > 0.1 ? 0 : 1))
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
      <ButtonBoard
        grid={grid}
        setGrid={setGrid}
        numCols={numCols}
        numRows={numRows}
        running={running}
        setRunning={setRunning}
      />
      <GameBoard
        grid={grid}
        setGrid={setGrid}
        numCols={numCols}
        running={running}
        setRunning={setRunning}
      />
    </div>
  );
}

export default App;
