import React from "react";
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

import logo from "../assets/logo.png";

export default function IntroductionPage() {
  return (
    <div style={{ backgroundColor: "#D0D0D0" }}>
      <Jumbotron
        style={{ fontColor: "grey" }}
        className="bg-transparent"
        style={{ textAlign: "center" }}
      >
        <h3 className="display-5">GET YOUR COOK KIT — BECOME A MASTER CHEF</h3>

        <img style={{ width: "15%" }} src={logo} />
        <p className="lead h1 pt-9">
          Hello, we're Cookit, your new premium meal ingredients delivery
          service. We know you're always busy. No time for shopping groceries.
          So let us take care of that, we're really good at it, we promise!
        </p>
        <hr
          style={{ borderBottom: "1px solid salmon", paddingTop: "1%" }}
          className="my-2"
        />

        <Container
          style={{ paddingTop: "3%", fontColor: "grey" }}
          className="d-flex "
        >
          <Card style={{ textAlign: "center" }} className="border-0">
            <CardBody>
              <CardTitle tag="h3">Available All Year</CardTitle>
              <span
                style={{
                  fontSize: "280%",
                }}
                class="iconify"
                data-icon="emojione:pot-of-food"
                data-inline="false"
              ></span>
              <CardText style={{ textAlign: "left" }}>
                Forget about spending time in super markets and finding the
                right ingredients. We have the perfect solution for you. All
                year around we are there for you to deliver the finest
                ingredients for the most delicious meals.
              </CardText>
            </CardBody>
          </Card>
          <Card className="border-0">
            <CardBody>
              <CardTitle tag="h3">30 Minute Delivery</CardTitle>
              <span
                style={{
                  fontSize: "280%",
                  marginRight: "2%",
                  marginBottom: "2%",
                }}
                class="iconify"
                data-icon="emojione:alarm-clock"
                data-inline="false"
              ></span>

              <CardText style={{ textAlign: "left" }}>
                In less than 30 minutes you could have access to ingredients
                that will provide you with a healthy mix of nutrients and
                amazing tastes. We work with the best suppliers of local organic
                providers in each area we operate. To ensure your maximum
                satisfaction.
              </CardText>
            </CardBody>
          </Card>
          <Card className="border-0">
            <CardBody>
              <CardTitle tag="h3">Local and Organic</CardTitle>
              <span
                style={{
                  fontSize: "280%",
                  marginRight: "2%",
                  marginBottom: "2%",
                }}
                class="iconify"
                data-icon="twemoji:carrot"
                data-inline="false"
              ></span>

              <CardText style={{ textAlign: "left" }}>
                The ingredienst we deliver are all local, organic and extrem
                fresh. We source our meat only from animals that have been
                raised without hormones or antibiotics. This makes for a better
                taste, health and is amazing for our environment.
              </CardText>
            </CardBody>
          </Card>
          <Card className="border-0">
            <CardBody>
              <CardTitle tag="h3">Order Now</CardTitle>
              <span
                style={{
                  fontSize: "280%",
                  marginRight: "2%",
                  marginBottom: "2%",
                }}
                class="iconify"
                data-icon="fxemoji:deliverytruck"
                data-inline="false"
              ></span>
              <CardText style={{ textAlign: "left" }}>
                Never buy ingredients again! We really mean that. Our service
                include daily coverage. You can also choose to order more
                flexibly if that's your style.
              </CardText>
            </CardBody>
          </Card>
        </Container>
      </Jumbotron>
    </div>
  );
}
