import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { NavBar } from "./Components/GlobalComponents/NavBar/NavBar";
//import { ColorScheme } from "./Components/StyleComponents/ColorScheme/ColorScheme";

createRoot(document.getElementById("root")).render(
  //<ColorScheme />
  <StrictMode>
    <NavBar />
  </StrictMode>,
);
