import React from "react";
import CartItem from "@/components/CartItem";

const PageCart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ marginTop: "1rem" }}>
      <h2 style={{ textAlign: 'center' }}>My Cart</h2>

      <div className="cart-grid" style={{ margin: '14px 0 20px' }}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>🛒 ยังไม่มีสินค้าในตะกร้า</p>
        )}
      </div>

      <div style={{ textAlign: 'center' }}>
        <p>
          Products: <strong>{cart.length}</strong> items — Total price: <strong>${total.toFixed(2)}</strong>
        </p>
        <button className="btn" style={{ marginTop: 8 }}>Checkout</button>
      </div>
    </div>
  );
};

export default PageCart;
