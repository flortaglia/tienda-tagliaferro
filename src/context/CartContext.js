import {createContext, useEffect, useState} from "react"


export const CartContext = createContext() 

export const CartProvider =({children}) =>{
    const [cart, setCart]=useState([])
    const [updateTotalCart,setUpdate]=useState()
    const [updateTotalWidget,setUpdateWidget]=useState()
    
    const addToCart =(item)=>{
      setCart([...cart,item])
    }

    const isInCart = (id) =>{
        return cart.some((prod)=>prod.id===id)
    }
   
    const quantityCart=()=>{
        const quantity= cart.reduce((acc,prod)=>acc+prod.count,0)
        return quantity 
        
    }
    const totalCart=()=>{
        const total= cart
        .reduce((acc,prod)=>acc+prod.count*prod.price,0)
        return total
    }

    const emptyCart= () =>{
        setCart([])
    }
    const removeItem = (id)=>{
        return setCart(cart.filter((prod)=>prod.id !== id))
    }
    const handleChange =(value, id)=>{
        const index= cart.findIndex((prod)=> prod.id == id)
        console.log(cart[index])
        cart[index].count=Number(value)
        console.log(cart[index].count)
    }
    
    const addCount = (value, id)=> {
        handleChange(value, id)
        setUpdate(!updateTotalCart)
    }
    useEffect(()=>{
        totalCart()
    },[updateTotalCart])    
        
    const addWidget = ()=> {
        setUpdateWidget(!updateTotalWidget)
    }    
    useEffect(()=>{
        quantityCart()
    },[updateTotalWidget]) 

   return(
    <CartContext.Provider value={{
        cart, 
        addToCart,
        isInCart,
        quantityCart,
        totalCart,
        emptyCart,
        removeItem,
        addCount,
        addWidget 
    }}>

        {children}
    </CartContext.Provider>

   ) 
}