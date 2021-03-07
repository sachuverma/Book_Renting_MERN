import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuthContext } from "../context/authContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Route
      render={() => {
        return isAuthenticated ? children : <Redirect to="/" />;
      }}
      {...rest}
    ></Route>
  );
};
export default PrivateRoute;
