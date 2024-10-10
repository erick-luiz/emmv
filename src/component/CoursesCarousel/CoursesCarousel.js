import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CoursesCarousel.css'; // Estilos personalizados

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
    name: "Mentes Musicais",
    image: "./images/cursos/mentes-musicais.jpg",
  },
];

const CoursesCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
    <h1 className="title">
                    Conheça os nossos <span className="highlight">Cursos</span>
                  </h1>
    <div className="courses-carousel-container">
      <Carousel responsive={responsive} infinite={true} autoPlay={false} containerClass="carousel-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.name} className="course-image" />
            <h3 className="course-title">{course.name}</h3>
          </div>
        ))}
      </Carousel>
    </div>
    </>
  );
};

export default CoursesCarousel;
