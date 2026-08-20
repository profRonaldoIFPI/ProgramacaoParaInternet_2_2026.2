// const express = require("express");  // commonjs
import express from "express"; // ES Modules
const app = express();

// const nova_rota = require("./routes/novaRota.js"); //usuarios
import nova_rota from "./routes/novaRota.js";

app.use("/usuarios", nova_rota);

app.get("/", (req, res) => {
  //landing page
  res.send("Raiz do servidor");
});

app.listen(8080, () => {
  console.log("Servidor rodando!!!");
});
