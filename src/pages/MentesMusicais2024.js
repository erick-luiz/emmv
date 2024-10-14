import React from 'react';

import InnerNavbar from '../component/NavbarComponents/InnerNavbar/InnerNavbar.js';
import Banner from '../component/SingleBanner/Banner.js';
import CardPage from '../component/CardPage/CardPage.js';
import CoordenadoresEvento from '../component/CoordenadoresEvento/CoordenadoresEvento.js';
import Palestrantes from '../component/Mentes2024/Palestrantes/Palestrantes.js';
import Apresentacoes from '../component/Mentes2024/Apresentacoes/Apresentacoes.js';
import NavegacaoCircular from '../component/Mentes2024/NavegacaoCircular/NavegacaoCircular.js';
import Mentes2024Section from '../component/EquipeSection/Mentes2024Section.js';
import ProgramacaoEvento from '../component/ProgramacaoEvento/ProgramacaoEvento.js';
import InscrevaBotao from '../component/Btn/InscrevaBotao.js';
import Page from './Page.js'
import GoogleMap from '../component/GoogleMap/GoogleMap.js';

function MentesMusicais2024() {
  return  <Page>
        <Banner backgroundImage="./images/eventos/mentes-2024/banner-7.png" text="" />
        <InnerNavbar invisible={true}/>
        <NavegacaoCircular />
        <session id="detalhes">
        <Mentes2024Section />
        </session>
        <InscrevaBotao />
        <session id="programacao">
        <ProgramacaoEvento />
        </session>

        <session id="palestrantes"> <Palestrantes /> </session>
        <Apresentacoes  />
        <CoordenadoresEvento />

        <session id="localizacao">
         <h1 className="titulo">
            <span className="highlight">Localização</span> do Evento
          </h1>

        <p className="descricao">
           R. Carlos Gomes, 583 - Sala 15 - Centro, Rio Grande - RS, 96200-460
        </p>
        <hr className="linha-inteira" />
        <GoogleMap />
        </session>
  </Page>;
}

export default MentesMusicais2024;