import { Schema, model } from "mongoose";
const productSchema = new Schema(
    {
    name:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    
    image:{
            type: String,
            required: true
        
    },
    pubicationDate:{
        type: Date,
        default: new Date
    },
    pages:{
        type: Number,
        required: true
    },
    category:{
     type: String,
     required: true
    },
    ranking:{
        type: Number,
        required: true
    }
    },
    {
    timestamps: true
    }
);
const ProductModel = model('Products', productSchema)

export default ProductModel;