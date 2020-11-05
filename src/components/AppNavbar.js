import React from 'react';
import brandIcon from "../assets/Images/brandIcon.png"
import { Nav, Navbar, Button, Form, FormControl, NavDropdown } from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom'

function AppNavbar() {
  return (
  <>
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" style={{ zIndex: '1024!important' }}>
        <Navbar.Brand href="/home" className={'mr-3'}>
          <img
          src={brandIcon}
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
          />
          Appointes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href='/home'>Home</Nav.Link>
          {/* <Nav.Link href='/client'>Client</Nav.Link> */}
          <Nav.Link href='/bookhere'>Book Now</Nav.Link>
          <Nav.Link href='/mybookings'>My Bookings</Nav.Link>
        </Nav>
        <Nav.Link href='/login' className="pl-0">Login / Signup</Nav.Link>
        </Navbar.Collapse>
    </Navbar>
    <br/>
  </>
    // <div >
    //  {/* <p>Hi! This is AppNavbar component</p> */}
    //     <Row>
    //       <Router>
    //       <Link to='/loginsignup'>
    //         <Button variant="outline-primary">loginsignup</Button>
    //     </Link>

    //     <Link to='/home'>
    //         <Button variant="outline-primary">home</Button>
    //     </Link>

    //     <Link to='/bookhere'>
    //         <Button variant="outline-primary">bookhere</Button>
    //     </Link>

    //     <Link to='/client'>
    //         <Button variant="outline-primary">client</Button>
    //     </Link>

    //     <Link to='/mybookings'>
    //         <Button variant="outline-primary">mybookings</Button>
    //     </Link>
    //       </Router>
    //     </Row>
    // </div>
  );
}

export default AppNavbar;
