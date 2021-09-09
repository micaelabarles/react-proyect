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

export const products = [
        {id:1, title:"Remera básica mujer", price: 900, pictureUrl:img1, detail:"Talles s,m,l y xl", category:"Mujer"},
        {id:2, title:"t-basicm", price: 900, pictureUrl:img2,detail:"Talles s,m,l y xl",category:"Hombre"},
        {id:3, title:"t-smile", price: 1000, pictureUrl:img3,detail:"Talles s,m,l y xl",category:"Hombre"},
        {id:4, title:"t-quentin", price: 950, pictureUrl:img4,detail:"Talles s,m,l y xl",category:"Mujer"},
        {id:5, title:"t-urban", price: 1000, pictureUrl:img5,detail:"Talles s,m,l y xl",category:"Mujer"},
        {id:6, title:"t-gv", price: 1200, pictureUrl:img6,detail:"Talles s,m,l y xl",category:"Hombre"},
        {id:7, title:"t-jimmy", price: 900, pictureUrl:img7,detail:"Talles s,m,l y xl",category:"Hombre"},
        {id:8, title:"t-ny", price: 900, pictureUrl:img8,detail:"Talles s,m,l y xl",category:"Mujer"},
        {id:9, title:"p-anna", price: 900, pictureUrl:img9,detail:"Talles s,m,l y xl",category:"Mujer"},
        {id:10, title:"p-monica", price: 900, pictureUrl:img10,detail:"Talles s,m,l y xl",category:"Mujer"},
        {id:11, title:"p-tommy", price: 900, pictureUrl:img11,detail:"Talles s,m,l y xl",category:"Hombre"},
        {id:12, title:"c-hannie", price: 900, pictureUrl:img12,detail:"Talles s,m,l y xl",category:"Mujer"},
        {id:13, title:"c-pexel", price: 900, pictureUrl:img13,detail:"Talles s,m,l y xl",category:"Mujer"},
        {id:14, title:"c-sebastian", price: 900, pictureUrl:img14,detail:"Talles s,m,l y xl",category:"Hombre"},
        {id:15, title:"s-basic", price: 900, pictureUrl:img15,detail:"Talles s,m,l y xl",category:"Hombre"},
        {id:16, title:"s-darina", price: 900, pictureUrl:img16,detail:"Talles s,m,l y xl",category:"Mujer"},
    ]
    
    export const getProducts = new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 1000)
    })