import React from "react";
import Home from "./Home";

const Count = ({ fn }) => {
  return (
    <div>
      <h1>Count ki value 1 hai</h1>
      <Home fn={fn} />
    </div>
  );
};

export default Count;
