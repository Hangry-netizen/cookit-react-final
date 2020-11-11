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

  const { loggedIn } = useContext(SessionContext);

  return (
    <div style={{ width: "33vw", padding: "2%" }}>
      <Card>
        <CardImg
          style={{ height: "200px" }}
          src={meal.url}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{meal.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Preparation time: {meal.prep_time}
          </CardSubtitle>
          <CardText>
            Cookware required:
            {meal.cookware}
          </CardText>
          {loggedIn ? (
            <Button onClick={() => history.push(`/meal/${meal.id}`)}>
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
