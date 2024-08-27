import React from 'react';
import './styles.css'; // Import the CSS file

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default ProductCard;
