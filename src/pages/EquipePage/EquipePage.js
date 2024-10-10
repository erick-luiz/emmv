import React from 'react';
import './EquipePage.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import InnerNavbar from '../../component/NavbarComponents/InnerNavbar/InnerNavbar.js';
import Banner from '../../component/SingleBanner/Banner.js';
import CardPage from '../../component/CardPage/CardPage.js';
import EquipeSection from '../../component/EquipeSection/EquipeSection.js';
import Page from '../Page.js'

const professores = [
  {
    nome: 'Marcelo Vaz',
    disciplina: 'Piano & Arranjo & Canto, Outros...',
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
    disciplina: 'Bateria & Percussão',
    foto: './images/professores/rodrigo-terra.jpg',
    redes: {
      facebook: 'https://pt-br.facebook.com/rodrigo.machado.5621',
      instagram: 'https://www.instagram.com/roodrigo_terra/',
      twitter: null,
      linkedin: null,
    }
  },
  {
    nome: 'Dom Marquez',
    disciplina: 'Violino',
    foto: './images/professores/dom-marquez.png',
    redes: {
      facebook: null,
      instagram: 'https://www.instagram.com/dommarqueznuri/',
      twitter: null,
      linkedin: null,
    }
  },
    {
      nome: 'Mauro Atkinson',
      disciplina: 'Violão',
      foto: './images/professores/mauro-atkinson.jpg',
      redes: {
        facebook: null,
        instagram: 'https://www.instagram.com/mauroatkinsonlima/',
        twitter: null,
        linkedin: null,
      }
    },
  // Adicione mais professores conforme necessário
];

const ProfessoresPage = () => {
  return (
  <Page>
    <EquipeSection />
    <InnerNavbar invisible={false} />
    <div className="professores-container">
      {professores.map((professor, index) => (
        <div className="professor-card" key={index}>
          <div className="professor-image-container">
            <img src={professor.foto} alt={professor.nome} className="professor-image" />
            <div className="overlay">
              <h3 className="professor-nome">{professor.nome}</h3>
              <p className="professor-disciplina">{professor.disciplina}</p>
              <hr className="professor-linha" />
              <div className="professor-redes">
                {professor.redes.facebook && <a href={professor.redes.facebook}><FaFacebook /></a>}
                {professor.redes.instagram && <a href={professor.redes.instagram}><FaInstagram /></a>}
                {professor.redes.twitter && <a href={professor.redes.twitter}><FaTwitter /></a>}
                {professor.redes.linkedin && <a href={professor.redes.linkedin}><FaLinkedin /></a>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Page>
  );
};

export default ProfessoresPage;
