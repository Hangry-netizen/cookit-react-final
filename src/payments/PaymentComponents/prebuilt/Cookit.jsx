import React, { useContext } from "react";
import styled from "@emotion/styled";
import Image from "./Image";
import MealQuantity from "./MealQuantity";
import logo from "../../utils/logo.png";
import SessionContext from "../../../contexts/SessionContext";

const Shop = styled.div`
  padding: 10px 20px 40px 20px;
`;

const ShopName = styled.h1`
  font-size: 18px;
  color: #fff;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 26.4px;
  margin-bottom: 20px;
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Cookit = ({ onAddMeal, onRemoveMeal, numMeals }) => {
  const { checkoutMeal } = useContext(SessionContext);
  return (
    <Shop style={{ textAlign: "center", color: "white" }}>
      <ShopName>Checkout</ShopName>
      <Image src={logo} width="200px"></Image>
      <ShopName>{checkoutMeal.name}</ShopName>
      <Image src={checkoutMeal.url} width="200px"></Image>
      <ShopName>Quantity</ShopName>

      <Controls>
        <MealQuantity
          onAdd={onAddMeal}
          onRemove={onRemoveMeal}
          quantity={numMeals}
        />
      </Controls>
    </Shop>
  );
};

export default Cookit;
