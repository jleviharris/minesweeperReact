import React from "react";

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
      </ul>
    </div>
  );
};

export default ButtonBoard;
