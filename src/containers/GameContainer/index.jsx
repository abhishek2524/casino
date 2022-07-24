import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import Sidebar from "../../components/common/Sidebar";
import "./gameContainer.scss";
function GameContainer() {
  const params = useParams();
  const { gameName } = params;
  return (
    <>
      <div className="gameSubheader">
        <div className="container">
          <div className="linkDiv">
            <NavLink className="links" to={gameName ? gameName : "dragon"} end>
              Game Name
            </NavLink>
            <NavLink
              className="links"
              to={gameName ? `${gameName}/placeBet` : "dragon/placeBet"}
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
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default GameContainer;
