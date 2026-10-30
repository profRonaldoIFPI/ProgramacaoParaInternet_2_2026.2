import express from "express";
import router from "./routes/pessoaRoutes";
import "dotenv/config"; 
const app = express();

app.use(express.json()); //permite express manipular JSON

app.get("/", (req,res)=>{ //HETEOAS
    res.status(200).json({
            mensage: "API REST disponível neste servidor",
            rotas:{
                cadastrarPessoa: "POST /pessoas",
                listarPessoas: "GET /pessoas",
                buscarPessoa: "GET /pessoas/:id",
                modificarPessoa: "PUT /pessoas/:id",
                deletarPessoa: "DELETE /pessoas/:id"
            }
        }
    );
});

app.use("/pessoas", router);

app.listen(process.env.PORT,()=>{
    console.log("Servidor online! ");
});