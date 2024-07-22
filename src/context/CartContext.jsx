import { useEffect } from "react";
import { createContext, useState } from "react";


export const CartContext = createContext();

const carritoPrincipio = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoPrincipio)
    const agregarAlCarrito = (item, cantidad) => {

        const itemAgregado = { ...item, cantidad }
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);



        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad = estaEnElCarrito.cantidad + cantidad;


        } else {
            nuevoCarrito.push(itemAgregado)

        }
        setCarrito(nuevoCarrito)
       


        
    }

    const cantidadCarrito = () => {
        return carrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    }

    const total = () => {
        return carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)
    }

    const borrarCarrito = () => {
        setCarrito([])
    }

    useEffect(() => {
      localStorage.setItem("carrito", JSON.stringify(carrito))
    
      
    }, [carrito])
    
   

  return(
    <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadCarrito, total, borrarCarrito }}>
    {children}
    </CartContext.Provider>

  )
}