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
                batch.commit()
                swal(`Gracias por tu compra ${newOrder.buyer.nombre}. Tu id es:`, createdOrder.id, "success");
                emptyCart()
            })
        
    } else {
        alert("Hay items sin stock")
    }
  
  }
  
  const fields=[
    {title:"Nombre", type:"text", placeHolder:"Pablo"},
    {title:"Apellido", type:"text", placeHolder:"Sanchez"},
    {title:"Dirección", type:"text", placeHolder:"Av Cabildo 3383"},
    {title:"Teléfono", type:"number", placeHolder:"11.5642.3383"}
  ]
  
  return (
    <div>
      <form className="row g-6 mx-4" onSubmit={sendOrder}>
      {
        fields.map(field=> 
        <div className="col-md-6">
          <label for="validationDefault01" className="form-label">{field.title}</label>
          <input type={field.type} className="form-control" id="validationDefault01" placeholder={field.placeHolder} required/>
        </div>  
        )
      }
        
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Notas</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"placeholder="Agrega aquí las instrucciones que necesites detallar: sin sal, condimentos..."></textarea>
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