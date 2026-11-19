import express from "express";
import router from "./routes/pessoaRoutes.js";
import "dotenv/config";

import sequelize from "./config/database.js"; //faltou isso

const app = express();
app.use(express.json()); //permite express manipular JSON
app.get("/", (req, res) => { //HETEOAS
    res.status(200).json({
        mensage: "API REST disponível neste servidor",
        rotas: {
            cadastrarPessoa: "POST /pessoas",
            listarPessoas: "GET /pessoas",
            buscarPessoa: "GET /pessoas/:id",
            modificarPessoa: "PUT /pessoas/:id",
            deletarPessoa: "DELETE /pessoas/:id"
        }
    }
    );
});
app.use("/pessoas", middlewareDeAutenticacao , router);

//antes apenas colocava o servidor online
// app.listen(process.env.PORT, () => {
//     console.log(`Servidor online na porta ${process.env.PORT}!`);
// });


//Agora a conexão e sincronização com o banco antes de iniciar o servidor
sequelize.sync()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("Servidor online!");
    })
}).catch((err)=>{
    console.log("Erro com SBGD: "+err.mensage);
});




