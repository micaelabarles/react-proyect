import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router'
import {getProducts} from './promises'

export function ItemDetailContainer(){
    const [product, setProduct] = useState([]);
    const {item} = useParams()

    useEffect(()=>{
        if(item === undefined){
            getProducts
            .then(resp=>{setProduct(resp)})
        }
        else{
            getProducts
            .then(resp=>{setProduct(resp.find(e => item === e.item))})
        }
    },[item])
    return(
        <div>
            {product && 
            product.map((item)=>{
            return <ItemDetail product={item} />
        })
}
        </div>
    )
}

export default ItemDetailContainer