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
        <div className="userName text-capitalize">Abhi434</div>
        <div className="userCode">abhi | 5462A234</div>
      </div>
    </div>
  );
}

export default Profile;
