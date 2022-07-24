import React from "react";
import { NavLink } from "react-router-dom";

function BottomSidebar() {
  return (
    <div className="bottomDiv">
      <div className="header">Games</div>
      <div className="sideBarLinks">
        <NavLink className="navLink" to="dragon">
          20-20 Dragon Tiger
        </NavLink>
        <NavLink className="navLink" to="luck7">
          Luck7 7 - B
        </NavLink>
        <NavLink className="navLink" to="teenpati">
          20-20 Teenpatti
        </NavLink>
        <NavLink className="navLink" to="cards">
          32 Cards
        </NavLink>
        <NavLink className="navLink" to="andarBahar">
          Andar Bahar
        </NavLink>
        <NavLink className="navLink" to="queen">
          Casino queen
        </NavLink>
        <NavLink className="navLink" to="poker">
          20-20 Poker
        </NavLink>
        <NavLink className="navLink" to="race">
          Race 20-20
        </NavLink>
      </div>
    </div>
  );
}

export default BottomSidebar;
