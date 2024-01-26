import { RecipeItem } from "../RecipeItem/RecipeItem";

export function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.label} recipe={recipe} />
      ))}
    </div>
  );
}
