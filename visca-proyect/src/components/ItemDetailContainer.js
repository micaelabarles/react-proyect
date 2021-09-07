import ItemDetail from './ItemDetail'
import {useEffect, useState} from 'react'
import img1 from './media/img1.jpg'
import img2 from './media/img2.jpg'
import img3 from './media/img3.jpg'
import img4 from './media/img4.jpg'
import img5 from './media/img5.jpg'
import img6 from './media/img6.jpg'
import img7 from './media/img7.jpg'
import img8 from './media/img8.jpg'
import img9 from './media/img9.jpg'
import img10 from './media/img10.jpg'
import img11 from './media/img11.jpg'
import img12 from './media/img12.jpg'
import img13 from './media/img13.jpg'
import img14 from './media/img14.jpg'
import img15 from './media/img15.jpg'
import img16 from './media/img16.jpg'

const productsDetails = [
    {id:1, title:"Remera básica mujer", price: 900, pictureUrl:img1},
    {id:2, title:"t-basicm", price: 900, pictureUrl:img2},
    {id:3, title:"t-smile", price: 1000, pictureUrl:img3},
    {id:4, title:"t-quentin", price: 950, pictureUrl:img4},
    {id:5, title:"t-urban", price: 1000, pictureUrl:img5},
    {id:6, title:"t-gv", price: 1200, pictureUrl:img6},
    {id:7, title:"t-jimmy", price: 900, pictureUrl:img7},
    {id:8, title:"t-ny", price: 900, pictureUrl:img8},
    {id:9, title:"p-anna", price: 900, pictureUrl:img9},
    {id:10, title:"p-monica", price: 900, pictureUrl:img10},
    {id:11, title:"p-tommy", price: 900, pictureUrl:img11},
    {id:12, title:"c-hannie", price: 900, pictureUrl:img12},
    {id:13, title:"c-pexel", price: 900, pictureUrl:img13},
    {id:14, title:"c-sebastian", price: 900, pictureUrl:img14},
    {id:15, title:"s-basic", price: 900, pictureUrl:img15},
    {id:16, title:"s-darina", price: 900, pictureUrl:img16},
]

function ItemDetailContainer(){
    const [itemDetail, setItemDetail] = useState([]);

    useEffect(()=>{
        let getProducts = new Promise((resolve, reject) =>{
            setTimeout(() =>{
                itemDetail ? resolve(itemDetail) : reject("error")
            },2000)

        })

        getProducts.then((resolve)=>{setItemDetail(resolve)})
    },[])

    return(
        <div>
            <ItemDetail productsDetails={productsDetails} />
        </div>
    )
}



export default ItemDetailContainer