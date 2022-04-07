import React,{useState,useContext} from 'react'
import {CartContext} from "../context/CartContext"


const ItemCount = ({stock, initial, onAdd }) => {

  const [count, setCounter]= useState(initial);
  

  const handleRestar=()=>{
    count>1 && setCounter(count-1)

  }
  const handleSumar=()=>{
    count<stock && setCounter(count+1)

  }  

  const reset = ()=>{
    setCounter(1);
  }
    return (
    <div>
         
        <div className="btn-group" role="group">
        <button type="button" className="btn-plus btn btn-primary fas fa-plus" onClick={handleSumar}>+</button>
        <span  className="count btn btn-primary">{count}</span>
        <button type="button" className="btn-minus btn btn-primary fas fa-minus" onClick={handleRestar}>-</button>
        </div>
        <div>
          <button type="button" className="btn btn-primary mx-5 my-2"  onClick={()=>{onAdd(count);reset()}}>
            Agregar
          </button>
        </div>
         
    </div>
  )
}

export default ItemCount