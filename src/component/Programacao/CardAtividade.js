import React from 'react';
import './CardAtividade.css';
import { FaCoffee, FaUtensils } from 'react-icons/fa';

const CardAtividade = ({ tipo, horario }) => {
  return (
    <div className={`card-atividade ${tipo}`}>
      <div className="card-icone">
        {tipo === 'coffee-break' ? <FaCoffee size={30} /> : <FaUtensils size={30} />}
      </div>
      <div className="card-info">
        <div className="card-horario"><strong>Horário:</strong> {horario}</div>
        <div className="card-tipo">{tipo === 'coffee-break' ? 'Coffee Break' : 'Almoço'}</div>
      </div>
    </div>
  );
};

export default CardAtividade;
