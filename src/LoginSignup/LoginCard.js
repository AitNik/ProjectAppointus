import React from 'react';
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, Col, Form, Row, Card} from 'react-bootstrap'
import { Nav, Navbar, FormControl, NavDropdown } from 'react-bootstrap';



const LoginCard = () => {

  const formValidationSchema = Yup.object({
    userName: Yup.string()
        .min(5, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Required'),
    userPassword: Yup.string()
        .min(8, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
    })

  const formikForm = useFormik({
    initialValues: {
      userName: '',
      userPassword: ''
    },
    validationSchema: formValidationSchema,
    onSubmit: () => {
        console.log("Login form Submitted")
      }
  })

  return (
    <>
        <Card className="w-25 mx-auto rounded-lg">
            <Card.Body>
                <Card.Title>Login</Card.Title>
                <Form noValidate onSubmit={formikForm.handleSubmit} className="mt-4">
                    <Row>
                        <Col>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                        type="text"
                        name="userName"
                        value={formikForm.values.userName}
                        onChange={formikForm.handleChange}
                        isValid={
                            formikForm.touched.userName && !formikForm.errors.userName
                        }
                        isInvalid={!!formikForm.errors.userName}
                        />
                        <Form.Control.Feedback type="invalid">
                        {formikForm.errors.userName}
                        </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        name="userPassword"
                        value={formikForm.values.userPassword}
                        onChange={formikForm.handleChange}
                        isValid={
                            formikForm.touched.userPassword && !formikForm.errors.userPassword
                        }
                        isInvalid={!!formikForm.errors.userPassword}
                        />
                        <Form.Control.Feedback type="invalid">
                        {formikForm.errors.userPassword}
                        </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col className="d-flex justify-content-end">
                        <Button type="submit"
                            // onClick={() => {
                            //         console.log("Login button pressed")
                            //         // formikForm.validateForm()
                            //     }}
                        >
                            Submit
                        </Button>
                        </Col>
                    </Row>
                </Form>
                <Card.Text> 
                New user?  
                <Card.Link href='/signup'> Sign Up</Card.Link>
                </Card.Text>
    
            </Card.Body>
        </Card>
    </>
  );
}

export default LoginCard;