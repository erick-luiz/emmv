import React, { useState, useEffect } from 'react';
import { Navbar as RectNavbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Navbar.css';

const Navbar = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Monitora o scroll da página para mudar a cor do fundo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Monitora o menu em telas menores
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <RectNavbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled || menuOpen ? 'scrolled' : ''}`}
      variant="dark"
    >
      <Container>
        <RectNavbar.Brand href="/">
            <div className="menu-logo">
              <img
                src="./images/logo-sem-fundo.png"
                alt="Logo"
                className="link-image link-avatar-rounded"
                style={{width: "100px", borderWidth: "0px", borderColor: "#000", borderStyle: "solid"}}
              />
            </div>
        </RectNavbar.Brand>

        <RectNavbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <RectNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
           { props.children }
          </Nav>
        </RectNavbar.Collapse>
      </Container>
    </RectNavbar>
  );
};

export default Navbar;
