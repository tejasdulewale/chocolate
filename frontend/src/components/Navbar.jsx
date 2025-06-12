import React, { useState } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [underline, setUnderline] = useState("Home");
  return (
    <div className="navbar">
      <div className="logo">chocolate's</div>
      <nav>
        <Link
          to="/"
          onClick={() => {
            setUnderline("Home");
          }}
          className={underline === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => {
            setUnderline("About");
          }}
          className={underline === "About" ? "active" : ""}
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={() => {
            setUnderline("Contact");
          }}
          className={underline === "Contact" ? "active" : ""}
        >
          Contact
        </Link>
        <Link
          to="/product"
          onClick={() => {
            setUnderline("Product");
          }}
          className={underline === "Product" ? "active" : ""}
        >
          Product
        </Link>
      </nav>

      <div className="icons">
        <i class="fa-solid fa-cart-shopping"></i>
        <Link to="/register">
          <i class="fa-solid fa-user"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
