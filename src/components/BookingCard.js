import React from 'react';
// import { Formik, useFormik } from 'formik'
// import * as Yup from 'yup'
import {  Card, Accordion} from 'react-bootstrap'
// import { Nav, Navbar, FormControl, NavDropdown } from 'react-bootstrap';



const BookingCard = (props) => {



  return (
    <>
        {/* <Card style={{ minWidth:'14rem', maxWidth: '18rem' }} className="mx-auto mt-2 mb-2 ml-1 mr-1">
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card> */}

        <Accordion defaultActiveKey="1">
        <Card style={{ minWidth:'14rem', maxWidth: '18rem' }} className="mx-auto mt-2 mb-2 ml-1 mr-1">
            <Accordion.Toggle as={Card.Header} eventKey="0">
            {props.data.category} {props.data.treatment?"(Upcoming)":"(Expired)"}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>Running token: {props.data.doctor_status}</p>
              <p>Your token: {props.data.your_status}</p>
              <p>Issue: {props.data.issue}</p>
              <p>Patient Name: {props.data.name}</p>
              <p>Phone No: {props.data.phone_no}</p>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
    </>
  );
}

export default BookingCard;