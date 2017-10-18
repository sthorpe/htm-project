import React from 'react';
import { Well, Table, Nav, Navbar, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import UserProfile from './user';

export default class Home extends React.Component {
  
  componentDidMount() {
    //if (not a admin user redirect)
  }

  render() {
    return (
    <div>
      <div style={{textAlign: 'center'}}>
        <Well>
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Scott</td>
            <td>Thorpe</td>
            <td>sthorpe</td>
            <td>Enabled</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dale</td>
            <td>Adams</td>
            <td>dadams</td>
            <td>Enabled</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Brandon</td>
            <td>Wayne</td>
            <td>bwayne</td>
            <td>Enabled</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Stephen</td>
            <td>Campbell</td>
            <td>scampbell</td>
            <td>Enabled</td>
          </tr>          
        </tbody>
      </Table>
      </Well>
      </div>
    </div>
    );
  }
}
