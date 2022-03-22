import React, {useState} from 'react'



const ItemCount = ({stock, onAdd, count, setCounter}) => {
   
  const handleRestar=()=>{
    count>1 && setCounter(count-1)

  }
  const handleSumar=()=>{
    count<stock && setCounter(count+1)

  }  
    return (
    <div>
         
        <div className="btn-group" role="group" ariaLabel="Basic example">
        <button type="button" className="btn-plus btn btn-primary fas fa-plus" onClick={handleSumar}>+</button>
        <span  className="count btn btn-primary">{count}</span>
        <button type="button" className="btn-minus btn btn-primary fas fa-minus" onClick={handleRestar}>-</button>
        </div>
        
        
        <div>
        <button className=" agregar btn btn-primary" onClick={onAdd}>Agregar</button>
        </div>
           
    </div>
  )
}

export default ItemCount