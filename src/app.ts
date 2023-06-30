// import 'dotenv/config';
import  express,{Request, Response}  from "express";
import main from "./routes/index.route";
import db from "./config/mongo.config";



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

db() 
    .then(()=>console.log('MongoDB se conecto correcto'))
    .catch(()=>console.log('MongoDB sufre un problema de conexion'))
app.listen(PORT, ()=>{
    console.log(`Servidor en http://localhost: ${PORT}`);
});
