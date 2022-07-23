import React from "react";
import DashboardContent from "./DashboardContent";

function DashboardSectionDiv() {
  return (
    <div className="row dashboardSectionDiv">
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="dashboard-header">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  32 Cards
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      20-20 Dragon Tiger
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      32 Cards
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Lucky 7 - B
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      20-20 Teenpatti
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <DashboardContent />
    </div>
  );
}

export default DashboardSectionDiv;
