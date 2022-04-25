import React from 'react'
import Item from './Item'

const ItemList = ({listProducts}) => {
   
  return (
    <div>
      
      <div className="card-group row-cols-md-4 g-4">
      
       {listProducts.map((product) => 
        <Item key={product.id} {...product}/>)} 
      </div>  
    </div>
  )
}
export default ItemList