import React from "react";
import LoginComponents from "../../components/LoginComponent";
import "../../components/LoginComponent/loginComponents.scss";
function LoginContainer(props) {
  const { isSignUp = false, isForgotPwd = false } = props;
  return (
    <>
      <LoginComponents isSignUp={isSignUp} isForgotPwd={isForgotPwd} />
      <div
        className="backgroundDiv"
        style={{ backgroundImage: `url(/assets/images/sexy-woman-blac.png)` }}
      />
    </>
  );
}

export default LoginContainer;
