import React from "react";
import { useState } from "react";
import produce from "immer";

const GameBoard = ({ grid, numCols, numRows, setGrid }) => {
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
            key={i - k}
            // onClick={}
            style={{
              width: 22,
              height: 22,
              backgroundColor: "black",
              border: "1px solid #595959",
            }}
          />
        ))
      )}
    </div>
  );
};

export default GameBoard;
