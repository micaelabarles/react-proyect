import {useState} from 'react'
import './styles/ItemCount.css'
import {Link} from 'react-router-dom'
 
const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [changeButton, setChangeButton] = useState(false)

    const handlerAdd =()=>{
    if(count < stock) setCount(count +1)        
    }

    const handlerSubtract =()=>{
    if (count > initial) setCount(count - 1)
    }  

    const handlerOnAdd=()=>{
        onAdd(count)
        setCount(initial)
        setChangeButton(true)
    } 

    return (
        <div>
        <div className="quantity">
        <button className="count" onClick={handlerSubtract}>-</button>
        <label>{count}</label>
        <button className="count" onClick={handlerAdd}>+</button>
        </div>
        {
            changeButton ? 
            <div>
            <Link to='/cart'><button className="finishCart">Ir al carrito</button></Link> 
            <Link to='/'><button>Seguir comprando</button></Link>
            </div>  
            : 
            <button className="addToCart" onClick={handlerOnAdd}>Agregar al carrito</button>
            
        }

        
    </div>
     
    )
}


export default ItemCount