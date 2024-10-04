import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const NavbarDropdownItem = ({ name, items }) => {

    return <NavDropdown title={name} id={name + "-nav-dropdown"}>

        {
            items.map(item => {
                <NavDropdown.Item href={item.path}>{item.name}</NavDropdown.Item>
            })
        }
        </NavDropdown>
};

export default NavbarDropdownItem;
