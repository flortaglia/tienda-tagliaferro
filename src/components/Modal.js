import React from 'react'
import { Link } from "react-router-dom";

export const Modal =({onAdd, title, count, category})=> {

    
  return(
    <>
    
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={onAdd}>
    Agregar
    </button>
    

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Agregaste al carrito</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                 {category}: {count} de {title} 
                </div>
                <div className="modal-footer">
                    <Link to="/">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Seguir comprando</button>
                    </Link>
                    <Link to="/cart">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Ver Carrito</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

