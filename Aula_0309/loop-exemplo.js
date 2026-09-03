const tarefas = require("./tarefas.json");

tarefas.forEach((tarefa) => {
  const status = tarefa.status ? "Concluída" : "Pendente";

  console.log(`Tarefa: ${tarefa.descricao}`);
  console.log(`Status: ${status}`);

  if (!tarefa.status) {
    console.log(`Ação: concluir (id: ${tarefa.id})`);
  }

  if (tarefa.status) {
    console.log(`Ação: remover (id: ${tarefa.id})`);
  }

  console.log("--------------------");
});
