import React from "react";
import LoginComponents from "../../components/LoginComponent";
import "../../components/LoginComponent/loginComponents.scss";
function LoginContainer() {
  return (
    <>
      <LoginComponents />
      <div
        className="backgroundDiv"
        style={{ backgroundImage: `url(/assets/images/sexy-woman-blac.png)` }}
      />
    </>
  );
}

export default LoginContainer;
