import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';

export default class Home extends React.Component {
  render() {
    const NavbarInstance = () => (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Company name</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Product</NavItem>
          <NavItem eventKey={2} href="#">About</NavItem>
          <NavItem eventKey={3} href="#">Contact</NavItem>
          <NavItem eventKey={4} href="#">Login</NavItem>
          <NavItem eventKey={5} href="#">Signup</NavItem>
        </Nav>
      </Navbar>
    );
    return (
    <div>
    <NavbarInstance />
      <div style={{textAlign: 'center'}}>
        <Image src="/src/images/medical-device-connectivity.jpg" responsive />
      </div>
    </div>
    );
  }
}
