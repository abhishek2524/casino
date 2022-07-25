import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const handleLogin = (e) => {
    e.preventDefault();
    window.sessionStorage.setItem("login", true);
    window.location.reload();
  };
  return (
    <div className="loginForm">
      <h1 className="header">Sign in</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="usernamer"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="signUpDiv">
          <span>
            New User?{" "}
            <Link to="/" className="signupLink">
              Create Account
            </Link>
          </span>
          <Link to="/">Forgot Password?</Link>
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

export default LoginForm;
