import { addDoc, collection,where,query,getDocs, 
   Timestamp, writeBatch, documentId } from 'firebase/firestore';
import React, {useContext} from 'react'
import {CartContext} from "../context/CartContext"
import {db} from "../utils/firebase"
import swal from 'sweetalert';


function Form() {
  const {cart, totalCart,emptyCart} = useContext(CartContext)

  const sendOrder = async(e)=>{
    e.preventDefault();
    console.log (e);
    const nombre= e.target[0].value;
    const apellido= e.target[1].value;
    const email= e.target[2].value;
    const direccion= e.target[3].value;
    const telefono= e.target[4].value;
    const indicacionesPedido=e.target[5].value;
    
    const orderCollection = collection(db,'orders')
    const productosRef = collection(db, 'items')

    const newOrder = {
      buyer:{
        nombre,
        apellido,
        email,
        direccion,
        telefono,
        indicacionesPedido
      },
      item:cart,
      total:totalCart(),
      date:Timestamp.fromDate(new Date())
    }
    console.log(newOrder)
    
    
   
    //cambiar stock
    const batch= writeBatch(db)
    const productCartIds = cart.map((el) => el.id)
    const q = query(productosRef, where(documentId(), 'in', productCartIds))
    const productos = await getDocs(q)
    const outOfStock = []
    
    productos.docs.forEach((doc) => {
        const item = cart.find((el) => el.id === doc.id)

        if (doc.data().stock >= item.count) {
            batch.update(doc.ref, {
                stock: doc.data().stock - item.count
            })
        } else {
            outOfStock.push(item)
        }
    })

    if (outOfStock.length === 0) {
        addDoc(orderCollection, newOrder)
            .then((createdOrder) => {
                console.log(createdOrder)
                console.log(createdOrder.id)
                batch.commit()
                swal(`Gracias por tu compra ${newOrder.buyer.nombre}. Tu id es:`, createdOrder.id, "success");
                emptyCart()
            })
        
    } else {
        alert("Hay items sin stock")
    }
  
  }
  
  return (
    <div>
      <form className="row g-3" onSubmit={sendOrder}>
        <div className="col-md-4">
          <label for="validationDefault01" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="validationDefault01" placeholder="Nombre" required/>
        </div>
        <div className="col-md-4">
          <label for="validationDefault02" className="form-label">Apellido</label>
          <input type="text" className="form-control" id="validationDefault02" placeholder="Apellido" required/>
        </div>
        <div className="col-md-4">
          <label for="exampleFormControlInput1" className="form-label">Email </label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nombre@mail.com"/>
        </div>
        <div className="col-md-8">
          <label for="validationDefault03" className="form-label">Dirección</label>
          <input type="text" className="form-control" id="validationDefault03" required/>
        </div>
        
        <div className="col-md-4">
          <label for="validationDefault05" className="form-label">Teléfono</label>
          <input type="number" className="form-control" id="validationDefault05" required/>
        </div>
        
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Notas</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"placeholder="Agrega aquí las instrucciones que necesites detallar"></textarea>
        </div>
        <div className="col-12">
          <div className="form-check col-2">
            <input className="form-check-input mx-0" type="checkbox" value="" id="invalidCheck2" required/>
            <label className="form-check-label p-0" for="invalidCheck2">
              Acepto los terminos y condiciones
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit" >Enviar</button>
        </div>
      </form>

    </div>
  )
}

export default Form