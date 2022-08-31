import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Sidebar from "../../components/common/Sidebar";
import CustomRuleModal from "../../components/common/CustomRuleModal";
import GameComponent from "../../components/GameComponent";
import PlacedBet from "./../../components/PlacedBet";
import "./gameContainer.scss";
import ViewRule from "./ViewRule";
import { w3cwebsocket as W3CWebsocket } from "websocket";
import { connect } from "react-redux";
import { updateGameStatus, resetAll } from "./../../reducers/gameSlice";
import axios from "axios";
import { useRef } from "react";

function GameContainer(props) {
  const { gamesData } = props;
  const {
    type = undefined,
    value = undefined,
    amount = 0,
  } = gamesData.gameType;
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { placeBet = false, updateGameStatus, resetAll } = props;
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
  const toggleSideBar = () => setShowSidebar(!showSidebar);
  const RuleComponent = ViewRule;

  const fetchSectionId = async () => {
    const apiURL = `${process.env.REACT_APP_BACKEND_API}/game/dragon_tiger_section/`;
    const res = await axios({
      method: "GET",
      url: apiURL,

      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      // data: { username, password },
    });
    console.log("sectionId", res);
  };
  let wss = useRef(null);
  useEffect(() => {
    wss.current = new W3CWebsocket(process.env.REACT_APP_WS_API);

    wss.current.onopen = () => {
      console.log("wss connected");
    };
    wss.current.onmessage = (message) => {
      console.log("socket msg received", JSON.parse(message.data));
      const data = JSON.parse(message.data);
      if (data) {
        if (data.isGameActive !== "undefined") {
          updateGameStatus({ isGameActive: data.isGameActive });
          // fetchSectionId();
        }
      }
    };
    // wss.onclose = () => {
    //   console.log("wss connection closed");
    // };
    return () => {
      wss.current.close();
    };
  }, []);
  const handleBetPlacedSocket = (data) => {
    try {
      const { betAmount } = data;
      if (!type && !betAmount && !value) {
        return;
      }
      const reqData = {
        [type]: value,
        [`${type}_amount`]: betAmount,
      };
      console.log("handleBetPlacedSocket::::", reqData);
      wss.current.send(JSON.stringify(reqData));
    } catch (error) {
      console.log("error while sending", error);
    }
  };

  return (
    <>
      {showModal && (
        <CustomRuleModal show={showModal} handleHide={closeRuleModal}>
          <RuleComponent />
        </CustomRuleModal>
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
          {!showSidebar && (
            <div
              className="sidebarHamburger"
              role="button"
              onClick={() => toggleSideBar()}
            >
              <img src="/assets/icons/hamburger-icon.svg" alt="" />
            </div>
          )}
          {showSidebar && (
            <div className="gameSidebarShowOnMobile">
              <Sidebar toggleSideBar={toggleSideBar} />
            </div>
          )}

          <div className="gameSidebarHideOnMobile">
            <Sidebar handleBetPlacedSocket={handleBetPlacedSocket} />
          </div>

          <div className="contentDiv">
            {placeBet && <PlacedBet />}
            {!placeBet && <GameComponent />}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ gamesData }) => ({
  gamesData,
});
const mapDispatchToProps = {
  updateGameStatus,
  resetAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
