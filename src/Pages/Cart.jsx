import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, addToCart, decreaseQuantity, removeFromCart, getTotal } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h3>Tu carrito está vacío 🛒</h3>
        <Link to="/" className="btn btn-primary mt-3">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🛍️ Carrito de Compras</h2>
      {cart.map((item) => (
        <div key={item.id} className="card mb-3">
          <div className="row g-0 align-items-center">
            <div className="col-md-2">
              <img
                src={item.img}
                alt={item.name}
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Precio: ${item.price}</p>
                <p className="card-text">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-danger mt-2"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="text-end">
        <h4>Total: ${getTotal().toFixed(2)}</h4>
      </div>
    </div>
  );
}
