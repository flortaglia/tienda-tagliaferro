import React from 'react'
import carrito3 from '../carrito3.png'
import ItemCount from './ItemCount'


const ItemListContainer = (props) => {
  let {text}=props
  
  // let text =props.text
  
  return (
    <div>
        <div>
            HOLA EN ESTA SECCION SE ENCONTRARAN LOS ItemS
            <br/> 
            {text}      
            <ItemCount stock={10} initial={1} />
        </div>




    </div>
  )
}

export default ItemListContainer