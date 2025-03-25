import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <div className="container">
        <p className="mb-1">
          © 2021 - Pizzería Mamma Mia! - Todos los derechos reservados.
        </p>
        <p className="small mb-0">
          📍 Ubicación: Av. Italia 1234, Ciudad del Sabor | 📞 Teléfono: +56 9
          1234 5678
        </p>
        <p className="small">
          📧 Email: contacto@pizzeriamammamia.com | 🕒 Horario: Lun-Dom 12:00 -
          23:00
        </p>
      </div>
    </footer>
  );
}
