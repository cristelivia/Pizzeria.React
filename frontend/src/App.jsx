
import './App.css'
import Cart from "./components/Cart"
import Navbar from './components/Navbar'
// import Home from './components/Home'
import Footer from './components/Footer';
// import Register from './components/Register';
// import Login from './components/login';


function App() {

  return (
    <>
      <div id="app">
        <Navbar />
        {/* <Home /> */}
        {/* <Register/> */}
        {/* <Login /> */}
        <Cart />
        <Footer />
      </div>
    </>
  );
}

export default App
