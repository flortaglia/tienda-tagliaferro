import React, {useState, useContext} from 'react'
import ItemCount from './ItemCount'
import { Link } from "react-router-dom";
import {CartContext} from "../context/CartContext"
import swal from 'sweetalert';


const ItemDetail = ({id,stock, category, title,description,price,pictureUrl}) => {
  
  
  const {cart, addToCart, isInCart, addWidget } = useContext(CartContext)
  
  const onAdd =(count)=>{
    swal("Se agrego al carrito", "gracias", "success");
    if(!isInCart(id)){
      const itemToCart ={
        id,
        title,
        category,
        price,
        pictureUrl,
        count,
        stock
      }
      addToCart(itemToCart)
      console.log(cart) 
      
    }else{
      const index= cart.findIndex((prod)=> prod.id == id) 
      console.log(typeof(cart[index].count))
      console.log(typeof(count))
      cart[index].count = Number(cart[index].count) + count
      console.log(cart[index].count)
      addWidget()
    }
    
  }

  
 
  return (
    <div>
      
      <div className="card my-2" style={{width: "18rem"}}>
        
            <img src={pictureUrl} className="card-img-top" alt={description}/>  
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <h5>Precio: $<span> {price}</span></h5>
          </div>
         
      
      {
        isInCart(id)?
        <>
          <div >
          <ItemCount 
            stock={stock} 
            initial={1}
            onAdd={onAdd}
           />
          
          <Link to="/">
            <button type="button" className="btn btn-secondary my-3" >Seguir comprando</button>
          </Link>
          {/* sería el botón que diría "Terminar Compra", me gusto más poner "Ver Carrito" */}
          <Link to="/cart">
            <button type="button" className="btn btn-primary my-3 mx-2" >Ver Carrito</button>
          </Link>

          </div>
        </>
        :
        <>
          <ItemCount 
            stock={stock} 
            initial={1}
            onAdd={onAdd}
           />  
        </> 
       
      }
     </div>        
    </div> 
  )
}

export default ItemDetail