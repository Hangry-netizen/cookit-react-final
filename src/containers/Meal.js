import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import SessionContext from "../contexts/SessionContext";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default function Meal({ meal }) {
  let history = useHistory();

  const { loggedIn, checkoutMeal, setCheckoutMeal, orderMeal } = useContext(
    SessionContext
  );

  return (
    <div style={{ width: "70vw", padding: "2%", margin: "auto" }}>
      <Card>
        <CardImg
          // style={{ height: "60vh" }}
          src={meal.url}
          alt="Card image cap"
        />
        <CardBody style={{ height: "10%" }}>
          <CardTitle tag="h5">{meal.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Preparation time: {meal.prep_time}
          </CardSubtitle>
          <CardText>
            Cookware required:
            {meal.cookware}
          </CardText>
          {loggedIn ? (
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
          )}
        </CardBody>
      </Card>
    </div>
  );
}
