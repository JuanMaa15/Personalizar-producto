import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="logo">
                <h2>Design<span>SHOP</span></h2>
            </div>
            <nav className="nav">
                <ul>
                    <li><NavLink to="/inicio" className={ ({isActive}) => isActive ? "active" : "" }>Inicio</NavLink></li>
                    <li><NavLink to="/personalizar" className={ ({isActive}) => isActive ? "active" : "" }>Personalizar</NavLink></li>
                    <li><NavLink to="/carrito" className={ ({isActive}) => isActive ? "active" : "" }>Carrito</NavLink></li>
                    <li><NavLink to="/listado" className={ ({isActive}) => isActive ? "active" : "" }>Listado</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
