//archivo central de enrutamiento
import { Router, Request, Response } from "express";



const router = Router();
//http://localhost:3000/api/auth/
// router.use('/login', routeLogin)
router.post('/register', (req: Request, res: Response)=>{
    console.log('Registra usuario');
    res.send('Register')
})
router.post('/login', (req: Request, res: Response)=>{
console.log('Login usuario');
res.send('Login')
})



export default router;