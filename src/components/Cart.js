import React, {useContext} from 'react'
import {CartContext} from "../context/CartContext"
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Cart = () => {
  const {cart, emptyCart,removeItem,totalCart, addCount } = useContext(CartContext)
   
  return (
    <div>
      <div className="container">
        <h2 className="my-4">Carrito de Comprás</h2>
                   
        <div className="container my-6 mx-2">
          {cart.length!==0
          &&  
          <div className="row">
                  <div className="col fs-4">Producto</div>
                  <div className="col fs-4">Precio</div>
                  <div className="col fs-4">Cantidad</div>
          </div>
          }
          {  cart.length!==0 ? 
            
              cart.map((item)=>(
                <div key={item.id}>    
                  <div className=" row  my-2" >
                    <div className="col fs-4">{item.title}</div>
                    <div className="col fs-4">$ {item.price}</div>
                    <div className="col">
                    <input id={item.id} type="number" className='styleInput' max={item.stock} min={1} onChange={(event)=>(addCount(event.target.value,event.target.id))} defaultValue={item.count} />
                    <button className="btn btn-danger" onClick={()=>removeItem(item.id)}><BsFillTrashFill/></button>
                    </div>
                  </div>
                </div>             
              ))
              
            : 
              <>  
                  <h4 className='fst-italic'>No has seleccionado nada, te invitamos a ver nuestros productos</h4>
                  <hr/>
                  <Link to="/" className="btn btn-info mx-2" style={{color:"white"}}>Seguir Comprando</Link>
              
              </>
              
          }
          
        </div>
      </div> 
      
      {cart.length!==0
      &&
      <>
        <hr/>
        <p className="mb-6 text-lg leading-8">Total $ {totalCart()}</p>
        <div >
          <button className="btn btn-danger mx-2" onClick={emptyCart}>Vaciar Carrito</button>
          <Link to="/" className="btn btn-info mx-2" style={{color:"white"}}>Seguir Comprando </Link>
          <Link to="/cart/form" className="btn btn-success mx-2">Comprar</Link>
        </div>
      </>
      } 
      
    </div>
  )
}

export default Cart