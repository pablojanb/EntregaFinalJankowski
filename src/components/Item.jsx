export const Item = ({item})=> {
    return (
        <div className="item">
            <h1>{item.title}</h1>
            <img src={item.img} alt={item.title} />
            <p><strong>{item.price}</strong></p>
            <p><strong>{item.category}</strong></p>
            <a href="">Ver más</a>
        </div>
            )
}