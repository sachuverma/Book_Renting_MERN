import React from "react";
import { Route, Redirect } from "react-router-dom";

import Loading from "./Loading";
import { useAuthContext } from "../context/authContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuthContext();
  const [load, setLoad] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  if (load) {
    return <Loading />;
  }

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
