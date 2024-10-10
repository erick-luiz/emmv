import React from 'react';
import './CoordenadoresEvento.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importação dos estilos do carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../CoursesCarousel/CoursesCarousel.css';
import ShortLine from '../Line/ShortLine.js'
import LongLine from '../Line/LongLine.js'

const coordenadores = [
  {
    nome: 'Coordenador 1',
    descricao: 'Responsável pela organização geral do evento.',
    foto: 'https://via.placeholder.com/300',
    redes: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    }
  },
  {
    nome: 'Coordenador 2',
    descricao: 'Coordena as atividades culturais.',
    foto: 'https://via.placeholder.com/300',
    redes: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    }
  },
 {
   nome: 'Coordenador 2',
   descricao: 'Coordena as atividades culturais.',
   foto: 'https://via.placeholder.com/300',
   redes: {
     facebook: '#',
     instagram: '#',
     twitter: '#',
     linkedin: '#',
   }
 },
  // Adicione mais coordenadores conforme necessário
];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 2000, min: 768 },
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

const CoordenadoresEvento = () => {
  return (
    <div className="coordenadores-container">
      <h1 className="titulo">
        <span className="highlight">Coordenação</span> do Evento
      </h1>
      <ShortLine />
      <p className="descricao">
        Conheça os coordenadores que estão à frente deste grande evento.
      </p>
      <LongLine />

    <Carousel responsive={responsive} infinite={true} autoPlay={true} containerClass="carousel-container">
        {coordenadores.map((coordenador, index) => (
                  <div className="coordenador-card" key={index}>
                    <div className="coordenador-image-container">
                      <img src={coordenador.foto} alt={coordenador.nome} className="coordenador-image" />
                      <div className="overlay">
                        <h3 className="coordenador-nome">{coordenador.nome}</h3>
                        <p className="coordenador-descricao">{coordenador.descricao}</p>
                        <hr className="coordenador-linha" />
                        <div className="coordenador-redes">
                          <a href={coordenador.redes.facebook}><FaFacebook /></a>
                          <a href={coordenador.redes.instagram}><FaInstagram /></a>
                          <a href={coordenador.redes.twitter}><FaTwitter /></a>
                          <a href={coordenador.redes.linkedin}><FaLinkedin /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
      </Carousel>
    </div>
  );
};

export default CoordenadoresEvento;
