import express from "express";
import fs from "fs"; //file system

const app = express();
const PORT = 8080;
const ARQUIVO = "tarefas.json";
const carregaListaTarefas = () => {
  try {
    const arquivo = fs.readFileSync(ARQUIVO);
    return JSON.parse(arquivo);
  } catch (err) {
    console.log("Deu ruim.");
    return [];
  }
};
const salvarListaTarefas = (tarefas) => {
  fs.writeFileSync(ARQUIVO, JSON.stringify(tarefas, null, 2));
};

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/tarefas", (req, res) => {
  const tarefas = carregaListaTarefas();
  res.status(200).render("principal", { tarefas });
});

app.get("/novaTarefa", (req, res) => {
  res.status(200).render("novaTerefa");
});

app.post("/novaTarefa", (req, res) => {
  const novaTarefa = {
    descricao: req.body.descricao,
    status: req.body.status,
  };
  let tarefas = carregaListaTarefas();
  tarefas.push(novaTarefa);
  salvarListaTarefas(tarefas);
  res.status(201).redirect("/tarefas");
});

app.get("/concluirTarefa/:indice", (req, res) => {
  const indice = req.params.indice;
  let tarefas = carregaListaTarefas();
  tarefas[indice].status = "Concluído";
  salvarListaTarefas(tarefas);
  res.status(201).redirect("/tarefas");
});

app.get("/removerTarefa/:indice", (req, res) => {
  const indice = req.params.indice;
  let tarefas = carregaListaTarefas();
  tarefas.pop(indice);
  salvarListaTarefas(tarefas);
  res.status(201).redirect("/tarefas");
});

app.listen(PORT, () => {
  console.log();
});
