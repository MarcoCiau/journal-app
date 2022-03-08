import React from "react";
import { useDispatch } from "react-redux";
import { authLoginAction } from "../../action/actionHandlers";
import { useForm } from "../../hooks/useForm";

export const SigninScreen = () => {
  const [formValues, handleInputChange] = useForm({
    email: "user@gmail.com",
    password: "123456789",
  });

  const dispatch = useDispatch();
  const { email, password } = formValues;

  const handleSinginFormSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(authLoginAction({uid:"hsjsjsu", name:"marco"}));
  };
  return (
    <>
      <h1>Login to your account</h1>
      <p>
        Don't have an account? <a href="/signup">Sign Up Here</a>{" "}
      </p>

      <form onSubmit={handleSinginFormSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="loginEmail"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Login
        </button>
      </form>
      <br />
      <button className="btn btn-danger btn-lg btn-block">
        <i className="fab fa-google"> Login with Google </i>
      </button>
    </>
  );
};
