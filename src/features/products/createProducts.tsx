import { CreateProduct, Product, ProductFaker } from "./types"

const dummyNames: string[] = ["Splash Juice", "Slap juice", "Coconut", "WomboNuts"]

const dummyCategories: string[] = ["Drinks", "Food", "Snacks"]

function getRandomItem<T>(items: T[])  {
    const index = Math.floor(Math.random() * items.length)
    return items[index]
}

const getRandomId = () => Math.random().toString(36).slice(2)

const getRandomPrice = () => Math.floor((1 + Math.random()) * 10)

export const productFaker: ProductFaker = {
    id: () => getRandomId(),
    name: () => getRandomItem(dummyNames),
    category: () => getRandomItem(dummyCategories),
    description: () => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum fermentum sagittis. Quisque vel risus vitae risus vehicula lacinia at quis mi. Sed turpis libero, facilisis nec leo eget, ullamcorper viverra est. Maecenas tincidunt sollicitudin nisl, eget convallis lorem congue nec. Nunc facilisis, dui nec dignissim lobortis, ex eros euismod magna, non dictum tortor purus quis nulla. Donec tempus quis tellus non placerat. Quisque id leo odio. Cras malesuada, lectus a elementum pretium, sapien eros malesuada justo, viverra facilisis tellus libero et ex.",
    price: () => getRandomPrice()
}

export const createProducts: CreateProduct = ({
    existingProducts,
    count,
    faker,
}) => {
    const productList = new Map(existingProducts)

    if (productList.size === 0 && count === 0) throw new Error("No products added")

    for (let index = 0; index < count; index++) {
        const newProduct = {
            id: faker.id(),
            name: faker.name(),
            category: faker.category(),
            description: faker.description(),
            price: faker.price()
        }

        productList.set(`product-${index}`, newProduct)
    }
    return productList
}