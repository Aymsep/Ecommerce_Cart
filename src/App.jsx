import { BrowserRouter,Routes,Route } from "react-router-dom" 
import About from "./About"
import Adder from "./Adder"
import Checkout from "./Checkout"
import Home from "./Home"
import Login from "./Login"
import Nav from "./Nav"
import ProductDetail from "./ProductDetail"
import Products from "./Products"
import Wrapper from "./Wrapper"


export default function App(){
  return (
    <>
    <h1>working...</h1>
    <Nav/>
    <Adder/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="products" element={<Wrapper/>}>
          <Route path="all" element={<Products/>} />
          <Route path=":productId" element={<ProductDetail/>} />
      </Route>
    </Routes>
    </>
  )
}