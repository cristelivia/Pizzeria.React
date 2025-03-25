import React from "react";
import { formatCurrency } from "../utils/format"; // Función de formateo

export default function Navbar() {
  const token = false; // Cambia a true para simular usuario logueado
  const total = 25000; // Monto fijo por ahora

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <div className="container-fluid">
          {/* 🔹 Logo de la empresa */}
          <a className="navbar-brand text-white fw-bold me-3" href="#">
            Pizzeria Mamma Mia
          </a>

          {/* 🔹 Botón para móviles */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* 🔹 Menú de navegación */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* 🔹 Botón Home (Siempre Visible) */}
              <li className="nav-item">
                <a className="nav-link text-white border rounded px-3" href="#">
                  🍕 Home
                </a>
              </li>

              {/* 🔹 Mostrar opciones según estado del usuario */}
              {token ? (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link text-white border rounded px-3 ms-2"
                      href="#"
                    >
                      👤 Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-white border rounded px-3 ms-2"
                      href="#"
                    >
                      🚪 Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link text-white border rounded px-3 ms-2"
                      href="#"
                    >
                      🔑 Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-white border rounded px-3 ms-2"
                      href="#"
                    >
                      📝 Register
                    </a>
                  </li>
                </>
              )}
            </ul>

            {/* 🔹 Total (Siempre Visible) */}
            <span className="navbar-text ms-auto text-white fw-bold">
              <span className="border border-primary text-primary px-3 py-1 rounded d-flex align-items-center">
                🛒 Total: ${formatCurrency(total)}
              </span>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
