import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    console.log('entered')
    const fetchData = async () => {
      try {
        const response = await fetch('/public/data.json'); // Adjust the path based on your project structure
        const data = await response.json();
        const selectedProduct = data.find(item => item.id === parseInt(productId, 10));

        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          console.error(`Product with ID ${productId} not found`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [productId]); // Fetch data whenever productId changes

  return (
    <div>
      <h1>Product Detail</h1>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.title} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
