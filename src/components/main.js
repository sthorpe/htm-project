import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Product from './product';
import About from './about';
import Contact from './contact';
import Login from './login';
import Signup from './signup';
import Search from './search';
import Test from './test';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/product' component={Product}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/search' component={Search}/>
      <Route path='/test' component={Test}/>
    </Switch>
  </main>
)

export default Main
