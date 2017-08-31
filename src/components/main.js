import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Product from './product';
import About from './about';
import Contact from './contact';
import Login from './login';
import Signup from './signup';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/product' component={Product}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
    </Switch>
  </main>
)

export default Main
