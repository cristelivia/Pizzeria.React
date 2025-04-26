import React, { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();

      
        console.log("Pizzas desde backend:", data);

        setPizzas(data); 
      } catch (error) {
        console.error("Error al obtener las pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div className="container mt-4">
      <Header />
      <div className="border border-3 border-warning rounded p-4">
        <div className="row justify-content-center">
          {pizzas.length === 0 ? (
            <p className="text-center">No se encontraron pizzas.</p>
          ) : (
            pizzas.map((pizza) => (
              <div
                className="col-md-4 d-flex justify-content-center mb-3"
                key={pizza.id}
              >
                <CardPizza pizza={pizza} addToCart={addToCart} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
