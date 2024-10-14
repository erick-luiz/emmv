import React, { useState } from 'react';
import './LerMais.css';

const LerMais = (props) => {
  const [expandido, setExpandido] = useState(false);

  const toggleExpandido = () => {
    setExpandido(!expandido);
  };

  return (
    <div className="ler-mais">

      {expandido ? props.children: ''}
        <button onClick={toggleExpandido} className="ler-mais-btn">
          {expandido ? 'Ler Menos' : 'Ler Mais'}
        </button>
    </div>
  );
};

export default LerMais;
