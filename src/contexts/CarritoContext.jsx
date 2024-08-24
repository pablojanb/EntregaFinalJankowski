import { createContext, useState } from "react";

export const CarritoContext = createContext()

export const CarritoProvider = ({children})=>{

    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (item, cantidad, setearCantEnUno)=> {
        const nuevoCarrito = [...carrito]
        const prodEnCarrito = nuevoCarrito.find((el)=>el.id===item.id)
        if (prodEnCarrito){
            prodEnCarrito.cantidad += cantidad
            setCarrito(nuevoCarrito)
        } else {
            setCarrito([...carrito, {...item, cantidad}])
        }
        setearCantEnUno()
    }

    const cantidadEnCarrito = ()=>{
        return carrito.reduce((acc,carrito)=>acc + carrito.cantidad,0)
    }

    const vaciarCarrito = ()=> {
        setCarrito([])
    }
    
    return (
        <CarritoContext.Provider value={{agregarAlCarrito, cantidadEnCarrito, carrito, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
            )
}