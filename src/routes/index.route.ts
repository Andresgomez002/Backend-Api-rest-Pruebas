//archivo central de enrutamiento
import { Router, Request, Response } from "express";
import routerUsers from "./users";
import routerProduts from "./products.route"
import routeAuth from "./auth.route"

const router = Router();

router.use('/users', routerUsers )
router.use('/products', routerProduts)
router.use('/auth', routeAuth)
export default router;