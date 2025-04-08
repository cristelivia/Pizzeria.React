import React from "react";

export default function CardPizza({ pizza }) {
  return (
    <div className="card p-3" style={{ width: "100%", maxWidth: "350px" }}>
      <img src={pizza.img} alt={pizza.name} className="card-img-top mb-2 rounded" />
      <div className="card-body">
        <h2 className="card-title text-capitalize text-center mb-2">{pizza.name}</h2>
        <p className="text-center">{pizza.desc}</p>
        
        <h5>Ingredientes:</h5>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <p className="fw-bold text-end mt-3">Precio: ${pizza.price.toLocaleString()}</p>
      </div>
    </div>
  );
}
