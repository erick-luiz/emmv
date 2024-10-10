import React from 'react';
import { useParams } from 'react-router-dom';
import InnerNavbar from '../component/NavbarComponents/InnerNavbar/InnerNavbar.js';
import Banner from '../component/SingleBanner/Banner.js';
import PaginaConstrucao from '../component/PaginaConstrucao/PaginaConstrucao.js';
import Page from './Page.js'

const courses = {
  piano: {
    title: 'Curso de Piano',
    description: 'Aulas práticas e teóricas de piano com professores especializados.'
  },
  guitar: {
    title: 'Curso de Violão',
    description: 'Aprenda violão com técnicas modernas e acompanhamento personalizado.'
  },
  drums: {
    title: 'Curso de Bateria',
    description: 'Curso completo de bateria para iniciantes e avançados.'
  },
  voice: {
    title: 'Curso de Canto',
    description: 'Desenvolva suas habilidades vocais com nosso curso de canto.'
  }
};

const Course = () => {
  const { courseId } = useParams();
  const course = courses[courseId];

  //if (!course) {
  //  return <h2>Curso não encontrado</h2>;
  //}

  return (
  <Page>
      <InnerNavbar />
      <PaginaConstrucao />
  </Page>
  );
};

export default Course;
