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
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleInputChange} placeholder="Enter ingredients" />
      <button type="submit">Search</button>
    </form>
  );
}
