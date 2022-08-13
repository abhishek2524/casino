import React from "react";
import { useNavigate } from "react-router-dom";

function TopSidebar() {
  const img = <img src="/assets/icons/coins.svg" alt="coins" />;
  const navigate = useNavigate();
  return (
    <div className="topDiv">
      <div className="header" role="button" onClick={() => navigate("/")}>
        Dashboard
      </div>
      <hr />
      <div className="content">
        <div className="exposureBalDiv">
          <div className="expBtn">Exposure: 6000 {img}</div>
          <div className="expBtn">Balance: 54000 {img}</div>
        </div>
        <div className="count">2.06x</div>
        <div className="betInputDiv">
          <div className="inputField">
            <label htmlFor="betDiv1" className="form-label">
              Bet:
            </label>
            <input
              type="number"
              placeholder="Enter bet"
              className="form-control"
              id="betDiv1"
            />
          </div>
          <div className="inputField">
            <label htmlFor="betDiv2" className="form-label">
              Bet:
            </label>
            <input
              type="number"
              placeholder="Enter bet"
              className="form-control"
              id="betDiv2"
            />
          </div>
          <div className="maxCount">
            <span>Max Bet:44.3 {img}</span>
            <span>Max Profit:44.3 {img}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSidebar;
