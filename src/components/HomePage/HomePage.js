import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./homepage.scss";
function HomePage() {
  return (
    <div>
      <div className="main-entry" style={{backgroundColor:"#0bb7a7"}}>
        <div className="data-input">
          {/*search bar */}
          <InputGroup style={{ margin: "1rem",width:"30rem" }}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Location</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Locations Near Me"
              aria-label="Locations Near Me"
              aria-describedby="basic-addon1"
              
            />
          </InputGroup>
          <InputGroup style={{ margin: "1rem",width:"30rem" }}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Hospitals</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Hospitals Near me"
              aria-label="Hospitals Near me"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <h5>We make sure the heroes are available to you.</h5>
        </div>
        <div className="image-part">
          <img src={require("./8.jpg")} style={{ width: "22rem", height: "30rem",margin:"1rem",float:"right" }}></img>
        </div>
      </div>
      {/*react carousel*/}
      <Carousel style={{ marginTop: "1rem" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./Doctor1.PNG")}
            style={{ width: "20rem", height: "30rem" }}
          ></img>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./Capture2.PNG")}
            style={{ width: "20rem", height: "30rem" }}
          ></img>
        </Carousel.Item>
      </Carousel>

      <hr
        style={{ margin: "6rem", height: 0.8, backgroundColor: "#0bb7a7" }}
      ></hr>

      {/*find doctors card*/}
      <CardGroup style={{ margin: "1rem" }}>
        <Card
          style={{
            margin: "1rem",
            width: "20rem",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Card.Img
            variant="left"
            src={require("./7.jpg")}
            style={{ width: "13rem", height: "20rem" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{
            margin: "1rem",
            width: "20rem",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Card.Img
            variant="left"
            src={require("./7.jpg")}
            style={{ width: "13rem", height: "20rem" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <hr
        style={{ margin: "6rem", height: 0.8, backgroundColor: "#0bb7a7" }}
      ></hr>
      {/*book and appointment*/}
      <div style={{ textAlign: "left", marginLeft: "7rem" }}>
        <h3>Book an appointment for an in-clinic consultation</h3>
        <p>Find experienced doctors across all specialties</p>
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
      <Carousel style={{ color: "black", height: "30rem" }}>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "4rem",
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
              paddingTop: "4rem",
            }}
          >
            <h4 style={{ color: "black", width: "30rem" }}>
              Very easy to use and maintain history. Thanks Appointus for making
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
              paddingTop: "4rem",
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
        style={{ margin: "6rem", height: 0.8, backgroundColor: "#0bb7a7" }}
      ></hr>
      <footer style={{ display: "flex", justifyContent: "space-around" }}>
        <img src={require("./appointus.png")} style={{marginBottom:"1rem"}}/>
        <div>
          <h1>For Any Queries</h1>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
