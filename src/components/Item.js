import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({title,pictureUrl,id}) => {
  
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 ">
      <div className="card px-3" style={{border:"none"}}>
        <img src={pictureUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <Link to={`/detail/${id}`}><button variant="primary">Ver más</button></Link>
        </div>   
      </div>
    </div>
  )
}

export default Item