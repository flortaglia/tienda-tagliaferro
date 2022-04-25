import React from 'react'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";

const NavBar = () => {

  const navItems=[
    {title:"Pizzas", to:"/productos/Pizzas"},
    {title:"Empanadas", to:"/productos/Empanadas"},
    {title:"Canastitas", to:"/productos/Canastitas"}
  ]

  return (
    <div >
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
        <div className="container-fluid colorNavFooter">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <Link className="navbar-brand" to="/">
              <img src="/pizza.png" alt="logo" id="mainLogo" />
            </Link>
            
            <ul className="navbar-nav">
              { navItems.map(navItem=>
                <li className="nav-item mx-3">
                  <Link className="nav-link mb-0 h3" aria-current="page" to={navItem.to}>{navItem.title}</Link>
                </li>
              )}             
            </ul> 
          </div>
          <div className="col-2"><CartWidget/></div> 
        </div>
        
      </nav>
    </div>
  )
}

export default NavBar