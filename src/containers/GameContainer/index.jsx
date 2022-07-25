import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Sidebar from "../../components/common/Sidebar";
import GameComponent from "../../components/GameComponent";
import PlacedBet from "./../../components/PlacedBet";
import "./gameContainer.scss";
function GameContainer(props) {
  console.log("ooooooooooooo", props);
  const { placeBet = false } = props;
  const params = useParams();
  const { gameName } = params;
  return (
    <>
      <div className="gameSubheader">
        <div className="container">
          <div className="linkDiv">
            <NavLink
              className="links"
              to={gameName ? `/game/${gameName}` : "/game/dragon"}
              end
            >
              Game Name
            </NavLink>
            <NavLink
              className="links"
              to={
                gameName
                  ? `/game/${gameName}/placeBet`
                  : "/game/dragon/placeBet"
              }
              end
            >
              PLACED BETS (0)
            </NavLink>
          </div>
          <div className="rules"></div>
        </div>
      </div>
      <div className="container p-0 gameContainerStyle">
        <div className="mt-3 d-flex">
          <Sidebar />

          <div className="contentDiv">
            {placeBet && <PlacedBet />}
            {!placeBet && <GameComponent />}
          </div>
        </div>
      </div>
    </>
  );
}

export default GameContainer;
