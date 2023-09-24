import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  // This is a Semantic HTML Change (#4, added header element to organize navigation content)
  return (
    <header>
      <nav>
        <ul>
          {/* This is a Semantic HTML Change (#1, changed paths from absolute to relative so that pages work) */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
