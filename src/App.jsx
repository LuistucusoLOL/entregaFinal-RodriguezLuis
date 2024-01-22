import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatalogoContainer from "./componentes/CatalogoContainer/CatalogoContainer";
import ProductDetailContainer from "./componentes/ProductDetailContainer/ProductDetailContainer";
import NavBar from "./componentes/NavBar/NavBar";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./componentes/Cart/Cart";
import Checkout from "./componentes/Checkout/Checkout";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
            <Routes>
              <Route path="/" element={<CatalogoContainer/>} />
              <Route path="/categoria/:idCategoria" element={<CatalogoContainer/>}  />
              <Route path="/item/:idItem" element={<ProductDetailContainer/>}  />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="*" element={<h2>Sitio en construcción</h2>} />
            </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
