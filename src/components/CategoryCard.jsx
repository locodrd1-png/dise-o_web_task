import React from 'react';

const CategoryCard = ({ emoji, name, color }) => {
  return (
    <div className="category-card" style={{ borderColor: color }}>
      <div className="category-icon">{emoji}</div>
      <h3 className="category-name">{name}</h3>
      <button className="category-button" style={{ color, borderColor: color }}>
        Ver más
      </button>
    </div>
  );
};

export default CategoryCard;
