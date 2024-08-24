import { useState } from "react";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";

export const Checkout = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);
  const [orden, setOrden] = useState("");
  const [validarEmail, setValidarEmail] = useState(false)

  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    email: "",
    confirmemail: "",
  });

  const pedido = {
    cliente: cliente,
    productos: carrito,
    total: carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0),
  };

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleCompra = (e) => {
    e.preventDefault();
    if (cliente.email === cliente.confirmemail) {
      const db = getFirestore();
      const pedidosRef = collection(db, "pedidos");
      addDoc(pedidosRef, pedido).then((pedido) => {
        setOrden(pedido.id);
      });
      vaciarCarrito();
    } else {
      setValidarEmail(true)
    }
  };

  if (orden) {
    return (
      <div className="num-order">
        <h1>Confirmación de compra</h1>
        <p>
          Su número de orden es: <strong>{orden}</strong>
        </p>
        <p>
          Te enviaremos un mail a <strong>{cliente.email}</strong> con los
          detalles de tu compra!
        </p>
      </div>
    );
  }

  return (
    <Container>
      <h1>Formulario de contacto</h1>
      <form className="contact-form" onSubmit={handleCompra}>
        <input
          required
          type="text"
          placeholder="Ingrese su nombre"
          name="nombre"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="Ingrese su apellido"
          name="apellido"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="Ingrese su email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="Confirme su email"
          name="confirmemail"
          onChange={handleChange}
        />
        {validarEmail && <p className="verificar-mail">Verifica que el email sea correcto</p>}
        <button type="submit" className="btn-carrito">
          Confirmar compra
        </button>
      </form>
    </Container>
  );
};
