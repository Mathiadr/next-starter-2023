import { CreateProduct, Product, ProductFaker } from "../types"

const dummyNames: string[] = ["Splash Juice", "Slap juice", "CocoButts", "WomboNuts", "Ultra Energikk", "Moscow Punch", "Peace Stachios", "Hokkaido Sake", "Voronezh Semechki", "Arbat Bliny"]

const dummyCategories: string[] = ["Drinks", "Food", "Snacks"]

const dummyDescriptions: string[] = [
    "This enchanting potion promises to bring rainbows into your life with every drop. Guaranteed to make your dreams come true, this whimsical elixir is perfect for those seeking a touch of mythical wonder.",
    "These revolutionary footwear items defy the laws of physics, allowing you to step lightly and float effortlessly above the ground. Perfect for escaping traffic jams or impressing friends at parties.",
    "Ever wondered what your furry friend is thinking? Our Pet Translator Collar claims to translate your pet's thoughts into human language, providing you with hilarious insights into their daily musings. Communicate like never before with your beloved pet!",
    "Illuminate your drinks with our Glow-in-the-Dark Ice Cubes! These mesmerizing cubes promise to turn any beverage into a dazzling light show. Perfect for adding a touch of magic to your parties or impressing guests with your glowing concoctions.",
    "This lovable, miniature pachyderm fits right in your pocket, offering companionship and endless cuteness wherever you go. Ideal for those who dream of having a pet elephant without the space constraints."
]

function getRandomItem<T>(items: T[])  {
    const index = Math.floor(Math.random() * items.length)
    return items[index]
}

export const getRandomId = () => Math.random().toString(36).slice(2)

const getRandomPrice = () => Math.floor((1 + Math.random()) * 10)

export const productFaker: ProductFaker = {
    id: () => getRandomId(),
    name: () => getRandomItem(dummyNames),
    category: () => getRandomItem(dummyCategories),
    description: () => getRandomItem(dummyDescriptions),
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