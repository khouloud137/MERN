import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const user = JSON.parse(localStorage.getItem("user_data"));

  return user === undefined ? null : user === null ? (
    <Navigate to={"/login"} />
  ) : (
    <Outlet />
  );
}

export default PrivateRoute;
