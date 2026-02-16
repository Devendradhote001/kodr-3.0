import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [toggle, setToggle] = useState(false);
  console.log(cartItems);

  return (
    <div className="h-screen">
      <Navbar setToggle={setToggle} />
      <div className="min-h-[92%] bg-gray-400">
        {toggle ? (
          <CartPage cartItems={cartItems} />
        ) : (
          <Home setCartItems={setCartItems} />
        )}
      </div>
    </div>
  );
};

export default App;
