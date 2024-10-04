import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const SingleNavbarItem = ({path, name}) => {

    return <Nav.Link href={path}>{name}</Nav.Link>;

};

export default SingleNavbarItem;