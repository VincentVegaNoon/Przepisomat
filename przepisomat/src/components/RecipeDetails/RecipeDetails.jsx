export function RecipeDetails({ recipe, onBack }) {
  return (
    <div className="p-3 text-slate-50 font-medival">
      <h2>{recipe.title}</h2>
      <p>Ready in {recipe.readyInMinutes} minutes</p>
      <img src={recipe.image} alt="" />
      <p>Ingredients:</p>
      {recipe.extendedIngredients.map((elem) => {
        return (
          <>
            {console.log(elem)}
            <p>{elem.nameClean}</p>
          </>
        );
      })}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onBack}>
        Back to Recipes
      </button>
    </div>
  );
}
