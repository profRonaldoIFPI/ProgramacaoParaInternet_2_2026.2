import { Router } from "express";
import * as produtosController from "../controllers/produtosController.js"

const router = Router();
//CRUD
//C
router.post("/", produtosController.create);
//R
router.get("/", produtosController.retreave); //listar tudo
router.get("/:id", produtosController.read);
//U
router.put("/:id", produtosController.update);
//D
router.delete("/:id", produtosController.remove);

export default router;