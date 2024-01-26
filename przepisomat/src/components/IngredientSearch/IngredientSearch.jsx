import { useState } from "react";

export function IngredientSearchForm({ onSearch }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form className="flex flex-col mt-6 font-medival text-slate-50" onSubmit={handleSubmit}>
      <input
        className="bg-amber-700 rounded-md p-2"
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter ingredients"
      />
      <button className="bg-amber-700 rounded-md p-2 m-6" type="submit">
        Search
      </button>
    </form>
  );
}
