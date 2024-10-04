import React from 'react';

import NavbarHome from '../component/NavbarComponents/NavbarHome/NavbarHome.js';
import Banner from '../component/SingleBanner/Banner.js';
import CardPage from '../component/CardPage/CardPage.js';
import Page from './Page.js'

function News() {
  return  <Page>
    <div className="App">
        <Banner backgroundImage="./images/banner/noticias.png" text="Últimas noticias" />
        <NavbarHome />
        <CardPage />
    </div>
  </Page>;
}

export default News;