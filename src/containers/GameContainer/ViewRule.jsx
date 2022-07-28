import React from "react";
import { useParams } from "react-router-dom";
import Card32Game from "../../components/GameComponent/Card32Game/Card32Game";
import DragonTigerGameRule from "../../components/GameComponent/DragonTigerGame/DragonTigerGameRule/DragonTigerGameRule";
import Lucky7GameRule from "../../components/GameComponent/Lucky7Game/Lucky7GameRule";
import TeenpatiGameRule from "../../components/GameComponent/Teenpati/TeenpatiGameRule";

function ViewRule() {
  const param = useParams();
  const { gameName = "dragon" } = param;
  if (gameName === "dragon") return <DragonTigerGameRule />;
  else if (gameName === "lucky7") return <Lucky7GameRule />;
  else if (gameName === "teenpati") return <TeenpatiGameRule />;
  else if (gameName === "card32") return <Card32Game />;
  else return null;
}

export default ViewRule;
