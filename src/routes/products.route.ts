//archivo central de enrutamiento
import { Router, Request, Response } from "express";
import { getProducts } from "../controllers/product.controller";

const router = Router();

router.get('/', getProducts )

export default router;