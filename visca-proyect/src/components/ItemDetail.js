import './styles/ItemDetail.css'
import ItemCount from './ItemCount'

function ItemDetail({product}) {
    const onAdd =(count) =>{
        alert(`Agregaste ${count} producto(s) a tu carrito`)
    }
    return(
        <div className="details">
            <img src={product.pictureUrl} alt="imagen del producto"></img>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>{product.detail}</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail