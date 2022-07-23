import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";

function DropdownOption() {
  const handleLogout = () => {
    window.sessionStorage.clear();
    window.location.reload();
  };
  return (
    <ul className="dropdown-menu headerDropdown">
      <Profile />
      <hr />
      <li>
        <Link className="dropdown-item" to="/betHistory">
          Bet History
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/profitLoss">
          Profit/ Loss Report
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/unSettledBet">
          Un-Settled Bet
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/transactionHistory">
          Transaction History
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/setButtonValue">
          Set Button Values
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/changePassword">
          Change Password
        </Link>
      </li>
      <hr />
      <li className="LogoutBtn">
        <button className="btn btn-primary" onClick={handleLogout}>
          <img
            src="assets/icons/logout.svg"
            alt="logout-icon"
            className="logoutIcon"
          />{" "}
          Logout
        </button>
      </li>
    </ul>
  );
}

export default DropdownOption;
