import React from 'react';
import './Line.css';

function ShortLine({color}) {
  return  <hr className="short-line" style={ {'color': color? color: "#333"} }/>;
}

export default ShortLine;

