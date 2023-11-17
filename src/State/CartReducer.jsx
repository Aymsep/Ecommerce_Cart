import { useNavigate } from "react-router-dom";
export const CartReducer = (state, action) => {
    const { shoppingCart, qty, totalPrice } = state;
    console.log('shopping',shoppingCart);
    console.log('qty',qty);
  
    let product;
    let index;
    let updatedPrice;
    let updatedQty;
    let filtered;
    let isAuthenticated = true

    // if (!isAuthenticated) {
    //   console.log('entred')
    //   navigate('/login')
    // }
  
    switch (action.type) {
      case "ADD_TO_CART":
        console.log('actions',action)
        const check = shoppingCart.find((cart) => cart.id === action.id);
        console.log('check',check)
        if (check) {
          const index = shoppingCart.findIndex((cart) => cart.id === action.id);
          check.qty += 1;
          updatedPrice = totalPrice + check.price;
          updatedQty = qty;
          shoppingCart[index] = check;
          return {
            shoppingCart: [...shoppingCart],
            totalPrice: updatedPrice,
            qty: updatedQty,
          };
        } else {
          product = action.product;
          product["qty"] = 1;
          updatedQty = qty + 1;
          updatedPrice = totalPrice + product.price;
          return {
            shoppingCart: [product, ...shoppingCart],
            totalPrice: updatedPrice,
            qty: updatedQty,
          };
        }
  
      case "INCREMENT":
        product = shoppingCart.find((product) => product.id === action.id);
        index = shoppingCart.findIndex((prod) => prod.id === action.id);
        product.qty = product.qty + 1;
        updatedPrice = totalPrice + product.price;
        updatedQty = qty + 1;
        shoppingCart[index] = product;
        return {
          shoppingCart: [...shoppingCart],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
  
      case "DECREMENT":
        product = shoppingCart.find((product) => product.id === action.id);
        index = shoppingCart.findIndex((prod) => prod.id === action.id);
        if (product.qty > 1) {
          console.log('minus product price',product.price)
          product.qty = product.qty - 1;
          updatedPrice = +(totalPrice - product.price).toFixed(2);
          console.log('updated price',updatedPrice)
          updatedQty = qty - 1;
          shoppingCart[index] = product;
          return {
            shoppingCart: [...shoppingCart],
            totalPrice: updatedPrice,
            qty: updatedQty,
          };
        } else {
          return {
            shoppingCart: [...shoppingCart],
            totalPrice: totalPrice,
            qty: qty,
          };
        }
  
      case "DELETE_PRODUCT":
        console.log("I Am Delete");
        filtered = shoppingCart.filter((cart) => cart.id !== action.id);
        product = shoppingCart.find((cart) => cart.id === action.id);
        updatedPrice = totalPrice - product.price * product.qty;
        updatedQty = qty - product.qty;
        return {
          shoppingCart: [...filtered],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };

      case "EMPTY_CART":
        return {
          shoppingCart: [],
          totalPrice: 0,
          qty: 0,
        };
  
      default:
        return state;
    }
  };