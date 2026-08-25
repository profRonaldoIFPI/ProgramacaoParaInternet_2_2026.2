import express from "express";
import usuarios_routes from "./routes/usuariosRoutes.js";
import produtos_routes from "./routes/produtosRoutes.js";
import pedidos_routes from "./routes/pedidosRoutes.js";

const app = express(); //servidor default
const PORT = process.env.PORT; //busca o arquivo .env e a constante PORT

app.get("/", (req, res) => {
  res.send("Servidor de e-commerce online!");
});

app.listen(PORT, () => {
  console.log("Servidor online!");
});
