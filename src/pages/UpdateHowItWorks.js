import React from "react";
import {
  Jumbotron,
  Container,
  Media,
  ListGroup,
  ListGroupItem,
  Badge,
} from "reactstrap";
import phone from "../assets/phone.jpg";

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid class="d-flex" id="howItWorks">
        <Container fluid className="text-center">
          <h1 className="display-3 ">How it works - Plain Simple</h1>
          <span
            style={{ marginRight: "2%" }}
            className="iconify store"
            data-icon="logos:apple-app-store"
            data-inline="false"
          ></span>
          <span
            className="iconify store"
            data-icon="flat-ui:google"
            data-inline="false"
          ></span>
        </Container>
        <Container className="d-flex text-secondary">
          <Media>
            <Media left href="#">
              <Media object src={phone} alt="Generic placeholder image" />
            </Media>
          </Media>
          <ListGroup>
            <ListGroupItem className="justify-content-between border-0 h3">
              <span
                style={{ marginRight: "4%" }}
                class="iconify"
                data-icon="ph:number-circle-one-light"
                data-inline="false"
              ></span>
              Login or Sign up to choose the meal you would like to prepare in
              your own kitchen.
            </ListGroupItem>
            <ListGroupItem className="justify-content-between border-0 h3">
              <span
                style={{ marginRight: "4%" }}
                class="iconify"
                data-icon="ph:number-circle-two-light"
                data-inline="false"
              ></span>
              Order your meal and finish the payment process to receive initiate
              the delivery of fresh ingredients directly to your front door.
            </ListGroupItem>
            <ListGroupItem className="justify-content-between border-0 h3">
              <span
                style={{ marginRight: "4%" }}
                class="iconify"
                data-icon="ph:number-circle-three-light"
                data-inline="false"
              ></span>
              Receive your order in less than 30 min. Follow prepartion
              instructions and enjoy your healthy and delicious meal with your
              family and friends.
            </ListGroupItem>
          </ListGroup>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;
