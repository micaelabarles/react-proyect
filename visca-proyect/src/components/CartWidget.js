import {Link} from 'react-router-dom'
import cart from './media/shopping-cart.svg'
import {useContext} from 'react'
import {CartContext} from './CartContext'

function Widget(){
    const {countCart} = useContext(CartContext)
    return(
        <li>
            <Link to={`/cart`}><img src={cart} alt="logo"/>{countCart()}</Link>
        </li>
    )
}

export default Widget;