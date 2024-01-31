import { RecipeItem } from "../RecipeItem/RecipeItem";

export function RecipeList({ recipes, onDetails }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} onDetails={onDetails} />
      ))}
    </div>
  );
}
