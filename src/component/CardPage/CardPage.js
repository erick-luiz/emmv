import React, { useState, useEffect} from 'react';
import './CardPage.css';

const CardPage = () => {

  const [eventos, setEventos] = useState([]);

  // Função para monitorar o scroll da página
  useEffect(() => {
      fetch('./data/eventos.json', {
          Headers: {Accept: "application/json"}
      })
      .then(res => res.json())
      .then(res => setEventos(res || []));
  }, []);

  return (
    <div className="card-page-container">
      {eventos.map((event) => (
        <div key={event.id} className="card">
          <img src={event.image} alt={event.name} className="card-image" />
          <h3 className="card-name">{event.name}</h3>
          <p className="card-date">{event.date}</p>
          <hr className="card-divider" />
          <p className="card-description">{event.descricao}</p>
        </div>
      ))}
    </div>
  );
};

export default CardPage;
