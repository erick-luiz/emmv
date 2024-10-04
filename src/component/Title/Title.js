import React from 'react';

const Title = (props) => {

  let finalText = props.text;
  props.highlightedWords && props.highlightedWords.forEach(word => {
                  finalText.replace(word, ```<span className="highlight">${word}</span>```)
              })

  return (
    <h1 className="main-title">{finalText}</h1>
  );
};

export default Title;