import React, { useEffect, useState } from 'react';
import './Banner.css'; // Estilos para o banner

const Banner = ({ backgroundImage, text }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  // Ativa o efeito de zoom ao carregar a página
  useEffect(() => {
    setTimeout(() => {
      setIsZoomed(true);
    }, 100); // Adiciona um pequeno atraso para a animação
  }, []);

  return (
    <div
      className={`banner-container ${isZoomed ? 'zoomed' : ''}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="banner-content">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Banner;
