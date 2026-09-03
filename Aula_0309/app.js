import express from "express";
import tarefasRoutes from "./routes/tarefasRoutes.js";

const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/tarefas", tarefasRoutes);

app.listen(PORT, () => {
  console.log();
});
