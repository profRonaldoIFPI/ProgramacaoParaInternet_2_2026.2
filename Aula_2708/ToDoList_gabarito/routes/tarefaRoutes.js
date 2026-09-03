import { Router } from "express";
import * as tarefaController from "../controllers/tarefaController.js";

const router = Router();

router.get("/", tarefaController.listar);
router.get("/nova", tarefaController.formNova);
router.post("/nova", tarefaController.criar);
router.get("/concluir/:indice", tarefaController.concluir);
router.get("/remover/:indice", tarefaController.remover);

export default router;
