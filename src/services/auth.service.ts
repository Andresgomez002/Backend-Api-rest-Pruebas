import { User } from "../interfaces/user.interface"
import Authmodel from "../models/auth.model"

const registerNewUser = async (newUser:User)=>{
    //consulta en la base de datos si el usuario existe
   const userFound = await  Authmodel.findOne({email: newUser.email});
   //verificar si el usuario existe
   if(userFound){
      return 'USER_ALREADY_EXISTS';
   }
   //registra el usuario  si no existe
   const response = await Authmodel.create(newUser);
   return response;
}
export{
    registerNewUser
}