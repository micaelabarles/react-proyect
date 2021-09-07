
function ItemDetail({productsDetails}) {
    return(
        <div>
            <img src={productsDetails.pictureUrl}></img>
            <h2>{productsDetails.title}</h2>
            <p>{productsDetails.price}</p>
        </div>
    )
}

export default ItemDetail