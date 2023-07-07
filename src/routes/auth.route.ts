//archivo central de enrutamiento
import { Router, Request, Response } from "express";
import { login, register } from "../controllers/auth.controller";



const router = Router();
//http://localhost:3012/api/auth/
// router.use('/login', routeLogin)
//http://localhost:3012/api/auth/register
router.post('/register', register)
//http://localhost:3012/api/auth/login
router.post('/login', login)



export default router;