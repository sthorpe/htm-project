import React from 'react';
import { ButtonGroup, Button, PageHeader, Well, Table, Nav, Navbar, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import UserProfile from './user';

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      devices: []
    };
    this.getListOfDevices = this.getListOfDevices.bind(this);
    this.onChangeItem = this.onChangeItem.bind(this);
  }
  componentDidMount() {
    this.getListOfDevices();
  }

  onChangeItem(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  enableDevice(deviceId) {
    let targetUrl = 'http://localhost:8081/api/device';
    fetch(targetUrl, { method: 'POST', body: JSON.stringify({"deviceId": deviceId}), headers: {"Content-Type": "application/json"},}).then((responseText) => {
      return responseText.json();
    })
    .then((response) => {
      this.setState({devices: response});
    });
  }

  getListOfDevices() {
    let targetUrl = 'http://localhost:8081/api/devices';
    fetch(targetUrl, { method: 'GET', headers: {"Content-Type": "application/json"},}).then((responseText) => {
      return responseText.json();
    })
    .then((response) => {
      this.setState({devices: response});
    });
  }

  render() {
    const {
      devices
    } = this.state;

    return (
    <div>
      <PageHeader>User Management 
      </PageHeader>
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

      <PageHeader>Device Management 
        <small> Medical devices</small>
      </PageHeader>

      <div style={{textAlign: 'center'}}>
        <Well>
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.devices[0] ? this.state.devices[0].name : ''}</td>
            <td>{this.state.devices[0] ? this.state.devices[0].description : ''}</td>
            <td>
            <ButtonGroup>
              <Button onClick={this.onChangeItem}>Valid?</Button>
            </ButtonGroup>              
            </td>
          </tr>        
        </tbody>
      </Table>
      </Well>
      </div>
    </div>
    );
  }
}
