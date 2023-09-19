// import React from "react";
// import signUpImg from "../assets/images/sign-img.png";
// import "./signup.css";
// const SignUp = () => {
//     return(
//         <div className="container main-container">
//             <div className="image-div w-50">
//                 <img src={signUpImg} alt="" className="w-100 h-100"/>
//             </div>
//             <div className="form-div">

//                 <form className="p-5 form-border h-100">
//                     <h1>Register</h1>
//                     <label>First name</label>
//                     <input className="input-style" placeholder="first name"/>
//                     <label>First name</label>
//                     <input  className="input-style"placeholder="first name"/>
//                     <label>First name</label>
//                     <input  className="input-style"placeholder="first name"/>
//                     <label>First name</label>
//                     <input className="input-style" placeholder="first name"/>

//                 </form>
//             </div>
//         </div>
//     )
// }
// export default SignUp;
import React from "react";
import signUpImg from "../assets/images/sign-img.png";
import CustomButton from "../reusable-components/CustomButton";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="container main-container">
      <div className="image-div">
        <img src={signUpImg} alt="" className="w-100" />
      </div>
      <div className="form-div">
        <form className="p-5 form-border">
          <h1 className="text-center">Register</h1>
          <div className="input-container">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              className="input-style"
              placeholder="First Name"
            />
          </div>
          <div className="input-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="input-style"
              placeholder="Last Name"
            />
          </div>
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
              className="input-style"
              placeholder="Password"
            />
          </div>
          <CustomButton text="Sign Up" maxWidth="440px" width="100%" height="50px" />
          <div className="redirect d-flex justify-content-between">
            <p>Already have an account</p>
            <a href="/login" className="text-danger">login</a>
        </div>
        </form>
       
      </div>
    </div>
  );
};

export default SignUp;
