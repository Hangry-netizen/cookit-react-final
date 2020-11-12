import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { url } from "../App";
import SessionContext from "../contexts/SessionContext";
import Meal from "../containers/Meal";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
import HowItWorks from "../pages/HowItWorks";
import IntroductionPage from "../pages/IntroductionPage";
import UpdateTestimonialPage from "../pages/UpdateTestimonialPage";
import { Button } from "reactstrap";

export default function HomePage() {
  const {
    meals,
    setMeals,
    loggedIn,
    handleUserLogout,
    toggleLoginModal,
    toggleSignUpModal,
  } = useContext(SessionContext);

  useEffect(() => {
    // performing a GET request
    axios
      .get(`${url}/meals`)
      .then((result) => {
        // If successful, we do stuffs with 'result'
        console.log(result.data);
        setMeals(result.data);
      })
      .catch((error) => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <HeaderPage />
      <IntroductionPage />
      <HowItWorks />
      <UpdateTestimonialPage />
      <div
        style={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginTop: "2%" }}>
          Pick one of our delicious and healthy meals
        </h2>
        {!loggedIn ? (
          <Button
            style={{
              backgroundColor: "#ff914d",
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
            style={{ backgroundColor: "#ff914d", color: "white" }}
            className="inactive"
            onClick={toggleSignUpModal}
          >
            Sign Up
          </Button>
        ) : (
          ""
        )}
        <div
          id="meals"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {meals.map((meal) => {
            return <Meal meal={meal} />;
          })}
        </div>
      </div>

      <FooterPage />
    </div>
  );
}
