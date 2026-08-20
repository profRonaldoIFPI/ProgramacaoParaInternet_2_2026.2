import express from "express";

const router = express.Router();
// trata de tudo sobre o usuário

router.get("/novaRota", (req, res) => {
  console.log("/novaRota");
  res.send("Este texto vem da nova rota");
});
router.get("/login", (req, res) => {
  console.log("/login");

  res.send("login em nova rota");
});
router.get("/", (req, res) => {
  console.log("/raiz em usuários");
  res.send("raiz em usuários");
});

export default router; //ES Module

// module.exports = router; //CommonJS
