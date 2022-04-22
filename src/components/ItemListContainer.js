import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import {db} from "../utils/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import {useParams} from 'react-router-dom'


const ItemListContainer = () => {
  
  const [loading, setLoading] = useState(false)
  const [item,setItem]=useState([]);
  const {categoryId} =useParams()
  
  useEffect( () => {
    setLoading(true)

  //  armar referencia
    const productosRef = collection(db, 'items')
    const q = categoryId ? query(productosRef, where("category", "==", categoryId)) : productosRef
    //pedir esa ref
    getDocs(q)
        .then((resp) => {
            setItem( resp.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
        })
        .finally(() => {
            setLoading(false)
        })

}, [categoryId])
  
  return (
    <div>
        <div>
        { 
          loading? 
          <h2>Cargando...</h2> :
          <>
          <h1>{categoryId}</h1>
            <ItemList listProducts={item}/>
          </>
        }   
        </div>

    </div>
  )
}

export default ItemListContainer