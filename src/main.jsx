import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartContextStore from './State/CartContext'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <BrowserRouter>
    <CartContextStore>
      <App />
    </CartContextStore> 
  </BrowserRouter>

)
