import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { MyStore } from "../MyContext";

const CartPage = () => {
  let { cartItems } = useContext(MyStore);

  return (
    <div className="bg-gray-400 flex flex-wrap gap-4 px-10 py-3">
      {cartItems.map((elem) => {
        return <ProductCard key={elem.id} elem={elem} />;
      })}
    </div>
  );
};

export default CartPage;
