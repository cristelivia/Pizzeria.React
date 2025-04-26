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

function App() {
  return (
    <Router>
      <div id="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

<Route path="/" element={<div>Home Page</div>} />;

export default App;
