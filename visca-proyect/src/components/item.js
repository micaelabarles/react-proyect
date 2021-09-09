import './styles/Item.css'
import {Link} from 'react-router-dom'

function Item({product}){
    return(
        <div className="container">
            <div className="card">
                <img src={product.pictureUrl} className="img-chica" alt="imagen del producto"></img>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <Link to={`/item/${product.id}`}>Ver Detalles</Link>
            </div>



        </div>
    )
}

export default Item