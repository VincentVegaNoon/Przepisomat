import { useState } from "react";
import { IngredientSearchForm } from "./components/IngredientSearch/IngredientSearch";
import { RecipeList } from "./components/RecipeList/RecipeList";
import { REACT_SPOONACULAR_API_KEY } from "../APIConfig";

import "./styles.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (ingredients) => {
    console.log(ingredients);
    const apiKey = REACT_SPOONACULAR_API_KEY;
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-full">
      <h3 className="text-4xl mt-8 text-amber-600 font-medival">PRZEPISOMAT</h3>
      <IngredientSearchForm onSearch={searchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
