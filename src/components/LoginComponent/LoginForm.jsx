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
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            aria-describedby="usernamer"
            placeholder="Enter username"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
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
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
