import React from 'react';
import './UnderConstruction.css';
import PageBotao from '../../component/Btn/PageBotao.js'


const UnderConstruction = () => {
  return (
    <div className="construction-container">
      <h1>Site em Construção</h1>
      <p>Estamos trabalhando duro para lançar o site em breve. Fique ligado!</p>
      <p>Confira o próximo evento que acontecerá na escola nos dias 8, 9 e 10 de Novembro</p>
      <PageBotao btnLink={"/mentes-musicais-2024"} btnText={"Mentes Musicais 2024"} />
    </div>
  );
};

export default UnderConstruction;
