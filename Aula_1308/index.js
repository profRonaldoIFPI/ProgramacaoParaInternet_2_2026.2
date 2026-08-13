const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Chegou requisição");
  res.send("Servidor online!");
});

app.get("/routeparam/:minhaVariavel", (req, res) => {
  const parametro = req.params.minhaVariavel;
  console.log(`Chegou com a requisição: ${parametro}`);
  res.send("Rota 2 online!");
});

app.get("/queryparam/", (req, res) => {
  const parametro = req.query.campo;
  console.log(`Chegou com a requisição: ${parametro}`);
  res.send("Rota 3 online!");
});
app.listen(8080, () => {
  console.log("Servidor rodando!!!");
});
