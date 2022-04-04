import React, {useState, useEffect} from 'react'
// import searchProduct from './PedirDatos'
import ItemDetail from './ItemDetail'
import {getDoc, doc} from "firebase/firestore"
import {db} from "../utils/firebase"
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false)
  const [ItemDetailProduct, setItemDetail] = useState(null);
  const {seeId} =useParams()

  useEffect(() => {
    setLoading(true)
    
    // referencia al document
    const itemRef = doc(db, "items", seeId)
    // peticion del doc
    getDoc(itemRef)
        .then((doc) => {
            setItemDetail({id: doc.id, ...doc.data()})
        })
        .finally(()=> {
            setLoading(false)
        })
}, []) 

  return (
    <div>
      { 
        loading 
        ? <h2>Cargando...</h2>: 
        <ItemDetail {...ItemDetailProduct}/>
      }
           
    </div>
  )
}

export default ItemDetailContainer