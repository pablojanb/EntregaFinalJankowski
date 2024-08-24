import { Container } from "react-bootstrap";
import { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContext";
import { Link } from "react-router-dom";

export const Carrito = () => {
  const { carrito, vaciarCarrito, eliminarProducto } =
    useContext(CarritoContext);

  if (carrito.length < 1) {
    return (
      <div className="mensaje-carrito-vacio">
        <h1>Todavia no tenés productos en tu carrito</h1>
        <Link className="btn-carrito" to="/productos">
          Ir a productos
        </Link>
      </div>
    );
  }

  return (
    <Container>
      <div className="carrito">
        {carrito.map((el) => {
          return (
            <div key={el.id} className="producto-carrito">
              <div>
                <h2>{el.title}</h2>
                <img src={el.img} alt={el.title} />
                <p>Precio unitario: ${el.price}</p>
              </div>
              <div>
                <p>Cantidad: {el.cantidad}</p>
                <p>
                  <strong>Subtotal: ${el.cantidad * el.price}</strong>
                </p>
                <button
                  className="btn-carrito"
                  onClick={() => {
                    eliminarProducto(el);
                  }}
                >
                  Eliminar producto
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <h1>Finalizar compra</h1>
      <div className="menu-carrito">
        <h3>
          <strong>
            Precio total: $
            {carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)}
          </strong>
        </h3>
        <button className="btn-carrito" onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn-carrito">
          Comprar carrito
        </Link>
      </div>
    </Container>
  );
};
