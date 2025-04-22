import React, { useState } from "react";
import { pizzaCart } from "../utils/pizzas";

export default function Cart() {
    const [cart, setCart] = useState(pizzaCart);

    const incrementar = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
            item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
    };

    const disminuir = (id) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id ? { ...item, count: item.count - 1 } : item
                )
                .filter((item) => item.count > 0)
            );
        };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

    return (
        <div className="container mt-4">
            <h3>Detalles del pedido:</h3>
            {cart.map((pizza) => (
        <div
            key={pizza.id}
            className="d-flex align-items-center justify-content-between border-bottom py-2"
        >
            <img
            src={pizza.img}
            alt={pizza.name}
            style={{ width: "60px", borderRadius: "8px" }}
            />
            <span>{pizza.name}</span>
            <span>${pizza.price.toLocaleString()}</span>
            <div className="d-flex align-items-center">
            <button
                className="btn btn-outline-danger"
                onClick={() => disminuir(pizza.id)}
            >
                -
            </button>
            <span className="mx-2">{pizza.count}</span>
            <button
                className="btn btn-outline-primary"
                onClick={() => incrementar(pizza.id)}
            >
                +
            </button>
            </div>
        </div>
        ))}

        <div className="d-flex justify-content-between align-items-center mt-4">
            <h4>Total: ${total.toLocaleString()}</h4>
            <button className="btn btn-dark">Pagar</button>
        </div>
    </div>
    );
}
