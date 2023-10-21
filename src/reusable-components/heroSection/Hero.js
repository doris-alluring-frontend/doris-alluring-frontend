// import React, { useState, useEffect } from 'react';
// import "./hero.css"

// const Hero = ({images,texts}) =>{
   
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [currentText, setCurrentText] = useState(0)

// useEffect(() =>{
//     const changeTextInterval = setInterval(() =>{
//         setCurrentText((prevIndex) => (prevIndex + 1) % texts.length)
//     }, 5000);

//     return () =>{
//         clearInterval(changeTextInterval);
//     }
// },[texts])

//   useEffect(() => {
//     const changeImageInterval =setInterval(() => {
//         setCurrentIndex((prevIndex)=> (prevIndex + 1) % images.length)
//     }, 5000);

//     return () => {
//       clearInterval(changeImageInterval);
//     };
//   }, [images]);

//     return(
//         <>
//         <div className="hero-carousel" >
//         <div className="carousel-inner">
//             {images.map((image, index) => (
//             <div
//                 key={index}
//                 className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
//                 style={{
//                     backgroundColor: ' rgba(0, 0, 0, 0.8)'
//               }}
//             >
            
//             <div className={`carousel-captiony slide-from-${index % 4}`}>
//                 <h3 >{texts[currentText]}</h3>
//             </div>
           
           
//             <div className={`image-container slide-from-${index % 4}`}>
//               <img
//                 src={image}
//                 className="image-style w-100"
//                 alt={`Slide ${index}`}
//               />
//             </div>
//             <div className="overlay"></div>
                
//             </div>
//             ))}
//         </div>
    
//         </div>
//         </>
//     )
// }
// export default Hero;