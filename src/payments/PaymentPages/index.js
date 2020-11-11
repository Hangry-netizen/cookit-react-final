import { useState } from "react";
import Router from "next/router";

import Layout from "../PaymentComponents/Layout";
import Row from "../PaymentComponents/prebuilt/Row";
import Cookit from "../PaymentComponents/prebuilt/Cookit";
import CheckoutForm from "../PaymentComponents/CheckoutForm";
import getMealPrice from "../utils/get-meal-price";

const PaymentPage = props => {
  const [numMeals, setNumMeals] = useState(1);

  const addMeal = () => setNumMeals(num => Math.min(12, num + 1));
  const remMeal = () => setNumMeals(num => Math.max(1, num - 1));

  return (
    <Layout title="Cookit Cart">
      <Row>
        <Cookit
          onAddMeal={addMeal}
          onRemoveMeal={remMeal}
          numMeals={numMeals}
        />
      </Row>
      <CheckoutForm
        price={getMealPrice(numMeals)}
        onSuccessfulCheckout={() => Router.push("/success")}
      />
    </Layout>
  );
};

export default PaymentPage;
