import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import ProductLoader from './ProductLoader'
import {useParams} from 'react-router-dom'


const ItemListContainer = () => {
  
  // const [loading, setLoading] = useState(false)
  const [item,setItem]=useState([]);
  const {categoryId} =useParams()
  
  useEffect(()=>{

    // setLoading(true),
    ProductLoader()
    .then((prod)=>{
      if(categoryId)
      {setItem(prod.filter((product)=>product.category===categoryId))}
      else{setItem(prod)}
    })
    .catch((error)=>{console.log(error)})
    .finally()
    // .finally(()=>setLoading(false))

  },[categoryId])
  
  return (
    <div>
        <div>
        {/* { 
          loading? 
          <h2>Cargando...</h2> : */}
          <h1>{categoryId}</h1>
            <ItemList listProducts={item}/>
           
        </div>

    </div>
  )
}

export default ItemListContainer