import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router'
import {getFirestore} from './service/getFirebase'

export function ItemDetailContainer(){
    const [item, setItem] = useState([]);
    const {id} = useParams()

    useEffect(()=>{
    const db = getFirestore()
    db.collection('items').get()
    .then((resp)=>{
        resp.forEach((docs) =>{
            setItem(docs.data())
        })
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