import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const localstorage = useSelector((state) => state.localstorage);
  const userData = localstorage.user
    ? JSON.parse(localstorage.user)
    : JSON.parse(window.localStorage.getItem("user"));
  return (
    <div className="profileDiv">
      <div className="profileImage">
        <img src="/assets/tempImages/avatar.svg" alt="" />
      </div>
      <div className="userDetails">
        <div className="userName text-capitalize">{userData.username}</div>
        <div className="userCode text-capitalize">
          {userData.name} | {userData.coupon}
        </div>
      </div>
    </div>
  );
}

export default Profile;
