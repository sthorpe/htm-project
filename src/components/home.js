import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';

export default class Home extends React.Component {
  render() {
    return (
    <div>
      <div style={{textAlign: 'center'}}>
        <Image src="/src/images/medical-device-connectivity.jpg" responsive />
      </div>
    </div>
    );
  }
}
