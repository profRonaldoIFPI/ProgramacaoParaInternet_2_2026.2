import fs from "fs";
const ARQUIVO = "tarefas.json";

export const carregaListaTarefas = () => {
  try {
    const arquivo = fs.readFileSync(ARQUIVO);
    return JSON.parse(arquivo);
  } catch (err) {
    console.log("Deu ruim.");
    return [];
  }
};

export const salvarListaTarefas = (tarefas) => {
  fs.writeFileSync(ARQUIVO, JSON.stringify(tarefas, null, 2));
};

export const novaTarefa = (tarefa) => {
  let tarefas = carregaListaTarefas();
  tarefas.push(novaTarefa);
  salvarListaTarefas(tarefas);
  return tarefa;
};

export const concluirTarefa = (indice) => {
  let tarefas = carregaListaTarefas();
  tarefas[indice].status = "Concluído";
  salvarListaTarefas(tarefas);
  return tarefas[indice];
};

export const excluirTarefa = (indice) => {
  let tarefas = carregaListaTarefas();
  tarefas.splice(indice, 1);
  salvarListaTarefas(tarefas);
  return tarefas;
};
