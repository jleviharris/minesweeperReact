import React from "react";
import Timer from "./Timer";

const ButtonBoard = ({ numRows, numCols, setGrid }) => {
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
          <Timer />
        </li>
      </ul>
    </div>
  );
};

export default ButtonBoard;
