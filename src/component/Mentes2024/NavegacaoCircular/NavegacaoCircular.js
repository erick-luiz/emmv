import React from 'react';
import './NavegacaoCircular.css';
import { FaMapMarker, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { GrSchedules } from "react-icons/gr";
import { MdCoPresent } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";


const NavegacaoCircular = () => {
 const scrollToSection = (id) => {
  const section = document.getElementById(id);
  const offset = 100; // ajuste o valor para criar o espaçamento desejado

  const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = sectionPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};
  return (
    <div className="navegacao-circular">
      <div className="circulo" onClick={() => scrollToSection('detalhes')}>
        <FaCircleInfo />
        <span>Detalhes</span>
      </div>
      <div className="circulo" onClick={() => scrollToSection('programacao')}>
        <GrSchedules />
        <span>Programação</span>
      </div>
      <div className="circulo" onClick={() => scrollToSection('palestrantes')}>
        <MdCoPresent />
        <span>Participações</span>
      </div>
      <div className="circulo" onClick={() => scrollToSection('localizacao')}>
        <FaMapMarker />
        <span>Localização</span>
      </div>
    </div>
  );
};

export default NavegacaoCircular;
