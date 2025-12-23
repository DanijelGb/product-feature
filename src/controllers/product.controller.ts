import type { Request, Response } from "express";
import * as productService from "../services/product.service.js";

export async function getProducts(req: Request, res: Response) {
  const products = await productService.getProducts();

  res.json({
    products
  });
}

export async function getProductById(req: Request, res: Response) {
  const { id } = req.params;

    if (!id) {
    return res.status(400).json({
      error: "Product id is required"
    });
  }

  const product = await productService.getProductById(id);

  res.json({
    product
  });
}