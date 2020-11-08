import React from "react";
import Carousel from "react-bootstrap/Carousel";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import './homepage.scss'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, Col, Form, Row, Card, CardGroup} from 'react-bootstrap'


function HomePage() {

  const formValidationSchema = Yup.object({
    email: Yup.string()
        .required('Required')
        .email('Invalid email'),
    yourMessage: Yup.string()
        .required('Required')
  })

  const formikForm = useFormik({
  initialValues: {
    email: '',
    yourMessage: ''
  },
  validationSchema: formValidationSchema,
  onSubmit: (values) => {
      console.log("Signup form Submitted")
    }
  })

  return (
    <div>
      {/*search bar */}
      <InputGroup
        className="mb-3"
        style={{ width: "25rem", marginLeft: "5rem", marginTop: "2rem" }}
      >
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Location</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Locations Near Me"
          aria-label="Locations Near Me"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      {/*react carousel*/}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./Doctor1.PNG")}
            style={{ width: "20rem", height: "30rem" }}
          ></img>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./Capture2.PNG")}
            style={{ width: "20rem", height: "30rem" }}
          ></img>
        </Carousel.Item>
      </Carousel>

      <hr
        style={{ margin: "6rem", height: 0.8, backgroundColor: "#0bb7a7" }}
      ></hr>

      {/*find doctors card*/}
      <CardGroup style={{ margin: "1rem" }}>
        <Card
          style={{
            margin: "1rem",
            width: "20rem",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Card.Img
            variant="left"
            src={require("./7.jpg")}
            style={{ width: "13rem", height: "20rem" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{
            margin: "1rem",
            width: "20rem",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Card.Img
            variant="left"
            src={require("./7.jpg")}
            style={{ width: "13rem", height: "20rem" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <hr
        style={{ margin: "6rem", height: 0.8, backgroundColor: "#0bb7a7" }}
      ></hr>
      {/*book and appointment*/}
      <div style={{ textAlign: "left", marginLeft: "7rem" }}>
        <h3>Book an appointment for an in-clinic consultation</h3>
        <p>Find experienced doctors across all specialties</p>
      </div>

      <CardGroup style={{margin:"1rem"}}>
        <Card>
          <Card.Img variant="top" src={require("./dentist.jpg")}/>
          <Card.Body>
            <Card.Title>Dentist</Card.Title>
            <Card.Text>
              Teeth trouble? Schedule a dental checkup now.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("./gyanecologist.jpg")} />
          <Card.Body>
            <Card.Title>Gyanecologist</Card.Title>
            <Card.Text>
              Explore for women's health,pregnancy and infertility treatments.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("./psyiotherapist.jpg")} />
          <Card.Body>
            <Card.Title>Psyiotherapist</Card.Title>
            <Card.Text>
              Problem with a muscle? Get it trained by a expert psyiotherapist.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("./dietitian.jpg")} />
          <Card.Body>
            <Card.Title>Dietitian/Nutrition</Card.Title>
            <Card.Text>
              Get guidance on eating right, weight management and health nutrition.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("./psychologist.jpg")} />
          <Card.Body>
            <Card.Title>Psychologist</Card.Title>
            <Card.Text>
              Have some stress and mental problems? Get it treated with the expert psychologist.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <hr
        style={{ margin: "6rem", height: 0.8, backgroundColor: "#0bb7a7" }}
      ></hr>

      {/*carousel */}
      <Carousel style={{ color: "black", height: "30rem" }}>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "4rem",
            }}
          >
            <h4 style={{ color: "black", width: "30rem" }}>
              Very easy to use. Allows quick and easy search with speedy
              booking.
            </h4>
            <p>Nikhil</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "4rem",
            }}
          >
            <h4 style={{ color: "black", width: "30rem" }}>
              Very easy to use and maintain history. Thanks Appointus for making
              it simple.
            </h4>
            <p>Ashish</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "4rem",
            }}
          >
            <h4 style={{ color: "black", width: "30rem" }}>
              Make it simpler to give advice to the patients. The app is easier
              for doctor to maintain also.
            </h4>
            <p>Pushpa</p>
          </div>
        </Carousel.Item>
      </Carousel>
      {/*about */}
      {/*Logo*/}
      <hr
        style={{ margin: "6rem", height: 0.8, backgroundColor: "#0bb7a7" }}
      ></hr>
      <footer style={{display:"flex",justifyContent:"space-around"}}>
            <img src={require("./appointus.png")}/>
            <div>
              <h1>For Any Queries</h1>
              <Form noValidate onSubmit={formikForm.handleSubmit} className="mt-4">
                    <Row>
                        <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        type="email"
                        name="email"
                        value={formikForm.values.email}
                        onChange={formikForm.handleChange}
                        isValid={
                            formikForm.touched.email && !formikForm.errors.email
                        }
                        isInvalid={!!formikForm.errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                        {formikForm.errors.email}
                        </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <br/><Row>
                        <Col>
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control
                        as="textarea" rows={3}
                        name="yourMessage"
                        value={formikForm.values.yourMessage}
                        onChange={formikForm.handleChange}
                        isValid={
                            formikForm.touched.yourMessage && !formikForm.errors.yourMessage
                        }
                        isInvalid={!!formikForm.errors.yourMessage}
                        />
                        <Form.Control.Feedback type="invalid">
                        {formikForm.errors.yourMessage}
                        </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col className="d-flex justify-content-end">
                        <Button className="font-bold" type="submit"
                            onClick={() => {
                                    console.log("Booking button pressed")
                                    // formikForm.validateForm()
                        }}>
                            Submit
                        </Button>
                        </Col>
                    </Row>
                  </Form>
              
            </div>
      </footer>
    </div>
  );
}

export default HomePage;
