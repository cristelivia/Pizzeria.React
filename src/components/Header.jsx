import React from "react";

export default function Header() {
  return (
    <header
      className="text-center my-4 p-5 text-white"
      style={{
        height: "50vh",
        alignItems: "center",
        alignContent: "center", 
        backgroundImage:
          "url('https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "10px", 
        padding: "2rem",
      }}
    >
      <h1 className="fw-bold">🍕 Bienvenidos a Pizzería Mamma Mia 🍕</h1>
      <p
        className="fs-5"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "inline-block",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      >
        Las mejores pizzas con ingredientes frescos y una receta única. ¡Elige
        tu favorita y disfruta!
      </p>
    </header>
  );
}
