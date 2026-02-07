import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

let count = 10;

createRoot(document.getElementById("root")).render(<App />);
