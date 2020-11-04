import React from 'react';
import "./App.scss";
import AppNavbar from './components/AppNavbar';
import { BrowserRouter as Router, Switch, Route, Link, Redirect  } from 'react-router-dom'
import Login from './LoginSignup/Login'
import Signup from './LoginSignup/Signup'
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
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/bookhere' component={BookHere} />
          <Route exact path='/client' component={Client} />
          <Route exact path='/mybookings' component={MyBookings} />

          <Route path='*'>
              <Redirect to='/home' />
          </Route> 
        </Switch>
      </Router>
      {/* <Login /> */}
    </div>
  );
}

export default App;


// <Navbar bg="dark" variant="dark">
//         <Navbar.Brand href="#home">Appointus</Navbar.Brand>
//         <Nav className="mr-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#features">Book Now</Nav.Link>
//           <Nav.Link href="#pricing">My Bookings</Nav.Link>
//         </Nav>
//       <Button variant="outline-info">Login</Button>
//       </Navbar>
