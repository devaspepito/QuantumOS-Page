// React Imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Style Imports
import "./index.css";

// Local Imports
import { NavBar } from "./Components/GlobalComponents/NavBar/NavBar";
import { Footer } from "./Components/GlobalComponents/Footer/Footer";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { ContactUs } from "./Pages/ContactUs";
import { SupportUs } from "./Pages/SupportUs";
import { Download } from "./Pages/Download";

const rootRender = createRoot(document.getElementById("root"));
rootRender.render(
  <StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/support-us" element={<SupportUs />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
    <Footer />
  </StrictMode>,
);
