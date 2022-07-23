import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

function LoginComponents() {
  return (
    <div className="loginMainDiv">
      <div className="leftSide">
        <Link to="/">
          <img src="assets/images/logo.svg" alt="" />
        </Link>
        <span>Best For Online Casino</span>
      </div>
      <div className="rightSide">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginComponents;
