import React from 'react';
import { default as ReactCarousel} from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carousel.css'; // Estilos personalizados

const courses = [
  {
    id: 1,
    name: "Curso de Piano",
    image: "./images/cursos/piano.jpg",
  },
  {
    id: 2,
    name: "Curso de Violino",
    image: "./images/cursos/violino.jpg",
  },
  {
    id: 3,
    name: "Curso de Bateria",
    image: "./images/cursos/bateria.jpg",
  },
  {
    id: 4,
    name: "Curso de Harmonia",
    image: "./images/cursos/harmonia.jpg",
  },
  {
    id: 5,
    name: "Curso Arranjo",
    image: "./images/cursos/Arranjo.jpg",
  },
  {
    id: 6,
    name: "Curso de Violino",
    image: "/path/to/violin-course.jpg",
  },
];

const Carousel = (props) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: props.superLargeDesktopItems || 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: props.desktopItems || 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: props.tabletItems || 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: props.mobileItems ||  1,
    },
  };

  return (
    <div className="carousel-container">
      <ReactCarousel responsive={responsive} infinite={true} autoPlay={props.autoPlay} containerClass="carousel-container">
        { props.children }
      </ReactCarousel>
    </div>
  );
};

export default Carousel;
