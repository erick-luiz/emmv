import React from 'react';
import './CardEvento.css';

const CardEvento = ({ horario, atividade, apresentador, onClick }) => {
  return (
    <div className="card-evento" onClick={onClick}>
      <div className="card-horario">
        <strong>Horário:</strong> {horario}
      </div>
      <div className="card-evento-atividade">
        <strong>Atividade:</strong> {atividade}
      </div>
      <div className="card-evento-apresentador">
        <strong>Apresentador:</strong> {apresentador}
      </div>
    </div>
  );
};

export default CardEvento;
