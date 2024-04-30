import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const user = JSON.parse(localStorage.getItem("user_data"));

  return user === undefined || user === null ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} />
  );
}

export default ProtectedRoute;
