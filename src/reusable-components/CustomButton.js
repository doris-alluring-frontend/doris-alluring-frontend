import React from "react";
import "./customButton.css";

const CustomButton = ({onClick, text,maxWidth, width, height,backgroundColor,borderRadius,color }) => {
  const buttonStyle = {
    width: width || "100%",
    height: height || "auto",
    maxWidth: maxWidth || "100%",
    color:color || "white",
    backgroundColor: backgroundColor || "#C92E81",
    borderRadius: borderRadius || "5px"

  };

  return (
    <button className="custom-button" onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
};

export default CustomButton;
