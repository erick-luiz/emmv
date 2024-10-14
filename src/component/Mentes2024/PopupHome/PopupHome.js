import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PopupHome.css';

const PopupHome = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    // Verifica se a chave "popupShown" existe no localStorage
    const popupShown = localStorage.getItem('popupShown');

    if (!popupShown) {
      setPopupVisible(true); // Exibe o popup se a chave não existe
    }

    // Função para fechar o popup ao pressionar ESC
    const handleEscClose = (event) => {
      if (event.key === 'Escape') {
        handleClosePopup();
      }
    };

    // Adiciona o listener de evento de teclado
    window.addEventListener('keydown', handleEscClose);

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('keydown', handleEscClose);
    };
  }, []);

  const handleClosePopup = () => {
    localStorage.setItem('popupShown', 'true'); // Armazena a informação no localStorage
    setPopupVisible(false); // Fecha o popup
  };

  if (!isPopupVisible) {
    return null; // Não exibe o popup se já foi mostrado
  }

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="popup-close" onClick={handleClosePopup}>
          &times;
        </button>
        <img
          src="./images/eventos/mentes-2024/banner.jpg"
          alt="Banner do Evento Mentes Musicais 2024"
          className="popup-banner"
        />
        <p>Venha participar do nosso evento exclusivo!</p>
        <Link to="/pagina-do-evento" className="popup-button" onClick={handleClosePopup}>
          Vá para a página do evento
        </Link>
      </div>
    </div>
  );
};

export default PopupHome;

