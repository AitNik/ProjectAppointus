import React from 'react';
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, Col, Form, Row, Card} from 'react-bootstrap'

const CategoryOptions = [
  { key: 'Select Function', value: '' },
  { key: 'Category 1', value: 'category1' },
  { key: 'Category 2', value: 'category2' },
  { key: 'Category 3', value: 'category3' },

]
const BookNow = () => {
    

  const formValidationSchema = Yup.object({
        name: Yup.string().required('Required'),
        mobile: Yup.string()
                .required('Required')
                .matches(/^[0-9]+$/, "Must be only digits")
                .min(10, 'Must be exactly 10 digits')
                .max(10, 'Must be exactly 10 digits'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        category: Yup.string().required('Required'),
        details: Yup.string().required('Required')
    })

  const formikForm = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      email: '',
      category: '',
      details: ''
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
        console.log("BookNow form Submitted")
      }
  })

  return (
    <>
        <br/>
        <Card className="w-25 mx-auto rounded-lg">
            <Card.Body>
                <Card.Title>Booking Form</Card.Title>
                  <Form noValidate onSubmit={formikForm.handleSubmit} className="mt-4">
                    <Row>
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
                    <br/><Row>
                        <Col>
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                        as="select"
                        name="category"
                        value={formikForm.values.category}
                        onChange={(e) => {
                          formikForm.handleChange(e)     
                        }}
                        isValid={
                          formikForm.touched.category &&
                          !formikForm.errors.category
                        }
                        isInvalid={!!formikForm.errors.category}
                        >
                          {CategoryOptions.map((option) => {
                            return (
                              <option key={option.value} value={option.value}>
                                {option.key}
                              </option>
                            )
                          })}
                        </Form.Control>
                        </Col>
                    </Row>
                    <br/><Row>
                        <Col>
                        <Form.Label>Details</Form.Label>
                        <Form.Control
                        as="textarea" rows={3}
                        name="details"
                        value={formikForm.values.details}
                        onChange={formikForm.handleChange}
                        isValid={
                            formikForm.touched.details && !formikForm.errors.details
                        }
                        isInvalid={!!formikForm.errors.details}
                        />
                        <Form.Control.Feedback type="invalid">
                        {formikForm.errors.details}
                        </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col className="d-flex justify-content-end">
                        <Button className="font-bold" type="submit"
                            onClick={() => {
                                    console.log("BookNow button pressed")
                                    // formikForm.validateForm()
                        }}>
                            Signup
                        </Button>
                        </Col>
                    </Row>
                  </Form>
                <Card.Text> 
                Already booked? <br/>Go to
                <Card.Link href="#"> My Bookings</Card.Link>
                </Card.Text>
            </Card.Body>
        </Card>
        <br/>
    </>
  );
}

export default BookNow;