import './styles/Item.css'
import {Link} from 'react-router-dom'

function Item({product}){
    const{title, image, price, id} = product
    return(
        <div>


        <div className="container">
            <div className="card">
                <img src={image} className="img-chica" alt="imagen del producto"></img>
                <h3>{title}</h3>
                <p>${price}</p>
                <Link to={`/item/${id}`}>Ver Detalles</Link>
            </div>



        </div>
        </div>
    )
}

export default Item