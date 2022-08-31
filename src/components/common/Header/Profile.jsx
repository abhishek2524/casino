import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const localstorage = useSelector((state) => state.localstorage);

  return (
    <div className="profileDiv">
      <div className="profileImage">
        <img src="/assets/tempImages/avatar.svg" alt="" />
      </div>
      <div className="userDetails">
        <div className="userName text-capitalize">{localstorage.user}</div>
        <div className="userCode">rahul09 | casino1089</div>
      </div>
    </div>
  );
}

export default Profile;
