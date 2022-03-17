import React from 'react'

const ItemDetail = ({detail}) => {
    
  return (
    <div>
        soy Item detail
       {console.log(detail)}
        <div className="card" style={{width: "18rem"}}>
              <img src={detail.pictureUrl} className="card-img-top" alt="..."/>  
            <div className="card-body">
              <h4 className="card-title">{detail.title}</h4>
              <p className="card-text">{detail.description}</p>
              <h5>Precio: $<span> {detail.price}</span></h5>
            </div>
        </div>    
    </div> 
  )
}

export default ItemDetail