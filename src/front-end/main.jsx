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
import { Download } from "./pages/Download.jsx";
import { Faq } from "./pages/FAQ.jsx";
import { Home } from "./pages/Home.jsx";
import { SupportUs } from "./pages/SupportUs.jsx";
import { LogIn } from "./pages/LogIn.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { AdminPanel } from "./pages/AdminPanel.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/support-us" element={<SupportUs />} />
        <Route path="/download" element={<Download />} />
        <Route path="/hdn/login" element={<LogIn />} />
        <Route path="/hdn/signup" element={<SignUp />} />
        <Route path="/hdn/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
    <Footer />
  </StrictMode>,
);
