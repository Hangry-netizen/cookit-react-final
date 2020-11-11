import React from "react";
import "./TestimonialsPage.css";
import {
  Jumbotron,
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import user1 from "../assets/1_testimonials_user.jpeg";
import user2 from "../assets/2_testimonials_user.jpeg";
import user3 from "../assets/3_testimonials_user.jpeg";
import { url } from "../App";

const TestimonialsPage = (props) => {
  return (
    <div className="testimonialspage">
      <Jumbotron style={{ padding: "1%", marginBottom: "0" }}>
        <Container style={{ textAlign: "center" }} fluid>
          <h1 className="h1 display-3">Why our customers love us</h1>

          <div className="testimonial-cards">
            <div>
              <Card
                style={{
                  backgroundColor: "rgba(245, 245, 245, 0.4",
                }}
              >
                <CardImg
                  className="rounded-circle img"
                  src={user1}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Charly Stephenson</CardTitle>

                  <CardText>
                    "Cookit is just amazing! A few months ago I started a new
                    company and just don't have any time to buy all the
                    ingredients to cook. I feel blessed to have found Cookit which
                    brought immense convenience to my life. Cookit is a
                    life-saver and the meals are just delicious.""
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card
                style={{
                  backgroundColor: "rgba(245, 245, 245, 0.4",
                }}
              >
                <CardImg
                  className="rounded-circle img"
                  src={user2}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Cindy Lu</CardTitle>

                  <CardText>
                    "Cookit is not just healthy and inexpensive the meals taste
                    amazing as well. The ingredients are coming straight
                    delivered to your home. My friends and family started
                    spending more time together cooking thanks to Cookit!""
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card
                style={{
                  backgroundColor: "rgba(245, 245, 245, 0.4",
                }}
              >
                <CardImg
                  className="rounded-circle img"
                  src={user3}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Nicky Houston</CardTitle>

                  <CardText>
                    "While I looked for a quick and easy ways to prepare
                    healthy, delciouse and reasonable priced meals I found
                    Cookit. The only such service in Malaysia. Can't wait to try
                    the new recipes next month!"
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default TestimonialsPage;
