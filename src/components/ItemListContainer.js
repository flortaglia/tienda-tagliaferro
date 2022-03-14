import React, {useState, useEffect} from 'react'
import carrito3 from '../carrito3.png'
import Item from './Item'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import ProductLoader from './ProductLoader'


const ItemListContainer = ({text}) => {
  
  
  const [item,setItem]=useState([]);

  useEffect(()=>
  ProductLoader().then((prod)=>setItem(prod))
  .catch((error)=>{console.log(error)})
  .finally(()=>console.log("Termino")),[]
  )
  
  return (
    <div>
        <div>
            HOLA EN ESTA SECCION SE ENCONTRARAN LOS ItemS
            <br/> 
            {text}
            <ItemList listProducts={item}/>
        </div>

    </div>
  )
}

export default ItemListContainer