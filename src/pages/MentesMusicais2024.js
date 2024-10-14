import React from 'react';

import InnerNavbar from '../component/NavbarComponents/InnerNavbar/InnerNavbar.js';
import Banner from '../component/SingleBanner/Banner.js';
import CardPage from '../component/CardPage/CardPage.js';
import CoordenadoresEvento from '../component/CoordenadoresEvento/CoordenadoresEvento.js';
import Palestrantes from '../component/Mentes2024/Palestrantes/Palestrantes.js';
import Mentes2024Section from '../component/EquipeSection/Mentes2024Section.js';
import ProgramacaoEvento from '../component/ProgramacaoEvento/ProgramacaoEvento.js';
import InscrevaBotao from '../component/Btn/InscrevaBotao.js';
import Page from './Page.js'
import GoogleMap from '../component/GoogleMap/GoogleMap.js';

function MentesMusicais2024() {
  return  <Page>
        <Banner backgroundImage="./images/eventos/mentes-2024/banner.png" text="" />
        <InnerNavbar invisible={true}/>
        <Mentes2024Section />
        <InscrevaBotao />
        <ProgramacaoEvento />

        <Palestrantes />
        <CoordenadoresEvento />

         <h1 className="titulo">
            <span className="highlight">Localização</span> do Evento
          </h1>

        <p className="descricao">
           R. Carlos Gomes, 583 - Sala 15 - Centro, Rio Grande - RS, 96200-460
        </p>
        <hr className="linha-inteira" />
        <GoogleMap />
  </Page>;
}

export default MentesMusicais2024;