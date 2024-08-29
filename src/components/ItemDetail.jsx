import { CarritoContext } from "../contexts/CarritoContext"
import { Counter } from "./Counter"
import { useContext, useState } from "react"

export const ItemDetail = ({item, loading}) => {

    const {agregarAlCarrito} = useContext(CarritoContext)

    const [cantidad, setCantidad] = useState(1)
    const handleRestar = ()=>{
        cantidad > 1 && setCantidad((prev)=>prev - 1)
    }
    const handleSumar = ()=>{
        cantidad < item.stock && setCantidad((prev)=>prev + 1)
    }

    const setearCantEnUno = ()=> {
        setCantidad(1)
    }

    if (loading) {
        return (
            <div className="cargando">
                <h1>Cargando</h1>
            </div>
        )
    }
    
    return (
        item &&
        <div className="itemDetail">
            <h1>{item.title}</h1>
            <div className="description">
                <div>
                <img className="img-item-detail" src={item.img} alt={item.title} />
                <p><strong>${item.price}</strong></p>
                </div>
                <div className="counter">
                    <p>{item.description}</p>
                    <Counter cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} agregarAlCarrito={()=>agregarAlCarrito(item, cantidad, setearCantEnUno)} stock={item.stock} />
                </div>
            </div>
        </div>
    )
}