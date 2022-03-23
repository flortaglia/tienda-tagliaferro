import React, {useState, useEffect} from 'react'
import ItemCount from './ItemCount'
import {Modal} from './Modal';


const ItemDetail = ({id,stock, category, title,description,price,pictureUrl}) => {
  
  const [count, setCounter]= useState(1);
  const onAdd =()=>{
    const itemToCart ={
      id,
      title,
      category,
      price,
      pictureUrl,
      count
    }
    
    console.log(itemToCart)
  }

  return (
    <div>
      {title}
      <div className="card" style={{width: "18rem"}}>
            <img src={pictureUrl} className="card-img-top" alt={description}/>  
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <h5>Precio: $<span> {price}</span></h5>
          </div>
          <ItemCount 
          stock={stock} 
          count={count} 
          title={title}
          setCounter={setCounter}
          onAdd={onAdd}
          category={category}
          />
      </div>    
    </div> 
  )
}

export default ItemDetail