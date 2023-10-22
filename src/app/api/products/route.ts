import { createProducts, productFaker } from "@/features/products/createProducts";
import { NextResponse } from "next/server";

export function GET() {
    const products = createProducts({ count: 20, faker: productFaker})
    return NextResponse.json(
        { data: Array.from(products.values()) },
        { status: 200 }
    )
}