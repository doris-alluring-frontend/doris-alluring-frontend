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
        <form className="p-5 form-border">
          <h1 className="text-center mb-5">Welcome</h1>
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
          <CustomButton text="Login" maxWidth="440px" width="100%" height="50px" />
          <div className="redirect d-flex justify-content-between">
            <p>Dont have an account?</p>
            <a href="/signup" className="text-danger">register</a>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;