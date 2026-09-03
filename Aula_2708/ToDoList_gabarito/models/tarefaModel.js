import fs from "fs";

const ARQUIVO = "tarefas.json";

export const carregaTarefas = () => {
  try {
    const arquivo = fs.readFileSync(ARQUIVO, "utf-8");
    return JSON.parse(arquivo);
  } catch (err) {
    console.error("Erro ao carregar tarefas:", err);
    return [];
  }
};

export const salvarTarefas = (tarefas) => {
  fs.writeFileSync(ARQUIVO, JSON.stringify(tarefas, null, 2));
};

export const adicionarTarefa = (novaTarefa) => {
  const tarefas = carregaTarefas();
  tarefas.push(novaTarefa);
  salvarTarefas(tarefas);
  return tarefas;
};

export const concluirTarefa = (indice) => {
  const tarefas = carregaTarefas();
  if (tarefas[indice]) {
    tarefas[indice].status = "Concluído";
    salvarTarefas(tarefas);
  }
  return tarefas;
};

export const removerTarefa = (indice) => {
  const tarefas = carregaTarefas();
  if (indice >= 0 && indice < tarefas.length) {
    tarefas.splice(indice, 1);
    salvarTarefas(tarefas);
  }
  return tarefas;
};
