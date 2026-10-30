import { Router } from "express";
router = Router();
//as funções serão substituidas por chamadas ao controller

router.post("/", (req,res)=>{
    console.log("criar");
    console.log(req.body);
});
router.get("/", (req,res)=>{console.log("lista")});

router.get("/:id", (req,res)=>{
    console.log("ler");
    console.log(req.params.id);
});
router.put("/:id", (req,res)=>{
    console.log("atualizar");
    console.log(req.params.id);
});
router.delete("/:id", (req,res)=>{
    console.log("deletar");
    console.log(req.params.id);
});

export default router;