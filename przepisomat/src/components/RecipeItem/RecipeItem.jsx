export function RecipeItem({ recipe, onDetails }) {
  return (
    <div className="p-3 text-slate-50 font-medival">
      <h3>{recipe.title}</h3>
      <img src={recipe.image} />
      <button
        onClick={() => onDetails(recipe.id)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View Details
      </button>
    </div>
  );
}
