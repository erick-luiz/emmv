import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Carousel from '../Carousel/Carousel.js'
import CarouselItem from '../Carousel/CarouselItem.js'
import Title from '../Title/Title.js'


const ProfessoresCarousel = () => {

    const [professores, setProfessores] = useState([]);

    // Função para monitorar o scroll da página
    useEffect(() => {
        fetch('./data/professores.json', {
            Headers: {Accept: "application/json"}
        })
        .then(res => res.json())
        .then(res => setProfessores(res || []));
    }, []);

  return (<>
        <h1 className="title">
                Conheça os <span className="highlight">Professores</span> da Escola
              </h1>
        <Carousel>
            {
                professores.map(professor => {
                    if(!professor.link) professor.link = "/professor/" + professor.id
                    return <CarouselItem item={professor}/>
                })
            }
        </Carousel>
    </>
  );
};

export default ProfessoresCarousel;
