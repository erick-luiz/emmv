import React from 'react';
import './Preco.css';

const Preco = ({ valor }) => {
  return (
    <div className="preco">
      <span className="icone-preco">💲</span>
      <span className="texto-preco">{valor}</span>
    </div>
  );
};

export default Preco;
