import React, { useState, useEffect} from 'react';
import { Zoom } from 'react-slideshow-image';
import { useInView } from 'react-intersection-observer';

import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css';

const zoomOutProperties = {
  duration: 2500,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  scale: 1.5,
  arrows: false
};

// Número do WhatsApp para o botão
const whatsappNumber = '555199999999';

const Slideshow = () => {

    const [activeSlide, setActiveSlide] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [scrolled, setScrolled] = useState(false);
    const [images, setImages] = useState([]);


    // Função para monitorar o scroll da página
    useEffect(() => {
        fetch('./data/banner.json', {
            Headers: {Accept: "application/json"}
        })
        .then(res => res.json())
        .then(res => setImages(res || []));
    }, []);

  // Função para monitorar o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
    <>
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <div className="image-container"><img key={index} className="blue-tone" style={{width: "100%"}} src={each} /> </div>)
          }
        </Zoom>
      </div>

      <div className={`banner-content ${scrolled ? 'scrolled' : ''}`} ref={ref}>

              <h1 className={`banner-title ${inView ? 'animate' : ''}`}>Escola de Música Marcelo Vaz</h1>
              <h2 className={`banner-subtitle ${inView ? 'animate' : ''}`}>Seja o seu melhor</h2>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`banner-button ${inView ? 'animate' : ''}`}
              >
                Agende agora sua visita
              </a>
      </div>
      </>
    )
}

export default Slideshow;