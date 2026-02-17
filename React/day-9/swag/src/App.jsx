import React, { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { MyStore } from "./MyContext";

const App = () => {
  let { toggle } = useContext(MyStore);
  return (
    <div className="h-screen">
      <Navbar />
      <div className="min-h-[92%] bg-gray-400">
        {toggle ? <CartPage /> : <Home />}
      </div>
    </div>
  );
};

export default App;
