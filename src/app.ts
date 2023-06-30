import  express,{Request, Response}  from "express";
import main from "./routes";



const app = express();
const PORT = process.env.PORT || 3001;
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
app.use('/api', main )

app.listen(PORT, ()=>{
    console.log(`Servidor en http://localhost: ${PORT}`);
});
