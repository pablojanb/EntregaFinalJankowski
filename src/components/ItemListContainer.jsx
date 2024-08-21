import { Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../main"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [titulo, setTitulo] = useState("Productos")

    const category = useParams().id

    useEffect(()=>{
        const productosRef = collection(db, "productos")
        const traerCategory = category ? query(productosRef, where("category", "==", category)) : productosRef
        getDocs(traerCategory)
            .then((resp)=> {
                setProductos(resp.docs.map((prod)=>{
                    return {id: prod.id, ...prod.data()}
                }))
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