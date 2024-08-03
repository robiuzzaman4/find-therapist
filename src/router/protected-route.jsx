import { useContext } from "react";

import { Navigate } from "react-router-dom";
import Spinner from "../components/shared/spinner";
import { AuthContext } from "../provider/auth-provider";

const ProtectedRoute = ({ children }) => {
  const { user, spinner } = useContext(AuthContext);

  if (spinner) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signin" />;
};

export default ProtectedRoute;
