// React Imports
import React from "react";
import { Link } from "react-router";

// Style Imports
import "../styles/components/Header.css";

export const Nav = () => {
  return (
    <>
      <header className="headNav">
        <nav className="navBar">
          <div className="logo">
            <a href="/">
              <img src="/quantum.png" />
            </a>
          </div>
          <div className="links">
            <ul className="unorderedListNav">
              <li className="listItemNav">
                <Link to="/">Home</Link>
              </li>
              <li className="listItemNav">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="listItemNav">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="listItemNav">
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li className="listItemNav">
                <Link to="/support-us">Support Us</Link>
              </li>
              <li className="listItemNav">
                <Link to="/download">Downloads</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
