import React from "react";
import { Navigate } from "react-router-dom";
function PrivateRoute({ user, children }) {
  if (Object.keys(user).length === 0) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
}
export default PrivateRoute;
