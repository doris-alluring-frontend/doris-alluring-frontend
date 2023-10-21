
import React, { useState,useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios, { HttpStatusCode } from "axios";
import signUpImg from "../assets/images/sign-img.png";
import CustomButton from "../reusable-components/CustomButton";
import "./signup.css";
import Modal from "../reusable-components/modal/Modal";

const SignUp = () => {
  let navigate = useNavigate();
  const [show,setShow]= useState(false)
  const modalRef = useRef(null)

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validName = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/;
  const validNumber = /^\d{11}$/;

  const [firstNameError,setFirstNameError] = useState("")
  const [lastNameError, setLastNameError] = useState("");
const [emailError, setEmailError] = useState("");
const [phoneNumberError, setPhoneNumberError] = useState("");
const [passwordError, setPasswordError] = useState("");

  const [userData,setUserData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber:"",
      password: ""
  })
  const handleChange= (event) =>{
    const{name,value} = event.target;
    setUserData((prevData)=>{
      return{
        ...prevData,
        [name]: value,
      };
    });
    if (value.trim() !== "") {
      validateField(name, value);
    }
  }
  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "firstName":
        if (!validName.test(value)) {
          setFirstNameError(`Invalid ${fieldName}`);
        } else {
          setFirstNameError("");
        }
        break;
      case "lastName":
        if (!validName.test(value)) {
          setLastNameError(`Invalid ${fieldName}`);
        } else {
          setLastNameError("");
        }
        break;
      case "email":
        if (!validEmail.test(value)) {
          setEmailError("Invalid email");
        } else {
          setEmailError("");
        }
        break;
      case "phoneNumber":
        if (!validNumber.test(value)) {
          setPhoneNumberError("Invalid phone number");
        } else {
          setPhoneNumberError("");
        }
        break;
      case "password":
        if (value.length < 8) {
          setPasswordError("Password must be at least 8 characters");
        } else {
          setPasswordError("");
        }
        break;
      default:
        break;
    }
  };
  
  const handleOutsideClick = (event)=>{
     
    if(modalRef.current && !modalRef.current.contains(event.target)){
        setShow(false);
    }
}

useEffect(()=>{
    document.addEventListener('click',handleOutsideClick);

    return () => {
      
    document.removeEventListener('click', handleOutsideClick);
    }
},[])
  const handleSubmit =async (e)=>{

    e.preventDefault();
     
        try{
          let response =await axios
          .post("http://localhost:8080/api/v1/auth/register",userData)
          // .then((response)=> {
            if (response.status === 200) {
              console.log(response);
              setShow(true);
              navigate("/otp");
            }else{
              setShow(false);
              
            }
              console.log(response.data)
          // });
        }catch(error){
          console.log(error.response)
        }
       
   
  }
  return (
    <div className="container main-container">
      <div className="image-div">
        <img src={signUpImg} alt="" className="w-100 h-100" />
      </div>
      <div className="form-div">
        <form className="p-5 " >
          <h1 className="text-center auth-title-text">Register</h1>
          <div className="input-container">
            <label htmlFor="firstName">First Name</label>
            <input
              minLength={4}
              type="text"
              name="firstName"
              id="firstName"
              className="input-style"
              placeholder="First Name"
              value={userData.firstName}
              onChange={handleChange}
              
            />
             <p className="error">{firstNameError}</p>
          </div>
          <div className="input-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="input-style"
              placeholder="Last Name"
              value={userData.lastName}
              onChange={handleChange}
              
            />
             <p className="error">{lastNameError}</p>
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-style"
              placeholder="user@gmail.com"
              value={userData.email}
              onChange={handleChange}
            
            />
             <p className="error">{emailError}</p>
          </div>
          <div className="input-container">
            <label htmlFor="Phone number">Phone number</label>
            <input
              minLength={11}
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              className="input-style"
              placeholder="phone number"
              value={userData.phoneNumber}
              onChange={handleChange}
             
              
            />
             <p className="error">{phoneNumberError}</p>
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-style"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
             
            />
             <p className="error">{passwordError}</p>
          </div>
          <CustomButton text="Sign Up" maxWidth="440px" width="100%" height="50px" backgroundColor="#3B522F" borderRadius="20px"
           onClick={(e)=>
                {
                 handleSubmit(e);
                
                }}

          />
          <div className="redirect d-flex justify-content-between">
            <p>Already have an account</p>
            <a href="/login" className="text-danger">login</a>
        </div>
        </form>
       
    
        <Modal show={show} onClose={()=> setShow(false)} ref={modalRef}> 
          <p>Kindly check your email to get your OTP number <br/> for Account verification</p>
        </Modal>
      </div>
    </div>
  );
};

export default SignUp;
