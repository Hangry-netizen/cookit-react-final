import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { useParams } from "react-router-dom";
import SessionContext from "../contexts/SessionContext";
import {
  Jumbotron,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function MealPage() {
  let history = useHistory();
  const { checkoutMeal } = useContext(SessionContext);
  let { id } = useParams();
  return (
    <div>
      <Jumbotron
        style={{ marginTop: "15%" }}
        className="text-center float-md-center"
      >
        <h1
          style={{ paddingBottom: "2%", fontSize: "200%" }}
          className="display-3"
        >
          Order Summary:{" "}
        </h1>

        <Card style={{ width: "70vw", margin: "auto" }}>
          <CardImg src={checkoutMeal.url} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{checkoutMeal.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Preparation time: {checkoutMeal.prep_time}
            </CardSubtitle>

            <CardText>
              Cookware required:
              {checkoutMeal.cookware}
            </CardText>

            <CardTitle tag="h1">15 MYR</CardTitle>
            {/* {loggedIn ? (
            <Button
              onClick={() => {
                console.log("test");
                history.push(`/meal/${meal.id}`);
                setCheckoutMeal(meal);
              }}
            >
              Order now
            </Button>
          ) : (
            ""
          )} */}
          </CardBody>
          <p className="lead">
            <Button id="onHoverOrange" onClick={() => history.push(`/payment`)}>
              Process Payment
            </Button>
          </p>
        </Card>
      </Jumbotron>
    </div>
  );
}

export default MealPage;
