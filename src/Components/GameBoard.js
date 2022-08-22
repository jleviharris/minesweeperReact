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
            className="singleBox"
            key={i - k}
            // onClick={}
            style={{
              width: 22,
              height: 22,
              backgroundColor: "#31cc5f",
              border: "1px solid #595959",
              "&:hover": { backgroundColor: "black" },
            }}
          />
        ))
      )}
    </div>
  );
};

export default GameBoard;
