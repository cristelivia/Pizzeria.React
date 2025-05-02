import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Pizza from "./Pages/Pizza";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";
import ProtectedRoute from "./components/Protected.Route";
import PublicRoute from "./components/Public.Route";
import { CartProvider } from "./context/CartContext"; 

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <div id="app">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Rutas públicas: solo accesibles si el usuario NO está logueado */}
              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />

              {/* Ruta protegida: solo accesible si el usuario está logueado */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              {/* Rutas accesibles siempre */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/pizza/p001" element={<Pizza />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
