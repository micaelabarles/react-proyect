import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import ItemList from './ItemList'
import {getFirestore} from './service/getFirebase'

function ItemListContainer(){
    const[products, setProducts] = useState([])
    const {category} = useParams()

    useEffect(()=>{
        const db = getFirestore()
        db.collection('items').get().then(resp =>{
        if (category === undefined){
        setProducts(resp.docs.map((i) => i.data()));
        }
        else{
            let data = resp.docs.map((i) => i.data())
            setProducts(data.filter((i) => category === i.category))
        }
    })
   },[category])

    return(
        <div>
        <ItemList product={products}/>
        </div>
    )
}

export default ItemListContainer;