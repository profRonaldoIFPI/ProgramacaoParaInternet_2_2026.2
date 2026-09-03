import * as tarefasModel from "../models/tarefasModel.js";

export const carregarLista = (req, res) => {
  const tarefas = tarefasModel.carregaListaTarefas();
  res.status(200).render("principal", { tarefas });
};

export const novaTarefa = (req, res) => {
  res.status(200).render("novaTerefa");
};

export const registrarNovaTarefa = (req, res) => {
  const novaTarefa = {
    descricao: req.body.descricao,
    status: req.body.status,
  };
  tarefasModel.novaTarefa(novaTarefa);
  res.status(201).redirect("/tarefas");
};

export const concluirTarefa = (req, res) => {
  const indice = req.params.indice;
  tarefasModel.concluirTarefa(indice);
  res.status(201).redirect("/tarefas");
};

export const excluirTarefa = (req, res) => {
  const indice = req.params.indice;

  res.status(201).redirect("/tarefas");
};
