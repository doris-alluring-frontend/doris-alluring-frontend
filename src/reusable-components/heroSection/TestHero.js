import React, { useState, useEffect } from 'react';

function TestHero({ images, text }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="hero-carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} className="d-block w-100" alt={`Slide ${index}`} />
            <div className="carousel-caption">
              <h3>{text[index]}</h3>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" onClick={handlePrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" onClick={handleNext}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default TestHero;
