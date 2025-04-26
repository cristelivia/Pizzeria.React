import React from "react";
import { useCart } from "../context/CartContext";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart(); 

  if (!pizza) return null;

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={pizza.img} alt={pizza.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">{pizza.desc}</p>
        <ul className="list-unstyled">
          {pizza.ingredients.map((ing, i) => (
            <li key={i}>🍕 {ing}</li>
          ))}
        </ul>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">${pizza.price}</span>
          <button className="btn btn-primary" onClick={() => addToCart(pizza)}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
