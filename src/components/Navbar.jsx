import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { cart, getTotal } = useCart();
  const { isAuthenticated, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        🍕 PizzaApp
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              🏠 Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              🛒 Total: ${getTotal().toFixed(2)}
            </Link>
          </li>

          {isAuthenticated ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  👤 Profile
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
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
