import React, { useState } from "react";
import Count from "./components/Count";
import Home from "./components/Home";

const App = () => {
  let getDataFromHome = (count) => {
    console.log(count);
  };

  return (
    <>
      <h1>Me App hu</h1>
      <Count fn={getDataFromHome} />
    </>
  );
};

export default App;
