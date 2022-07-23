import React from "react";
import "./games.scss";
function Games() {
  return (
    <div className="gameMainDiv">
      <h1>Games</h1>
      <div className="row">
        {new Array(8).fill(undefined).map((data, index) => {
          return (
            <div
              key={`index-${index}`}
              className="col-lg-3 col-md-4 col-sm-6 gameCard"
            >
              <img src="assets/tempImages/games/games.png" alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Games;
