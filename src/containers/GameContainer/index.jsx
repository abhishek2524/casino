import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Sidebar from "../../components/common/Sidebar";
import CustomModal from "../../components/common/CustomModal";
import GameComponent from "../../components/GameComponent";
import PlacedBet from "./../../components/PlacedBet";
import "./gameContainer.scss";
import ViewRule from "./ViewRule";
function GameContainer(props) {
  const [showModal, setShowModal] = useState(false);
  const { placeBet = false } = props;
  const param = useParams();
  const { gameName = "dragon" } = param;
  const availableGames = ["dragon", "lucky7", "teenpati", "card32"];
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

  const openRuleModal = () => {
    setShowModal(true);
  };
  const closeRuleModal = () => {
    setShowModal(false);
  };
  const RuleComponent = ViewRule;
  return (
    <>
      {showModal && (
        <CustomModal show={showModal} handleHide={closeRuleModal}>
          <RuleComponent />
        </CustomModal>
      )}
      <div className="gameSubheader">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="linkDiv">
            <NavLink
              className="links text-uppercase"
              to={`/game/${gameName}`}
              end
            >
              {gameFullName[gameName]}
            </NavLink>
            <NavLink className="links" to={`/game/${gameName}/placeBet`} end>
              PLACED BETS (0)
            </NavLink>
          </div>
          <div className="rules">
            {availableGames.includes(gameName) && (
              <div role="button" onClick={openRuleModal}>
                View Rules
              </div>
            )}
            <div>Round ID: 22190775008</div>
          </div>
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
