import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const { login } = useUser(); 
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!email || !password) {
      setMessage("⚠️ Todos los campos son obligatorios.");
      setMessageType("error");
      return;
    }

    if (password.length < 6) {
      setMessage("⚠️ La contraseña debe tener al menos 6 caracteres.");
      setMessageType("error");
      return;
    }

   
    login({ email }); 
    setMessage("✅ Inicio de sesión exitoso.");
    setMessageType("success");

    
    setTimeout(() => {
      navigate("/"); 
    }, 1000);
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
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">🔑 Contraseña</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

            <button type="submit" className="btn btn-primary w-100">
              🚪 Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
