import React from 'react';
import './AboutSchool.css'; // Estilos personalizados para o componente

import ResponsiveGallery from '../ResponsiveGallery/ResponsiveGallery.js';

function AboutSchool() {
  return (
    <div className="about-school-container">
      <h1 className="about-school-title">
        Somos a maior <span className="highlight">escola de música</span> de Rio Grande - RS!
      </h1>
      <p className="about-school-description">
        Fundada pelo pianista e arranjador Marcelo Vaz, a Escola de Música Marcelo Vaz é um ambiente cuidadosamente pensado para que seus alunos tirem o máximo proveito da música e seus benefícios – aprimorando-se não só como artistas, mas também como pessoas. Resultado de muito amor e dedicação, a EMV aproxima pessoas dos seus sonhos há aproximadamente 2 anos, em Rio Grande.
      </p>

      {/* Galeria de imagens */}
      <ResponsiveGallery />
    </div>
  );
}

export default AboutSchool;
