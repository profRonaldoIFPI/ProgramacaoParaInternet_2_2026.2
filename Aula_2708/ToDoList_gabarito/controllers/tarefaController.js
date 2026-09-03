import * as tarefaModel from "../models/tarefaModel.js";

export const listar = (req, res) => {
  const tarefas = tarefaModel.carregaTarefas();
  res.status(200).render("principal", { tarefas });
};

export const formNova = (req, res) => {
  res.status(200).render("novaTerefa");
};

export const criar = (req, res) => {
  const novaTarefa = {
    descricao: req.body.descricao,
    status: req.body.status || "Pendente",
  };
  tarefaModel.adicionarTarefa(novaTarefa);
  res.redirect("/tarefas");
};

export const concluir = (req, res) => {
  const indice = parseInt(req.params.indice, 10);
  tarefaModel.concluirTarefa(indice);
  res.redirect("/tarefas");
};

export const remover = (req, res) => {
  const indice = parseInt(req.params.indice, 10);
  tarefaModel.removerTarefa(indice);
  res.redirect("/tarefas");
};
