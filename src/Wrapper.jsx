import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import Cart from './Cart'

const Wrapper = () => {
  return (
    <div>
        <Cart/>
        <h1>Products</h1>
        <Link to='all'>all</Link>
        <Outlet/>
    </div>
  )
}

export default Wrapper