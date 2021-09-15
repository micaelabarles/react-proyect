import './styles/ItemDetail.css'
import ItemCount from './ItemCount'
import {useContext} from 'react'
import {CartContext} from './CartContext'


function ItemDetail({item}) {
    const {setCart, addToCart} = useContext(CartContext)

    const onAdd =(count) =>{
        setCart(count)
        addToCart(item, count)
        
    }
    return(
        <div className="details">
            <img src={item.pictureUrl} alt="imagen del producto"></img>
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <p>{item.detail}</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail