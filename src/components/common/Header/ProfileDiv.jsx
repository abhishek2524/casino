import React from "react";
import "./header.scss";
function ProfileDiv() {
  return (
    <div className="profileMainDiv">
      <div className="profileImg">
        <img src="assets/tempImages/profile.png" alt="ptofile pic" />
      </div>
      <div className="userDetail">
        <span className="userName">Rahul David</span>
        <span className="userCode">rahul09 | casino1089</span>
      </div>
    </div>
  );
}

export default ProfileDiv;
