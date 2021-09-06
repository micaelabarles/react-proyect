
function ItemDetail({product}) {
    return(
        <div>
            <img src={product.pictureUrl}></img>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
        </div>
    )
}

export default ItemDetail