import { createRoot } from "react-dom/client";
import React from "react";

let div = React.createElement(
  "div",
  { id: "uni" },
  React.createElement("h1", {}, "hello i m from react")
);

let root = document.getElementById("root");

createRoot(root).render(div);
