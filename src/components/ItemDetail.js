import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({stock, title,description,price,pictureUrl}) => {
    
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
          <ItemCount stock={stock} initial={1} />
      </div>    
    </div> 
  )
}

export default ItemDetail