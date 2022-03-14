import React from 'react'
import Item from './Item'

const ItemList = ({listProducts}) => {
   console.log(listProducts)
  return (
    <div>
      <div className="card-group row-cols-md-4 g-4">
       {listProducts.map((product,i) => {
       return <Item key={i} title={product.title}
       description={product.description} price={product.price} img={product.pictureUrl}/>
        })} 
      </div>  
    </div>
  )
}
export default ItemList