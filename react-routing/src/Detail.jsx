import React from "react";
import { getProduct } from "./services/productService";
import useFetch from "./services/useFetch";

export default function Detail(id) {
  const { data: product, loading, error } = useFetch(
    `products?category=boards ${id}`
  );

    return (
      <>
      
      <h1>Detail</h1>
      <div id="detail">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p id="price">${product.price}</p>
        <img src={`/images/${product.image}`} alt={product.category} />
      </div>
      </>
    
    );
  
 

  // TODO: Display these products details
  
}
