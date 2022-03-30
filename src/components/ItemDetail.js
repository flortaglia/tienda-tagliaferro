import React, {useState, useContext} from 'react'
import ItemCount from './ItemCount'
import { Link } from "react-router-dom";
import {CartContext} from "../context/CartContext"


const ItemDetail = ({id,stock, category, title,description,price,pictureUrl}) => {
  
  const [count, setCounter]= useState(1);
  const {cart, addToCart, isInCart } = useContext(CartContext)
  
  const onAdd =()=>{
    if(!isInCart(id)){
      const itemToCart ={
        id,
        title,
        category,
        price,
        pictureUrl,
        count
      }
      addToCart(itemToCart)
      console.log(cart) 
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
            count={count} 
            title={title}
            setCounter={setCounter}
            onAdd={onAdd}
            category={category}
           />
        
          <button type="button" className="btn btn-primary mx-5 my-2"  onClick={onAdd}>
          Agregar
          </button>  
        </> 
       
      }
     </div>        
    </div> 
  )
}

export default ItemDetail