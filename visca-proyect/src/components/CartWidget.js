import {Link} from 'react-router-dom'
import cart from './media/shopping-cart.svg'

function Widget(){
    return(
        <li><Link to={`/cart`}><img src={cart} alt="logo"/></Link></li>
    )
}

export default Widget;