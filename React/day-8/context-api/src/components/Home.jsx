import React, { useContext, useState } from "react";
import { MyStore } from "../MyContext";

const Home = () => {
  console.log("render home..");
  const [val, setVal] = useState("hello");

  let { gValue, setGValue } = useContext(MyStore);

  return (
    <div>
      <h1>Home - {gValue}</h1>
      <button onClick={() => setGValue(gValue + 1)}>Change</button>
    </div>
  );
};

export default Home;
