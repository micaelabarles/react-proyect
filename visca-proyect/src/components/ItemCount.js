import {useState} from 'react'
import './styles/ItemCount.css'
 
const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const handlerAdd =()=>{
    if(count < stock) setCount(count +1)        
    }

    const handlerSubtract =()=>{
    if (count > initial) setCount(count - 1)
    }  

    const handlerOnAdd=()=>{
        onAdd(count)
        setCount(initial)
    } 

    return (
        <div>
        <div class="quantity">
        <button class="count" onClick={handlerSubtract}>-</button>
        <label>{count}</label>
        <button class="count" onClick={handlerAdd}>+</button>
        </div>
        <button class="addToCart" onClick={handlerOnAdd}>Agregar al carrito</button>
    </div>
     
    )
}


export default ItemCount