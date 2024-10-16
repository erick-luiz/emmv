import React from 'react';
import './InscrevaBotao.css';
import { Link } from 'react-router-dom';

const PageBotao = ({btnLink, btnText}) => {
  return (
    <Link to={btnLink} className="inscreva-botao" >
      { btnText }
    </Link>
  );
};

export default PageBotao;