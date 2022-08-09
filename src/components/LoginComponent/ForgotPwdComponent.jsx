import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgotPwdComponent() {
  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState({ text: "", type: "error" });
  const navigate = useNavigate();

  const handleForgotPwd = async (e) => {
    e.preventDefault();
    try {
      const username = loginDetail.username;
      const password = loginDetail.password;
      const password2 = loginDetail.password2;
      if (!username || !password || !password2) {
        setError("Please fill all fields.");
        return;
      }
      const apiURL = `${process.env.REACT_APP_BACKEND_API}/user/forgot-password/`;
      const res = await axios({
        method: "post",
        url: apiURL,
        data: { username, password, password2 },
      });
      const { status, data } = res.data;
      if (status === 1) {
        setError({
          type: "success",
          text: "Password updated, you can sign in.",
        });
        return;
      }
      setError({ text: "Error while updating password", type: "error" });
    } catch (error) {
      setError({ text: "Error while updating password", type: "error" });
    }
  };
  return (
    <div className="loginForm">
      <h1 className="header">Change password</h1>
      <form onSubmit={handleForgotPwd}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="usernamer"
            placeholder="Enter username"
            name="username"
            value={loginDetail.username}
            onChange={(e) =>
              setLoginDetail((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) =>
              setLoginDetail((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="cmppassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="password2"
            name="password2"
            placeholder="Confirm Password"
            onChange={(e) =>
              setLoginDetail((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          {error.text && (
            <div
              className={`${
                error.type === "error" ? "text-danger" : "text-success"
              } text-center`}
            >
              {error.text}
            </div>
          )}
        </div>
        <div className="signUpDiv">
          <span>
            Click here to
            <Link to="/login" className="signupLink">
              Sign in
            </Link>
          </span>{" "}
        </div>
        <div className="submitBtn">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPwdComponent;
