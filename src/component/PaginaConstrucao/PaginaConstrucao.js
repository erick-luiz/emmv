import React from 'react';
import './PaginaConstrucao.css';
import ShortLine from '../Line/ShortLine.js'
import LongLine from '../Line/LongLine.js'

const PaginaConstrucao = () => {
  const voltarInicio = () => {
    window.location.href = '/'; // Redireciona para a página inicial
  };

  return (
    <div className="construcao-container">
      <h1 className="titulo">
        Esta página está em <span className="highlight">construção</span>
      </h1>
      <ShortLine />
      <p className="descricao">
        Estamos trabalhando para trazer uma nova experiência. Acesse novamente mais tarde para conferir as novidades e informações atualizadas.
      </p>
     <LongLine />
      <button className="botao-voltar" onClick={voltarInicio}>
        Voltar para o início
      </button>
    </div>
  );
};

export default PaginaConstrucao;
