import React, { useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import AdvanceSearch from "../../components/common/AdvanceSearch";
import GameResultComponent from "../../components/GameResultComponent/GameResultComponent";
import "./gameResult.scss";
function GameResultContainer() {
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  let gName = "dragon";
  if (param.has("gName")) {
    gName = param.get("gName");
  }
  const [gameName, setGameName] = useState(gName);
  const gameFullName = {
    dragon: "20-20 Dragon Tiger",
    lucky7: "Luck7 7 - B",
    teenpati: "20-20 Teenpatti",
    card32: "32 Cards",
    andarBahar: "Andar Bahar",
    queen: "Casino queen",
    poker: "20-20 Poker",
    race20: "Race 20-20",
  };
  const selectOption = [
    { value: "dragon", label: "20-20 Dragon Tiger" },
    { value: "lucky7", label: "Luck7 7 - B" },
    { value: "teenpati", label: "20-20 Teenpatti" },
    { value: "card32", label: "32 Cards" },
  ];
  const handleOnChange = (data) => {
    setGameName(data.value);
  };
  const data = [
    { id: "221065890014", name: "dt20" },
    { id: "221065890014", name: "dt20" },
  ];
  return (
    <>
      <div className="gameSubheader">
        <div className="container">
          <NavLink className="links" to={`/game/${gameName}`} end>
            {gameFullName[gameName]}
          </NavLink>
        </div>
      </div>
      <div className="container gameResultContainer">
        <AdvanceSearch
          isSelectSearch={true}
          onChange={handleOnChange}
          selectOptions={selectOption}
          value={{ value: gameName, label: gameFullName[gameName] }}
        />
        <GameResultComponent data={data} />
      </div>
    </>
  );
}

export default GameResultContainer;
