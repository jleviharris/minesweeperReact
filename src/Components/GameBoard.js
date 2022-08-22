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
  let neighbors;
  function refreshPage() {
    window.location.reload(false);
  }
  function checkNeighbors(i, k) {
    // check for top left corner
    if (i === 0 && k === 0) {
      neighbors = grid[i][k + 1] + grid[i + 1][k] + grid[i + 1][k + 1];
      // check for top border
    } else if ((i === 0) & (k > 0 || k < numCols - 1)) {
      neighbors =
        grid[i][k - 1] +
        grid[i][k + 1] +
        grid[i + 1][k - 1] +
        grid[i + 1][k] +
        grid[i + 1][k + 1];
      // check for top right corner
    } else if (i === 0 && k === numCols - 1) {
      neighbors = grid[i][k - 1] + grid[i + 1][k - 1] + grid[i + 1][k];
      // check for left border
    } else if (i > 0 && i < numRows - 1 && k === 0) {
      neighbors =
        grid[i - 1][k] +
        grid[i - 1][k + 1] +
        grid[i][k + 1] +
        grid[i + 1][k] +
        grid[i + 1][k + 1];
      // check for all indexs not on a border
    } else if (i > 0 && i < numRows - 1 && k > 0 && k < numCols - 1) {
      neighbors =
        grid[i - 1][k - 1] +
        grid[i - 1][k] +
        grid[i - 1][k + 1] +
        grid[i][k - 1] +
        grid[i][k + 1] +
        grid[i + 1][k - 1] +
        grid[i + 1][k] +
        grid[i + 1][k + 1];
      // check for right border
    } else if (i > 0 && i < numRows - 1 && k === numCols - 1) {
      neighbors =
        grid[i - 1][k - 1] +
        grid[i - 1][k] +
        grid[i][k - 1] +
        grid[i + 1][k - 1] +
        grid[i + 1][k];
      // check for bottom left corner
    } else if (i === numRows - 1 && k === 0) {
      neighbors = grid[i - 1][k] + grid[i - 1][k + 1] + grid[i][k + 1];
      // check for bottom border
    } else if (i === numRows - 1 && k > 0 && k < numCols - 1) {
      neighbors =
        grid[i - 1][k - 1] +
        grid[i - 1][k] +
        grid[i - 1][k + 1] +
        grid[i][k - 1] +
        grid[i][k + 1];
      // check for bottom right corner
    } else if (i === numRows - 1 && k === numCols - 1) {
      neighbors = grid[i - 1][k - 1] + grid[i - 1][k] + grid[i][k - 1];
    }
    return neighbors;
  }

  function handleClick(i, k) {
    if (!running) {
      setRunning(true);
    }
    if (grid[i][k] === 1) {
      alert("You hit a mine");
      refreshPage();
    } else if (grid[i][k] === 0) {
      checkNeighbors(i, k);
      console.log(neighbors);
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
