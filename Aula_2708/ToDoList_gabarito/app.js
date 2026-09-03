import express from "express";
import tarefaRoutes from "./routes/tarefaRoutes.js";

const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Rota raiz: tela de apresentação
app.get("/", (req, res) => {
  res.render("index");
});

// Rotas de tarefas modularizadas com express.Router
app.use("/tarefas", tarefaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
