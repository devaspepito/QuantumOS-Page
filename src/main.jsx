// React Imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";

// Style Imports
import "./main.css";
import "./styles/GlobalStyles.css";
import "./styles/AllContent.css";

// Local Imports
import { Nav } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Blog } from "./pages/Blog.jsx";
import { ContactUs } from "./pages/ContactUs.jsx";
import { Download } from "./pages/Download.jsx";
import { Faq } from "./pages/FAQ.jsx";
import { Home } from "./pages/Home.jsx";
import { SupportUs } from "./pages/SupportUs.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/support-us" element={<SupportUs />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
    <Footer />
  </StrictMode>,
);
