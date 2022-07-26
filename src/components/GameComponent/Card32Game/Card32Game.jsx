import React from "react";
import "./card32Game.scss";

function Card32Game() {
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
              <th>BACK</th>
              <th>Lay</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Player 8 <br />0
              </td>
              <td>
                12.20 <br />
                10000000
              </td>
              <td>
                13.70 <br />
                10000000
              </td>
            </tr>
            <tr>
              <td>
                Player 9 <br />0
              </td>
              <td>
                12.20 <br />
                10000000
              </td>
              <td>
                13.70 <br />
                10000000
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="lastResultDiv row">
        <div className="header">
          <span>Last Result</span>
          <span>View all</span>
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

export default Card32Game;
