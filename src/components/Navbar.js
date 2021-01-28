import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { getUserProfile, isLoggedIn } from "../selectors/users";
import LogoutButton from "./LogoutButton";
import { useSelector } from "react-redux";
import { NetworkConnectionContext } from "../contexts/NetworkConnectionContext";
import { roles } from "../constans";

const Navbar = () => {
  const { isOnline } = useContext(NetworkConnectionContext);
  const isAuthenticated = useSelector(isLoggedIn);
  const userProfile = useSelector(getUserProfile);
  const isAdmin = isAuthenticated && userProfile.role === roles.ADMIN;

  return (
    <nav className="navbar">
      <div className="menu">
        <Link className="navbar__link" to={{ pathname: "/" }}>
          Home page
        </Link>
        {isAuthenticated && isOnline && (
          <Link className="navbar__link" to={{ pathname: "/article/new" }}>
            New article
          </Link>
        )}
        {isAdmin && (
          <Link className="navbar__link" to={{ pathname: "/users" }}>
            Users
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
  );
};

export default Navbar;
