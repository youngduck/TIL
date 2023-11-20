import { useEffect, useState, useCallback } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import axios from "axios";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const loadDummyMeals = useCallback(async () => {
    const response = await axios.get(
      "https://react-guide-db-connect-default-rtdb.firebaseio.com/meals.json"
    );

    if (!response.statusText === "OK") {
      throw new Error("Something Went Wrong");
    }

    const responseData = response.data;
    const loadedMeals = [];

    for (const key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
      });
    }
    setMeals(loadedMeals);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadDummyMeals().catch((error) => {
      setHttpError(error.message);
      setIsLoading(false);
    });
  }, [loadDummyMeals]);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
