import { Schema, model } from "mongoose";
const authSchema = new Schema(
    {
        nombre:{
            type: String,
            required: true
        },
        rol:{
            type: String,
            require: true,
            default: 'registered'
        }
    },
    {
        timestamps: true
    }
);
const Authmodel = model('Users', authSchema)

export default Authmodel;