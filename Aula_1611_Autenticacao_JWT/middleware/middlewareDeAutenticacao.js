// middle  = do/no meio ou o que esta no meio 
// ware = software
// middleware = software do meio

import jwt from "jsonwebtoken";

const middlewareDeAutenticacao = (req, res, next)=>{
    const auth = req.headers["authorization"];
// 1 tem o cabeçalho com token? 
    if (!auth) res.status(401).json({ mensagem: "Token obrigatório."});
// 2 tem o "Bearer **********" com regex ou sem
    const token = auth.toLowerCase().startWith("bearer ") ? auth.slice(7).trim() : auth.trim();
    if(!token) res.status(401).json({ mensagem: "Token faltando."})
// 3 verificar validade do token
    jwt.verify(token, process.env.JWT_SECRET);

}

export default middlewareDeAutenticacao;