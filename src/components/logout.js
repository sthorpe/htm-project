import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';

export default class Home extends React.Component {
  componentDidMount() {
    localStorage.removeItem('token');
    window.location = '/logout';
  }
  render() {
    return (
    <div>
      <div style={{textAlign: 'center'}}>
        <div>You are now logged out. Thank you.</div>
      </div>
    </div>
    );
  }
}
