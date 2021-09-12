import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router'
import {getProducts} from './promises'

export function ItemDetailContainer(){
    const [item, setItem] = useState([]);
    const {id} = useParams()

    useEffect(()=>{
    getProducts.then((resp)=>{
        setItem(resp.find((i)=>parseInt(id) === i.id))
    })
    },[id])
    return(
        <div>
            {item && <ItemDetail item={item} />
       }
       </div> 
    )
}

export default ItemDetailContainer