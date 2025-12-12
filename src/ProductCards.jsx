import React from 'react';
import './ProductCards.css';
import { Link } from 'react-router-dom';
import IMG from './assets/react.svg';

const products = [
  { id: 101, name: 'Wireless Headphones', price: 79.99, image: IMG },
  { id: 102, name: '4K Monitor', price: 349.0, image: IMG },
  { id: 103, name: 'Mechanical Keyboard', price: 120.5, image: IMG },
];

function ProductCards() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
      {products.map((product) => (
        <Link key={product.id} to={`/products/${product.id}`} className="product-link">
          <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductCards;
