import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
function HomePage() {
  return (
    <div>
      {/*search bar */}
      <InputGroup
        className="mb-3"
        style={{ width: "25rem", marginLeft: "5rem", marginTop: "2rem" }}
      >
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Location</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Locations Near Me"
          aria-label="Locations Near Me"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      {/*react carousel*/}
      <Carousel>
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
      <div style={{ textAlign: "left", marginLeft: "10rem" }}>
        <h3>Book an appointment for an in-clinic consultation</h3>
        <p>Find experienced doctors across all specialties</p>
      </div>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
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
    </div>
  );
}

export default HomePage;
