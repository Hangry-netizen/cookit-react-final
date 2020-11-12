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

export default function UpdateIntroductionPage() {
  return (
    <div>
      <Jumbotron style={{ textAlign: "center" }}>
        <h1 className="display-3">GET YOUR COOK KIT — BECOME A MASTER CHEF</h1>
        <p className="lead">
          Hello, we're Cookit, your new premium meal ingredients delivery
          service. We know you're always busy. No time for shopping groceries.
          So let us take care of that, we're really good at it, we promise!
        </p>
        <hr className="my-2" />
        <Container className="d-flex">
          <Card>
            <span
              style={{
                fontSize: "280%",
                marginRight: "2%",
                marginBottom: "2%",
              }}
              class="iconify"
              data-icon="emojione:pot-of-food"
              data-inline="false"
            ></span>

            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
          <Card>
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
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>

              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
          <Card>
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

            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>

              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
          <Card>
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

            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>

              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Container>
      </Jumbotron>
    </div>
  );
}
