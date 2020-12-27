import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import {DJANGO_SERVER_ADDRESS} from '../../server'
import axios from 'axios'
import BookingCard from "../BookingCard"

function MyBooking() {

  const token = localStorage.getItem("projecttokenUsername");
  const [booked,setBooked] = useState([
    {
        "name": "pawan",
        "email": "a@gmail.com",
        "phone_no": "1234567890",
        "aadhar_card": "123443211234",
        "category": "dentist",
        "issue": "tooth decay",
        "your_status": 1,
        "doctor_status": 1,
        "treatment": true
    }
]);
  
  useEffect(() => {
    var data = JSON.stringify({
        "username": token
    });

    var config = {
        method: 'post',
        url: `${DJANGO_SERVER_ADDRESS}/get_bookings/`,
        headers:{'Content-Type':'application/json'},
        data : data
    };
    
    axios(config)
    .then((resp) => {
      setBooked(resp.data);
    })
    .catch((error) => {
        console.error(error);
    })
  }, [])

  return (
    <>
        <Row className="ml-0 mr-0 mt-5"><h3 className="mx-auto"><u>Your Bookings</u></h3></Row>
        <Row className="d-flex justify-content-around ml-1 mr-1 mt-4">

          {
            booked.length===0 ?
              <h4>NO DATA PRESENT FOR USER</h4> :
            booked.map((data,ind) => {
              return(
                <Col key={ind} xs={12} sm={6} md={4} xl={3}>
                  <BookingCard data={data} />
                </Col>
              )
            })
          }
          {/* <Col xs={12} sm={6} md={4} xl={3}>
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
          </Col> */}
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