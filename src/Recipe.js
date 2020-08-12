import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ calories, image, label, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{label}</h1>
      <h2>Calories : {calories}</h2>
      <img src={image} alt="" />
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
