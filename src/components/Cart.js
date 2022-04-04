import React, {useContext} from 'react'
import {CartContext} from "../context/CartContext"
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Cart = () => {
  const {cart, emptyCart,removeItem,totalCart, handleChange } = useContext(CartContext)

  return (
    <div>
      <div className="container">
        <h2>Carrito de Comprás</h2>
                   
        <div className="container my-6 mx-2">
          <div className="row">
          
              <div className="col  fs-4">Producto</div>
              <div className="col  fs-4">Precio Unitario</div>
              <div className="col  fs-4">Cantidad</div>
              <div className="col  fs-4"></div>
          
          </div>
          
          {  cart.length!==0 ?
            
              cart.map((item)=>(
                <div key={item.id}>    
                  <div className="row my-2" >
                    <div className="col">{item.title}</div>
                    <div className="col">$ {item.price}</div>
                    <input id={item.id} type="number" maxLength={item.stock} minLength={1} onChange={(event)=>(handleChange(event.target.value,event.target.id))} defaultValue={item.count} />
                    <div className="col">$ {item.count}</div>
                    <button className="btn btn-danger col" onClick={()=>removeItem(item.id)}><BsFillTrashFill/></button>
                  
                  </div>
                </div>             
              ))
            
            : 
              <>  
                  <h4 className='fst-italic'>No has seleccionado nada, te invitamos a ver nuestros productos</h4>
                  <hr/>
                  <Link to="/"><button className="btn btn-info mx-2">Seguir Comprando</button></Link>
              
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
          <Link to="/"><button className="btn btn-info mx-2">Seguir Comprando</button></Link>
          <button className="btn btn-success mx-2">Comprar</button>
        </div>
      </>
      } 
      
    </div>
  )
}

export default Cart