
import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext";


const ItemDetalle = ({item}) => {


  const {carrito, agregarAlCarrito} = useContext(CartContext);
  console.log(carrito)
  
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
      cantidad > 1 && setCantidad (cantidad - 1)
  }
  const handleSumar = () => {
      cantidad < item.stock && setCantidad(cantidad + 1)
  }



  return (
    <div className="container">
        <div className="detalleProductos">
            <img className="imagenProducto" src={item.imagen} alt={item.titulo} />
            <div>
                <h3 className="titulo">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="categoria">{item.categoria}</p>
                <p className="precio">${item.precio}</p>
                <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={() => {agregarAlCarrito(item, cantidad)}} />
                
            </div>

        </div>

    </div>
  )
}

export default ItemDetalle