import { Item } from "./Item"

export const ItemList = ({productos})=> {
    return (
        productos.map((elem)=>{
            return (
                <Item key={elem.id} item={elem}/>
                    )
        })
            )
}