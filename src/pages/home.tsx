import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  console.log('Products:', products);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:8080/api/haravan/products.json', {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(data.products || []);
      } else {
        console.log('Failed to fetch products:', response.status, response.statusText);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Page Home</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;