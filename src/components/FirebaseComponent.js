import React, {useEffect, useState} from 'react'
import {getDocs, collection, getDoc, doc} from "firebase/firestore"
import {db} from "../utils/firebase"

const FirebaseComponent = () => {

    const [productos, setProductos]=useState([])

    useEffect(()=>{
        //función para obtener datos, async xq servicio externo 
        const getData = async()=>{
            //Petición=>primero base de datos, luego nombre colección
            const query = collection(db, 'items');
            //Variable de respuesta obtenida de la petición a firebase, como es async ..recibe palabre await
            const response = await getDocs(query);
            console.log(response)
            //para acceder a los datos, creo una variable que contenga mi info (propiedad docs)
            //metodo data me da la info de cada uno de los documentos
            const dataItems = response.docs.map(doc=>{ return {id:doc.id,...doc.data()}})
            console.log(dataItems)
            // const newDoc ={
            //     id:doc.id,
            //     data:doc.data()
            // }

            setProductos(dataItems)

            //petición único documento
            //creamos referencia
            const queryDoc = doc(db,'items','idpasarlo')
            //recibe respuesta
            const response1 = await getDoc(queryDoc)
            //acceder a la Data
            const dataDoc= response1.data()
            console.log(dataDoc)
        }
        getData();
    },[])

  return (
    <div>FirebaseComponent
        {
            productos.map(producto =>(
                <div key={producto.id}>{producto.title}</div>
            ))
        }
    </div>
  )
}

export default FirebaseComponent