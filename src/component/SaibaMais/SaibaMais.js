import React from 'react';
import { Link } from 'react-router-dom';

import './SaibaMais.css';

const SaibaMaisButton = ({ link, pageLink }) => {
  return (<>
    {pageLink?
            (<Link to={pageLink} className="saiba-mais-button">Saiba Mais</Link>):
            (<a href={link} className="saiba-mais-button">Saiba Mais</a>)
    }
    </>
  );
};

export default SaibaMaisButton;
