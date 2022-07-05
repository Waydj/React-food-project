import { API_URL } from "./config";

const getMealById = async (idMeal) => {
  const responce = await fetch(API_URL + "lookup.php?i=" + idMeal);
  return await responce.json();
};

const getAllCategories = async () => {
  const responce = await fetch(API_URL + "categories.php");
  return await responce.json();
};

const getFilteredCategory = async (nameMeal) => {
  const responce = await fetch(API_URL + "filter.php?c=" + nameMeal);
  return await responce.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
