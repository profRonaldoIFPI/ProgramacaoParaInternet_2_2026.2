import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";
import { where } from "sequelize";
import { use } from "react";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/login", async (req, res)=>{
    const { login , senha } = req.body;
    if(!login || !senha) { // testa se há campo nulo
        res.status(400).json({
            mensagem: "Credenciais inválidas"
        })
    }
    const usuario = await Usuario.findOne({where: {login}});
    if (usuario){
        
    }
});