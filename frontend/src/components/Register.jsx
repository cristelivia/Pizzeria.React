import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" o "error"

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    
    if (!email || !password || !confirmPassword) {
      setMessage("⚠️ Todos los campos son obligatorios.");
      setMessageType("error");
      return;
    }

    if (password.length < 6) {
      setMessage("⚠️ La contraseña debe tener al menos 6 caracteres.");
      setMessageType("error");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("⚠️ Las contraseñas no coinciden.");
      setMessageType("error");
      return;
    }

   
    setMessage("✅ Registro exitoso. ¡Bienvenido!");
    setMessageType("success");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">📝 Registro</h2>
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

            <div className="mb-3">
              <label className="form-label">🔄 Confirmar Contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                value={formData.confirmPassword}
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

            <button type="submit" className="btn btn-primary w-100">
              🚀 Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
