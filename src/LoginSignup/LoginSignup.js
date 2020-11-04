import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LoginCard from "./LoginCard"
import SignupCard from './SignUpCard';

function Login() {
  // Logic for future use
  // const [LoginType, setLoginType] = useState("login")
  return (
    <>
    <br/>
    <Row>
      <Col md={4}>
        <LoginCard/>
      </Col>
      <Col md={4}>
        <SignupCard/>
      </Col>          
    </Row>
    </>
  );
}

export default Login;