import React from "react";

export const SignupScreen = () => {
  return (
    <>
      <h1>Create an account</h1>
      <p>
        Already have an account? <a href="/signin">Sign In Here</a>{" "}
      </p>

      <form>
        <div class="form-group">
          <label for="registerEmail">Email address</label>
          <input
            type="email"
            class="form-control"
            id="registerEmail"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div class="form-group">
          <label for="registerPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="registerPassword"
            placeholder="Password"
            name="password"
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary btn-lg btn-block">
          Sign Up
        </button>
        <button class="btn btn-danger btn-lg btn-block">
          <i className="fab fa-google"> Sign Up with Google </i>
        </button>
      </form>
    </>
  );
};
