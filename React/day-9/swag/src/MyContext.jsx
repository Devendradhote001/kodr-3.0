import { createContext, useState } from "react";

export let MyStore = createContext();

export let ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  const [toggle, setToggle] = useState(false);

  return (
    <MyStore.Provider value={{ cartItems, setCartItems, toggle, setToggle }}>
      {children}
    </MyStore.Provider>
  );
};
