import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Login() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState(""); 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setMessage("⚠️ Todos los campos son obligatorios.");
      setMessageType("error");
      return;
    }

    try {
      await login({ email, password });

      setMessage("✅ ¡Inicio de sesión exitoso!");
      setMessageType("success");

      setTimeout(() => {
        console.log("🎉 Login completado, redirigiendo al home...");
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error(
        "❌ Error en login:",
        error.response?.data || error.message
      );
      setError(error.response?.data?.error || "Error al iniciar sesión.");
      setMessageType("error");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">🔐 Iniciar Sesión</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form
            className="p-4 border rounded bg-light shadow"
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <label className="form-label">📧 Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">🔑 Contraseña</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {message && (
              <div
                className={`alert ${
                  messageType === "success" ? "alert-success" : "alert-danger"
                }`}
              >
                {message}
              </div>
            )}

            {error && <div className="alert alert-danger">{error}</div>}

            <button type="submit" className="btn btn-primary w-100">
              🚀 Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
