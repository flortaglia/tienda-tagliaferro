import React, {useContext} from 'react'
import {CartContext} from "../context/CartContext"
import {BsFillTrashFill} from 'react-icons/bs'

const Cart = () => {
  const {cart, emptyCart,removeItem,totalCart,isInCart } = useContext(CartContext)

  return (
    <div>
      <div className="container">
        <h2>Carrito de Comprás</h2>
                   
        <div className="container my-6 mx-2">
          <div className="row">
          
              <div className="col">Producto</div>
              <div className="col">Precio Unitario</div>
              <div className="col">Cantidad</div>
              <div className="col"></div>
          
          </div>
          
          {
              cart.map((item)=>(
            <div key={item.id}>    
              <div className="row my-2" >
                <div className="col">{item.title}</div>
                <div className="col">$ {item.price}</div>
                <div className="col">{item.count}</div>
                <button className="btn btn-danger col" onClick={()=>removeItem(item.id)}><BsFillTrashFill/></button>
              
              </div>
          </div>

          ))

          }
          
        </div>
      </div>  
      <hr/>
      <p className="mb-6 text-lg leading-8">Total $ {totalCart() }</p>
      <div >
        <button className="btn btn-danger mx-2" onClick={emptyCart}>Vaciar Carrito</button>
        <button className="btn btn-success mx-2">Comprar</button>
      </div>
    </div>
  )
}

export default Cart