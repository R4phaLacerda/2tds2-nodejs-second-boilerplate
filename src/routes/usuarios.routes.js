import { Router } from "express";
import UsersRepository from "../models/Users/UsersRepository.js";

const usuariosRoutes = Router();
const usersRepository = new UsersRepository();


usuariosRoutes.get("/", (req, res) => {
  const usuarios = usersRepository.getAllUsers();
  return res.status(200).json({
    message: usuarios.length == 0 ? "Não há usuários cadastrados" : `Total de usuários cadastrados: ${usuarios.length}`,usuarios,
  });
});


usuariosRoutes.post("/", (req, res) => {
  const { name, email, password } = req.body;
  const user = usersRepository.addUser(name, email, password);
  return res.status(201).json({
    message: "Usuário cadastrado com sucesso",
    user,
  });
});

usuariosRoutes.get("/:id", (req, res) => {
    const { id } = req params;
    const user = usersRepository.getUserById(id);

    if(!user) {
        return res.status(404).json({
        message: `Usúario com id ${id} não encontrado!`,
        })
    }

    return res.status(200).json({
        message: `Usúario com id ${id} encontrado!`,
        user,
           
    }) 

})

usuariosRoutes.get("/:id", (req, res) => {
    
})

usuariosRoutes.get("/:id", (req, res) => {
    
})
export default usuariosRoutes;
