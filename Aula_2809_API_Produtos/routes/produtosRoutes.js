import { Router } from "express";

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
router.delete("/:id", produtosController.delete);

export default router;