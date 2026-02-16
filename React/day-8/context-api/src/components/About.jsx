import React, { useContext } from "react";
import { MyStore } from "../MyContext";

const About = () => {
  console.log("render about...");
  let data = useContext(MyStore);

  return (
    <div>
      <h1>About </h1>
    </div>
  );
};

export default About;
