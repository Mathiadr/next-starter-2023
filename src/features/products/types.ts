export type Product = {
    id: string
    name: string
    category: string
    description: string
    price: number
}

export type ProductCart = {
    product: Product
    amount: number
    increaseAmount?: () => {} // might be () => void etc...
    decreaseAmount?: () => {}
}

export type Cart = {
    products: Map<string, ProductCart>

    addProduct?: () => {}
    deleteProduct?: () => {}
}

export type ProductFaker = {
    id: () => string
    name: () => string
    category: () => string
    description: () => string
    price: () => number
}

export type CreateProduct = 
    (params: CreateProductParams) => Map<string, Product>


export type CreateProductParams = {
    existingProducts?: Map<string, Product>
    count: number
    faker: ProductFaker
}