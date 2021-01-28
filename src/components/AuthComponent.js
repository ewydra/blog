import { useEffect } from "react";
import jwt from "jsonwebtoken";
import { fetchUserProfile, setLoggedIn } from "../actions/users";
import { useDispatch } from "react-redux";

export default function AuthComponent({children}) {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const authMethod = localStorage.getItem("auth_method")
    let isAuthenticated = false;

    if (token) {
      const { exp } = jwt.decode(token);

      if (exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        return;
      }

      isAuthenticated = true;
      dispatch(fetchUserProfile(token, authMethod))
    }
    
    dispatch(setLoggedIn(isAuthenticated));
  },  [dispatch])

  return children;
}
