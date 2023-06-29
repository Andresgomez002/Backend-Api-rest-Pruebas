import  express,{Request, Response}  from "express";
import main from "./routes";


const app = express();
//http://localhost:3000
app.get('/', (req: Request, res: Response)=>{
const mensaje = 'Bienvenido a la API de manga page';
console.log(mensaje);
    res.send(`<h1>${mensaje}</h1>`)
})
app.get('/home',(req: Request, res: Response)=>{
    const namePage = 'Home';
    console.log(namePage);
    res.send(`<h1>${namePage}</h1>`)
} )
app.use('/', main )

app.listen(3000, ()=>{
    console.log('servidor lanzado en el puerto 3000');
});
