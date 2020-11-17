import React from 'react';
import "./App.scss";
import AppNavbar from './components/AppNavbar';
import { BrowserRouter as Router, Switch, Route, Redirect  } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './LoginSignup/Login'
import Signup from './LoginSignup/Signup'
import BookNow from './components/BookNow/BookNow'
import HomePage from './components/HomePage/HomePage'
import Client from './components/Client/Client'
import MyBookings from './components/MyBookings/MyBookings'

function App(props) {

  const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
            <Route
                {...rest}
                render={prop => {
                    if(props.logged_in){
                        return <Component {...prop} />
                    } 
                    else{
                        return <Redirect to='/home' />
                    }
                }}
            />
    )
  }

  return (
    <Router>
          <AppNavbar className="navbar" />
      <div className="main">
      
      
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/home' component={HomePage} />
          <ProtectedRoute exact path='/booknow' component={BookNow} />
          <Route exact path='/client' component={Client} />
          <ProtectedRoute exact path='/mybookings' component={MyBookings} />

          <Route path='*'>
              <Redirect to='/home' />
          </Route> 
        </Switch>
      
      </div>
      </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    logged_in: state.login.logged_in
  };
};

export default connect(mapStateToProps)(App);


// <Navbar bg="dark" variant="dark">
//         <Navbar.Brand href="#home">Appointus</Navbar.Brand>
//         <Nav className="mr-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#features">Book Now</Nav.Link>
//           <Nav.Link href="#pricing">My Bookings</Nav.Link>
//         </Nav>
//       <Button variant="outline-info">Login</Button>
//       </Navbar>
