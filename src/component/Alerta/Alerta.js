import React from 'react';
import './Alerta.css';

const Alerta = ({ texto }) => {
  return (
    <div className="alerta-containner">
    <div className="alerta">
      {texto}
    </div>
    </div>
  );
};

export default Alerta;
