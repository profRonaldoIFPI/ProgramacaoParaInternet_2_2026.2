const http = require("http");

const servidor = http.createServer((req, res) => {
  res.statusCode = 200; //OK
  res.end("Olá mundo da web!");
});

servidor.listen(8080, () => {
  console.log("Servidor online, na porta 8080.");
});
