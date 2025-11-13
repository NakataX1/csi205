import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, LogOut } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { cartCount } = useContext(CartContext);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="nav-container">
      <div className="nav-inner">
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>

          <NavLink to="/todos" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Todos
          </NavLink>

          <NavLink to="/calculator" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Calculator
          </NavLink>

          <NavLink to="/animation" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Animation
          </NavLink>

          <NavLink to="/component" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Component
          </NavLink>

          <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Products
          </NavLink>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <NavLink to="/cart" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ position: 'relative' }}>
            <ShoppingCart size={16} style={{ marginRight: 6 }} />
            Cart
            {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
          </NavLink>

          {user && <div className="nav-user">👤 {user.email}</div>}

          <button className="logout-btn" onClick={handleLogout} title="ออกจากระบบ">
            <LogOut size={14} style={{ marginRight: 6 }} /> Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
