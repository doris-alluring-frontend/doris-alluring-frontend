const SubmitNavButton = ({icon,text,onClick}) =>{
    const buttonStyle ={
        width: "100%",
        transition: "all 0.5s",
        color: "black",
        padding: "30px",
         
    }
    return (
        <button className="custom-button" onClick={onClick} style={buttonStyle}>
         <span>{icon}</span> {text}
        </button>
      );
}
export default SubmitNavButton;