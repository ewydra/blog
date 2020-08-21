import React from "react";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../selectors/users";
import LogoutButton from "./LogoutButton";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isAuthenticated = useSelector(isLoggedIn);

  return (
  <nav className="navbar">
    <div className="menu">
      <Link className="navbar__link" to={{ pathname: "/" }}>
        Home page
      </Link>
      {isAuthenticated && (
        <Link className="navbar__link" to={{pathname: "/article/new" }}>
          New article
        </Link>
      )}
    </div>
    <div className="menu">
      {isAuthenticated ? (
        <LogoutButton />
      ) : (
        <>
          <Link className="navbar__link" to={{ pathname: "/login" }}>
            Login
          </Link>
          <Link className="navbar__link" to={{ pathname: "/register" }}>
            Register
          </Link>
        </>
      )}
    </div>
  </nav>
)};

export default Navbar;
