import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { token, logout } = useUser();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await fetch("/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("No se pudo obtener el perfil.");
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    };

    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (error) {
    return (
      <div className="container mt-5">
        <h2 className="text-center text-danger">⚠️ {error}</h2>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">👤 Perfil del Usuario</h2>
      <div className="card mx-auto mt-4" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h5 className="card-title">📧 Email:</h5>
          <p className="card-text">{user.email}</p>
          <button className="btn btn-danger mt-3 w-100" onClick={handleLogout}>
            🔓 Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}
