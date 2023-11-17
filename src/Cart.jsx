import React from 'react'
import './Cart.css'
import PaymentButton from './Checkout';

import {AiOutlineShoppingCart} from 'react-icons/ai'
import {CartStore}  from './State/CartContext'
import { useEffect,useState } from 'react'
// import { loadStripe } from "@stripe/stripe-js";
// import getStripe from './utils/getstripe'

const Cart = () => {
    // const stripePromise = loadStripe("pk_test_51OC9nBEtI48g6m8ATjhjLOQrM5y5bycjBkIup5J4K6s40ZHmMJIbhg5bM6yaJcWQDQhACsKv4R4Z81VZJ0m4K5zZ00u4W0unWG");
    const {qty,shoppingCart,totalPrice,dispatch} = CartStore()
    console.log('total rice',totalPrice)
    const [open, setOpen] = useState(false)
    useEffect(()=>{
        console.log(shoppingCart)
    },[shoppingCart])
    // async function handleCheckout() {
    //     const stripe = await getStripe();
    //     const { error } = await stripe.redirectToCheckout({
    //       lineItems: [
    //         {
    //           price: 'price',
    //           quantity: 1,
    //         },
    //       ],
    //       mode: 'subscription',
    //       successUrl: `http://localhost:3000/success`,
    //       cancelUrl: `http://localhost:3000/cancel`,
    //       customerEmail: 'customer@email.com',
    //     });
    //     console.warn(error.message);
    //   }
  return (
    <div className="cart" >
        {/* <PaymentButton  /> */}

        <AiOutlineShoppingCart onClick={()=>setOpen(!open)}/>
        <div className="qty">
           {/* { shoppingCart && shoppingCart.length} <br /> */}
           <button onClick={()=>dispatch({type:"EMPTY_CART"})}
            >Empty Cart</button>
        </div>
        <h1>
           totalPrice : {totalPrice}
        </h1>
        {
            open && shoppingCart.map((product)=>{
                return (
                    <div key={product.id} className="cart-sidebar">
                        <div className="cart-sidebar-header">
                            <h3>My Cart</h3>
                            <button
                            onClick={()=>dispatch(
                                {type:"DELETE_PRODUCT",id:product.id}
                            )} 
                             >
                                X
                                </button>
                        </div>
                        <div className="cart-sidebar-body">
                            <img src={product.image} alt="" width={85} height={85} />
                            <h4>{product.title}</h4>
                            <h5>Price: {product.price}</h5>
                            <button
                            onClick={()=>dispatch(
                                {type:"INCREMENT",id:product.id}
                            )} 
                            >
                                +
                            </button>
                            <h5>Qty: {product.qty}</h5>
                            <button
                            onClick={()=>dispatch(
                                {type:"DECREMENT",id:product.id}
                            )} 
                            >
                                -
                                
                                </button>
                        </div>
                        <hr/>
                    </div>
                )
            })
        }
        {/* <button onClick={handleCheckout}>pay with stripe</button> */}

    </div>
  )
}

export default Cart