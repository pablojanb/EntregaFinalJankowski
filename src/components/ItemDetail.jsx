export const ItemDetail = ({item, loading}) => {

    if (loading) {
        return (
            <div className="cargando">
                <h1>Cargando</h1>
            </div>
        )
    }
    
    return (
        item &&
        <div className="itemDetail">
            <h1>{item.title}</h1>
            <div className="description">
                <img className="img-item-detail" src={item.img} alt={item.title} />
                <p>{item.description}</p>
            </div>
            <p><strong>${item.price}</strong></p>
        </div>
    )
}