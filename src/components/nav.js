import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const NavbarInstance = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Company name</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <LinkContainer to="/product">
        <NavItem eventKey={1}>Product</NavItem>
      </LinkContainer>
      <LinkContainer to="/about">
        <NavItem eventKey={2}>About</NavItem>
      </LinkContainer>
      <LinkContainer to="/contact">
        <NavItem eventKey={3}>Contact</NavItem>
      </LinkContainer>
      <LinkContainer to="/login">
        <NavItem eventKey={4}>Login</NavItem>
      </LinkContainer>
      <LinkContainer to="/signup">
        <NavItem eventKey={5} href="#">Signup</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
);

export default NavbarInstance
