import React from "react";
import "./games.scss";
function Games() {
  return (
    <div className="gameMainDiv">
      <h1>Games</h1>
      <div className="row">
        {new Array(8).fill(undefined).map((data) => {
          return (
            <div className="col-3 card">
              <img src="assets/tempImages/games/games.png" alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Games;
