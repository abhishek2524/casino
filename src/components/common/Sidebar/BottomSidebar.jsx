import React from "react";
import { NavLink } from "react-router-dom";

function BottomSidebar() {
  const gameLink = [
    {
      label: "20-20 Dragon Tiger",
      link: "/game/dragon",
    },
    {
      label: "Luck7 7 - B",
      link: "/game/lucky7",
    },
    {
      label: "20-20 Teenpatti",
      link: "/game/teenpati",
    },

    {
      label: "32 Cards",
      link: "/game/card32",
    },
    {
      label: "Andar Bahar",
      link: "/game/andarBahar",
    },
    {
      label: "Casino queen",
      link: "/game/queen",
    },

    {
      label: "20-20 Poker",
      link: "/game/poker",
    },
    {
      label: "Race 20-20",
      link: "/game/race20",
    },
  ];
  return (
    <div className="bottomDiv">
      <div className="header">Games</div>
      <div className="sideBarLinks">
        {gameLink.map(({ link, label }, index) => (
          <NavLink key={index} className="navLink" to={link}>
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default BottomSidebar;
