import React from "react";
import { useNavigate } from "react-router-dom";
import "./games.scss";
function Games() {
  const navigate = useNavigate();
  return (
    <div className="gameMainDiv">
      <h1>Games</h1>
      <div className="row">
        {new Array(8).fill(undefined).map((data, index) => {
          return (
            <div
              key={`index-${index}`}
              className="col-lg-3 col-md-4 col-sm-6 gameCard position-relative"
              role="button"
              onClick={() => {
                navigate("/game/dragon");
              }}
            >
              <img src="/assets/tempImages/games/games.png" alt="" />
              <span className="gameTitle">20-20 Dragon Tiger</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Games;
