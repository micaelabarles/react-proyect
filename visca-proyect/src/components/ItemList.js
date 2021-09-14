import Item from './Item'
import {Link} from 'react-router-dom'
import './styles/ItemList.css'

function ItemList({product}){
  const ItemList=  product.map((items)=>
    <Item key={items.id} product={items}/>)
    return (
        <div>
            <h1>Catálogo de productos</h1>
            <ul className="sections">
                <li><Link to="/">Todos</Link></li>
                <li><Link to="/category/Hombre">Hombre</Link></li>
                <li><Link to="/category/Mujer">Mujer</Link></li>
            </ul>
            <div>
                {ItemList}
            </div>
        </div>
    )
        

    
}

export default ItemList