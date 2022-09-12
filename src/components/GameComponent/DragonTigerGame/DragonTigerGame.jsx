import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./dragonTiger.scss";
import { updateGameType, resetAll } from "./../../../reducers/gameDataSlice";
import { card_type } from "../../../utils/Utils";

const cards_number_list = [
  { value: 0, name: "A" },
  { value: 1, name: "2" },
  { value: 2, name: "3" },
  { value: 3, name: "4" },
  { value: 4, name: "5" },
  { value: 5, name: "6" },
  { value: 6, name: "7" },
  { value: 7, name: "8" },
  { value: 8, name: "9" },
  { value: 9, name: "10" },
  { value: 10, name: "J" },
  { value: 11, name: "Q" },
  { value: 12, name: "K" },
];
function DragonTigerGame(props) {
  const { gamesData, updateGameType } = props;
  const { isGameActive = undefined } = gamesData;
  const handle_card_type_game = (gameBtnType) => {
    console.log("handleGameButtonClick:::");
    updateGameType({
      type: "card_type",
      value: card_type[gameBtnType.toLowerCase()],
      amount: 0,
    });
  };

  const handleCardNumber = (data, gameName) => {
    console.log("handleCardNumber:::");
    updateGameType({
      type: gameName,
      value: data.value,
      amount: 0,
    });
  };

  const handleCardColorGame = (gameName, color) => {
    console.log("inside handleCardColorGame:::");
    let colorGameName = "";
    if (gameName === "DRAGON") {
      colorGameName = "card_Dragon_color";
    } else if (gameName === "TIGER") {
      colorGameName = "card_Tiger_color";
    }
    const color_obj = { black: 1, red: 0 };
    updateGameType({
      type: colorGameName,
      value: color_obj[color],
      amount: 0,
    });
  };

  const handleOEGame = (gameName, OEType) => {
    console.log("handleOEGame:::");
    let OEName = "";
    if (gameName === "DRAGON") {
      OEName = "card_Dragon_OE";
    } else if (gameName === "TIGER") {
      OEName = "card_Tiger_OE";
    }
    const OEVal = { odd: 1, even: 0 };
    updateGameType({
      type: OEName,
      value: OEVal[OEType],
      amount: 0,
    });
  };
  const GameButtons = (btnProps) => {
    return (
      <div className={btnProps.colClass}>
        <div className="text-center text">{btnProps.topCount}</div>
        <div className="position-relative">
          <button onClick={btnProps.onClick} className="btn btn-primary">
            {btnProps.btnText}
          </button>
          <div className={!isGameActive && "lockImgDiv"}>
            <img src="/assets/icons/lock.svg" alt="lock" />
          </div>
        </div>
        <div className="text-center text">{btnProps.bottomCount}</div>
      </div>
    );
  };
  const OddEvenGameComponent = ({ mainBtn, group, ...rest }) => {
    return (
      <div className={`col ${group === "1" ? "me-2" : "ms-2"}`}>
        <div className="row">
          <button className="btn btn-primary oddEvenButton">{mainBtn}</button>
        </div>
        <div className="row dragonOddEvenDiv">
          <div className="row">
            <GameButtons
              colClass="gameBtn col-lg-6"
              btnText="Even"
              topCount="2"
              bottomCount="0"
              onClick={() => handleOEGame(mainBtn, "even")}
            />
            <GameButtons
              colClass="gameBtn col-lg-6"
              btnText="Odd"
              topCount="2"
              bottomCount="0"
              onClick={() => handleOEGame(mainBtn, "odd")}
            />
            <div className="text-end">Min:100 Max:25000</div>
          </div>
          <div className="row">
            <div className="gameBtn col-lg-6 cardIconBtn">
              <div className="text-center text">2</div>
              <div className="position-relative">
                <button
                  role={isGameActive ? "button" : ""}
                  onClick={() => handleCardColorGame(mainBtn, "red")}
                  className="btn"
                >
                  <img src="/assets/icons/btnCard1.svg" alt="btnCard" />
                </button>
                <div className={!isGameActive && "lockImgDiv"}>
                  <img src="/assets/icons/lock.svg" alt="lock" />
                </div>
              </div>
              <div className="text-center text">0</div>
            </div>
            <div className="gameBtn col-lg-6 cardIconBtn">
              <div className="text-center text">2</div>
              <div className="position-relative">
                <button
                  role={isGameActive ? "button" : ""}
                  onClick={() => handleCardColorGame(mainBtn, "black")}
                  className="btn"
                >
                  <img src="/assets/icons/btnCard2.svg" alt="btnCard" />
                </button>
                <div className={!isGameActive && "lockImgDiv"}>
                  <img src="/assets/icons/lock.svg" alt="lock" />
                </div>
              </div>
              <div className="text-center text">0</div>
            </div>
            {/* <GameButtons
              colClass="gameBtn col-lg-6"
              btnText="Even"
              topCount="2"
              bottomCount="0"
            />
            <GameButtons
              colClass="gameBtn col-lg-6"
              btnText="Odd"
              topCount="2"
              bottomCount="0"
            /> */}
            <div></div>
            <div className="text-end">Min:100 Max:25000</div>
          </div>
        </div>
      </div>
    );
  };

  const EachCards = ({ detail, gameName }) => {
    return (
      <div
        role={isGameActive ? "button" : ""}
        onClick={() => isGameActive && handleCardNumber(detail, gameName)}
        className="cardSet"
      >
        <div className="eachCard">
          <span>{detail.name}</span>
          <img
            className="cardImg"
            src="/assets/images/cards/cards-1.png"
            alt="card"
          />
          <div className={`lockDiv ${isGameActive && "d-none"}`}>
            <img src="/assets/icons/lock.svg" alt="card" />
          </div>
        </div>
        <div className="text-center">0</div>
      </div>
    );
  };
  return (
    <div className="dragonGameDiv">
      <div className="topSlideDiv position-relative">
        <div className="topBanner">
          <video width="320" height="240" controls>
            <source src="/assets/video/dragontiger.mp4" type="video/mp4" />
          </video>
        </div>
        {/* <img className="topBanner" src="/assets/images/dragonGame.png" alt="" /> */}
        <div className="cards">
          <img
            className="card"
            src="/assets/images/cards/Queen_of_Hearts.png"
            alt="cards"
          />
          <img
            className="card"
            src="/assets/images/cards/playing-card-ba.png"
            alt="cards"
          />
        </div>
        <div className="countNumber">
          <div className="digit">0</div>
          <div className="digit">1</div>
        </div>
      </div>

      <div className="row dragonTieTigerDiv">
        <div className="row topDiv">
          <GameButtons
            colClass="gameBtn col-5"
            btnText="Dragon"
            topCount="2"
            bottomCount="0"
            onClick={() => handle_card_type_game("Dragon")}
          />
          <GameButtons
            colClass="gameBtn col-2"
            btnText="Tie"
            topCount="50"
            bottomCount="0"
            onClick={() => handle_card_type_game("Tie")}
          />
          <GameButtons
            colClass="gameBtn col-5"
            btnText="Tiger"
            topCount="2"
            bottomCount="0"
            onClick={() => handle_card_type_game("Tiger")}
          />
        </div>
        <div className="row topDiv my-2">
          <GameButtons
            colClass="gameBtn col-lg-12"
            btnText="Pair"
            topCount="2"
            bottomCount="0"
            onClick={() => handle_card_type_game("Pair")}
          />
        </div>
        <div className="text-end minMax">Min:100 Max:300000</div>
      </div>

      <div className="row oddEvenDiv">
        <OddEvenGameComponent group="1" mainBtn="DRAGON" />
        <OddEvenGameComponent group="2" mainBtn="TIGER" />
      </div>

      <div className="row displayCardsDiv">
        <div className="col me-2">
          <div className="text-center">2.00</div>
          <div className="d-flex flex-wrap">
            {cards_number_list.map((card) => (
              <EachCards detail={card} gameName="card_Dragon_number" />
            ))}
          </div>
          <div className="text-center">Min:100 Max:25000</div>
        </div>
        <div className="col ms-2">
          <div className="text-center">2.00</div>
          <div className="d-flex flex-wrap">
            {cards_number_list.map((card) => (
              <EachCards detail={card} gameName="card_Tiger_number" />
            ))}
          </div>
          <div className="text-center">Min:100 Max:25000</div>
        </div>
      </div>

      <div className="lastResultDiv row">
        <div className="header">
          <span>Last Result</span>
          {/* <span>View all</span> */}
          <NavLink to="/gameresult" state={{ path: "dragon" }}>
            View all
          </NavLink>
        </div>
        <div className="content">
          <span>D</span>
          <span>D</span>
          <span className="text-danger">T</span>
          <span>D</span>
          <span>D</span>
          <span>D</span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ gamesData }) => ({
  gamesData,
});
const mapDispatchToProps = {
  updateGameType,
  resetAll,
};
export default connect(mapStateToProps, mapDispatchToProps)(DragonTigerGame);
