import { Request, Response } from "express";
import { getAllProducts, getProductById, insertProduct, removeProductById } from "../services/product.service";
async function getProducts( req: Request, res:Response){
      try{
            const 
            response = await getAllProducts(),
            data = response ? response: 'NOT_FOUND'; //pendiente
            console.log(data);
            res.json(data)
      }catch(error){
            console.log('Error en la extraccion del listado de productos');
       res.json({
            msg: 'ERROR_PRODUCT_LIST'
       });
      }
}
async function getproduct( req: Request, res:Response){
      const productId = req.params.id;
      try{
      const response = await getProductById(productId)
      console.log(response);
      res.json({response});
 }catch(error){
      console.log(`Error en la extraccion del producto ${productId}`);
       res.json({
            msg: 'ERROR_INSERT_PRODUCT'
       });
 }
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
      const productId = req.params.id;
      try {
         const  response  = await removeProductById(productId)
         console.log(response);
         res.json(response)    
      } catch (error) {
            console.log(`Error en la eliminacion del producto con id ${productId}`);
            res.json({
                 msg: 'ERROR_DELETE_PRODUCT'
            });
      }
}

export{
getProducts,
getproduct,
updateProduct,
createProduct,
deleteProduct

};