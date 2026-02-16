import React, { useContext } from "react";
import Home from "./components/Home";
import About from "./components/About";
import { ContextProvider, MyStore } from "./MyContext";

const App = () => {
  let data = useContext(MyStore);
  console.log("Render app...");

  return (
    <div>
      <h1>Hello</h1>
      <ContextProvider>
        <Home />
        <About />
      </ContextProvider>
    </div>
  );
};

export default App;
