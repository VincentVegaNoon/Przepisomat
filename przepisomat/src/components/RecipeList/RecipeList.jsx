import { RecipeItem } from "../RecipeItem/RecipeItem";

export function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
