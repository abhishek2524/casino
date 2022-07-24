import React from "react";
import "./dragonTiger.scss";
function DragonTigerGame() {
  const GameButtons = (btnProps) => {
    return (
      <div className={btnProps.colClass}>
        <div className="text-center text">{btnProps.topCount}</div>
        <div className="position-relative">
          <button className="btn btn-primary">{btnProps.btnText}</button>
          <div className="lockImgDiv">
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
            />
            <GameButtons
              colClass="gameBtn col-lg-6"
              btnText="Odd"
              topCount="2"
              bottomCount="0"
            />
            <div className="text-end">Min:100 Max:25000</div>
          </div>
          <div className="row">
            <GameButtons
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
            />
            <div className="text-end">Min:100 Max:25000</div>
          </div>
        </div>
      </div>
    );
  };
  const EachCards = () => {
    return (
      <div className="cardSet">
        <div className="eachCard">
          <span>A</span>
          <img
            className="cardImg"
            src="/assets/images/cards/cards-1.png"
            alt="card"
          />
          <div className="lockDiv">
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
        <img className="topBanner" src="/assets/images/dragonGame.png" alt="" />
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
            colClass="gameBtn col-lg-5"
            btnText="Dragon"
            topCount="2"
            bottomCount="0"
          />
          <GameButtons
            colClass="gameBtn col-lg-2"
            btnText="Tie"
            topCount="50"
            bottomCount="0"
          />
          <GameButtons
            colClass="gameBtn col-lg-5"
            btnText="Tiger"
            topCount="2"
            bottomCount="0"
          />
        </div>
        <div className="row topDiv my-2">
          <GameButtons
            colClass="gameBtn col-lg-12"
            btnText="Pair"
            topCount="2"
            bottomCount="0"
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
            {new Array(12).fill(null).map(() => (
              <EachCards />
            ))}
          </div>
          <div className="text-center">Min:100 Max:25000</div>
        </div>
        <div className="col me-2">
          <div className="text-center">2.00</div>
          <div className="d-flex flex-wrap">
            {new Array(12).fill(null).map(() => (
              <EachCards />
            ))}
          </div>
          <div className="text-center">Min:100 Max:25000</div>
        </div>
      </div>

      <div className="lastResultDiv row">
        <div className="header">
          <span>Last Result</span>
          <span>View all</span>
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

export default DragonTigerGame;
