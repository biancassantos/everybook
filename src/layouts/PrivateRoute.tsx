import { useContext } from "react";
import { Outlet, Navigate } from "react-router";
import { UserContext } from "../contexts/UserContext";

function PrivateRoute() {
  const currentUser = useContext(UserContext);

  return currentUser?.user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;