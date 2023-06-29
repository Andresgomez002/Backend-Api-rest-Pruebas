//archivo central de enrutamiento
import { Router, Request, Response } from "express";
import routerUsers from "./users";
import routerProduts from "./products"

const router = Router();

router.use('/users', routerUsers )
router.use('/products', routerProduts)
export default router;