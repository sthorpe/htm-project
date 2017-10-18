import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Product from './product';
import About from './about';
import Contact from './contact';
import Login from './login';
import Logout from './logout';
import Signup from './signup';
import Search from './search';
import Admin from './admin';
import Test from './test';
import Devices from './devices';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/product' component={Product}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/login' component={Login}/>
      <Route path='/logout' component={Logout}/>
      <Route path='/devices' component={Devices}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/search' component={Search}/>
      <Route path='/admin' component={Admin}/>
      <Route path='/test' component={Test}/>
    </Switch>
  </main>
)

export default Main
