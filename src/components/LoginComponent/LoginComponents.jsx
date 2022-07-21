import React from "react";
import LoginForm from "./LoginForm";

function LoginComponents() {
  return (
    <div className="loginMainDiv">
      <div className="leftSide">
        <img src="assets/images/LOGO.svg" alt="" />
        <span>Best For Online Casino</span>
      </div>
      <div className="rightSide">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginComponents;
