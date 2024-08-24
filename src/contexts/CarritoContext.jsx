import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext()

export const CarritoProvider = ({children})=>{

    const carritoInicial = JSON.parse(localStorage.getItem("carrito"))

    const [carrito, setCarrito] = useState(carritoInicial)

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

    const eliminarProducto = (prod)=>{
        setCarrito(carrito.filter((el)=>el.id !== prod.id))
    }

    const cantidadEnCarrito = ()=>{
        return carrito.reduce((acc,carrito)=>acc + carrito.cantidad,0)
    }

    const vaciarCarrito = ()=> {
        setCarrito([])
    }

    useEffect(()=>{
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])
    
    return (
        <CarritoContext.Provider value={{agregarAlCarrito, cantidadEnCarrito, carrito, vaciarCarrito, eliminarProducto}}>
            {children}
        </CarritoContext.Provider>
            )
}