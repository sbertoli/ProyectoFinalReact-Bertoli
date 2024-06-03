import carrito from "../carrito.png"

function CartWidget (){
    return (
        <div className="carrito">
        <img src={carrito} alt="carritoLogo" className="carritoLogo"  />
        <p className="numerito">0</p>
        </div>
    )
}

export default CartWidget