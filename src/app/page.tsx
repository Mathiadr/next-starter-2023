"use client"

import Cart from "@/components/Cart";
import CartListItem from "@/components/CartListItem";
import PageTitle from "@/components/PageTitle";
import ProductCard from "@/components/ProductCard";
import ProductList from "@/components/ProductList";
import { createProducts, productFaker } from "@/features/products/createProducts";
import { CartProduct, Product } from "@/features/products/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<CartProduct[]>([])
  const [sum, setSum] = useState<number>(0)

  useEffect(() => {
    const getProducts = () => {
      const productList = Array.from(createProducts({ faker: productFaker, count: 10 }).values())
      setProducts(productList)
    }

    getProducts()
  }, [])
  
  const handleAddToCart = (id: string) => {
    const productToAdd = products.find((product) => product.id === id)
    if (!productToAdd) throw new Error(`Could not find item with id ${id}`)
    else if (cart.find((product) => product.id === id)) throw new Error(`Product already exists in cart`)
    else if (productToAdd){
      const newCartItem = { ...productToAdd, amount: 1 }
      setCart((prev) => [...prev, newCartItem])
      handleCalculateSumTotal()
    }
  }

  const handleDeleteFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id != id))
  }

  const handleOnChange = (id: string, changeBy: number) => {
    const cartItem = cart.find((item) => item.id === id)
    if(!cartItem) throw new Error(`Could not find item with id ${id}`)
    else if((cartItem.amount + changeBy) <= 0) throw new Error(`Product amount cannot be lower than 1`)
    else {
      cartItem.amount += changeBy
      setCart(cart)
      handleCalculateSumTotal()
    }
  }

  const handleCalculateSumTotal = () => {
    let sum = 0
    cart.forEach((item) =>  sum += (item.price * item.amount))
    setSum(sum)
  }
  

  return (
    <div className="flex">
      <div className="mx-auto mt-6 w-full max-w-3xl">
      <PageTitle title={"Products"}/>
      <main>
        <ProductList>
          {products.map((product) => (
            <ProductCard 
            key={product.id}
            {...product}
            addToCart={handleAddToCart}/>
          ))}
        </ProductList>
      </main>
      </div>
      <aside>
        <Cart total={sum}>
          {cart.map((item) => (
            <CartListItem 
            key={item.id}
            onDelete={handleDeleteFromCart}
            onChange={handleOnChange}
            {...item}/>
          ))}
        </Cart>
      </aside>
    </div>
  )
}
