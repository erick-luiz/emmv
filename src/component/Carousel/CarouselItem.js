import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carousel.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const CarouselItem = ({item}) => {

  return (
      <div key={item.id} className="carousel-card">
        <Link to={item.link}>
            <img src={item.image} alt={item.name} className="carousel-item-image" />
            <h3 className="carousel-item-title">{item.name}</h3>
        </Link>
      </div>
  );
};

export default CarouselItem;