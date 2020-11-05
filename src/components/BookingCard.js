import React from 'react';
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, Col, Form, Row, Card, Accordion} from 'react-bootstrap'
import { Nav, Navbar, FormControl, NavDropdown } from 'react-bootstrap';



const BookingCard = () => {



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
            Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
    </>
  );
}

export default BookingCard;