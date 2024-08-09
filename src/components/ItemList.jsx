import { Item } from "./Item"

export const ItemList = ({productos, loading, titulo})=> {


    if (loading) {
        return (
            <div className="cargando">
                <h1>Cargando</h1>
            </div>
        )
    }

    return (
        <>
        <h1>{titulo}</h1>
        <div className="productos">
            {productos.map((elem)=>{
            return (
                <Item key={elem.id} item={elem}/>
                    )
        })}
        </div>
        </>
            )
}