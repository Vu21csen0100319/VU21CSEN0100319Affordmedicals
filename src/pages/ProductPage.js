import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Mock product data based on ID
    const mockProducts = [
      {
        id: 1,
        name: 'iPhone 13',
        category: 'Phone',
        price: 999,
        rating: 4.5,
        availability: 'In Stock',
        image: 'https://via.placeholder.com/150',
        description: 'The latest iPhone with A15 Bionic chip and advanced camera system.'
      },
      {
        id: 2,
        name: 'Samsung Galaxy S21',
        category: 'Phone',
        price: 799,
        rating: 4.3,
        availability: 'In Stock',
        image: 'https://via.placeholder.com/150',
        description: 'The Galaxy S21 with high-end performance and a stunning display.'
      },
      {
        id: 3,
        name: 'Dell XPS 13',
        category: 'Laptop',
        price: 1299,
        rating: 4.7,
        availability: 'In Stock',
        image: 'https://via.placeholder.com/150',
        description: 'A high-performance laptop with a sleek design and powerful internals.'
      },
      // Add more products as needed
    ];

    const selectedProduct = mockProducts.find(product => product.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>Price: ₹{product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Category: {product.category}</p>
      <p>Availability: {product.availability}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;
