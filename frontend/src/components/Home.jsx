import React, { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch("http://localhost:3000/pizzas"); // Cambia el puerto si tu backend usa otro
        const data = await res.json();
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
          {pizzas.map((pizza) => (
            <div
              className="col-md-4 d-flex justify-content-center"
              key={pizza.id}
            >
              <CardPizza pizza={pizza} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
