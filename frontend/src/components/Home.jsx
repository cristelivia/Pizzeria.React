import React from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header"; // Importamos el Header

export default function Home() {
  const pizzas = [
    {
      id: 1,
      nombre: "Napolitana",
      ingredientes: ["mozzarella", "tomates", "jamón", "orégano"],
      precio: 5950,
      imagen:
        "https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      nombre: "Española",
      ingredientes: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
      precio: 6950,
      imagen:
        "https://images.pexels.com/photos/31262975/pexels-photo-31262975/free-photo-of-deliciosa-pizza-con-ingredientes-sobre-tabla-de-madera.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      id: 3,
      nombre: "Pepperoni",
      ingredientes: ["mozzarella", "pepperoni", "orégano"],
      precio: 6950,
      imagen:
        "https://images.pexels.com/photos/4773769/pexels-photo-4773769.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="container mt-4">
      <Header /> {/* Aquí llamamos al Header */}
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
