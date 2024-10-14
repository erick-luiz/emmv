import React from 'react';
import './EquipeSection.css';
import ShortLine from '../Line/ShortLine.js'
import LongLine from '../Line/LongLine.js'

const Mentes2024Section = () => {
  return (
    <div className="equipe-container">
      <h1 className="titulo">
        1º <span className="highlight">Mentes Musicais</span>
      </h1>
      <ShortLine />
      <p className="descricao">
        O <span className="highlight">Mentes musicais</span> é um evento da Escola de Música Marcelo Vaz (<span className="highlight">EMMV</span>) que celebra a disseminação de saberes. O evento inclui apresentações musicais, oficinas, palestras, mesas redondas, mostras de experiências, minicursos e shows. A EMMV oferece um lugar propício para o estudo musical, criando um ambiente sonoro, artístico próprio para troca de experiências e aperfeiçoamento de saberes.
      </p>
      <LongLine />
    </div>
  );
};

export default Mentes2024Section;