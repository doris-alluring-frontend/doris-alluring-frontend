import React from "react";
import CustomButton from "../reusable-components/CustomButton";
import Modal from "../reusable-components/modal/Modal";
import "./signup.css";
const ForgotPassword = ()=>{
    return(
        <>
           <div className="pt-3">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24" fill="none">
            <path d="M17.0391 22L3.49878 11.6225L16.9811 2.00008" stroke="black" stroke-width="3"/>
            </svg>
            <a href="/login" className="mx-4 page-redirect-link">Back</a>
           </div>
           
            <div className="container forgot-password-container">
                    
                <div className="forgot-password-form-div">

                    <form className="form-border p-5 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M25 35.4167C26.1051 35.4167 27.1649 34.9777 27.9463 34.1963C28.7277 33.4149 29.1667 32.3551 29.1667 31.25C29.1667 30.145 28.7277 29.0852 27.9463 28.3038C27.1649 27.5224 26.1051 27.0834 25 27.0834C23.895 27.0834 22.8352 27.5224 22.0538 28.3038C21.2724 29.0852 20.8334 30.145 20.8334 31.25C20.8334 32.3551 21.2724 33.4149 22.0538 34.1963C22.8352 34.9777 23.895 35.4167 25 35.4167ZM37.5 16.6667C38.6051 16.6667 39.6649 17.1057 40.4463 17.8871C41.2277 18.6685 41.6667 19.7283 41.6667 20.8334V41.6667C41.6667 42.7718 41.2277 43.8316 40.4463 44.613C39.6649 45.3944 38.6051 45.8334 37.5 45.8334H12.5C11.395 45.8334 10.3352 45.3944 9.55376 44.613C8.77236 43.8316 8.33337 42.7718 8.33337 41.6667V20.8334C8.33337 19.7283 8.77236 18.6685 9.55376 17.8871C10.3352 17.1057 11.395 16.6667 12.5 16.6667H14.5834V12.5C14.5834 9.73737 15.6808 7.08785 17.6343 5.13435C19.5878 3.18084 22.2374 2.08337 25 2.08337C26.368 2.08337 27.7225 2.35281 28.9863 2.8763C30.2501 3.39978 31.3985 4.16707 32.3657 5.13435C33.333 6.10162 34.1003 7.24995 34.6238 8.51375C35.1473 9.77756 35.4167 11.1321 35.4167 12.5V16.6667H37.5ZM25 6.25004C23.3424 6.25004 21.7527 6.90852 20.5806 8.08062C19.4085 9.25273 18.75 10.8424 18.75 12.5V16.6667H31.25V12.5C31.25 10.8424 30.5916 9.25273 29.4195 8.08062C28.2474 6.90852 26.6576 6.25004 25 6.25004Z" fill="#3B522F"/>
                    </svg>
                    <h1 className="text-center mb-3 auth-title-text">Forgot Password?</h1>
                    <div className="input-container">
                        <label htmlFor="email" className="email-label">Enter your Email Address</label>
                        <input
                        type="email"
                        id="email"
                        className="input-style mb-3"
                        placeholder="user@gmail.com"
                    />
                   </div>
                    <div className="pb-5">
                        <CustomButton text="Submit" maxWidth="440px" width="100%" height="50px" backgroundColor="#3B522F" borderRadius="20px"/>
                    </div>
                    
                    </form>     
                    <Modal> 
                        <p className="mt-4">Check your mail for your OTP number </p>
                    </Modal>
                </div>
            </div>
        </>
    )
}
export default ForgotPassword;