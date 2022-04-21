import React,{useContext} from 'react'
import carrito3 from '../carrito3.png'
import { Link } from "react-router-dom";
import {CartContext} from "../context/CartContext"
import {BsFillCartFill} from 'react-icons/bs'

const CartWidget = () => {

  const {quantityCart} = useContext(CartContext)
  return (
    
    <Link to="/cart">
      <BsFillCartFill style={{color: 'white', fontSize: '2rem'}}/>
      { quantityCart()!==0
      && <span>{quantityCart()}</span>
      }
      
    </Link>
  )
}

export default CartWidget