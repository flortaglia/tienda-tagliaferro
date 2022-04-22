import React from 'react'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div >
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
        <div className="container-fluid colorNavFooter">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <Link className="navbar-brand" to="/">Pizzas&Co</Link>
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <Link className="nav-link " aria-current="page" to="/productos/Pizzas">Pizzas</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/productos/Empanadas">Empanadas</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/productos/Canastitas">Canastitas</Link>
              </li>            
            </ul>
          </div>
          <div className="col-2"><CartWidget/></div> 
        </div>
        
      </nav>
    </div>
  )
}

export default NavBar