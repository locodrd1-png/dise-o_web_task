import React from 'react';

const ProductCard = ({ emoji, name, price, discount, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <span className="product-emoji">{emoji}</span>
        {discount && (
          <div className="discount-badge">-{discount}%</div>
        )}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price}/kg</p>
        <button className="add-button" onClick={onAddToCart}>
          + Agregar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
