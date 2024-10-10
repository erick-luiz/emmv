import React from 'react';
import './EquipeSection.css';
import ShortLine from '../Line/ShortLine.js'
import LongLine from '../Line/LongLine.js'

const EquipeSection = () => {
  return (
    <div className="equipe-container">
      <h1 className="titulo">
        A <span className="highlight">EMMV</span> conta com uma equipe de excelência
      </h1>
      <ShortLine />
      <p className="descricao">
        A <span className="highlight">EMMV</span> tem a honra de contar com uma equipe de profissionais extremamente qualificados e dedicados. Com vasta experiência, nossa equipe está pronta para ajudar cada aluno a alcançar o sonho de dominar a música com excelência.
      </p>
      <LongLine />
    </div>
  );
};

export default EquipeSection;
