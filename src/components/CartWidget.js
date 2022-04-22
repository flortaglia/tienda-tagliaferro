import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import {CartContext} from "../context/CartContext"
import {BsFillCartFill} from 'react-icons/bs'

const CartWidget = () => {

  const {quantityCart} = useContext(CartContext)
  return (
    
    <Link to="/cart" style={{textDecoration: 'none'}} >
      <BsFillCartFill style={{color: 'white', fontSize: '2rem'}}/>
      { quantityCart()!==0
      && <span className='colorLink'>{quantityCart()}</span>
      }
      
    </Link>
  )
}

export default CartWidget