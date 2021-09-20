import {useContext} from 'react'
import {CartContext} from './CartContext'
import './styles/Cart.css'

const Cart = () => {
    const{cart, removeItem, removeAll, totalPrice, countCart} = useContext(CartContext)

if(countCart() > 0 ){
    return(
        <div>
        {cart.map(product => {
                return(
                    <div className="cartProducts" key={product.item}>
                    <img src={product.item.pictureUrl} alt="imagen de producto"></img>
                    <h3>{product.item.title}</h3>
                    <p>${product.item.price}</p>
                    <p>{product.quantity}</p>
                    <button onClick={()=> removeItem(product.item.id)} className="btn-removeItem">X</button>
                    </div>
                    
                    

                )
            })
        }
        <tr></tr>
        <p className="total">Total: ${totalPrice()}</p>
        <button onClick={removeAll} className="btn-removeAll">Vaciar Carrito</button>
        </div>
    )
}

return(
    <p>No hay productos en el carrito</p>
)
}

export default Cart;