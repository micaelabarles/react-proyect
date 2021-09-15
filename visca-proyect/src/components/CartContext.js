import {createContext, useState} from 'react'

export const CartContext = createContext();

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) =>{
        if(isInCart(item.id)){
            const updateCart = [...cart];

            updateCart.forEach((product)=>{
                if(product.item.id === item.id){
                    product.quantity += quantity
                }
            })
            setCart(updateCart)
        } else{
            setCart([...cart, {item, quantity}])
        }

    } 

    const isInCart = (id) =>{
        return cart.find(product => product.item.id === id)

    }

    const removeAll = () => {
        setCart([]);
    }

    const removeItem = (itemId) => {
        const cartFilter = cart.filter(product => product.item.id !== itemId)
        return setCart(cartFilter)
    }

    return(
        <CartContext.Provider value={{addToCart, removeItem, cart, setCart, removeAll}}>
            {children}
        </CartContext.Provider>
    )
}