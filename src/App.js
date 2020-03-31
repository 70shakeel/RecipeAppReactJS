import React, { useEffect, useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Recepie from "./Components/Recepies";

function App() {
  const APP_ID = "68d4a7e9";
  const APP_KEY = "7c435efeba6ea2c011a6b0e077ab39f1";
  const [recepies, setRecepies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const getReceipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecepies(data.hits);
    console.log(data.hits);
  };

  useEffect(() => {
    getReceipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />{" "}
        <button className="search-button" type="submit">
          Search{" "}
        </button>{" "}
      </form>{" "}
      {recepies.map(recepie => (
        <Recepie
          key={recepie.recipe.label}
          title={recepie.recipe.label}
          calories={recepie.recipe.calories}
          image={recepie.recipe.image}
        />
      ))}{" "}
    </div>
  );
}

export default App;
