import ItemCount from './ItemCount'
import './styles/Item.css'

function Item({product}){
    const onAdd =(count) =>{
        alert(`Agregaste ${count} producto(s) a tu carrito`)
    }
    return(
        <div className="container">
            <div className="card">
                <img src={product.pictureUrl} className="img-chica"></img>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <ItemCount initial={1} stock={10} onAdd={onAdd} />
            </div>



        </div>
    )
}

export default Item