import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SignupCard from './SignUpCard';

function Signup() {
  // Logic for future use
  // const [LoginType, setLoginType] = useState("login")
  return (
    <>
    <br/>
    <Row>
      <Col md={4}>
        <SignupCard />
      </Col>          
    </Row>
    </>
  );
}

export default Signup;