import React from "react";
import { useState } from "react";
import produce from "immer";

const GameBoard = ({
  grid,
  numCols,
  numRows,
  setGrid,
  running,
  setRunning,
}) => {
  function refreshPage() {
    window.location.reload(false);
  }

  function handleClick(i, k) {
    if (!running) {
      setRunning(true);
    }
    if (grid[i][k] === 0) {
      alert("You hit a mine");
      refreshPage();
    } else if (grid[i][k] === 1) {
      console.log("no Mine");
    }
  }

  return (
    <div
      className="boardContainer"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numCols}, auto)`,
      }}
    >
      {grid.map((rows, i) =>
        rows.map((col, k) => (
          <div
            className="singleBox"
            key={i - k}
            onClick={() => {
              handleClick(i, k);
            }}
            style={{
              width: 22,
              height: 22,
              backgroundColor: "#31cc5f",
              border: "1px solid #595959",
            }}
          />
        ))
      )}
    </div>
  );
};

export default GameBoard;
