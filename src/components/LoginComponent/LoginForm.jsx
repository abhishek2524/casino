import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="loginForm">
      <h1 className="header">Sign in</h1>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
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
