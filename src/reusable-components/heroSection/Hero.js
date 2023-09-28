
const Hero = (props) =>{
    return(
        <>
            <div className="container">
                <div className="image-div">{props.image}</div>
                <div className="text-content">{props.content}</div>    
            </div>
        </>
    )
}
export default Hero;