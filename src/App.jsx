
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import PaginaDetalle from "./components/PaginaDetalle";
import Nosotros from "./components/Nosotros";
import {BrowserRouter, Route, Routes} from "react-router-dom";





function App() {


  return (
    <>
      <div>
        
        <BrowserRouter>
         <NavBar/>
        
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<PaginaDetalle />}/>
          <Route path="/productos/" element={<ItemListContainer/>}/>
          <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
          <Route path="/Nosotros" element={<Nosotros/>}/>

        </Routes>



         


         </BrowserRouter>
      </div>
    
     
   






    </>

  )


}

export default App;