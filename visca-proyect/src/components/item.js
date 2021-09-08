import './styles/Item.css'

function Item({product}){
    return(
        <div className="container">
            <div className="card">
                <img src={product.pictureUrl} className="img-chica" alt="imagen del producto"></img>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
            </div>



        </div>
    )
}

export default Item