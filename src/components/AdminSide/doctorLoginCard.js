import React, { useState } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, Col, Form, Row, Card} from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import {DJANGO_SERVER_ADDRESS} from '../server'
import axios from 'axios'
import { connect} from 'react-redux'


const LoginCard = (props) => {

    const [varia,setVaria] = useState('hello');

  const formValidationSchema = Yup.object().shape({
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
    onSubmit: (values) => {
        console.log("Login form Submitted", values)
        // validateUser();
      }
  })

//   const validateUser = () => {
//     var data = JSON.stringify({
//         "username": formikForm.values.userName,
//         "password": formikForm.values.userPassword,
//         "adhaarcard": "12353412344321"
//     });

//     var config = {
//         method: 'post',
//         url: `${DJANGO_SERVER_ADDRESS}/login/`,
//         headers:{'Content-Type':'application/json'},
//         data : data
//     };
    
//     axios(config)
//     .then((resp) => {
//         console.log(resp.data);
//         if(resp.data===1){
//             localStorage.setItem("projecttoken","qwertyuiopqwertyuiop");
//             localStorage.setItem("projecttokenUsername",formikForm.values.userName);
//             props.dispatch({
//                 type: "LOGIN"
//             },
//                 setVaria("Hello1")
//             );

//         }
//         else if(resp.data===0){
//             alert("Invalid Password")
//         }
//     })
//     .catch((error) => {
//         console.error(error);
//         alert("Login Failed")
//         localStorage.clear("projecttoken","qwertyuiopqwertyuiop");
//     })
  }

  return (
    // varia==="Hello1" ? 
    // <Redirect to="/login" />  :
    <>
        <Card className="mx-auto rounded-lg" style={{ minWidth:'12rem', maxWidth: '25rem',width:'25rem',height:"25rem" }}>
            <Card.Body>
                <Card.Title>Doctor Login</Card.Title>
                <Form noValidate onSubmit={formikForm.handleSubmit} className="mt-4">
                    <Row>
                        <Col>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                        type="text"
                        name="userName"
                        value={formikForm.values.userName}
                        // onBlur={formikForm.handleBlur}
                        onChange={formikForm.handleChange}
                        isValid={
                            formikForm.touched.userName && !formikForm.errors.userName
                        }
                        isInvalid={formikForm.touched.userName && !!formikForm.errors.userName}
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
                        // onBlur={formikForm.handleBlur}
                        onChange={formikForm.handleChange}
                        isValid={
                            formikForm.touched.userPassword && !formikForm.errors.userPassword
                        }
                        isInvalid={formikForm.touched.userPassword && !!formikForm.errors.userPassword}
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
                        >
                            Submit
                        </Button>
                        </Col>
                    </Row>
                </Form>
                <Card.Text> 
                New user?  
                <Link to='/'> Sign Up</Link>
                </Card.Text>
    
            </Card.Body>
        </Card>
    </>
  );
// }

// const mapStateToProps = (state) => {
//     return {
//       logged_in: state.login.logged_in
//     };
//   };
  
//   export default connect(mapStateToProps)(doctorLoginCard);
export default doctorLoginCard;
