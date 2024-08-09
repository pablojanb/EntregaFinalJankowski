export const ItemDetail = ({item}) => {
    return (
        item &&
        <div className="itemDetail">
            <h1>{item.title}</h1>
            <div className="description">
                <img src={item.img} alt={item.title} />
                <p>{item.description}</p>
            </div>
            <p><strong>{item.price}</strong></p>
        </div>
    )
}