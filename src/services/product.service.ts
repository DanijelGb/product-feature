import * as productRepo from "../repositories/product.repository.js";
import type { Product } from "../repositories/product.repository.js";


export function getProducts(): Product[] {

    return productRepo.findAll();
}

export function getProductById(id: string): Product | undefined{
    const product = productRepo.findById(id); 

    if (!product) {
        throw new Error("Product does not exist")
    }

    return product;
}