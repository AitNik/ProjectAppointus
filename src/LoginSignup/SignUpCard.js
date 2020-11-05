import React from 'react';
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, Col, Form, Row, Card , Nav , Navbar} from 'react-bootstrap'



const SignupCard = () => {
    

  const formValidationSchema = Yup.object({
        userName: Yup.string()
            .required('Required')
            .min(5, 'Too Short!')
            .max(25, 'Too Long!'),
        name: Yup.string().required('Required'),
        mobile: Yup.string()
                .required('Required')
                .matches(/^[0-9]+$/, "Must be only digits")
                .min(10, 'Must be exactly 10 digits')
                .max(10, 'Must be exactly 10 digits'),
        email: Yup.string()
            .required('Required')
            .email('Invalid email'),
        password: Yup.string()
            .required('Required')
            .min(8, 'Too Short!')
            .max(30, 'Too Long!'),
    })

  const formikForm = useFormik({
    initialValues: {
      userName: '',
      name: '',
      mobile: '',
      email: '',
      password: ''
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
        console.log("Signup form Submitted")
      }
  })

  return (
    <>
        <Card className="w-25 mx-auto rounded-lg">
            <Card.Body>
                <Card.Title>Sign Up</Card.Title>
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
                    <br/><Row>
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
                        isInvalid={!!formikForm.errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                        {formikForm.errors.name}
                        </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <br/><Row>
                        <Col>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                        type="number"
                        name="mobile"
                        value={formikForm.values.mobile}
                        onChange={formikForm.handleChange}
                        isValid={
                            formikForm.touched.mobile && !formikForm.errors.mobile
                        }
                        isInvalid={!!formikForm.errors.mobile}
                        />
                        <Form.Control.Feedback type="invalid">
                        {formikForm.errors.mobile}
                        </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <br/><Row>
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
                    <br/>
                    <Row>
                        <Col>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        name="password"
                        value={formikForm.values.password}
                        onChange={formikForm.handleChange}
                        isValid={
                            formikForm.touched.password && !formikForm.errors.password
                        }
                        isInvalid={!!formikForm.errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                        {formikForm.errors.password}
                        </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col className="d-flex justify-content-end">
                        <Button className="font-bold" type="submit"
                            onClick={() => {
                                    console.log("Signup button pressed")
                                    // formikForm.validateForm()
                        }}>
                            Submit
                        </Button>
                        </Col>
                    </Row>
                </Form>
                <Card.Text> 
                Already registered? 
                <Card.Link href='/login'> Login</Card.Link>
                </Card.Text>
            </Card.Body>
        </Card>
    </>
  );
}

export default SignupCard;