import { CartProduct, Product } from "@/features/products/types"
import { ChangeEvent, useEffect, useState } from "react"

export function useCart(
    products: Product[]
    ) {
    const [cart, setCart] = useState<CartProduct[]>([])

    const handleAddToCart = (id: string) => {
        const productToAdd = products.find((product) => product.id === id)
        if (!productToAdd) throw new Error(`Could not find item with id ${id}`)
        else if (cart.find((product) => product.id === id)) throw new Error(`Product already exists in cart`)
        else if (productToAdd){
          const newCartItem: CartProduct = {
              id: productToAdd.id,
              name: productToAdd.name,
              price: productToAdd.price,
              amount: 1
          }
          setCart((prev) => [...prev, newCartItem])
        } 
    }

    const handleDeleteFromCart = (id: string) => {
        setCart((prev) => prev.filter((item) => item.id != id))
    }

    const handleChangeAmount = (id: string, changeBy: number) => {
        const newCart = cart.map((item) => {
            if(item.id === id) {
                if((item.amount + changeBy) !== 0) item.amount += changeBy
                return item
            } else return item
        })
        setCart(newCart)
    }
    
    return {
        cart: cart,
        setCart,
        addToCart: handleAddToCart,
        changeAmount: handleChangeAmount,
        deleteFromCart: handleDeleteFromCart
    }
}

