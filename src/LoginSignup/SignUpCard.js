import React, { useState } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, Col, Form, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {DJANGO_SERVER_ADDRESS} from '../server'
import axios from 'axios'
import {Redirect} from 'react-router-dom'



const SignupCard = () => {
    
    const [varia,setVaria] = useState('hello');

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
        createUser();
      }
  })

  const createUser = () => {
    var data = JSON.stringify({
        "username": formikForm.values.userName,
        "name": formikForm.values.name,
        "mobile_no": formikForm.values.mobile,
        "email": formikForm.values.email,
        "password": formikForm.values.password,
        "adhaarcard": "12353412344321"
    });

    var config = {
        method: 'post',
        url: `${DJANGO_SERVER_ADDRESS}/user_register/`,
        headers:{'Content-Type':'application/json'},
        data : data
    };
    
    axios(config)
    .then((resp) => {
        console.log(resp);
        if(resp===1){
            alert("User Created Successfully");
            setVaria("Hello1")
        }
        else if(resp===0){
            alert("Failed to create user");
        }
    })
    .catch((error) => {
        console.error("errrrr",error);
    })
  }

  
  return (
    varia==="Hello1" ? 
    <Redirect to="/login" />  :
    <>
    {console.log("thfk",varia)}
        <Card className="mx-auto rounded-lg" style={{ minWidth:'12rem', maxWidth: '30rem',width:"25rem" }}>
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
                        isInvalid={ formikForm.touched.userName && !!formikForm.errors.userName}
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
                        isInvalid={formikForm.touched.name && !!formikForm.errors.name}
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
                        isInvalid={formikForm.touched.email && !!formikForm.errors.email}
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
                        isInvalid={formikForm.touched.password && !!formikForm.errors.password}
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
                        >
                            Submit
                        </Button>
                        </Col>
                    </Row>
                </Form>
                <Card.Text> 
                    Already registered? 
                    <Link to='/login'> Login</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    </>
  );
}

export default SignupCard;