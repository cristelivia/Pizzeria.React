
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container text-center mt-5">
            <img
                src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                alt="Página no encontrada"
                className="img-fluid mb-4"
                style={{ maxWidth: "400px" }}
            />
        <h1 className="display-4 fw-bold text-danger">
            404 - Página no encontrada
        </h1>
        <p className="lead">¡Ups! Parece que esta pizza se fue del horno... 🍕</p>
            <Link to="/" className="btn btn-primary btn-lg mt-3">
            🔙 Volver al inicio
        </Link>
        </div>
    );
}
