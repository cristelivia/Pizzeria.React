import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

export default function Cart() {
  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    getTotal,
  } = useCart();
  const { token } = useUser();
  console.log("Token en UserContext:", token);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleCheckout = async () => {
    if (cart.length === 0) {
      setMessage("⚠️ El carrito está vacío.");
      setMessageType("error");
      return;
    }

    try {
      console.log("Token en la solicitud:", token);
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!response.ok) throw new Error("Error al procesar el pago.");

      await response.json();
      setMessage("✅ ¡Compra realizada con éxito!");
      setMessageType("success");
      clearCart();
    } catch (error) {
      setMessage(error.message || "⚠️ Algo salió mal. Intenta de nuevo.");
      setMessageType("error");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">🛒 Carrito de Compras</h2>

      {message && (
        <div
          className={`alert ${
            messageType === "success" ? "alert-success" : "alert-danger"
          }`}
        >
          {message}
        </div>
      )}

      {cart.length > 0 ? (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-primary me-1"
                      onClick={() => addToCart(item)}
                    >
                      ➕
                    </button>
                    <button
                      className="btn btn-sm btn-outline-warning me-1"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      ➖
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="text-end fw-bold">
                  Total:
                </td>
                <td colSpan="2" className="fw-bold">
                  ${getTotal().toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">Tu carrito está vacío.</p>
      )}

      {cart.length > 0 && (
        <div className="text-center mt-3">
          <button className="btn btn-success" onClick={handleCheckout}>
            🛍️ Proceder a la compra
          </button>
        </div>
      )}
    </div>
  );
}
