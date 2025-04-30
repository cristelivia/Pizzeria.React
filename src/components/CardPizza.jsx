import React from "react";
import { Link } from "react-router-dom";

const CardPizza = ({ pizza, addToCart }) => {
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
          <div>
            <button
              className="btn btn-primary me-2"
              onClick={() => addToCart(pizza)}
            >
              Añadir al carrito
            </button>
            {/* Link para redirigir a la página de la pizza */}
            <Link
              to={`/pizza/${pizza.id}`} // Utilizamos el id de la pizza para la ruta dinámica
              className="btn btn-secondary"
            >
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
