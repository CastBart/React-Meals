import react from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <react.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </react.Fragment>
  );
};

export default Meals;
