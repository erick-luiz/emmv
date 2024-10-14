import React from 'react';
import './Palestrantes.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importação dos estilos do carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../CoursesCarousel/CoursesCarousel.css';
import ShortLine from '../../Line/ShortLine.js'
import LongLine from '../../Line/LongLine.js'

const coordenadores = [
   {
      nome: 'Marcelo Vaz',
      disciplina: '',
      foto: './images/eventos/mentes-2024/palestrantes/marcelo-vaz.jpeg', // URL da imagem
      redes: {
        facebook: null,
        instagram: 'https://www.instagram.com/marcelomusicprofile/',
        twitter: null,
        linkedin: null,
      }
    },{
        nome: 'Alexandre Salum',
        disciplina: '',
        foto: './images/eventos/mentes-2024/palestrantes/alexandre-salum.jpeg', // URL da imagem
        redes: {
          facebook: null,
          instagram: null,
          twitter: null,
          linkedin: null,
        }
      },{
        nome: 'Joao Lovato',
        disciplina: '',
        foto: './images/eventos/mentes-2024/palestrantes/joao-lovato.jpeg', // URL da imagem
        redes: {
          facebook: null,
          instagram: null,
          twitter: null,
          linkedin: null,
        }
      },{
        nome: 'Karyne Coutinho',
        disciplina: '',
        foto: './images/eventos/mentes-2024/palestrantes/karyne-coutinho.jpeg', // URL da imagem
        redes: {
          facebook: null,
          instagram: null,
          twitter: null,
          linkedin: null,
        }
      },
      {
          nome: 'Luana Medina',
          disciplina: '',
          foto: './images/eventos/mentes-2024/palestrantes/luana-medina.jpeg', // URL da imagem
          redes: {
            facebook: null,
            instagram: null,
            twitter: null,
            linkedin: null,
          }
        },
        {
            nome: 'Michel Correa',
            disciplina: '',
            foto: './images/eventos/mentes-2024/palestrantes/michel-correa.jpeg', // URL da imagem
            redes: {
              facebook: null,
              instagram: null,
              twitter: null,
              linkedin: null,
            }
          },{
            nome: 'Mostra Experiências',
            disciplina: '',
            foto: './images/eventos/mentes-2024/palestrantes/mostra-experiencias.jpeg', // URL da imagem
            redes: {
              facebook: null,
              instagram: null,
              twitter: null,
              linkedin: null,
            }
          },{
            nome: 'Rodrigo Terra',
            disciplina: '',
            foto: './images/eventos/mentes-2024/palestrantes/rodrigo-terra.jpeg', // URL da imagem
            redes: {
              facebook: null,
              instagram: null,
              twitter: null,
              linkedin: null,
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
      items: 4,
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

const Palestrantes = () => {
  return (
    <div className="coordenadores-container">
      <h1 className="titulo">
        <span className="highlight">Palestrantes e Participantes</span> do Evento
      </h1>
      <ShortLine />
      <p className="descricao">
        Conheça a turma de peso que fará parte desse evento lindo.
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
                          {coordenador.redes.facebook && <a href={coordenador.redes.facebook}><FaFacebook /></a>}
                          {coordenador.redes.instagram && <a href={coordenador.redes.instagram}><FaInstagram /></a>}
                          {coordenador.redes.twitter && <a href={coordenador.redes.twitter}><FaTwitter /></a>}
                          {coordenador.redes.linkedin && <a href={coordenador.redes.linkedin}><FaLinkedin /></a>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
      </Carousel>
    </div>
  );
};

export default Palestrantes;
