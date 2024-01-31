import { useState } from "react";
import { IngredientSearchForm } from "./components/IngredientSearch/IngredientSearch";
import { RecipeList } from "./components/RecipeList/RecipeList";
import { REACT_SPOONACULAR_API_KEY } from "../APIConfig";

import "./styles.css";

function App() {
  const apiKey = REACT_SPOONACULAR_API_KEY;
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (ingredients) => {
    console.log(ingredients);
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const fetchRecipeDetails = async (recipeId) => {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const details = await response.json();
      console.log(details);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-full">
      <h3 className="text-4xl mt-8 text-amber-600 font-medival">PRZEPISOMAT</h3>
      <IngredientSearchForm onSearch={searchRecipes} />
      <RecipeList recipes={recipes} onDetails={fetchRecipeDetails} />
    </div>
  );
}

export default App;
