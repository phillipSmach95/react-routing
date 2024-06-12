import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {

let { state } = useLocation()

    return (
      <>
      
      <div id="detail">
      <h1>Detail</h1>

        <h1>{state.name}</h1>
        <p>{state.description}</p>
        <p id="price">${state.price}</p>
        <img src={`/images/${state.image}`} alt={state.category} />
      </div>
      </>
    
    );
  
 

  // TODO: Display these products details
  
}
