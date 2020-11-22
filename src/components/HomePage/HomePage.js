import React from "react";
import Carousel from "react-bootstrap/Carousel";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./homepage.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Col, Form, Row, Card, CardGroup } from "react-bootstrap";
// import { BsCircle } from "react-icons/bs";
function HomePage() {
  const formValidationSchema = Yup.object({
    email: Yup.string().required("Required").email("Invalid email"),
    yourMessage: Yup.string().required("Required"),
  });

  const formikForm = useFormik({
    initialValues: {
      email: "",
      yourMessage: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("Signup form Submitted");
    },
  });

  return (
    <div className="main-body" style={{ backgroundColor: "white" }}>
      <div className="main-entry">
        <div className="data-input">
          {/*search bar */}
          <InputGroup
            style={{ margin: "1rem", width: "30rem", padding: "1rem" }}
          >
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Location</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Locations Near Me"
              aria-label="Locations Near Me"
              aria-describedby="basic-addon1"
              // style={{padding:"1rem"}}
            />
          </InputGroup>
          <InputGroup
            style={{ margin: "1rem", width: "30rem", padding: "1rem" }}
          >
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Hospitals</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Hospitals Near me"
              aria-label="Hospitals Near me"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <h2>We make sure the heroes are available to you</h2>
        </div>
        <div className="image-part">
          <img
            alt=""
            src={require("./8.jpg")}
            style={{
              width: "22rem",
              height: "30rem",
              margin: "1rem",
              float: "right",
            }}
          ></img>
        </div>
      </div>
      {/*react carousel
      <Carousel style={{ marginTop: "1rem" }}>
        <Carousel.Item>
          <img alt=""
            className="d-block w-100"
            src={require("./Doctor1.PNG")}
            style={{ width: "20rem", height: "30rem" }}
          ></img>
        </Carousel.Item>
        <Carousel.Item>
          <img alt=""
            className="d-block w-100"
            src={require("./Capture2.PNG")}
            style={{ width: "20rem", height: "30rem" }}
          ></img>
            </Carousel.Item>
      </Carousel>
      */}
      <hr
        style={{ margin: "6rem", height: 0.8, backgroundColor: "#0bb7a7" }}
      ></hr>

      {/*find doctors card*/}
      <CardGroup style={{ margin: "1rem" }}>
        <Card
          style={{
            margin: "1rem",
            width: "10rem",
            display: "flex",
            flexDirection: "row",
            borderRadius: "1rem",
          }}
        >
          <Card.Img
            variant="left"
            src={require("./7.jpg")}
            style={{
              width: "13rem",
              height: "18rem",
              borderTopLeftRadius: "1rem",
              borderBottomLeftRadius: "1rem",
            }}
          />
          <Card.Body>
            <Card.Title>Find Doctors Near you</Card.Title>
            <Card.Text>
              Select Preferred doctor and book time slot that fits best for you.
            </Card.Text>
            <Button>Start Consulting</Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            margin: "1rem",
            width: "10rem",
            display: "flex",
            flexDirection: "row",
            borderRadius: "1rem",
          }}
        >
          <Card.Img
            variant="left"
            src={require("./7.jpg")}
            style={{
              width: "13rem",
              height: "18rem",
              borderTopLeftRadius: "1rem",
              borderBottomLeftRadius: "1rem",
            }}
          />
          <Card.Body>
            <Card.Title>Meet Doctors Online</Card.Title>
            <Card.Text>
              Tell us your health concern and we will assign a top doctor to
              you.
            </Card.Text>
            <Button>Start Consulting</Button>
          </Card.Body>
        </Card>
      </CardGroup>

      <hr
        style={{ margin: "6rem", height: 0.8, backgroundColor: "#0bb7a7" }}
      ></hr>
      {/*book and appointment*/}
      <div style={{ textAlign: "left", marginLeft: "7rem" }}>
        <h1>Book an appointment for an in-clinic consultation</h1>
        <p style={{ fontSize: "1.5rem" }}>
          Find experienced doctors across all specialties
        </p>
      </div>

      <CardGroup className="appointment" style={{ margin: "1rem" }}>
        <Card>
          <Card.Img variant="top" src={require("./dentist.jpg")} />
          <Card.Body>
            <Card.Title>Dentist</Card.Title>
            <Card.Text>Teeth trouble? Schedule a dental checkup now.</Card.Text>
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
              Get guidance on eating right, weight management and health
              nutrition.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("./psychologist.jpg")} />
          <Card.Body>
            <Card.Title>Psychologist</Card.Title>
            <Card.Text>
              Have some stress and mental problems? Get it treated with the
              expert psychologist.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <hr
        style={{ margin: "6rem", height: 0.8, backgroundColor: "#0bb7a7" }}
      ></hr>

      {/*carousel */}
      <Carousel style={{ color: "black", height: "15rem" }}>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
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
            }}
          >
            <h4 style={{ color: "black", width: "30rem" }}>
              Very easy to maintain medical history. Thanks Appointus for making
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
        style={{
          marginBottom: "2rem",
          height: 0.8,
          backgroundColor: "#0bb7a7",
        }}
      ></hr>
      <footer
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      ><div>
      <h1>For Any Queries</h1>
      <Form
        noValidate
        onSubmit={formikForm.handleSubmit}
        className="mt-4"
        id="contactForm"
      >
        <Row>
          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formikForm.values.email}
              onChange={formikForm.handleChange}
              isValid={formikForm.touched.email && !formikForm.errors.email}
              isInvalid={
                formikForm.touched.email && !!formikForm.errors.email
              }
            />
            <Form.Control.Feedback type="invalid">
              {formikForm.errors.email}
            </Form.Control.Feedback>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="yourMessage"
              value={formikForm.values.yourMessage}
              onChange={formikForm.handleChange}
              isValid={
                formikForm.touched.yourMessage &&
                !formikForm.errors.yourMessage
              }
              isInvalid={
                formikForm.touched.yourMessage &&
                !!formikForm.errors.yourMessage
              }
            />
            <Form.Control.Feedback type="invalid">
              {formikForm.errors.yourMessage}
            </Form.Control.Feedback>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="d-flex justify-content-end">
            <Button className="font-bold" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
      </div>
        <img
          alt=""
          src={require("./appointus.png")}
          style={{ padding: "3rem" }}
        />
      </footer>
    </div>
  );
}

export default HomePage;
