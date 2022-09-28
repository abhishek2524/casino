import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateGameType } from "../../../reducers/gameDataSlice";
import Timer from "../DragonTigerGame/Timer";
import "./card32Game.scss";

function Card32Game(props) {
  const { isGameActive = true, updateGameType } = props;
  const handleBlackClick = (player) => {
    const choosen_player = `select_${player}`;
    updateGameType({
      type: choosen_player,
      value: 0,
      amount: 0,
    });
    console.log("handleBlackClick::", choosen_player);
  };
  const handleLayClick = (player) => {
    const choosen_player = `select_${player}`;
    console.log("handleLayClick::", choosen_player);
    updateGameType({
      type: choosen_player,
      value: 1,
      amount: 0,
    });
  };
  const EachPlayer = (playerProps) => {
    return (
      <tr>
        <td>
          {playerProps.name}
          <br />
          {playerProps.nameVal}
        </td>
        <div className="d-flex position-relative eachPlayerBtnDiv">
          <div className={!isGameActive ? "lockImgDiv" : "d-none"}>
            <img src="/assets/icons/lock.svg" alt="lock" />
          </div>
          <td
            className="flex-grow-1"
            role={isGameActive ? "button" : ""}
            onClick={() => handleBlackClick(playerProps.player)}
          >
            {playerProps.blackVal1} <br />
            {playerProps.blackVal2}
          </td>
          <td
            className="flex-grow-1"
            role={isGameActive ? "button" : ""}
            onClick={() => handleLayClick(playerProps.player)}
          >
            {playerProps.layVal1}
            <br />
            {playerProps.layVal2}
          </td>
        </div>
      </tr>
    );
  };
  return (
    <div className="card32GameDiv">
      <div className="topSlideDiv position-relative">
        <img className="topBanner" src="/assets/images/card32Game.png" alt="" />
        <div className="cards flex-column">
          <div className="d-flex mb-2">
            <div className="position-relative cardWithNo me-3">
              <span>21</span>
              <img
                className="card"
                src="/assets/images/cards/Queen_of_Hearts.png"
                alt="cards"
              />
            </div>
            <div className="position-relative cardWithNo">
              <span>21</span>
              <img
                className="card"
                src="/assets/images/cards/Queen_of_Hearts.png"
                alt="cards"
              />
            </div>
          </div>
          <div className="d-flex">
            <div className="position-relative cardWithNo me-3">
              <span>21</span>
              <img
                className="card"
                src="/assets/images/cards/Queen_of_Hearts.png"
                alt="cards"
              />
            </div>
            <div className="position-relative cardWithNo">
              <span>21</span>
              <img
                className="card"
                src="/assets/images/cards/Queen_of_Hearts.png"
                alt="cards"
              />
            </div>
          </div>
        </div>
        <Timer />
      </div>

      <div className="minMaxDiv">
        <table className="minMaxTable">
          <thead>
            <tr>
              <th>Min: 100 Max: 300000</th>
              <div className="d-flex ">
                <th className="flex-grow-1">Black</th>
                <th className="flex-grow-1">Lay</th>
              </div>
            </tr>
          </thead>
          <tbody>
            <EachPlayer
              name="Player 8"
              nameVal="0"
              blackVal1="12.20"
              blackVal2="10000000"
              layVal1="13.70"
              layVal2="10000000"
              player="8"
            />
            <EachPlayer
              name="Player 9"
              nameVal="0"
              blackVal1="12.20"
              blackVal2="10000000"
              layVal1="13.70"
              layVal2="10000000"
              player="9"
            />
            <EachPlayer
              name="Player 10"
              nameVal="0"
              blackVal1="12.20"
              blackVal2="10000000"
              layVal1="13.70"
              layVal2="10000000"
              player="10"
            />
            <EachPlayer
              name="Player 11"
              nameVal="0"
              blackVal1="12.20"
              blackVal2="10000000"
              layVal1="13.70"
              layVal2="10000000"
              player="11"
            />
          </tbody>
        </table>
      </div>

      <div className="lastResultDiv row">
        <div className="header">
          <span>Last Result</span>
          <NavLink to="/gameresult" state={{ path: "card32" }}>
            View all
          </NavLink>
        </div>
        <div className="content">
          <span>9</span>
          <span>9</span>
          <span className="text-danger">11</span>
          <span>9</span>
          <span>9</span>
          <span>9</span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ gamesData }) => ({
  isGameActive: gamesData.isGameActive,
});
const mapDispatchToProps = {
  updateGameType,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card32Game);
