import {useContext} from 'react'
import {CartContext} from './CartContext'

const Cart = () => {
    const{cart, removeItem, removeAll} = useContext(CartContext)

    return(
        <div>
        <button onClick={removeAll}>Eliminar items</button>
        {cart.map(product => {
                return(
                    <div key={product.item}>
                    <img src={product.item.pictureUrl} alt="imagen de producto"></img>
                    <h3>{product.item.title}</h3>
                    <p>${product.item.price}</p>
                    <p>{product.item.quantity}</p>
                    <button onClick={()=> removeItem(product.item.id)}>Eliminar item</button>
                    </div>

                )
            })
        }
        </div>
    )
}

export default Cart;