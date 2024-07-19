import { CartWidget } from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = ()=> {
    return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Productos</Nav.Link>
                        <Nav.Link href="#link">Nosotros</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                    </Nav>
                    <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}