import { useState } from "react"
import { Container } from "react-bootstrap"
import { useContext } from "react"
import { CarritoContext } from "../contexts/CarritoContext"

export const Checkout = ()=> {

    const {carrito} = useContext(CarritoContext)

    const [cliente, setCliente] = useState({
        nombre: "",
        apellido: "",
        email:"",
        confirmemail: "",
    })

    const pedido = {
        cliente: cliente,
        productos: carrito,
        total: carrito.reduce((acc,prod)=>acc+prod.price*prod.cantidad,0)
    }

    const handleChange = (e)=>{
        setCliente(
            {
                ...cliente, 
                [e.target.name]: e.target.value
            }
        )
    }

    const handleCompra = (e)=>{
        e.preventDefault()
        console.log(pedido)
    }

    return (
        <Container>
            <h1>Formulario de contacto</h1>
            <form className="contact-form" onSubmit={handleCompra}>
                <input type="text" placeholder="Ingrese su nombre" name="nombre" onChange={handleChange}/>
                <input type="text" placeholder="Ingrese su apellido" name="apellido" onChange={handleChange}/>
                <input type="text" placeholder="Ingrese su email" name="email" onChange={handleChange}/>
                <input type="text" placeholder="Confirme su email" name="confirmemail" onChange={handleChange}/>
                <button type="submit" className="btn-carrito">Confirmar compra</button>
            </form>
        </Container>
            )
}