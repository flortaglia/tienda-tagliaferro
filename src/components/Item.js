import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({category,title, description, price,pictureUrl,id}) => {
  

  return (
    <div>
      
      <div className="card m-3" style={{width: "18rem"}}>
          <img src={pictureUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <Link to={`/detail/${id}`}><button variant="primary">Ver más</button></Link>
            {/* <p className="card-text">{description}</p>
            <h5>Precio: $<span> {price}</span></h5> */}
          </div>
          
          
      </div>
    </div>
  )
}

export default Item