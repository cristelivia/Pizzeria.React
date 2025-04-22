
import React from "react";

export default function Profile() {
    const email = "usuario@correo.com"; 

    return (
        <div className="container mt-5 text-center">
            <h1 className="mb-4">Perfil de Usuario</h1>
                <p className="fs-4">
            📧 <strong>Email:</strong> {email}
                </p>
            <button className="btn btn-danger mt-3">🔒 Cerrar Sesión</button>
        </div>
    );
}
