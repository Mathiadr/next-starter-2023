"use client"

import Cart from "@/components/Cart";
import CartListItem from "@/components/CartListItem";
import PageTitle from "@/components/PageTitle";
import ProductCard from "@/components/ProductCard";
import ProductList from "@/components/ProductList";
import { createProducts, productFaker } from "@/features/products/createProducts";
import { CartProduct, Product } from "@/features/products/types";
import { useEffect, useState } from "react";
import { GET } from "../api/products/route";
import { useCart } from "@/hooks/useCart";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const {cart, addToCart, changeAmount, deleteFromCart} = useCart(products)
  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    const getProducts = async () => {
      const productFetch = await fetch("/api/products", {method: "get"})
      const result = (await productFetch.json()) as { data: Product[] }
      setProducts(result.data)
    }

    getProducts()
  }, [])

  useEffect(() => {
        let newSum = 0
        cart.forEach((item) => newSum += (item.price * item.amount))
        setTotal(newSum)
    }, [cart])
  

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
            addToCart={addToCart}/>
          ))}
        </ProductList>
      </main>
      </div>
      <aside>
        <Cart total={total}>
          {cart.map((item) => (
            <CartListItem 
            key={item.id}
            {...item}
            onChange={changeAmount}
            onDelete={deleteFromCart}/>
          ))}
        </Cart>
      </aside>
    </div>
  )
}
