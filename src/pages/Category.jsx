import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilteredCategory } from "../api";
import { MealsList } from "../components/MealsList";
import Preloader from "../components/Preloader";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return <>{!meals.length ? <Preloader /> : <MealsList meals={meals} />}</>;
}

export { Category };
