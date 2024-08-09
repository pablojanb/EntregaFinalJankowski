import { Container } from "react-bootstrap"
import { traerDatos } from "../helpers/traerDatos"
import { useEffect, useState } from "react"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [titulo, setTitulo] = useState("Productos")

    const category = useParams().id

    useEffect(()=>{
        traerDatos(category)
        .then(res=>{
            setProductos(res)
            setLoading(false)
            if (category) {
                setTitulo(category)
            } else {
                setTitulo("Productos")
            }
        })
    }, [category])

    return (
        <Container>
            <ItemList productos={productos} loading={loading} titulo={titulo}/>
        </Container>
    )
}