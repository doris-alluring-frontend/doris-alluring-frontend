import './homepage.css';
import Header from "../reusable-components/header/Header";
// import Hero from '../reusable-components/heroSection/Hero';
import image1 from "../assets/hero-image/product-image.png";
import image2 from "../assets/hero-image/image 30.png";
import image3 from "../assets/hero-image/all-people (2).png";
import image4 from "../assets/hero-image/asian-fine.png"
import { useEffect, useState } from 'react';



const Homepage = () => {
    const [skinColor, setSkinColor]=useState('BLACK')
    useEffect(()=>{
        const skinColor = ['BLACK','BROWN','WHITE']
        let skinColorIndex = 0;

        const changeSkinColorInterval = setInterval(() => {
            setSkinColor(skinColor[skinColorIndex]);
            skinColorIndex = (skinColorIndex + 1) % skinColor.length
        },3000)

        return() => {
            clearInterval(changeSkinColorInterval)
        };
        
    },[]);
   
    return (
        <>
         <div className='containter'>
            <Header/>
            <section className='carousel slide mx-0' data-bs-ride="carousel">
                <div className='carousel-inner' >
                    <div className='carousel-item active carousel-image-div'>
                        <img src={image1} className="d-block w-100"
                             alt="a black girl with an afro hair"/>
                    </div>
                    <div className='carousel-item carousel-image-div'>
                        <img src={image2} className="d-block w-100"
                        alt="a black girl with an afro hair"/>
                    </div>
                    <div className='carousel-item carousel-image-div'>
                        <img src={image3} className="d-block w-100"
                          alt="a black girl with an afro hair"/>
                    </div>
                    <div className='carousel-item carousel-image-div'>
                        <img src={image4} className="d-block w-100"
                             alt="a black girl with an afro hair"/>
                    </div>
                    <div className=' carousel-captiony container'>
                       <div className='vertical-line'>

                       </div>
                        <h2 className='hero-text'>DORIS ALLURING SKIN CARE PRODUCTS ARE MADE FROM<br/>
                         THE FINEST HERBS AND NATURAL OIL FOR {''} 
                         <span className='dynamic-text'>{skinColor}</span> SKIN
                        </h2>
                    </div>
                </div>
                <div className="overlay"></div>
            </section>
            <hr className='py-3'/>
            <section className='know-more'>
                <div className='text-center'>
                <h3>What Do We Do?</h3>
                <p className='know-more-intro'>Quos veniam voluptatum dolores soluta molestiae harum, ex doloribus! Aliquid nihil nulla temporibus suscipit veritatis ea vero quisquam repudiandae expedita fuga dignissimos quasi, at, quia fugiat labore itaque nam natus. </p>
                </div>
               
                <div className='display-cards container pb-3'>
                    <div className='story-card'></div>
                    <div className='story-card'></div>
                    <div className='story-card'></div>
                </div>
                
            </section>
            
        </div>
        </>
    )    
}

export default Homepage;