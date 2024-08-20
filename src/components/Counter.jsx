
export const Counter = ({cantidad, handleRestar, handleSumar})=> {
    
    return (
        <div className="counter">
            <div className="cantidad">
                <button onClick={handleRestar} className="btn-cantidad">-</button>
                <p className="numCantidad">{cantidad}</p>
                <button onClick={handleSumar} className="btn-cantidad">+</button>
            </div>
            <button className="btn-agregar">Agregar al carrito</button>
        </div>
            )
}