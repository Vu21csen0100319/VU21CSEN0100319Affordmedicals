// src/pages/AllProducts.js
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../components/styles.css'; // Ensure you import the CSS file

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Mock API response
    const mockData = [
      {
        id: 1,
        name: 'iPhone 13',
        category: 'Phone',
        price: 999,
        rating: 4.5,
        availability: 'In Stock',
        image: '/images/iphone.jpg'
      },
      {
        id: 2,
        name: 'Samsung Galaxy S21',
        category: 'Phone',
        price: 799,
        rating: 4.3,
        availability: 'In Stock',
        image: '/images/vadiphone.jpg'
      },
      {
        id: 3,
        name: 'Dell XPS 13',
        category: 'Laptop',
        price: 1299,
        rating: 4.7,
        availability: 'In Stock',
        image: '/images/lappttopp.jpg'
      },
      {
        id: 4,
        name: 'MacBook Pro',
        category: 'Laptop',
        price: 2399,
        rating: 4.6,
        availability: 'In Stock',
        image: '/images/macbook.jpg'
      },
      {
        id: 5,
        name: 'Sony WH-1000XM4',
        category: 'Headphones',
        price: 349,
        rating: 4.8,
        availability: 'In Stock',
        image: '/images/sony-headphones.jpg'
      },
      {
        id: 6,
        name: 'Apple Watch Series 6',
        category: 'Wearable',
        price: 399,
        rating: 4.4,
        availability: 'In Stock',
        image: '/images/apple-watch.jpg'
      },
      {
        id: 7,
        name: 'GoPro Hero 9',
        category: 'Camera',
        price: 399,
        rating: 4.5,
        availability: 'In Stock',
        image: '/images/gopro.jpg'
      },
      {
        id: 8,
        name: 'Kindle Paperwhite',
        category: 'E-Reader',
        price: 129,
        rating: 4.6,
        availability: 'In Stock',
        image: '/images/kindle.jpg'
      },
      {
        id: 9,
        name: 'Nest Thermostat',
        category: 'Smart Home',
        price: 249,
        rating: 4.7,
        availability: 'In Stock',
        image: '/images/nest-thermostat.jpg'
      },
      {
        id: 10,
        name: 'Fitbit Charge 4',
        category: 'Wearable',
        price: 149,
        rating: 4.3,
        availability: 'In Stock',
        image: '/images/fitbit-charge.jpg'
      }
    ];
    
    setProducts(mockData);
    setFilteredProducts(mockData);
  }, []);

  const filterByCategory = (category) => {
    setFilteredProducts(products.filter(product => product.category === category));
  };

  const sortByPrice = (order) => {
    const sorted = [...filteredProducts].sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
    setFilteredProducts(sorted);
  };

  const resetFilters = () => {
    setFilteredProducts(products);
  };

  return (
    <div>
      <h1>All Products</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button className="button" onClick={() => filterByCategory('Phone')}>Filter by Phones</button>
        <button className="button" onClick={() => sortByPrice('asc')}>Sort by Price (Asc)</button>
        <button className="button" onClick={() => sortByPrice('desc')}>Sort by Price (Desc)</button>
        <button className="reset-button" onClick={resetFilters}>Reset</button> {/* Reset button */}
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
