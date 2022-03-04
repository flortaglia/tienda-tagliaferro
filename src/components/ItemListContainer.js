import React from 'react'
import carrito3 from '../carrito3.png'

const ItemListContainer = (props) => {
  return (
    <div>
        <div>
            HOLA EN ESTA SECCION SE ENCONTRARAN LOS ItemS
            <br/> 
            {props.text}      
            {/* <div className="card" style="width: 18rem;">
                <img src={carrito3} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
        </div>




    </div>
  )
}

export default ItemListContainer