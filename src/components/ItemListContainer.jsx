import { Container } from "react-bootstrap"
import { traerDatos } from "../helpers/traerDatos"
import { useEffect, useState } from "react"
import { ItemList } from "./ItemList"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        traerDatos()
        .then(res=>{
            setProductos(res)
            setLoading(false)
        })
    }, [])

    return (
        <Container>
            <ItemList productos={productos} loading={loading}/>
        </Container>
    )
}