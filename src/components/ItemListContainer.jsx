import { Container } from "react-bootstrap"
import { traerDatos } from "../helpers/traerDatos"
import { useState } from "react"
import { ItemList } from "./ItemList"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    traerDatos()
        .then(res=>setProductos(res))

    return (
        <Container>
            <ItemList productos={productos}/>
        </Container>
    )
}