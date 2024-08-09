import { useEffect, useState } from "react"
import {traerItemPorId} from "../helpers/traerDatos"
import { ItemDetail } from "./ItemDetail"
import { Container } from "react-bootstrap"

export const ItemListDetail = ()=> {
    const [item, setItem] = useState(null)
    
    useEffect(()=>{
        traerItemPorId(3)
            .then(res=>setItem(res))
    }, [])

    return (
        <Container>
            <ItemDetail item={item} />
        </Container>
            )
}