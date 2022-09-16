import React from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile(props) {
  const { dropdown = false } = props;
  const navigate = useNavigate();
  const localstorage = useSelector((state) => state.localstorage);
  const userData = localstorage.user
    ? JSON.parse(localstorage.user)
    : JSON.parse(window.localStorage.getItem("user"));
  const [amount, setAmount] = useState(0);
  useLayoutEffect(() => {
    setAmount(localstorage.token - localstorage.exposure_token);
  }, [localstorage.exposure_token, localstorage.token]);
  return (
    <div className="profileDiv">
      <div className="profileImage">
        <img
          onClick={() => navigate("/")}
          src="/assets/tempImages/avatar.svg"
          alt=""
        />
      </div>
      <div className="userDetails">
        <div className="userName text-capitalize">{userData.username}</div>
        <div className="userCode text-capitalize">
          {!dropdown
            ? `${localstorage.exposure_token} | ${amount}`
            : `${userData.name} | ${userData.coupon}`}
        </div>
      </div>
    </div>
  );
}

export default Profile;
