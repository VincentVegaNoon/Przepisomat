export function RecipeItem({ recipe }) {
  return (
    <div className="p-3 text-slate-50 font-medival">
      <h3>{recipe.label}</h3>
      <img src={recipe.image} alt={recipe.label} />
      <p>Ingredients: {recipe.ingredientLines.join(", ")}</p>
      <a href={recipe.url} target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
    </div>
  );
}
