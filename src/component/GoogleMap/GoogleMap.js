import React from 'react';
import './GoogleMap.css'; // Para estilos personalizados, se necessário

const GoogleMap = () => {
  return (
    <div className="google-map-container">
      <iframe
        title="Localização da Escola de Música Marcelo Vaz"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.054328292672!2d-52.09709168518261!3d-32.034170180975585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9526fa39632ab6d1%3A0x7a3f30017774cd1e!2sR.%20Carlos%20Gomes%2C%20583%20-%20Sala%2015%20-%20Centro%2C%20Rio%20Grande%20-%20RS%2C%2096200-460!5e0!3m2!1spt-BR!2sbr!4v1636779590875!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
