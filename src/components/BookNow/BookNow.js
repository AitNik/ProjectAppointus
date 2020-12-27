import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Link} from 'react-router-dom'
import { Button, Col, Form, Row, Card } from "react-bootstrap";
import {DJANGO_SERVER_ADDRESS} from '../../server'
import axios from 'axios'
import { connect} from 'react-redux'


const CategoryOptions = [
  { key: "Select", value: "" },
  { key: "Dentist", value: "dentist" },
  { key: "Dietition", value: "dietition" },
  { key: "Gynecologist", value: "gynecologist" },
  { key: "Nutritionist", value: "nutritionist" },
  { key: "Psychologist", value: "psychologist" },
  { key: "Physiotherapist", value: "physiotherapist" },
];
const BookNow = () => {
  const formValidationSchema = Yup.object({
    name: Yup.string().required("Required"),
    mobile: Yup.string()
      .required("Required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
    email: Yup.string().email("Invalid email").required("Required"),
    category: Yup.string().required("Required"),
    // details: Yup.string().required("Required"),
  });

  const formikForm = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      category: "",
      details: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("BookNow form Submitted", values);
      bookingForm();
    }
  })

  const token = localStorage.getItem("projecttokenUsername");

const bookingForm = () => {
  var data = JSON.stringify({
      "username": token,
      "name": formikForm.values.name,
      "mobile_no": formikForm.values.mobile,
      "email": formikForm.values.email,
      "aadhar_card": "12353412344321",
      "category": formikForm.values.category,
      "issue": formikForm.values.details
  });

  var config = {
      method: 'post',
      url: `${DJANGO_SERVER_ADDRESS}/booking_in_form/`,
      headers:{'Content-Type':'application/json'},
      data : data
  };
  
  axios(config)
  .then((resp) => {
      console.log(resp);
      if(resp===1){
          alert("Booked");
      }
      else if(resp===0){
          alert("Failed");
      }
  })
  .catch((error) => {
      console.error(error);
      alert("Connection Failed")
  })
}

  return (
    <>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
        <div>
        <img alt="" src={require("./doctor.png")} style={{width:"40rem"}}></img>
        </div>
        <div style={{top:0}}>
          <Card
            className="mx-auto rounded-lg mt-0"
            style={{ minwidth: "12rem", maxWidth: "25rem",width:"23rem" }}
          >
            <Card.Body>
              <Card.Title>Booking Form</Card.Title>
              <Form
                noValidate
                onSubmit={formikForm.handleSubmit}
                className="mt-4"
              >
                <Row className="mt-2">
                  <Col>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formikForm.values.name}
                      onChange={formikForm.handleChange}
                      isValid={
                        formikForm.touched.name && !formikForm.errors.name
                      }
                      isInvalid={formikForm.touched.name && !!formikForm.errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formikForm.errors.name}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                {/* <br /> */}
                <Row className="mt-2">
                  <Col>
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      value={formikForm.values.mobile}
                      onChange={formikForm.handleChange}
                      isValid={
                        formikForm.touched.mobile && !formikForm.errors.mobile
                      }
                      isInvalid={formikForm.touched.mobile && !!formikForm.errors.mobile}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formikForm.errors.mobile}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                {/* <br /> */}
                <Row className="mt-2">
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
                      isInvalid={formikForm.touched.email && !!formikForm.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formikForm.errors.email}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                {/* <br /> */}
                <Row className="mt-2">
                  <Col>
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      as="select"
                      name="category"
                      value={formikForm.values.category}
                      onChange={(e) => {
                        formikForm.handleChange(e);
                      }}
                      isValid={
                        formikForm.touched.category && !formikForm.errors.category
                      }
                      isInvalid={formikForm.touched.category && !!formikForm.errors.category}
                    >
                      {CategoryOptions.map((option) => {
                        return (
                          <option key={option.value} value={option.value}>
                            {option.key}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Col>
                </Row>
                {/* <br /> */}
                <Row className="mt-2">
                  <Col>
                    <Form.Label>Details</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="details"
                      value={formikForm.values.details}
                      onChange={formikForm.handleChange}
                      isValid={
                        formikForm.touched.details && !formikForm.errors.details
                      }
                      isInvalid={formikForm.touched.details && !!formikForm.errors.details}
                      style={{resize : "none"}}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formikForm.errors.details}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col className="d-flex justify-content-end">
                    <Button
                      className="font-bold"
                      type="submit"
                    >
                      Book
                    </Button>
                  </Col>
                </Row>
              </Form>
              <Card.Text>
                Already booked? <br />
                Go to
                <Link to='/mybookings'> My Bookings</Link>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    logged_in: state.login.logged_in
  };
};

export default connect(mapStateToProps)(BookNow);