import React from "react";
import { NavLink } from "react-router-dom";
import "./teenpati.scss";
function Teenpati() {
  return (
    <div className="teenpatiDiv">
      <div className="topSlideDiv position-relative">
        <img
          className="topBanner"
          src="/assets/images/teenpatiSlide.png"
          alt=""
        />
        <div className="cards flex-column">
          <div className="d-flex mb-2">
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
            <img
              className="card"
              src="/assets/images/cards/playing-card-ba.png"
              alt="cards"
            />
          </div>
          <div className="d-flex">
            <img
              className="card"
              src="/assets/images/cards/Queen_of_Hearts.png"
              alt="cards"
            />
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
        </div>
        <div className="countNumber">
          <div className="digit">0</div>
          <div className="digit">1</div>
        </div>
      </div>

      <div className="minMaxDiv">
        <table className="minMaxTable">
          <thead>
            <tr>
              <th>Min: 100 Max: 300000</th>
              <th colSpan={2}>Back</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Player A</td>
              <div className="points locked">
                <td>
                  1.98 <br />0
                </td>
                <td>
                  Pair Plus A <br />0
                </td>
                <img src="/assets/icons/lock.svg" alt="lock" />
              </div>
            </tr>
            <tr>
              <td>Player A</td>
              <div className="points locked">
                <td>
                  1.98 <br />0
                </td>
                <td>
                  Pair Plus A <br />0
                </td>
                <img src="/assets/icons/lock.svg" alt="lock" />
              </div>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="resultDiv row">
        <div className="header">
          <span>Last Result</span>
          <NavLink to="/gameresult?gName=teenpati">View all</NavLink>
        </div>
        <div className="content">
          <span>A</span>
          <span>A</span>
          <span className="text-danger">B</span>
          <span>A</span>
          <span>A</span>
          <span>A</span>
        </div>
      </div>

      <div className="pairResult">
        <div className="header">Last Result</div>
        <div className="subheader">Pair Plus</div>
        <table className="pairTable">
          <tbody>
            <tr>
              <td>Pair (Double)</td>
              <td>1 To 1</td>
            </tr>
            <tr>
              <td>Flush (Colour)</td>
              <td>1 To 4</td>
            </tr>
            <tr>
              <td>Straight (Rown)</td>
              <td>1 To 6</td>
            </tr>
            <tr>
              <td>Trio (Teen)</td>
              <td>1 To 35</td>
            </tr>
            <tr>
              <td>Straight Flush ( Pakki Rown)</td>
              <td>1 To 45</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teenpati;
