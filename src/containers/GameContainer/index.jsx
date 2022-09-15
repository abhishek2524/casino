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
import {
  updateGameStatus,
  resetGameType,
  updateGameType,
  updateSessionId,
  startTimer,
  stopTimer,
  updateTiger,
  updateDragon,
} from "./../../reducers/gameDataSlice";
import axios from "axios";
import { useRef } from "react";
import Notification from "../../components/common/Notification";
import { toast } from "react-toastify";
import BetInputField from "../../components/GameComponent/DragonTigerGame/BetInputField";

class NotifyClass {
  constructor(text, type) {
    this.notifyText = text;
    this.notifyType = type;
  }
}
function GameContainer(props) {
  const {
    type = undefined,
    value = undefined,
    amount = 0,
    isGameActive = false,
    updateSessionId,
    sessionId,
    startTimer,
    stopTimer,
    dragonArr,
    tigerArr,
    updateTiger,
    updateDragon,
  } = props;
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { placeBet = false, updateGameStatus, resetGameType } = props;
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
  const handleNotification = (data) => {
    const text = data.notifyText;
    const type = data.notifyType;
    // toast("Wow so easy!");
    toast[type](text, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const fetchSectionId = async () => {
    const apiURL = `${process.env.REACT_APP_BACKEND_API}/game/dragon_tiger_session/`;
    const res = await axios({
      method: "GET",
      url: apiURL,

      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      // data: { username, password },
    });
    if (res.status === 200) {
      return updateSessionId({ sessionId: res.data });
    }
  };
  let wss = useRef(null);
  useEffect(() => {
    wss.current = new W3CWebsocket(process.env.REACT_APP_WS_API);

    wss.current.onopen = () => {
      console.log("wss connected");
      fetchSectionId();
    };
    wss.current.onmessage = (message) => {
      const data = JSON.parse(message.data);
      console.log("socket msg received", data.data);
      if (data) {
        // if (data.isGameActive !== undefined) {
        //   updateGameStatus({ isGameActive: data.isGameActive });
        // }// lock untill new session starts
        if (data.data) {
          // if (data.data.status === 1) {
          //   const notifyObj = new NotifyClass(data.data.msg, "success");
          //   handleNotification(notifyObj);
          // }
          if (data.data.notification) {
            const notifyObj = new NotifyClass(
              data.data.notification.msg,
              data.data.notification.notifyType
            );
            handleNotification(notifyObj);
          }
          if (data.data.isGameActive !== undefined) {
            updateSessionId({ sessionId: data.data.session });
            if (data.data.isGameActive && data.data.time === 17) {
              updateGameStatus({ isGameActive: data.data.isGameActive });
              startTimer();
            } else if (!data.data.isGameActive) {
              updateGameStatus({ isGameActive: data.data.isGameActive });
            }
          }
          if (data.data.Dragon) {
            if (
              JSON.stringify(dragonArr) !== JSON.stringify(data.data.Dragon)
            ) {
              // console.log("Update Dragon:;");
              updateDragon({ dragonArr: data.data.Dragon });
            }
            updateDragon({ dragonArr: data.data.Dragon });
          }

          if (data.data.Tiger) {
            if (JSON.stringify(tigerArr) !== JSON.stringify(data.data.Tiger)) {
              // console.log("Update Tiger:;");
              updateTiger({ tigerArr: data.data.Tiger });
            }
            updateTiger({ tigerArr: data.data.Tiger });
          }
        }
      }
    };
    wss.onclose = () => {
      console.log("wss connection closed");
    };
    return () => {
      wss.current.close();
    };
  }, []);

  // useEffect(() => {
  //   const notifyObj = new NotifyClass("Hi", "success");
  //   handleNotification(notifyObj);
  // }, []);
  // useEffect(() => {
  //   if (wss.current) {
  //     setInterval(() => {
  //       updateGameStatus({ isGameActive: !isGameActive });
  //     }, 10000);
  //   }
  // }, [isGameActive]);
  const handleBetPlacedSocket = (data) => {
    try {
      if (wss.current.readyState === WebSocket.CLOSED) {
        localStorage.clear();
        const notifyObj = new NotifyClass("Session Expired.", "error");
        handleNotification(notifyObj);
        setTimeout(() => {
          window.location.reload();
        }, 4000);
        return;
      }
      const { betAmount } = data;
      if (!type && !betAmount && !value) {
        return;
      }
      const reqData = {
        [type]: value?.toString() ?? null,
        [`${type}_amount`]: betAmount,
        section_id: sessionId?.toString() ?? null,
        Dragon: "[1,2]",
        Tiger: "[1,2]",
        data: "dummy data",
        token: localStorage.getItem("access") ?? null,
      };
      console.log("handleBetPlacedSocket::::", reqData);
      // const notifyObj = new NotifyClass("Bid Placed", "success");
      // handleNotification(notifyObj);
      wss.current.send(JSON.stringify(reqData));
      resetGameType();
    } catch (error) {
      console.log("error while sending", error);
    }
  };

  return (
    <>
      {isGameActive && type && window.innerWidth < 993 && (
        <BetInputField
          handleBetPlacedSocket={handleBetPlacedSocket}
          show={true}
        />
      )}

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
            <div>Round ID: {sessionId}</div>
          </div>
        </div>
      </div>
      <div className="container p-0 gameContainerStyle position-relative">
        <Notification />
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
  type: gamesData.gameType.type,
  value: gamesData.gameType.value,
  amount: gamesData.gameType.amount,
  isGameActive: gamesData.isGameActive,
  sessionId: gamesData.sessionId,
  dragonArr: gamesData.dragonArr,
  tigerArr: gamesData.tigerArr,
});
const mapDispatchToProps = {
  updateGameStatus,
  updateGameType,
  resetGameType,
  updateSessionId,
  startTimer,
  stopTimer,
  updateDragon,
  updateTiger,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
