import { Footer } from "./components/Footer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./contexts/CarritoContext";
import { Carrito } from "./components/Carrito";
import { Checkout } from "./components/Checkout";
import { Error404 } from "./components/Error404";



function App() {
  

  return (
    <>
      <CarritoProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/productos" element={<ItemListContainer />}/>
            <Route path="/category/:id" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="*" element={<Error404 />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CarritoProvider>
    </>
  )
}

export default App
