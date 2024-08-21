import { Container } from "react-bootstrap"
import { useContext } from "react"
import { CarritoContext } from "../contexts/CarritoContext"

export const Carrito = ()=> {

    const {carrito} = useContext(CarritoContext)
    const {vaciarCarrito} = useContext(CarritoContext)

    if (carrito.length < 1) {
        return (
            <Container>
                <h1>El carrito esta vacio</h1>
            </Container>
                )
    }

    return (
            <Container>
            <div className="carrito">
                {
                    carrito.map((el)=>{
                        return (
                            <div key={el.id} className="producto-carrito">
                                <h2>{el.title}</h2>
                                <img src={el.img} alt={el.title} />
                                <p><strong>${el.price}</strong></p>
                                <p>Cantidad: {el.cantidad}</p>
                                <p><strong>Subtotal: ${el.cantidad * el.price}</strong></p>
                            </div>
                                )
                    })
                }
            </div>
            <div className="menu-carrito">
                <p>Total: {carrito.reduce((acc,prod)=>acc+prod.price*prod.cantidad,0)}</p>
                <button onClick={vaciarCarrito}>Vaciar carrito</button>
                <button>Comprar carrito</button>
            </div>
            </Container>
            )
}