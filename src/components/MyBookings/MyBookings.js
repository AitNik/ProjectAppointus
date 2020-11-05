import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BookingCard from "../BookingCard"

function MyBooking() {
  return (
    <>
        <Row className="ml-0 mr-0 mt-5"><h3 className="mx-auto"><u>Your Bookings</u></h3></Row>
        <Row className="d-flex justify-content-around ml-1 mr-1 mt-4">
          <Col xs={12} sm={6} md={4} xl={3}>
          <BookingCard />
          </Col>
          <Col xs={12} sm={6} md={4} xl={3}>
          <BookingCard />
          </Col>
          <Col xs={12} sm={6} md={4} xl={3}>
          <BookingCard />
          </Col>
          <Col xs={12} sm={6} md={4} xl={3}>
          <BookingCard />
          </Col>
          <Col xs={12} sm={6} md={4} xl={3}>
          <BookingCard />
          </Col>
          <Col xs={12} sm={6} md={4} xl={3}>
          <BookingCard />
          </Col>
          <Col xs={12} sm={6} md={4} xl={3}>
          <BookingCard />
          </Col>
          <Col xs={12} sm={6} md={4} xl={3}>
          <BookingCard />
          </Col>
          <Col xs={12} sm={6} md={4} xl={3}>
          <BookingCard />
          </Col>
          <Col xs={12} sm={6} md={4} xl={3}>
          <BookingCard />
          </Col>
          <Col xs={12} sm={6} md={4} xl={3}>
          <BookingCard />
          </Col>
        </Row>
        {/* <div className="d-flex justify-content-around">
          <BookingCard />             
          <BookingCard />             
          <BookingCard />             
          <BookingCard />             
          <BookingCard />             
        </div> */}
    </>
  );
}

export default MyBooking;