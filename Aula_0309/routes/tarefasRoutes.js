import express from "express";
import * as tarefasController from "../controllers/tarefasController.js";

const routes = express.Router();

routes.get("/", tarefasController.carregarLista);
routes.get("/nova", tarefasController.novaTarefa);
routes.post("/nova", tarefasController.registrarNovaTarefa);
routes.get("/concluir/:indice", tarefasController.concluirTarefa);
routes.get("/remover/:indice", tarefasController.excluirTarefa);

export default routes;
