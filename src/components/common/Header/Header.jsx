import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import ProfileDiv from "./ProfileDiv";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="assets/images/logo.svg" alt="" width="30" height="24" />
        </Link>
        <ProfileDiv />
      </div>
    </nav>
  );
}

export default Header;
