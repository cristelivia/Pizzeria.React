
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/login';


function App() {

  return (
    <>
      <div id="app">
        <Navbar />
        <Home />
        <Register/>
        <Login/>
        <Footer />
      </div>
    </>
  );
}

export default App
