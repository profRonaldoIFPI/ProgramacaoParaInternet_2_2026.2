import express from "express";
import fs from "fs"; //file system

const app = express();
const PORT = 8080;
const carregaListaTarefas = () => {
  try {
    const arquivo = fs.readFileSync("tarefas.json");
    return JSON.parse(arquivo);
  } catch (err) {
    console.log("Deu ruim.");
    return [];
  }
};

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/tarefas", (req, res) => {
  const tarefas = carregaListaTarefas();
  res.status(200).render("principal", { tarefas });
});

app.listen(PORT, () => {
  console.log();
});
