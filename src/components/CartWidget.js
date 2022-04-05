import React,{useContext} from 'react'
import carrito3 from '../carrito3.png'
import { Link } from "react-router-dom";
import {CartContext} from "../context/CartContext"

const CartWidget = (props) => {
  
  
  const {quantityCart} = useContext(CartContext)
  
  return (
    // <div>CartWidget</div>
    <Link to="/cart">
      <img src={carrito3} className="cart" alt="cartWidget" />
      { quantityCart()!==0
      && <span>{quantityCart()}</span>
      }
      
    </Link>
  )
}

export default CartWidget