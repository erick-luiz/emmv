import React from 'react';

import NavbarHome from '../component/NavbarComponents/NavbarHome/NavbarHome.js';
import Slideshow from '../component/Banner/Slideshow.js';
import SaibaMaisButton from '../component/SaibaMais/SaibaMais.js';
import AboutSchool from '../component/AboutSchool/AboutSchool.js';
import CoursesCarousel from '../component/CoursesCarousel/CoursesCarousel.js';
import GoogleMap from '../component/GoogleMap/GoogleMap.js';
import ProfessoresCarousel from '../component/ProfessoresCarousel/ProfessoresCarousel.js';
import EventosCarousel from '../component/News/EventosCarousel.js';
import NotificationPopup from '../component/NotificationPopup/NotificationPopup.js';
import Page from './Page.js'


const scrollToSection = (id) => {
  const section = document.getElementById(id);
  const offset = 80;
  const elementPosition = section.getBoundingClientRect().top;
  const offsetPosition = elementPosition - offset;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

function Home() {

  return <Page>
    <Slideshow />
    <NavbarHome />
    <section id="sobre-a-escola"><AboutSchool /></section>
    <section id="conheca-os-cursos"><CoursesCarousel /></section>
    <section id="conheca-os-professores">
        <ProfessoresCarousel />
    </section>
    <section id="eventos"><EventosCarousel /></section>
    <section id="localizacao">
        <h1>Localização</h1>
        <GoogleMap />
    </section>

  </Page>;
}

export default Home;