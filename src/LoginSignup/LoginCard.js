import React from 'react';
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, Col, Form, Row, Card} from 'react-bootstrap'



const Login = () => {

  const formValidationSchema = Yup.object({
    userName: Yup.string()
        .min(5, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Required'),
        password: Yup.string().required('Required')
    })

  const formikForm = useFormik({
    initialValues: {
      userName: '',
      password: ''
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
        console.log("Login form Submitted")
      }
  })

  return (
    <>
        <Card>
            <Card.Body>
                <Card.Title>Login</Card.Title>
                <br/>
                <Form noValidate onSubmit={formikForm.handleSubmit}>
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
                        <Button type="submit"
                            onClick={() => {
                                    console.log("Login button pressed")
                                    // formikForm.validateForm()
                        }}>
                            Submit
                        </Button>
                        </Col>
                    </Row>
                </Form>
                <br/>
                <Card.Text> 
                New user?  
                <Card.Link href="#"> Signup now</Card.Link>
                </Card.Text>
            </Card.Body>
        </Card>
    </>
  );
}

export default Login;