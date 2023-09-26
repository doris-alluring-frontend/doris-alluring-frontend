import React from "react";
import signUpImg from "../assets/images/sign-img.png";
import CustomButton from "../reusable-components/CustomButton";
import "./signup.css";

const Login = () => {
  return (
    <div className="container main-container">
      <div className="image-div">
        <img src={signUpImg} alt="" className="w-100" />
      </div>
      <div className="form-div">
      <a href="/signup" className="px-5 page-redirect-link">Sign Up</a>
        <form className="p-5 ">
          <h1 className="text-center mb-5 auth-title-text">Welcome</h1>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="input-style"
              placeholder="user@gmail.com"
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="input-style mb-3"
              placeholder="Password"
            />
          </div>
          <CustomButton text="Login" maxWidth="440px" width="100%" height="50px" backgroundColor="#3B522F" borderRadius="20px"/>
          <div className="redirect d-flex justify-content-between">
            <p>Forgot your password?</p>
            <a href="/forgot-password" className="text-danger">reset</a>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;