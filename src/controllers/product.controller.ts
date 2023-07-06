import { Request, Response } from "express";
import { insertProduct } from "../services/product.service";
async function getProducts( req: Request, res:Response){
      console.log('Obtengo todos los productos');    
      res.send('Obtengo todos los productos');
}
async function getproduct( req: Request, res:Response){
      console.log('Obtiene un producto por id');    
      res.send('Obtiene un producto por id');
}
async function createProduct( req: Request, res:Response){      
      try{
            const data = await insertProduct(req.body);
            console.log(data);
            res.json(data);
      }catch(error){
       console.log('Error en la insercion del producto');
       res.json({
            msg: 'ERROR_INSERT_PRODUCT'
       });
      }
   
}
async function updateProduct( req: Request, res:Response){
      console.log('Actualiza un producto por id');   
      res.send('Actualiza un producto por id') 
}
async function deleteProduct( req: Request, res:Response){
      console.log('Elimina un producto por id');    
      res.send('Elimina un producto por id');
}

export{
getProducts,
getproduct,
updateProduct,
createProduct,
deleteProduct

};