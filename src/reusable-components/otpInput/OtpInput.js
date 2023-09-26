import React, { useState, useRef,useEffect } from 'react';
import "./otpInput.css";

const OtpInput = () => {
  const [otpValue, setOtpValue] = useState(["", "", "", ""]);
  const inputReference = useRef([]);
  useEffect(() => {
    inputReference.current[0].focus();
  }, []);

  const handleInputChange = (index, event) => {
    const value = event.target.value;

    setOtpValue((oldValue) => {
      const updatedValue = [...oldValue];
      updatedValue[index] = value;
      return updatedValue;
    });
     

    const lastInputField = inputReference.current.length - 1;

    if (value !== "" && index < lastInputField) {
      inputReference.current[index + 1].focus();
    };
  }

  const handleKeyDownChange = (index,event)=>{
    if(event.key ==='Backspace' && otpValue[index]=== '' && index > 0){
      inputReference.current[index - 1].focus()
    }

  }


  return (
    <>
      {otpValue.map((value, index) => (
        <input
        key={index}
          maxLength={1}
          type="password"
          className="otp-input my-4 mx-2"
          value={value}
          onKeyDown={(event)=> handleKeyDownChange(index,event)}
          onChange={(event) => handleInputChange(index, event)}
          ref={(ref) => (inputReference.current[index] = ref)}
         
        />
      ))}
    </>
  );
};

export default OtpInput;
