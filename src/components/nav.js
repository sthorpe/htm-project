import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import User from './user';

const isLoggedIn = localStorage.getItem('token');

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
      { isLoggedIn ? 
      <LinkContainer to="/search">
        <NavItem eventKey={5} href="#">Search</NavItem>
      </LinkContainer>
      : '' }
      { isLoggedIn ? 
        <LinkContainer to="/logout">
          <NavItem eventKey={4}>logout</NavItem>
        </LinkContainer>
      :
        <LinkContainer to="/login">
          <NavItem eventKey={4}>Login</NavItem>
        </LinkContainer> 
      } 
      </Nav>
  </Navbar>
);

export default NavbarInstance
