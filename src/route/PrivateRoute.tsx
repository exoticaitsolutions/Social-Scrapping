import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default PrivateRoute;
