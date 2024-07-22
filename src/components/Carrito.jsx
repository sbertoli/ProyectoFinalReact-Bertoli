import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';


const Carrito = () => {

    const {carrito, total, borrarCarrito} = useContext(CartContext);

    const handleBorrar = () => {
        borrarCarrito();
    }

  return (
    <div className='container'>
        <h1 className='mainTitulo'>Carrito</h1>

        {
            carrito.map((item) => (
                
                <div key={item.id}>
                <br/>
                <h3>{item.titulo}</h3>
                <p>${item.precio}</p>
                <p>Precio Total: ${item.precio * item.cantidad}</p>
                <p>Cantidad: {item.cantidad}</p>
                <br />
                </div>

            ))
        }
       {  
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${total()}</h2>
                <button className='botonVaciar' onClick={handleBorrar}>Vaciar</button>
                <Link to="/checkout">Finalizar mi Compra</Link>
            </> :
            <h2>El carrito está vacío</h2>
        }
    
       
    
    
    </div>
  )
}

export default Carrito