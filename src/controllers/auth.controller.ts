import {Request, Response} from "express"

const register = (req: Request, res: Response)=>{
    console.log('Registra usuario');
    res.send('Register')
}
const login = (req: Request, res: Response)=>{
    console.log('Login usuario');
    res.send('Login')
}

export{
    register,
    login
}