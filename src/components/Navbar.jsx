import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="Navbar">
    <Link className="Navbar__link" to="/">
      Home page
    </Link>
    <Link className="Navbar__link" to="/article/new">
      New article
    </Link>
  </nav>
);

export default Navbar;
