import React from "react";
import { useParams } from "react-router-dom";
import DragonTigerGame from "./DragonTigerGame";
import Lucky7Game from "./Lucky7Game";
import Teenpati from "./Teenpati";

function GameComponent() {
  const param = useParams();
  const { gameName = "dragon" } = param;
  return (
    <>
      {gameName === "dragon" && <DragonTigerGame />}
      {gameName === "lucky7" && <Lucky7Game />}
      {gameName === "teenpati" && <Teenpati />}
    </>
  );
}

export default GameComponent;
