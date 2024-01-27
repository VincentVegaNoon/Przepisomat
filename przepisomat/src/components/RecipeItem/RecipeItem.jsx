export function RecipeItem({ recipe }) {
  return (
    <div className="p-3 text-slate-50 font-medival">
      <h3>{recipe.title}</h3>
      <img src={recipe.image} />
      {/* <p>Ingredients: {recipe.ingredientLines.join(", ")}</p> */}
      <a target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
    </div>
  );
}
