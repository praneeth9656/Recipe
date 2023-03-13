import React from "react";

function Recipe(props)
{
    return (
        <div className="recipe">
            <h1>{props.name}</h1>
            <ol>{props.ingredients.map(ingredients =>(
                <li>{ingredients.text}</li>
            )

            
            )}</ol>
            
            <p>{props.calories}</p>
            <img src= {props.image} alt={props.name}></img>
        </div>
    )
}

export default Recipe;