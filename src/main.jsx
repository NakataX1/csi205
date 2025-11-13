import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Layout หลัก
import AppLayout from "./AppLayout";

// Pages
import PageHome from "./pages/PageHome";
import PageCalculator from "./pages/PageCalculator";
import PageAnimation from "./pages/PageAnimation";
import PageComponent from "./pages/PageComponent";
import PageLogin from "./pages/PageLogin";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

// Components
import Todos from "./components/Todos";
import { ProtectedRoute } from "./components/ProtectedRoute";

// Context
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <PageLogin />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <ProtectedRoute><PageHome /></ProtectedRoute> },
      { path: "home", element: <ProtectedRoute><PageHome /></ProtectedRoute> },
      { path: "calculator", element: <ProtectedRoute><PageCalculator /></ProtectedRoute> },
      { path: "animation", element: <ProtectedRoute><PageAnimation /></ProtectedRoute> },
      { path: "component", element: <ProtectedRoute><PageComponent /></ProtectedRoute> },
      { path: "todos", element: <ProtectedRoute><Todos /></ProtectedRoute> }, 
      { path: "products", element: <ProtectedRoute><Products /></ProtectedRoute> },
      { path: "cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
    ],
  },
], { basename: "/csi205" });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
