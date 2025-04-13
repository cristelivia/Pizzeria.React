
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home from './components/Home';
import Pizza from "./components/Pizza";

function App() {
  // Simulación de una pizza individual
  const pizzaDemo = {
    id: 1,
    name: "Margarita",
    desc: "La clásica y deliciosa pizza Margarita con albahaca fresca.",
    img: "https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 5990,
    ingredients: ["mozzarella", "tomate", "albahaca"],
  };

  return (
    <div id="app">
      <Navbar />
      {/* <Home /> */}
      <Pizza pizza={pizzaDemo} />
      <Footer />
    </div>
  );
}

export default App;
