
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import PaginaDetalle from "./components/PaginaDetalle";
import Nosotros from "./components/Nosotros";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/Contacto";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";








function App() {

  
  return (
    <>
      <div>
        <CartProvider> 
          <BrowserRouter>
            <NavBar />


            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<PaginaDetalle />} />
              <Route path="/productos/" element={<ItemListContainer />} />
              <Route path="/productos/:categoria" element={<ItemListContainer />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/checkout" element={<Checkout />} />



            </Routes>






          </BrowserRouter>
        </CartProvider>
      </div>









    </>

  )


}

export default App;