import { Schema, model } from "mongoose";
const productSchema = new Schema(
    {
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: false
    },
    description:{
        type: String
    }
    },
    {
    timestamps: true
    }
);
const productModel = model('Products', productSchema)

export default productModel;