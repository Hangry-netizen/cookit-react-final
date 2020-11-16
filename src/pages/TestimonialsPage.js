import React from "react";
import "./TestimonialsPage.css";
import user1 from "../assets/1_testimonials_user.jpeg";
import user2 from "../assets/2_testimonials_user.jpeg";
import user3 from "../assets/3_testimonials_user.jpeg";
import logo from "../assets/logo.png";

import {
  Jumbotron,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
} from "reactstrap";

export default function TestimonialsPage() {
  return (
    <div style={{ textAlign: "center" }} className="testimonialspage">
      <h2
        style={{ paddingTop: "1%", paddingBottom: "2%" }}
        className="display-5"
      >
        Why our customers love us
      </h2>

      <Container
        style={{
          textAlign: "center",
        }}
      >
        <Card className="tCard border-0">
          <CardBody>
            <CardTitle tag="h5">Charly Stephenson</CardTitle>
            <img className="img rounded-circle" src={user1} />
            <CardText style={{ fontSize: "150%", paddingTop: "2%" }}>
              "Cookit is just amazing! A few months ago I started a new company
              and just don't have any time to buy all the ingredients to cook. I
              feel blessed to have found Cookit which brought immense
              convenience to my life. Cookit is a life-saver and the meals are
              just delicious."
            </CardText>
          </CardBody>
        </Card>
        <Card className="tCard border-0">
          <CardBody>
            <CardTitle tag="h5">Cindy Lu</CardTitle>
            <img className="img rounded-circle" src={user2} />
            <CardText style={{ fontSize: "150%", paddingTop: "2%" }}>
              "Cookit is not just healthy and inexpensive the meals taste
              amazing as well. The ingredients are coming straight delivered to
              your home. My friends and family started spending more time
              together cooking thanks to Cookit!"
            </CardText>
          </CardBody>
        </Card>
        <Card className="tCard border-0">
          <CardBody>
            <CardTitle tag="h5">Nicky Houston</CardTitle>
            <img className="img rounded-circle" src={user3} />
            <CardText style={{ fontSize: "150%", paddingTop: "2%" }}>
              "While I looked for a quick and easy ways to prepare healthy,
              delciouse and reasonable priced meals I found Cookit. The only
              such service in Malaysia. Can't wait to try the new recipes next
              month!"
            </CardText>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}
