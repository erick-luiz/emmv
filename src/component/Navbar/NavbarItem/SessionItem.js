import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

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

const SessionNavbarItem = ({sessionId, name}) => {

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          scrollToSection(hash.substring(1));
        }
    }, []);

    return <Nav.Link
        href={"#" + sessionId}
        onClick={() => scrollToSection({sessionId})}>
            {name}
        </Nav.Link>;

};

export default SingleNavbarItem;