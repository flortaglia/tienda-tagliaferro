import React from 'react'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <nav className=" navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Pizzas & empanadas</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav-space navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                        <Link className="nav-Link" to="/promociones">Promociones</Link>
                        </li>
                        <li className="nav-item"><Link className="nav-Link" to="/productos/pizzas">Pizzas</Link>
                        </li>
                        <li className="nav-item"><Link className="nav-Link" to="/productos/empanadas">Empanadas</Link>
                        </li>
                        <li className="nav-item"><Link className="nav-Link" to="/productos/canastitas">Canastitas</Link>
                        </li>
    
                    </ul>
                    <CartWidget/>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Busqueda" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar