import React from "react";
import "./customButton.css";

const CustomButton = ({ text,maxWidth, width, height }) => {
  const buttonStyle = {
    width: width || "100%",
    height: height || "auto",
    maxWidth: maxWidth || "100%"
  };

  return (
    <button className="custom-button" style={buttonStyle}>
      {text}
    </button>
  );
};

export default CustomButton;
