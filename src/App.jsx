import { Footer } from "./components/Footer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./contexts/CarritoContext";
import { Carrito } from "./components/Carrito";



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
          </Routes>
          <Footer />
        </BrowserRouter>
      </CarritoProvider>
    </>
  )
}

export default App
