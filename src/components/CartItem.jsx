import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="card cart-item">
      <img src={item.thumbnailUrl} alt={item.title} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
      <div style={{ paddingTop: 8 }}>
        <p style={{ margin: 0, fontWeight: 600 }}>{item.title}</p>
        <p style={{ margin: '6px 0' }}>${item.price.toFixed(2)}</p>
        <button className="btn secondary" onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
