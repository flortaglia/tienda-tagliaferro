// import React, {useEffect, useState} from 'react'
// import {getDocs, collection, getDoc, doc} from "firebase/firestore"
// import { async } from '@firebase/util'
// import {db} from "../utils/firebase"

// const FirebaseComponent = () => {

//     const [productos, setProductos]=useState([])
//     useEffect(()=>{
//         const getData = async()=>{
//             const query = collection(db, 'items');
//             const response = await getDocs(query);
//             console.log(response)
//             const dataItems = response.docs.map(doc=>{ return {id:doc.id,...doc.data()}})
//             console.log(dataItems)
//             // const newDoc ={
//             //     id:doc.id,
//             //     data:doc.data()
//             // }
//             setProductos(dataItems)
//             const queryDoc = doc(db,'items','idpasarlo')
//             const response1 = await getDoc(queryDoc)
//             const dataDoc= response1.data()
//             console.log(dataDoc)
//         }
//         getData();
//     },[])

//   return (
//     <div>FirebaseComponent
//         {
//             productos.map(producto =>)
//         }
//     </div>
//   )
// }

// export default FirebaseComponent