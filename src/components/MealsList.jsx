import { Meal } from "./Meal";
import { useNavigate } from "react-router-dom";

function MealsList({ meals }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <button className="btn btn-back" onClick={goBack}>
        Go back
      </button>
      <div className="list">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} {...meal} />
        ))}
      </div>
    </>
  );
}

export { MealsList };
