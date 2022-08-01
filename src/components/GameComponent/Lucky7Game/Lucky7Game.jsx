import React from "react";
import { NavLink } from "react-router-dom";
import "./lucky7.scss";
function Lucky7Game() {
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
        </div>
        <div className="text-center">0</div>
      </div>
    );
  };
  const GameButtons = (btnProps) => {
    return (
      <div className={btnProps.colClass}>
        <div className="text-center text">{btnProps.topCount}</div>
        <div className="position-relative">
          <button className="btn btn-primary">{btnProps.btnText}</button>
          {/* <div className="lockImgDiv">
            <img src="/assets/icons/lock.svg" alt="lock" />
          </div> */}
        </div>
        <div className="text-center text">{btnProps.bottomCount}</div>
      </div>
    );
  };
  return (
    <div className="lucky7GameDiv">
      <div className="topSlideDiv position-relative">
        <img className="topBanner" src="/assets/images/lucky7Game.png" alt="" />
        <div className="cards">
          <img
            className="card"
            src="/assets/images/cards/Queen_of_Hearts.png"
            alt="cards"
          />
        </div>
        <div className="countNumber">
          <div className="digit">0</div>
          <div className="digit">1</div>
        </div>
      </div>

      <div className="row highLowCardDiv">
        <div className="col">
          <div className="row highLowBtn">
            <GameButtons
              colClass="gameBtn col-lg-4"
              btnText="Low Card"
              topCount="2"
              bottomCount="0"
            />
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <div className="gameCard">
                <span>A</span>
                <img
                  className="cardImg"
                  src="/assets/images/cards/cards-1.png"
                  alt="card"
                />
              </div>
            </div>
            <GameButtons
              colClass="gameBtn col-lg-4"
              btnText="High Card"
              topCount="2"
              bottomCount="0"
            />
          </div>
          <div className="text-end">Min:100 Max:300000</div>
        </div>
      </div>

      <div className="row oddEvenDiv">
        <div className="col me-2 oddEven">
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
        <div className="col ms-2 oddEven">
          <div className="row">
            <div className="gameBtn col-lg-6 cardIconBtn">
              <div className="text-center text">2</div>
              <div className="position-relative">
                <button className="btn">
                  <img src="/assets/icons/btnCard1.svg" alt="btnCard" />
                </button>
              </div>
              <div className="text-center text">0</div>
            </div>
            <div className="gameBtn col-lg-6 cardIconBtn">
              <div className="text-center text">2</div>
              <div className="position-relative">
                <button className="btn">
                  <img src="/assets/icons/btnCard2.svg" alt="btnCard" />
                </button>
              </div>
              <div className="text-center text">0</div>
            </div>
            <div className="text-end">Min:100 Max:25000</div>
          </div>
        </div>
      </div>

      <div className="row displayCardsDiv">
        <div className="col">
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
          <NavLink to="/gameresult?gName=lucky7">View all</NavLink>
        </div>
        <div className="content">
          <span>D</span>
          <span>D</span>
          <span className="text-danger">T</span>
          <span>D</span>
          <span>D</span>
          <span>D</span>
          <span className="text-primary">H</span>
        </div>
      </div>
    </div>
  );
}

export default Lucky7Game;
