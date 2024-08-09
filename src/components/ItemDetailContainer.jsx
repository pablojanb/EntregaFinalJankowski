import { useEffect, useState } from "react"
import { traerItemPorId } from "../helpers/traerDatos"
import { ItemDetail } from "./ItemDetail"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = ()=> {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const itemId = useParams().id

    useEffect(()=>{
        traerItemPorId(Number(itemId))
            .then(res=>{
                setItem(res)
                setLoading(false)
            })
    }, [itemId])

    return (
        <Container>
            <ItemDetail item={item} loading={loading}/>
        </Container>
            )
}