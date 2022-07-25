import React from "react";
import "./changePassword.scss";
function ChangePasswordComponent() {
  return (
    <div className="container changePasswordDiv">
      <form className="resetPwdForm">
        <div className="row inputRow">
          <div className="col-12">
            <label htmlFor="curPassword" className="form-label">
              Current Password
            </label>
            <input
              type="password"
              placeholder="Enter current password"
              id="curPassword"
              className="form-control"
            />
          </div>
        </div>
        <div className="row inputRow">
          <div className="col-6">
            <label htmlFor="newPassword" className="form-label">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              id="newPassword"
              className="form-control"
            />
          </div>
          <div className="col-6">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Enter new password to confirm"
              id="confirmPassword"
              className="form-control"
            />
          </div>
        </div>
        <div className="submitBtnDiv">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePasswordComponent;
