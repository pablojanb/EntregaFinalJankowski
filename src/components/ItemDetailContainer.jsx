import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../main"

export const ItemDetailContainer = ()=> {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const itemId = useParams().id


    useEffect(()=>{
        const itemRef = doc(db, "productos", itemId)
        getDoc(itemRef)
            .then((resp)=>{
                setItem({id: resp.id, ...resp.data()})
                setLoading(false)
            })
    }, [itemId])

    return (
        <Container>
            <ItemDetail item={item} loading={loading}/>
        </Container>
            )
}