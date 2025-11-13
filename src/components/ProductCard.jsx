import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card product-card">
      <img src={product.thumbnailUrl} alt={product.title} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h4>{product.title}</h4>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="price">${product.price.toFixed(2)}</div>
          <button className="btn" onClick={() => addToCart(product)}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
