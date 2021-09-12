import './styles/ItemDetail.css'
import ItemCount from './ItemCount'

function ItemDetail({item}) {
    const onAdd =(count) =>{
        alert(`Agregaste ${count} producto(s) a tu carrito`)
    }
    return(
        <div className="details">
            <img src={item.pictureUrl} alt="imagen del producto"></img>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <p>{item.detail}</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail