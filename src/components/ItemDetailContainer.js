import React, {useState, useEffect} from 'react'
// import searchProduct from './PedirDatos'
import ItemDetail from './ItemDetail'
import SingleProductDetail from './SingleProductDetail'

const ItemDetailContainer = () => {
    // const [loading, setLoading] = useState(false)
    const [ItemDetailProduct, setItemDetail] = useState({})
    
    useEffect(()=>
    SingleProductDetail().then((prod)=>setItemDetail(prod))
    .catch((error)=>{console.log(error)})
    .finally(()=>console.log("Termino")),[]
    )
  
        
            // let arr=[]
            // console.log("estoy en Conteiner detail")
            // useEffect(()=>{
            //     for (let i=1;i<3;i++){
                    
            //         searchProduct(i)
            //         .then((res) =>res.json())
            //         .then((res) => {
            //             console.log( 'Hola',res)
            //             arr.push(res)
            //             console.log("estoy arr",arr)
            //             setItemDetail([...arr])
            //             console.log("estoy en setItemDetail",ItemDetailProduct) 
            //         })
            //         .finally(() => {
                        
            //         })
            //     }
                
                
                
            // },[])
            // console.log("estoy en setItemDetail2",ItemDetailProduct) 
            

  return (
    <div>ItemDetailContainer
        {/* { 
        loading 
        ? <h2>Cargando...</h2>: */}
        {/* <button className=" agregar btn btn-primary" onClick={()=>console.log("obtenerProductos")}>ver más</button>  */}
        <ItemDetail detail= {ItemDetailProduct}/>   
    </div>
  )
}

export default ItemDetailContainer