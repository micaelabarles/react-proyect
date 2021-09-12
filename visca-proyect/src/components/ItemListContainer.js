import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import ItemList from './ItemList'
import { getProducts } from './promises'

function ItemListContainer(){
    const[products, setProducts] = useState([])
    const {category} = useParams()

    useEffect(()=>{
        if (category === undefined){
            getProducts
            .then(resp=> setProducts(resp))
        }
        else{
            getProducts
            .then(resp => setProducts(resp.filter((i) => category === i.category)))
        }
    },[category])

    return(
        <div>
        <ItemList product={products}/>
        </div>
    )
}

export default ItemListContainer;