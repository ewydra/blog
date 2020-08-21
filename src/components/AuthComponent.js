import { useEffect } from "react";
import jwt from "jsonwebtoken";
import { setLoggedIn } from "../actions/users";
import { useDispatch } from "react-redux";

export default function AuthComponent({children}) {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    let isAuthenticated = false;

    if (token) {
      const { exp } = jwt.decode(token);
      if (exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
      } else {
        isAuthenticated = true;
      }
    }
    
    dispatch(setLoggedIn(isAuthenticated));
  },  [dispatch])

  return children;
}
