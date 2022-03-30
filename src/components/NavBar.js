import React from 'react'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <nav className="nav my-4 mx-4">
            <div className="container row">
                <Link className="navbar-Link col" to="/">Pizzas & empanadas</Link>
                      
                <Link className="nav-Link col  mx-3" to="/promociones">Promociones</Link>
                
                <Link className="nav-Link col  mx-3" to="/productos/pizzas">Pizzas</Link>
                
                <Link className="nav-Link col  mx-3" to="/productos/empanadas">Empanadas</Link>
                
                <Link className="nav-Link col  mx-3" to="/productos/canastitas">Canastitas</Link>
                <div className="col"><CartWidget/></div>
                
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Busqueda" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form> */}
                
            </div>
        </nav>
    </div>
  )
}

export default NavBar