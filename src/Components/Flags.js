import { useState, useEffect } from "react";
import React from "react";

const Flags = ({ numRows, numCols, grid }) => {
  const [flags, setFlags] = useState(0);

  useEffect(() => {
    let flagCount = 0;
    for (let i = 0; i < numRows - 1; i++) {
      for (let k = 0; k < numCols - 1; k++) {
        if (grid[i][k] === 0) {
          flagCount++;
        }
      }
    }
    setFlags(flagCount);
  });

  return <div className="timerContainer">{flags}</div>;
};

export default Flags;
