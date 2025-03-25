import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function CardPizza({ pizza }) {
  return (
    <div className="card m-3 shadow-sm" style={{ width: "22rem" }}>
      {" "}

      <img
        src={pizza.imagen}
        className="card-img-top"
        alt={pizza.nombre}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{pizza.nombre}</h5>
        <p className="card-text text-truncate">
          <strong>Ingredientes:</strong> {pizza.ingredientes.join(", ")}
        </p>
        <h6 className="text-success">
          💲 {pizza.precio.toLocaleString("es-ES")}
        </h6>
        <div className="d-flex justify-content-between mt-3">
        
          <button className="btn btn-outline-dark w-50 me-2">Ver más</button>
        
          <button className="btn btn-dark w-50 d-flex align-items-center justify-content-center">
            <FaShoppingCart className="me-2" /> Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
