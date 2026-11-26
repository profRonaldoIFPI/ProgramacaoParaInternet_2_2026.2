// middle  = do/no meio ou o que esta no meio 
// ware = software
// middleware = software do meio

import jwt from "jsonwebtoken";
import "dotenv/config";

const middlewareDeAutenticacao = async (req, res, next)=>{
    const auth = req.headers["authorization"];
// 1 tem o cabeçalho com token? 
    if (!auth) res.status(401).json({ mensagem: "Token obrigatório."});
// 2 tem o "Bearer **********" com regex ou sem
    const token = auth.slice(7).trim();
    // const token = auth.toLowerCase().startWith("bearer ") ? auth.slice(7).trim() : auth.trim();
    if(!token) res.status(401).json({ mensagem: "Token faltando."})
        try{
// 3 verificar validade do token
    const tokenDecodificado = await jwt.verify(token, process.env.JWT_SECRET);

// 4 adiciona o usuário que estava codificado no token à requisição
        req.usuario = tokenDecodificado.login;

// 5 libera a proxima função na rota que trouxe até aqui   
        console.log(tokenDecodificado.login);
        return next();

    } catch(erro){
        res.status(401).json({
            mensagem: "Token inválido.",
            causa: erro.mensage
        });
    }
}

export default middlewareDeAutenticacao;