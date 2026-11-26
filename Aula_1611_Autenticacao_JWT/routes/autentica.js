import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";
import "dotenv/config";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/login", async (req, res)=>{
    try{
        const { login , senha } = req.body;
        if(!login || !senha || typeof login !== 'string' || typeof senha !== 'string') { // testa se há campo nulo
            throw new Error("Credenciais inválidas.");
        }
        const usuario = await Usuario.findOne({where: {login}});
        if (!usuario){
            throw new Error("Usuário inválido ou não localizado.");
        }
//verificar se a senha da requisição é igual a registro
        const senhaValida = await bcrypt.compare(senha, usuario.senha); 
        if (!senhaValida) {
            throw new Error("Senha inválida.");
        }
//gerando token
        const token = jwt.sign(
            {id: usuario.id, login: usuario.login},
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        res.status(200).json({
            mensagem: "Login realizado.",
            token
        });
    }catch(erro){
        res.status(400).json(
            { 
                mensagem: "Tente novamente.",
                detalhes: "Motivo: "+ erro.message
            }
        );
    }
});

router.post("/registrar", async (req, res)=>{
    try{
//recebe da requisição
        const { login, senha } = req.body;
//verifica se login e senha são nulos ou não strings
        if(!login || !senha || typeof login !== 'string' || typeof senha !== 'string') {
            throw new Error("Login e senha não podem ser nulos.")
        }
//verifica se o login já existe, pois tem que ser unico
        const usuario = await Usuario.findOne({where: {login}});
        if(usuario) {
            throw new Error("Nome de usuário já existe.")
        }
//o HASH da senha é gerando no create(), update() ou save()
        const novoUsuario = Usuario.create({login, senha});
//TODO: remover a senha antes de devolver o registro do usuário
        res.status(201).json({
            id: novoUsuario.id,
            login: novoUsuario.login
        });
    }catch(erro) {
        res.status(400).json(
            { 
                mensagem: "Não foi possivel registrar usuário.",
                detalhes: "Motivo:"+ erro.message
            }
        );
    }
});

export default router;