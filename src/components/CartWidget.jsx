import { Link } from "react-router-dom"
import { CarritoContext } from "../contexts/CarritoContext"
import { useContext } from "react"

export const CartWidget = () => {
    const {cantidadEnCarrito} = useContext(CarritoContext)
    return (
        <>
        <Link className="btn-carrito" to="/carrito"><i className="fa-solid fa-cart-shopping"></i><span>{cantidadEnCarrito()}</span></Link>
        </>
    )
}