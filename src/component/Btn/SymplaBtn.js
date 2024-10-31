import React from 'react';
import './SymplaBtn.css';
import { FaLink } from 'react-icons/fa';

const SymplaBtn = ({link}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="sympla-btn"
    >
      <FaLink size={10} /> Sympla
    </a>
  );
};

export default SymplaBtn;
