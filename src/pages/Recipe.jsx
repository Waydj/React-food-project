import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealById } from "../api";
import Preloader from "../components/Preloader";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    getMealById(id).then((data) => {
      setRecipe(data.meals[0]);
    });
  }, [id]);

  return (
    <>
      <button className="btn btn-back" onClick={goBack}>
        Назад
      </button>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h4>Category: {recipe.strCategory}</h4>
          {recipe.strArea ? <h5>Area: {recipe.strArea}</h5> : null}
          <p>{recipe.strInstructions}</p>

          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("Ingredient") && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          {recipe.strYoutube ? (
            <div className="row">
              <h5>Video recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                frameborder="0"
                allowFullScreen1
              ></iframe>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}

export { Recipe };
