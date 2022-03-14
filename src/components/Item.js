import React from 'react'
import carrito3 from '../carrito3.png'
import ItemCount from './ItemCount'

const Item = ({key,title, description, price,img}) => {
  

  return (
    <div>
      
         <div className="card" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <p className="card-text">{description}</p>
              <h5>Precio: $<span> {price}</span></h5>
            </div>
            
            <ItemCount stock={10} initial={1} />
        </div>
    </div>
  )
}

export default Item