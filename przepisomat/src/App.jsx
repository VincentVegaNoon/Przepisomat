import { useState } from "react";
import { IngredientSearchForm } from "./components/IngredientSearch/IngredientSearch";
import { RecipeList } from "./components/RecipeList/RecipeList";
import API_KEYS from "";

function App() {
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (ingredients) => {
    const appId = API_KEYS.env.REACT_APP_EDAMAM_API_ID;
    const appKey = API_KEYS.env.REACT_APP_EDAMAM_API_KEY;
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredients}&app_id=${appId}&app_key=${appKey}`;
  };

  return (
    <div>
      <IngredientSearchForm onSearch={searchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
