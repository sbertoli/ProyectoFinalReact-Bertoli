import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

function CartWidget() {
    const {cantidadCarrito} = useContext(CartContext)
    return (
        <div>
            <li><Link to="/carrito" className='linkMenu'>
                Carrito
                <span className='numCarrito'> {cantidadCarrito()} </span>
            </Link></li>

        </div>
    )
}

export default CartWidget