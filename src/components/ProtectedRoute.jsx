import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    // ถ้าไม่ได้ login ให้ redirect ไปหน้า login
    return <Navigate to="/login" replace />;
  }

  return children;
};
