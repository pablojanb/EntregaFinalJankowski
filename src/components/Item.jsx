import { Link } from "react-router-dom"

export const Item = ({item})=> {
    return (
        <div className="item">
            <h1>{item.title}</h1>
            <img className="img-item" src={item.img} alt={item.title} />
            <p><strong>${item.price}</strong></p>
            <Link to={`/item/${item.id}`} className="ver-mas">Ver más</Link>
        </div>
            )
}