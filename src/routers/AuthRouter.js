import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SigninScreen } from "../components/auth/SigninScreen";
import { SignupScreen } from "../components/auth/SignupScreen";
export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__container">
        <Routes>
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </div>
  );
};
