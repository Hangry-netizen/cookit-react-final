import React, { useContext } from "react";
import SessionContext from "../contexts/SessionContext";
import { Button } from "reactstrap";

import {
  Jumbotron,
  Container,
  Media,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import phone from "../assets/phone.jpg";
import apple from "../assets/apple.svg";
import android from "../assets/android.png";

const HowItWorks = () => {
  const {
    meals,
    setMeals,
    loggedIn,
    handleUserLogout,
    toggleLoginModal,
    toggleSignUpModal,
  } = useContext(SessionContext);
  return (
    <div>
      <Container fluid className="text-center" id="howItWorks">
        <h1 className="h3">How it works - Plain Simple</h1>
        {!loggedIn ? (
          <Button
            style={{
              backgroundColor: "grey",
              marginRight: "1%",
              color: "white",
            }}
            className="inactive"
            onClick={toggleLoginModal}
          >
            Login
          </Button>
        ) : (
          ""
        )}
        {!loggedIn ? (
          <Button
            style={{ backgroundColor: "grey", color: "white" }}
            className="inactive"
            onClick={toggleSignUpModal}
          >
            Sign Up
          </Button>
        ) : (
          ""
        )}
      </Container>
      <div style={{ textAlign: "center" }}>
        <img style={{ width: "30%" }} src={phone} />
      </div>
      <Container
        style={{ textAlign: "center" }}
        // className="d-flex flex-wrap text-secondary"
      >
        <ListGroup>
          <ListGroupItem className="justify-content-between border-0 h3">
            <span
              style={{ marginRight: "4%" }}
              class="iconify"
              data-icon="ph:number-circle-one-light"
              data-inline="false"
            ></span>
            <div>
              Login or sign up to choose the meal you would like to prepare in
              your own kitchen.
            </div>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between border-0 h3">
            <div>
              <span
                style={{ marginRight: "4%" }}
                class="iconify"
                data-icon="ph:number-circle-two-light"
                data-inline="false"
              ></span>
            </div>
            Order your meal and finish the payment process to receive the
            delivery of fresh ingredients directly to your front door.
          </ListGroupItem>
          <ListGroupItem className="justify-content-between border-0 h3">
            <div>
              <span
                style={{ marginRight: "4%" }}
                class="iconify"
                data-icon="ph:number-circle-three-light"
                data-inline="false"
              ></span>
            </div>
            Receive your order in less than 30 minutes. Follow prepartion
            instructions and enjoy your healthy and delicious meal with your
            family and friends.
          </ListGroupItem>
        </ListGroup>
      </Container>
      <div style={{ textAlign: "center", paddingBottom: "1%" }}>
        <img style={{ height: "50px", paddingRight: "1%" }} src={apple} />
        <img style={{ height: "50px" }} src={android} />
      </div>
    </div>
  );
};

export default HowItWorks;
