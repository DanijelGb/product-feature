import { products } from "../data/products.db.js"

export interface Product {
    id: string;
    name: string;
    price: number;
    description?: string;
}

export function findAll(): Product[] {
    return products;
}

export function findById(id: string): Product | undefined {
    return products.find(p => p.id === id);
}
