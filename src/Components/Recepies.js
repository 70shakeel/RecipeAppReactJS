import React from "react";
import style from "./recepies.module.css";
const Recepie = ({ title, calories, image, ingredients }) => {
  const cal = parseInt(calories);

  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt="" />
      <p>Calories: {cal}</p>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};
export default Recepie;
