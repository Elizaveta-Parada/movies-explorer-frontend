import React from "react";
import { Navigate, useLocation} from "react-router-dom";

function ProtectedRoute({ component: Component, isLoggedIn, ...props }) {
  let location = useLocation();
  return (
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Navigate to={location}  replace/>
        )
  );
}

export default ProtectedRoute;