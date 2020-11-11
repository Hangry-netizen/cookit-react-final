const getMealPrice = numMeals =>
  (Math.round(numMeals * 15 * 100) / 100).toFixed(2);

export default getMealPrice;
