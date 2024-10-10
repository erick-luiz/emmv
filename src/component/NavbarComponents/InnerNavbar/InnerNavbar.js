import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar/Navbar.js'
import SingleNavbarItem from '../../Navbar/NavbarItem/SingleNavbarItem.js'

const InnerNavbar = (props) => {

  return (
    <Navbar invisible={props.invisible}>
        <SingleNavbarItem path="/" name="Inicio" />
        <SingleNavbarItem path="/cursos" name="Cursos" />
        <SingleNavbarItem path="/equipe" name="Equipe" />
        <SingleNavbarItem path="/eventos" name="Eventos" />
        <SingleNavbarItem path="/Localizacao" name="Localização" />
    </Navbar>
  );
};

export default InnerNavbar;