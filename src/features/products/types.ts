export type Product = {
    id: string
    name: string
    category: string
    description: string
    price: number
}

export type CartProduct = {
    id: string
    name: string
    category: string
    description: string
    price: number
    amount: number
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