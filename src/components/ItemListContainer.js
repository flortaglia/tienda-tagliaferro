import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import ProductLoader from './ProductLoader'
import {useParams} from 'react-router-dom'


const ItemListContainer = ({text}) => {
  
  
  const [item,setItem]=useState([]);
  const {categoryId} =useParams()
  
  useEffect(()=>
  ProductLoader()
  .then((prod)=>{
    if(!categoryId){setItem(prod)}
    else{setItem(prod.filter((product)=>product.category===categoryId))}
  })
  .catch((error)=>{console.log(error)})
  .finally(()=>console.log("Termino"))
  ,[categoryId])
  
  return (
    <div>
        <div>
        <h1>{categoryId}</h1>
            {text}
            <ItemList listProducts={item}/>
        </div>

    </div>
  )
}

export default ItemListContainer