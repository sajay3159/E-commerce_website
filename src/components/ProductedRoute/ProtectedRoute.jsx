import { useContext } from "react";
import CartContext from "../store/cart-context";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const authCtx = useContext(CartContext);
  return authCtx.isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
