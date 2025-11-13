import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/PageHome";
import Calculator from "./pages/PageCalculator";
import Animation from "./pages/PageAnimation";
import Component from "./pages/PageComponent";
import Todos from "./components/Todos";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/PageLogin";

import { CartProvider } from "./context/CartContext"; // ✅ เพิ่มตรงนี้

function App() {
  return (
    <CartProvider>
        <Header />
        <Navbar /> {/* ✅ ไม่ต้องส่ง props แล้ว */}

        <main style={{ minHeight: "70vh", padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/component" element={<Component />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="*"
              element={
                <div style={{ textAlign: "center", marginTop: "3rem" }}>
                  <h2>404 - Page Not Found</h2>
                  <p>
                    กลับไปหน้า <a href="/">Home</a>
                  </p>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
    </CartProvider>
  );
}

export default App;
