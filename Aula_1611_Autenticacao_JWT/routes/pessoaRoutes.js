import { Router } from "express";
import * as pessoasController from "../controllers/pessoasController.js";
const router = Router();
//as funções serão substituidas por chamadas ao controller

router.post("/",        pessoasController.create);
router.get("/",         pessoasController.retreave);
router.get("/:id",      pessoasController.read);
router.put("/:id",      pessoasController.update);
router.delete("/:id",   pessoasController.erase);

export default router;