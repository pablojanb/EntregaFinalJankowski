
export const Counter = ({cantidad, handleRestar, handleSumar, agregarAlCarrito, stock})=> {

    return (
        <div className="counter">
            <div className="cantidad">
                <button onClick={handleRestar} className="btn-cantidad">-</button>
                <p className="numCantidad">{cantidad}</p>
                <button onClick={handleSumar} className="btn-cantidad">+</button>
            </div>
            <button onClick={agregarAlCarrito} className="btn-agregar">Agregar al carrito</button>
            <p className="stock">Stock: {stock}</p>
        </div>
            )
}