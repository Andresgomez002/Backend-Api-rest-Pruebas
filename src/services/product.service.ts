import { Product } from "../interfaces/product.interface";
import ProductModel from "../models/products.model";

const insertProduct = async (product: Product) => {
    const response = await ProductModel.create(product);
    return response;
}
const getAllProducts = async ()=>{
   return await ProductModel.find({});
}
export{
    insertProduct,
    getAllProducts
}