import './styles/Item.css'
import {Link} from 'react-router-dom'

function Item({product}){
    const{title, pictureUrl, price, id} = product
    return(
        <div className="container">
            <div className="card">
                <img src={pictureUrl} className="img-chica" alt="imagen del producto"></img>
                <h3>{title}</h3>
                <p>{price}</p>
                <Link to={`/item/${id}`}>Ver Detalles</Link>
            </div>



        </div>
    )
}

export default Item