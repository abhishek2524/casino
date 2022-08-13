import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../Profile";
import "./sidebar.scss";
function Sidebar() {
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const toggleHamburger = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <div className="sidebarMainDiv">
      {!openSidebar && (
        <div className="hamburger" onClick={toggleHamburger}>
          <img src="assets/icons/hamburger-icon.svg" alt="" />
        </div>
      )}

      {openSidebar && (
        <div className="sidebarContainer">
          <img
            onClick={toggleHamburger}
            className="sidebarIcon"
            src="/assets/icons/white-cross-icon.svg"
            alt=""
          />
          <div className="sidebarContent">
            <div
              onClick={() => {
                setOpenSidebar(false);
                navigate("/");
              }}
            >
              <Profile />
            </div>
            <hr />
            <ul className="sidebar-items">
              <li className="sidebar-item">
                <Link onClick={() => setOpenSidebar(false)} to="/betHistory">
                  Bet History
                </Link>
              </li>
              <li className="sidebar-item">
                <Link onClick={() => setOpenSidebar(false)} to="/profitLoss">
                  Profit/ Loss Report
                </Link>
              </li>
              <li className="sidebar-item">
                <Link onClick={() => setOpenSidebar(false)} to="/unSettledBet">
                  Un-Settled Bet
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  onClick={() => setOpenSidebar(false)}
                  to="/transactionHistory"
                >
                  Transaction History
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  onClick={() => setOpenSidebar(false)}
                  to="/setButtonValue"
                >
                  Set Button Values
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  onClick={() => setOpenSidebar(false)}
                  to="/changePassword"
                >
                  Change Password
                </Link>
              </li>
              <div className="logoutDiv">
                <hr />
                <button className="btn btn-primary" onClick={handleLogout}>
                  <img
                    src="/assets/icons/logout.svg"
                    alt="logout-icon"
                    className="logoutIcon"
                  />{" "}
                  Logout
                </button>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
