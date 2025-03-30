import useUserContext from "../hooks/useUserContext";
import { Outlet, Navigate } from "react-router";

function PrivateRoute() {
  const currentUser = useUserContext();

  return currentUser?.user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;