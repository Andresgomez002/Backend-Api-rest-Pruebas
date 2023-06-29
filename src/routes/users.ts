//archivo central de enrutamiento
import { Router, Request, Response } from "express";

const router = Router();

router.get('/',(req: Request, res: Response)=>{
    const mesage = 'Users';
    console.log(mesage);
    res.send(`<h1>${mesage}</h1>`)
})

export default router;