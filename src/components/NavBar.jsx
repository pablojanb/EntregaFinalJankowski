
import { CartWidget } from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export const NavBar = ()=> {
    return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
                        <Nav.Link as={NavLink} to="/category/buzos">Buzos</Nav.Link>
                        <Nav.Link as={NavLink} to="/category/pantalones">Pantalones</Nav.Link>
                        <Nav.Link as={NavLink} to="/category/remeras">Remeras</Nav.Link>                    </Nav>
                    <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}