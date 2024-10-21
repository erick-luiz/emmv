import React from 'react';
import './Apresentacoes.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importação dos estilos do carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../CoursesCarousel/CoursesCarousel.css';
import ShortLine from '../../Line/ShortLine.js'
import LongLine from '../../Line/LongLine.js'

const coordenadores = [
   {
      nome: 'Gafieira do Mar & Dougtrio',
      disciplina: '',
      foto: './images/eventos/mentes-2024/palestrantes/show-gafieira-dougtrio.png', // URL da imagem
      redes: {
        facebook: null,
        instagram: 'https://www.instagram.com/gafieira_do_mar/',
        twitter: null,
        linkedin: null,
      }
    },{
        nome: 'Marésom',
        disciplina: '',
        foto: './images/eventos/mentes-2024/palestrantes/show-maresom.png', // URL da imagem
        redes: {
          facebook: null,
          instagram: 'https://www.instagram.com/maresom.trio/',
          twitter: null,
          linkedin: null,
        }
      },{
        nome: 'Tereza Countinho in Concert',
        disciplina: '',
        foto: '/images/eventos/mentes-2024/palestrantes/show-tereza-coutinho.png', // URL da imagem
        redes: {
          facebook: null,
          instagram: 'https://www.instagram.com/teresadiascoutinho/',
          twitter: null,
          linkedin: null,
        }
      }

];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 3,
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

const Apresentacoes = () => {
  return (
    <div className="coordenadores-container">
      <h1 className="titulo">
        <span className="highlight">Apresentações Musicais</span> do Evento
      </h1>
      <ShortLine />
      <p className="descricao">
        Todos os três dias do Evento Mentes Musicais 2024 serão encerrados com uma Apresentação músical.
        Sendo o Dia 08 encerrado pelo grupo Marésom, o Dia 09 encerrado pela Tereza Coutinho com a apresentação
        Tereza Coutinho in Concert, e para o último dia de evento teremos uma apresentão dos grupos Gafieira do Mar e
        Kiai Grupo. A participação na apresentação será mediante a apresentação do ingresso de R$ 30,00  que pode ser adquirido
         na escola ou pelo Sympla.
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
                          {coordenador.redes.facebook && <a href={coordenador.redes.facebook} target="_blank"><FaFacebook /></a>}
                          {coordenador.redes.instagram && <a href={coordenador.redes.instagram} target="_blank"><FaInstagram /></a>}
                          {coordenador.redes.instagram2 && <a href={coordenador.redes.instagram2} target="_blank"><FaInstagram /></a>}
                          {coordenador.redes.twitter && <a href={coordenador.redes.twitter} target="_blank"><FaTwitter /></a>}
                          {coordenador.redes.linkedin && <a href={coordenador.redes.linkedin} target="_blank"><FaLinkedin /></a>}
                          {coordenador.redes.youtube && <a href={coordenador.redes.youtube} target="_blank"><FaYoutube /></a>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
      </Carousel>
    </div>
  );
};

export default Apresentacoes;
