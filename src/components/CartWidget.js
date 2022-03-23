import React from 'react'
import carrito3 from '../carrito3.png'
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    // <div>CartWidget</div>
    <Link to="/cart"><img src={carrito3} className="cart" alt="cartWidget" /></Link>
  )
}

export default CartWidget