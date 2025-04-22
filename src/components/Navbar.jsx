// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">
        🍕 PizzaApp
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Registrarse
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Iniciar sesión
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Perfil
            </Link>
          </li>
        </ul>
        <Link className="btn btn-outline-success" to="/cart">
          🛒 Total: $0
        </Link>
      </div>
    </nav>
  );
}
