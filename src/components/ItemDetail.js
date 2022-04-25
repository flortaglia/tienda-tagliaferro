import React, {useContext} from 'react'
import ItemCount from './ItemCount'
import { Link } from "react-router-dom";
import {CartContext} from "../context/CartContext"
import swal from 'sweetalert';


const ItemDetail = ({id,stock, category, title,description,price,pictureUrl}) => {
  
  const {cart, addToCart, isInCart, addWidget} = useContext(CartContext)
  
  const onAdd =(count)=>{
    
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
      swal("Se agrego al carrito", `${count} ${category} de ${title}`, "success");
    }else{
      const index= cart.findIndex((prod)=> prod.id == id) 
      let order = Number(cart[index].count) + count
      if (order<cart[index].stock){
        cart[index].count = Number(cart[index].count) + count
        swal("Se agrego al carrito", `${count} ${category} más de ${title}`, "success");
      }else{
        cart[index].count=cart[index].stock
        swal("No tenemos más stock", `${category} de ${title}`, "warning");
      }
      
      addWidget()
    }
    
  }

  
 
  return (
    
    <div className="card my-2" style={{width: "18rem"}}>
      
      <img src={pictureUrl} className="card-img-top" alt={description}/>  
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <h5>Precio: $<span> {price}</span></h5>
      </div>
      <ItemCount 
        stock={stock} 
        initial={1}
        onAdd={onAdd}
      />
    
      {
        isInCart(id)
        &&
        <div>        
          <Link className="btn btn-success my-3" to="/">
            Seguir Comprando
          </Link>
          <Link className="btn btn-info my-3 mx-2 " style={{color:"white"}} to="/cart">
            Ver Carrito
          </Link>
        </div>        
      }
    </div>        
    
  )
}

export default ItemDetail