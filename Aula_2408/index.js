import express from "express";
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).render("form");
});

app.post("/cadastro", (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  res.status(200).render("principal", {
    nomeNovo: nome,
    emailNovo: email,
  });
});

app.listen(8080, () => {
  console.log("Servidor online!");
});
