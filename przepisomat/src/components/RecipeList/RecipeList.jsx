import { RecipeItem } from "../RecipeItem/RecipeItem";

export function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.label}>
          <h3>{recipe.label}</h3>
          <img src={recipe.image} alt={recipe.label} />
          <p>Ingredients: {recipe.ingredientLines.join(", ")}</p>
          <a href={recipe.url} target="_blank" rel="noopener noreferrer">
            View Recipe
          </a>
        </div>
      ))}
    </div>
  );
}
