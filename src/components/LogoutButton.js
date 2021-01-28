import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../actions/users";

export default function LogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("auth_method")
    dispatch(setLoggedIn(false));
  }, [dispatch])

  return (
    <button className="navbar__link" onClick={handleLogout}>Logout</button>
  )
}
