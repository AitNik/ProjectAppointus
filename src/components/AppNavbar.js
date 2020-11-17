import React from 'react';
import brandIcon from "../assets/Images/brandIcon.png"
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function AppNavbar(props) {
  return (
  <>
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" style={{ zIndex: '1024!important' }}>
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
                  <Link to='/booknow' className="mr-2 ml-2">Book Now</Link>
                  <Link to='/mybookings' className="mr-2 ml-2">My Bookings</Link>
                </>
              ) : null
            }
            <Link to='/aboutus' className="mr-2 ml-2">About us</Link>
          </Nav>
          {
            props.logged_in ? 
              <div className="pl-0">{props.name}</div> :
              <Link to='/login' className="pl-0">Login / Signup</Link>
          }
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

const mapStateToProps = (state) => {
  return {
    logged_in: state.login.logged_in,
    name: state.login.name
  };
};

export default connect(mapStateToProps)(AppNavbar);