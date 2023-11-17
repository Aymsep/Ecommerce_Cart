import React, { useState, useEffect } from 'react';
import { Link,Outlet,useNavigate } from 'react-router-dom';
import {CartStore}  from './State/CartContext'

const Products = () => {
    const {dispatch} = CartStore()
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Adjust the path based on your project structure
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <h1>Data from JSON file:</h1>
      <ul>
        {data.map(item => (
            <React.Fragment key={item.id}>
          <Link to={`/products/${item.id}`} key={item.id}>
            <li>{item.title}</li>
            <li>{item.price}</li>
            <li>
                <img src={item.image} alt="" width={85} height={85} />
            </li>
          </Link>
          <button onClick={()=>dispatch({type:"ADD_TO_CART",product:item,id:item.id})} >Add to Cart</button>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Products;
