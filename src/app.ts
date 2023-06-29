import  express  from "express";
const app = express();
//http://localhost:3000
app.get('/', (req, res)=>{
const mensaje = 'Bienvenido a la API de manga page';
console.log(mensaje);
    res.send(`<h1>${mensaje}</h1>`)
})
app.get('/home',(req, res)=>{
    const namePage = 'Home';
    console.log(namePage);
    res.send(`<h1>${namePage}</h1>`)
} )
app.listen(3000, ()=>{
    console.log('servidor lanzado en el puerto 3000');
});