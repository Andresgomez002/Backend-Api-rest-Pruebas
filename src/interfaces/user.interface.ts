import { Auth } from "./auth.interface";

export interface User extends Auth{
    nombre: string;
    rol: string;
}