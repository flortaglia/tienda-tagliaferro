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
                        <Link className="nav-Link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-Link" to="/promociones">Promociones</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <Link className="nav-Link dropdown-toggle" to="/productos" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/productos/pizzas">Pizzas</Link></li>
                            <li><Link className="dropdown-item" to="/productos/empanadas">Empanadas</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to="/productos/canastitas">Canastitas</Link></li>
                        </ul>
                        </li>
                        {/* <li className="nav-item">
                        <a className="nav-Link disabled">Disabled</a>
                        </li> */}
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