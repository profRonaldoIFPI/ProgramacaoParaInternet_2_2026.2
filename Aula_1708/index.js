const express = require("express");
const app = express();

const nova_rota = require("./routes/novaRota.js"); //usuarios

app.use("/usuarios", nova_rota);

app.get("/", (req, res) => {
  //landing page
  res.send("Raiz do servidor");
});

app.listen(8080, () => {
  console.log("Servidor rodando!!!");
});
