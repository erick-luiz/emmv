import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ResponsiveGallery.css'; // Estilos personalizados

const images = [
  { id: 1, src: "./images/escola.png", alt: "Imagem 1" },
  { id: 2, src: "./images/escola-1.png", alt: "Imagem 2" },
  { id: 3, src: "./images/escola-2.png", alt: "Imagem 3" },
  { id: 4, src: "./images/escola-3.jpg", alt: "Imagem 4" },
  { id: 5, src: "./images/escola-6.jpg", alt: "Imagem 5" },
  { id: 6, src: "./images/escola-7.jpg", alt: "Imagem 6" },
];

const ResponsiveGallery = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener('resize', handleResize);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="responsive-gallery-container">
      {isMobile ? (
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000} // Tempo entre as trocas
          containerClass="carousel-container"
        >
          {images.map((image) => (
            <div key={image.id} className="carousel-image-wrapper">
              <img src={image.src} alt={image.alt} className="carousel-image" />
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="gallery-grid">
          {images.map((image) => (
            <div key={image.id} className="gallery-image-wrapper">
              <img src={image.src} alt={image.alt} className="gallery-image" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResponsiveGallery;
