import { Router } from "express";
import UsersRepository from "../models/Users/UsersRepository.js";

const usuariosRoutes = Router();

let usuarios = [
    { 
        id: 1, 
        nome: "João", 
        email: "joao@example.com",
    },
    {
        id: 2,
        nome: "Maria",
        email: "maria@example.com"
    }
];
const UsersRepository = new UsersRepository();

usuariosRoutes.get("/", (req, res) => {
    const usuarios = UsersRepository.getAllUsers();

    return res.status(200).json({
        messege: 
        usuarios.length == 0 
        ? "Nenhum usuário cadastrado" 
        : `total de usuários cadastrados: ${usuarios.length}`,	 
        usuarios,            
    });
});