import React, {useState} from 'react'
import carrito3 from '../carrito3.png'


const ItemCount = (props) => {
    const [count, setCounter]= useState(1);
    let {stock}=props
    return (
    <div>

        <div className="card" style={{width: "18rem"}}>
            <img src={carrito3} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                <div className="btn-group" role="group" ariaLabel="Basic example">
                <button type="button" className="btn-plus btn btn-primary fas fa-plus" onClick={count==stock?{stock}:()=>{setCounter(count+1)}}>+</button>
                <button type="button" className="count btn btn-primary">{count}</button>
                <button type="button" className="btn-minus btn btn-primary fas fa-minus" onClick={count==1?1:()=>{setCounter(count-1)}}>-</button>
                </div>
                <div>
                <a href="#" className=" agregar btn btn-primary">Agregar</a>
                </div>
            </div>

        </div>
        

    </div>
  )
}

export default ItemCount