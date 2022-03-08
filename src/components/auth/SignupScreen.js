import React from "react";

export const SignupScreen = () => {
  return (
    <>
      <h1>Create an account</h1>
      <p>
        Already have an account? <a href="/signin">Sign In Here</a>{" "}
      </p>

      <form>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="registerEmail"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="registerPassword"
            placeholder="Password"
            name="password"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Sign Up
        </button>
        <button className="btn btn-danger btn-lg btn-block">
          <i className="fab fa-google"> Sign Up with Google </i>
        </button>
      </form>
    </>
  );
};
