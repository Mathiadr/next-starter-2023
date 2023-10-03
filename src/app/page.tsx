"use client"

import Cart from "@/components/Cart";
import PageTitle from "@/components/PageTitle";
import ProductCard from "@/components/ProductCard";
import ProductList from "@/components/ProductList";
import { createProducts, productFaker } from "@/features/products/createProducts";
import { Product } from "@/features/products/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<Product[]>([])

  useEffect(() => {
    const getProducts = () => {
      const productList = Array.from(createProducts({ faker: productFaker, count: 10 }).values())
      setProducts(productList)
    }

    getProducts()
  }, [])
  

  

  return (
    <div className="mx-auto mt-8 w-full max-w-4xl gap-2">
      <PageTitle title={"Products"}/>
      <main>
        <ProductList>
          {products.map((product) => (
            <ProductCard 
            key={product.id}
            {...product}/>
          ))}
        </ProductList>
      </main>
      <aside>
        <Cart />
      </aside>
    </div>
  )
}
