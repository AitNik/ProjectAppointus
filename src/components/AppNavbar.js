import React from 'react';
// import './AppNavbar.scss';
import { Nav, Navbar, Button, Form, FormControl, NavDropdown } from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom'

function AppNavbar() {
  return (
    <div >
     {/* <p>Hi! This is AppNavbar component</p> */}
        <Row>
          <Router>
          <Link to='/loginsignup'>
            <Button variant="outline-primary">loginsignup</Button>
        </Link>

        <Link to='/home'>
            <Button variant="outline-primary">home</Button>
        </Link>

        <Link to='/bookhere'>
            <Button variant="outline-primary">bookhere</Button>
        </Link>

        <Link to='/client'>
            <Button variant="outline-primary">client</Button>
        </Link>

        <Link to='/mybookings'>
            <Button variant="outline-primary">mybookings</Button>
        </Link>
          </Router>
        </Row>
    </div>
  );
}

export default AppNavbar;
