import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar/Navbar.js'
import SingleNavbarItem from '../../Navbar/NavbarItem/SingleNavbarItem.js'

const NavbarHome = (props) => {

  return (
    <Navbar invisible={true}>
        <SingleNavbarItem path="#sobre-a-escola" name="Sobre a Escola" />
        <SingleNavbarItem path="/cursos" name="Cursos" />
        <SingleNavbarItem path="/equipe" name="Equipe" />
        <SingleNavbarItem path="/eventos" name="Eventos" />
        <SingleNavbarItem path="/localizacao" name="Localização" />
    </Navbar>
  );
};

export default NavbarHome;
