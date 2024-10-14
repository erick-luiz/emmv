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
      nome: 'Marcelo Vaz',
      descricao: 'Coordenação geral',
      foto: './images/professores/marcelo-vaz.png', // URL da imagem
      redes: {
        facebook: null,
        instagram: 'https://www.instagram.com/marcelomusicprofile/',
        twitter: null,
        linkedin: null,
      }
    },
    {
    nome: 'Rodrigo Terra',
    descricao: 'Equipe técnica de áudio',
    foto: './images/professores/rodrigo-terra.jpg',
    redes: {
      facebook: 'https://pt-br.facebook.com/rodrigo.machado.5621',
      instagram: 'https://www.instagram.com/roodrigo_terra/',
      twitter: null,
      linkedin: null,
    }
  },
  {
    nome: 'Fransisco Maciel',
    descricao: 'Comissão de Infraestrutura',
    foto: './images/eventos/mentes-2024/fransisco-maciel.png',
    redes: {
      facebook: null,
      instagram: null,
      twitter: null,
      linkedin: null,
    }
  },
 {
     nome: 'Lucas Cavalheiro',
     descricao: 'Redes Sociais e Designer & Comissão Artística',
     foto: './images/eventos/mentes-2024/lucas-cavalheiro.png',
     redes: {
       facebook: null,
       instagram: 'https://www.instagram.com/lucas.c.a.v.a/',
       twitter: null,
       linkedin: null,
     }
    },
      {
          nome: 'Benjamin Martins',
          descricao: 'Comissão Artística',
          foto: './images/eventos/mentes-2024/benjamin.jpg',
          redes: {
            facebook: null,
            instagram: null,
            twitter: null,
            linkedin: null,
          }
         },{
           nome: 'Robson Velasquez',
           descricao: 'Programação do evento',
           foto: './images/eventos/mentes-2024/robson-velasquez.png',
           redes: {
             facebook: null,
             instagram: 'https://www.instagram.com/velasquesrobson/',
             twitter: null,
             linkedin: null,
           }
          },{
           nome: 'Erick Lopes (Kinho)',
           descricao: 'Mídias Digitais',
           foto: './images/eventos/mentes-2024/erick-lopes.jpeg',
           redes: {
             facebook: null,
             instagram: 'https://www.instagram.com/erick_kinho_sax/',
             twitter: null,
             linkedin: null,
           }
          },{
           nome: 'Alyk Veleda',
           descricao: 'Monitor',
           foto: './images/eventos/mentes-2024/alyk.jpg',
           redes: {
             facebook: null,
             instagram: 'https://www.instagram.com/veleda.alyk/',
             twitter: null,
             linkedin: null,
           }
          },{
           nome: 'Dom Marquez',
           descricao: 'Monitor',
           foto: './images/eventos/mentes-2024/dom.jpg',
           redes: {
             facebook: null,
             instagram: 'https://www.instagram.com/dommarqueznuri/',
             twitter: null,
             linkedin: null,
           }
          },{
           nome: 'Lisi Aristimuno',
           descricao: 'Fotos/videos e redes sociais',
           foto: './images/eventos/mentes-2024/lisi.jpg',
           redes: {
             facebook: null,
             instagram: 'https://www.instagram.com/lisi_108/',
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
        Conheça nossa <span className="highlight">Comissão organizadora</span>
      </h1>
      <ShortLine />
      <p className="descricao">
      <ul>
        <li><b>Coordenação geral</b>: Marcelo Vaz</li>
        <li><b>Programação do evento</b>: Robson Velasques</li>
        <li><b>Redes Sociais e Designer</b>: Lucas Cavaleiro / Lucas Cunha</li>
        <li><b>Mídias Digitais</b>: Érick Lopes (Kinho)</li>
        <li><b>Comissão Artística</b>: Benjamin Martins, Lucas Cavaleiros</li>
        <li><b>Comissão de Infraestrutura</b>: Francisco Maciel</li>
        <li><b>Equipe técnica de áudio</b>: Rodrigo Terra</li>
        <li><b>Monitores</b>: Alyk Veleda e Dom Marques</li>
        <li><b>Fotos/videos e redes sociais</b>: Lisi Aristimuno</li>
       </ul>
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

export default CoordenadoresEvento;
