import CartWidget from "./CartWidget"
function NavBar(props) {

    console.log(props)
    return (
        <nav>
            <div className="containerNav">
                <a className="link" href="">Home</a>
                <a className="link" href="">Productos</a>
                <a className="link" href="">Contacto</a>
                <CartWidget/>
            </div>
   
     
       
        
        </nav>
    )

}

export default NavBar