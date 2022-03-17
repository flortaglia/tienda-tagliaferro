import React, {useState} from 'react'
import carrito3 from '../carrito3.png'
import ItemDetailContainer from './ItemDetailContainer';


const ItemCount = ({stock, initial}) => {
    const [count, setCounter]= useState(initial);
    
    return (
    <div>
         
        <div className="btn-group" role="group" ariaLabel="Basic example">
        <button type="button" className="btn-plus btn btn-primary fas fa-plus" onClick={count==stock?{stock}:()=>{setCounter(count+1)}}>+</button>
        <span  className="count btn btn-primary">{count}</span>
        <button type="button" className="btn-minus btn btn-primary fas fa-minus" onClick={count==1?1:()=>{setCounter(count-1)}}>-</button>
        </div>
        
        
        <div>
        <button className=" agregar btn btn-primary">Agregar</button>
        </div>
           
    </div>
  )
}

export default ItemCount