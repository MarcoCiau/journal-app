import React from "react";

export const SigninScreen = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <p>Don't have an account? <a href="/signup">Sign Up Here</a> </p>

      <form>
        <div class="form-group">
          <label for="loginEmail">Email address</label>
          <input
            type="email"
            class="form-control"
            id="loginEmail"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div class="form-group">
          <label for="loginPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="loginPassword"
            placeholder="Password"
            name="password"
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary btn-lg btn-block">
          Login
        </button>
        <button class="btn btn-danger btn-lg btn-block">
        <i className="fab fa-google"> Login with Google </i>
        </button>
      </form>
    </>
  );
};
