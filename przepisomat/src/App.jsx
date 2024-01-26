import { useState } from "react";
import { IngredientSearchForm } from "./components/IngredientSearch/IngredientSearch";
import { RecipeList } from "./components/RecipeList/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);

  const MOCK_API_RESPONSE = {
    hits: [
      {
        recipe: {
          label: "Chicken Parmesan",
          image: "url_to_chicken_parmesan_image",
          ingredientLines: [
            "4 boneless chicken breast halves",
            "1/2 cup breadcrumbs",
            "1/4 cup grated Parmesan cheese",
          ],
          url: "url_to_recipe_details",
        },
      },
      {
        recipe: {
          label: "Vegetable Stir Fry",
          image: "url_to_vegetable_stir_fry_image",
          ingredientLines: ["1 cup broccoli", "1/2 cup bell peppers", "1/4 cup carrots"],
          url: "url_to_recipe_details",
        },
      },
    ],
  };
  const searchRecipes = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setRecipes(MOCK_API_RESPONSE.hits.map((hit) => hit.recipe));
  };

  return (
    <div>
      <IngredientSearchForm onSearch={searchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
