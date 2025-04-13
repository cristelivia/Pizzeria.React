import React, { useEffect, useState } from "react";

export default function Pizza() {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => {
        setPizza(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener la pizza:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-4">Cargando pizza...</p>;

  if (!pizza) return <p className="text-center mt-4">Pizza no encontrada</p>;

  return (
    <div className="container mt-4">
      <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <img
          src={pizza.img}
          alt={pizza.name}
          className="card-img-top mb-3 rounded"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        <h2 className="card-title text-capitalize">{pizza.name}</h2>
        <p className="text-muted">{pizza.desc}</p>
        <h5>Ingredientes:</h5>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        <p className="fw-bold mt-3">Precio: ${pizza.price.toLocaleString()}</p>
        <button className="btn btn-success mt-3 w-100">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}
