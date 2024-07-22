import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import {db} from "../firebase/data"



const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, total, borrarCarrito } = useContext(CartContext);


    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: total()
        }
        console.log(pedido)
        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
        .then((doc)=> {
            setPedidoId(doc.id)
            borrarCarrito();
        })
    }

        if (pedidoId){
            return(
                <div className="container">
                    <h1>Muchas gracias por tu compra y por confiar en nosotros💖🥳!</h1>
                    <h2>Este es el numero de tu pedido😊🙌: {pedidoId}</h2>
                </div>
            )
        }
    return (
        <div className='container'>
            <h1 className='mainTitle'>Finalizar mi compra</h1>
            <form className='formulario' onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder='Ingresá tu nombre' {...register("nombre")} />
                <input type="email" placeholder='Ingresa tu email'{...register("email")} />
                <input type="phone" placeholder='Ingresa tu telefono'{...register("telefono")} />

                <button type='submit' className='enviar'>Compra</button>
            </form>
        </div>
    )
}

export default Checkout