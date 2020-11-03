import React from 'react';
import AppNavbar from './components/AppNavbar';
import {Row,Col,Button,Form} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link, Redirect  } from 'react-router-dom'
import Login from './login/login'
import BookHere from './components/BookHere/BookHere'
import HomePage from './components/HomePage/HomePage'
import Client from './components/Client/Client'
import MyBookings from './components/MyBookings/MyBookings'

function App() {
  return (
    <div >
      <AppNavbar />
      <Router>
        <Switch>
          <Route exact path='/' >
              <Redirect to='/home' />
          </Route>
          <Route exact path='/loginsignup' component={Login} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/bookhere' component={BookHere} />
          <Route exact path='/client' component={Client} />
          <Route exact path='/mybookings' component={MyBookings} />

          <Route path='*'>
              <Redirect to='/home' />
          </Route> 
        </Switch>
      </Router>
      <Login />
    </div>
  );
}

export default App;
