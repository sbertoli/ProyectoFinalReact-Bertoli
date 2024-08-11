import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className='navBar'>
      <Link to="/" className='logo'> <h1>SouthSide - Shop</h1></Link>
      <ul className='menu'>
        <li><Link to="/" className='linkMenu'>Inicio</Link></li>
        <li><Link to="/productos" className='linkMenu'>Productos</Link></li>
        <li><Link to="/productos/medias" className='linkMenu'>Medias</Link></li>
        <li><Link to="/productos/pantalones" className='linkMenu'>Pantalones</Link></li>
        <li><Link to="/productos/remeras" className='linkMenu'>Remeras</Link></li>
        <li><Link to="/productos/buzos" className='linkMenu'>Buzos</Link></li>
        <li><Link to="/nosotros" className='linkMenu'>Nosotros</Link></li>
        <li><Link to="/contacto" className='linkMenu'>Contacto</Link></li>
        <li><CartWidget /></li>



      </ul>
    </nav>
  )
}

export default NavBar