//

import { useState, useEffect } from "react";
import "../../styles/home/Slider.css";

export default function Slider() {
  const images = [
    "/images/home/slider/km3.jpg",
    "/images/home/slider/km4.jpg",
    "/images/home/slider/km1.jpg",
    "/images/home/slider/km2.jpg",
    "/images/home/slider/km.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 50000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <div 
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="slide-item" key={index}>
            <img src={img} alt={`Banner ${index + 1}`} className="slide-image" />
          </div>
        ))}
      </div>

      <button className="slider-btn left" onClick={prevSlide}>&#10094;</button>
      <button className="slider-btn right" onClick={nextSlide}>&#10095;</button>

      <div className="slider-dots">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}