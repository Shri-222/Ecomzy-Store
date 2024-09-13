import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/pages/Navbar";
import Home from "./Components/pages/Home";
import Cart from "./Components/pages/Cart";

function App() {

  return (
      <div className="font-poppins">
        <div>
          <Navbar />      
        </div>

        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/cart" element = {<Cart/>} />
        </Routes>
        
      </div>
  );
}

export default App;
