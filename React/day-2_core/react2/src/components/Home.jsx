import React from "react";

const Home = ({fn}) => {
  let count = 10;

  fn(count);
  return <h1>Home</h1>;
};

export default Home;
