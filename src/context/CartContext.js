import {createContext, useState} from "react"
import CartWidget from "../components/CartWidget"

export const CartContext = createContext() 

export const CartProvider =({children}) =>{
    const [cart, setCart]=useState([])
    let cantidad
    let total
    const addToCart =(item)=>{
      setCart([...cart,item])
    }

    const isInCart = (id) =>{
        return cart.some((prod)=>prod.id===id)
    }
    const quantityCart=()=>{
        return cart.reduce((acc,prod)=>acc+prod.count,0)
    }
    const totalCart=()=>{
        return cart.reduce((acc,prod)=>acc+prod.count*prod.price,0)
    }

    const emptyCart= () =>{
        setCart([])
    }
    const removeItem = (id)=>{
        return setCart(cart.filter((prod)=>prod.id !== id))
    }


    const handleChange = (value)=> {
        // const index= cart.findIndex((prod)=> prod.id == id)
        // console.log(cart[index])
        // cart[index].count=value
        console.log(value)
        
        // return (cantidad= quantityCart(),
        // total= totalCart())        
    }
    

   return(
    <CartContext.Provider value={{
        cart, 
        addToCart,
        isInCart,
        quantityCart,
        totalCart,
        emptyCart,
        removeItem,
        handleChange, cantidad,
        total
       
    }}>

        {children}
    </CartContext.Provider>

   ) 
}