import {createContext, useState} from 'react'

export const CartContext = createContext();

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) =>{
        const index = cart.findIndex(i => i.item.id === item.id)
        if(index > -1){
            const oldQuy = cart[index].quantity
            cart.splice(index, 1)
            setCart([...cart, {item, quantity: quantity + oldQuy}])
        }
        else{
            setCart([...cart, {item, quantity}])
        }

    } 

    const removeAll = () => {
        setCart([]);
    }

    const removeItem = (itemId) => {
        const cartFilter = cart.filter(product => product.item.id !== itemId)
        return setCart(cartFilter)
    }

    const totalPrice = () =>{
        return cart.reduce((acum, value) => (acum + (value.quantity * value.item.price)), 0)
    }

    const countCart = () =>{
        return cart.reduce((acum, value)=> acum + value.quantity, 0)
    }

    return(
        <CartContext.Provider value={{addToCart, removeItem, cart, setCart, removeAll, totalPrice, countCart}}>
            {children}
        </CartContext.Provider>
    )
}