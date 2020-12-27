import React from 'react';
import brandIcon from "../assets/Images/brandIcon.png"
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux'

function AppNavbar(props) {
  return (
  <>
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" style={{ zIndex: '1024!important',color:"white" }}>
        <Navbar.Brand href="/home" className={'mr-3'}>
          <img
            alt=""
            src={brandIcon}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
          />
            Appointus
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="mr-4">
          <Nav className="ml-auto mr-2">
            {/* <Nav.Link href='/client'>Client</Nav.Link> */}
            {/* <Nav.Link href='/home' className="mr-2 ml-2">Home</Nav.Link> */}
            {
              props.logged_in ? 
              (
                <>
                  <Nav.Link href='/booknow' className="mr-2 ml-2">Book Now</Nav.Link>
                  <Nav.Link href='/mybookings' className="mr-2 ml-2">My Bookings</Nav.Link>
                </>
              ) : null
            }
            <Nav.Link href='/aboutus' className="mr-2 ml-2">About us</Nav.Link>
            <NavDropdown title="User Name"  variant="dark" bg="dark">
              <NavDropdown.Item href="#action/3.1">Action 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Action 2</NavDropdown.Item>
            </NavDropdown>            
            
          </Nav>
          {
            props.logged_in ? 
              <div className="pl-0" styles="max-width: 15vw">{props.name}</div> :
              <Nav.Link href='/login' className="pl-0">Login / Signup</Nav.Link>
          }
         
        </Navbar.Collapse>
    </Navbar>
    <br/>
  </>
  );
}

const mapStateToProps = (state) => {
  return {
    logged_in: state.login.logged_in,
    name: state.login.name
  };
};

export default connect(mapStateToProps)(AppNavbar);