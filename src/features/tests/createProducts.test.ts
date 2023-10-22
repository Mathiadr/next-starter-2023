import { createProducts, getRandomId } from '../products/createProducts';
import { Product, ProductFaker } from '../types';

const faker: ProductFaker = {
    id: getRandomId,
    name: () => "product1",
    category: () => "cat1",
    description: () => "desc1",
    price: () => 100
}

describe("Create Products", () => {
    it("should create products", () => {
        const products = createProducts({ count: 10, faker: faker})
        expect(products.size).toBe(10)
    })
    it("should add to existing list", () => {
        const initalProducts = new Map<string, Product>([
            [
                "initial-product", 
                {
                    id: "initial-id",
                    name: "initial-product",
                    category: "initial-cat",
                    description: "initial-desc",
                    price: 100
                }
            ],
        ])
        const products = createProducts({
          existingProducts: initalProducts,
          count: 10,
          faker: faker,
        })
        expect(products.size).toBe(11)
      })
})