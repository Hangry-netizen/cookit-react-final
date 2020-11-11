import React from "react";
import { useParams } from "react-router-dom";

function MealPage () {
  let { id } = useParams();
  return (
    <div>
      MealPage for Meal ID: {id}
    </div>
  )
}

export default MealPage