import './styles/Item.css'
import ItemCount from './ItemCount'

function ItemDetail({product}) {
    const onAdd =(count) =>{
        alert(`Agregaste ${count} producto(s) a tu carrito`)
    }
    return(
        <div>
            <img src={product.pictureUrl} alt="imagen del producto"></img>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail