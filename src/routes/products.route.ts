//archivo central de enrutamiento
import { Router, Request, Response } from "express";
import { createProduct, deleteProduct, getProducts, getproduct, updateProduct } from "../controllers/product.controller";

const router = Router();
//http://localhost:3000/api/products/
router.get('/', getProducts );
router.get('/', getproduct);
router.post('/', createProduct);
router.put('/', updateProduct);
router.delete('/', deleteProduct);

export default router;