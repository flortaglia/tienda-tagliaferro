import React from 'react'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div >
      {/* <nav className="navbar navbar-expand-lg navbar-light my-4 mx-4 colorNavFooter">
        <div className="container-fluid d-flex align-items-center justify-content-aroundcollapse navbar-collapse" id="navbarSupportedContent">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
 <div class="collapse navbar-collapse" id="navbarNav">
        <Link className="navbar-Link col" to="/">Pizzas & empanadas</Link>

          <Link className="nav-Link col colorLink  mx-3" to="/productos/pizzas">Pizzas</Link>
          
          <Link className="nav-Link col colorLink mx-3" to="/productos/empanadas">Empanadas</Link>
          
          <Link className="nav-Link col colorLink mx-3" to="/productos/canastitas">Canastitas</Link>
          
          
        </div>
              
        </div>
      </nav> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
        <div className="container-fluid colorNavFooter">
          {/* <Link className="navbar-brand" to="/">Pizzas&Co</Link> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <Link className="navbar-brand" to="/">Pizzas&Co</Link>
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <Link className="nav-link " aria-current="page" to="/productos/pizzas">Pizzas</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/productos/empanadas">Empanadas</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/productos/canastitas">Canastitas</Link>
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