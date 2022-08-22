import React from "react";
import Timer from "./Timer";
import Flags from "./Flags";

const ButtonBoard = ({
  numRows,
  numCols,
  setGrid,
  grid,
  running,
  setRunning,
}) => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="buttonContainer">
      <ul>
        <li>
          <button onClick={refreshPage}>RESET</button>
        </li>
        <li>
          <Timer running={running} setRunning={setRunning} />
        </li>
        <li>
          <Flags numCols={numCols} numRows={numRows} grid={grid} />
        </li>
      </ul>
    </div>
  );
};

export default ButtonBoard;
