import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar/Navbar.js'
import SingleNavbarItem from '../../Navbar/NavbarItem/SingleNavbarItem.js'

const NavbarHome = () => {

  return (
    <Navbar>
        <SingleNavbarItem path="#sobre-a-escola" name="Sobre a Escola" />
        <SingleNavbarItem path="#conheca-os-cursos" name="Cursos" />
        <SingleNavbarItem path="#conheca-os-professores" name="Professores" />
        <SingleNavbarItem path="/eventos" name="Eventos" />
        <SingleNavbarItem path="#localizacao" name="Localização" />
    </Navbar>
  );
};

export default NavbarHome;
