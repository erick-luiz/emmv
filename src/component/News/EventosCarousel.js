import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Carousel from '../Carousel/Carousel.js'
import CarouselItem from '../Carousel/CarouselItem.js'

const EventosCarousel = () => {

    const [eventos, setEventos] = useState([]);

    // Função para monitorar o scroll da página
    useEffect(() => {
        fetch('./data/eventos.json', {
            Headers: {Accept: "application/json"}
        })
        .then(res => res.json())
        .then(res => setEventos(res || []));
    }, []);

  return (<>
        <h1 className="title">
                Conheça os <span className="highlight">Eventos</span> da Escola
              </h1>
        <Carousel>
            {
                eventos.map(evento => {
                    if(!evento.link) evento.link = "/evento/" + evento.id
                    return <CarouselItem item={evento}/>
                })
            }
        </Carousel>
    </>
  );
};

export default EventosCarousel;
