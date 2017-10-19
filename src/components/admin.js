import React from 'react';
import { ButtonGroup, Button, PageHeader, Well, Table, Nav, Navbar, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import UserProfile from './user';
import _ from 'lodash';

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      devices: []
    };
    this.enableDevice = this.enableDevice.bind(this);
    this.getListOfDevices = this.getListOfDevices.bind(this);
    this.onChangeItem = this.onChangeItem.bind(this);
  }
  componentDidMount() {
    let session = localStorage.getItem('token');
    if (session) {
      this.getListOfDevices();
    }else{
      window.location = '/login';
    }
  }

  onChangeItem() {
    this.setState({[event.target.name]: event.target.value});
  }

  enableDevice(deviceId, status) {
    let targetUrl = 'http://127.0.0.1:8081/api/validate-device';
    fetch(targetUrl, { method: 'POST', body: JSON.stringify({"deviceId": deviceId, "status": status}), headers: {"Content-Type": "application/json"},}).then((responseText) => {
      return responseText.json();
    });
    window.location = '/admin';
  }

  getListOfDevices() {
    let targetUrl = 'http://127.0.0.1:8081/api/devices';
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
    
    const DeviceTable = () => {
      const device = devices.map(( device, index ) => (
        <tr key={ index }>
          <td>{ device ? device.name : '' }</td>
          <td>{ device ? device.description : '' }</td>
          <td>
            {
              device.status ? 
              <Button bsStyle='success' onClick={ () => this.enableDevice(device._id, 'false')}>Invalidate</Button> 
              :
              <Button onClick={ () => this.enableDevice(device._id, 'true')}>Validate</Button>
            }
          </td>
        </tr>   
      ))
      return (<tbody>{device}</tbody>)
    }

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
        <DeviceTable />     
      </Table>
      </Well>
      </div>
    </div>
    );
  }
}
