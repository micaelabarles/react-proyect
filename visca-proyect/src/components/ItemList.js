import {useEffect} from 'react'
import img1 from './media/remera-basic-w.jpg'
import './styles/ItemList.css'

const products = [
    {id:1, title:"Remera básica mujer", price: 900, pictureUrl:{img1}},
    {id:2, title:"t-basicm", price: 900},
    {id:3, title:"t-smile", price: 1000},
    {id:4, title:"t-quentin", price: 950},
    {id:5, title:"t-urban", price: 1000},
    {id:6, title:"t-gv", price: 1200},
    {id:7, title:"t-jimmy", price: 900},
    {id:8, title:"t-ny", price: 900},
    {id:9, title:"p-anna", price: 900},
    {id:10, title:"p-monica", price: 900},
    {id:11, title:"p-tommy", price: 900},
    {id:12, title:"c-hannie", price: 900},
    {id:13, title:"c-pexel", price: 900},
    {id:14, title:"c-sebastian", price: 900},
    {id:15, title:"s-basic", price: 900},
    {id:16, title:"s-darina", price: 900},
]

export function getProducts(id){
    if(id ===undefined){
        return products
    }
    else{ 
        return products.find(product => product.id === id)
    }
}

let promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve (getProducts(16))
    }, 2000);
})

function ItemList(){
    useEffect(() => {
        promise
        .then((resp)=> console.log(resp) )
    }, [])

    return (
        <div className="container">
            {products.map((product)=>
            <div key={product.id}>
                <div className="card">
                    <img src={product.pictureUrl}></img>
            <div className="details">
            <h3>
                {product.title}
            </h3>
            <p>
                {product.price}
            </p>
            </div>
            </div>
            </div>  )  } 
        </div>
    )
}

export default ItemList