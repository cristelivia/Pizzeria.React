import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { isAuthenticated, logout, user } = useUser();
  console.log("🔍 Navbar - isAuthenticated:", isAuthenticated);
  console.log("👤 Navbar - user:", user);
  const { cart } = useCart();
 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const [tick, setTick] = useState(0);
  useEffect(() => {
    setTick((t) => t + 1);
  }, [isAuthenticated]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        🍕 PizzaApp
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              🏠 Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              🛒 Carrito {cart.length > 0 && `(${cart.length})`}
            </Link>
          </li>

          {isAuthenticated ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  👤 {user?.email || "Profile"}
                </Link>
              </li>

              <li className="nav-item">
                <button
                  className="btn btn-outline-light ms-2"
                  onClick={handleLogout}
                >
                  🔓 Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  🔐 Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  📝 Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
