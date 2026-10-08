import express from "express";
import "dotenv/config";
import produtosRouter from "./routes/produtosRoutes.js"

const app = express();
app.use(express.json()); 
app.get("/", (req, res)=>{
    res.status(200).json( //HETEOS
        {
            "rotas": {
                "produtos": "get /produtos"
            }
        }
    );
});

app.use("/produtos", produtosRouter);

app.listen(process.env.PORT, (err)=>{
    console.log("Servidor online!" );
});
