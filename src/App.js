import { useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

function App() {
  const [dish, SetDish] = useState("");
  const [recipe, Setrecipe] = useState([]);
  function handleChange(e) {
    SetDish(e.target.value);
  }
  async function DishRecipe() {
    const response = await fetch(
      `https://api.edamam.com/search?q=${dish}&app_id=e3424c08&app_key=bf5a1df731b6b0a8f7270672a1306cf6`
    );
    const data = await response.json();
    Setrecipe(data.hits);
    SetDish("");
    console.log(recipe);
  }

  return (
    <div className="App">
      <div className="inputdiv">
        <input
          className="search"
          type="text"
          value={dish}
          onChange={handleChange}
        ></input>
        <button className="submit" type="submit" onClick={DishRecipe}>
          search
        </button>
      </div>

      
        <div className="container2">
          {recipe.map((recipe ,index) => (
            <Recipe
              key={index}
              name={recipe.recipe.label}
              ingredients={recipe.recipe.ingredients}
              image={recipe.recipe.image}
            />
          ))}
          ;
        </div>
      
    </div>
  );
}

export default App;
