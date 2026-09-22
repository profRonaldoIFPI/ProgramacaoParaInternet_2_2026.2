// Importa o framework Express, que será usado para criar a API.
import express from "express";

// Cria uma instância da aplicação Express.
// Essa variável representa o nosso servidor web.
const app = express();

// Configura o Express para entender JSON no corpo das requisições.
// Sem essa linha, req.body viria undefined em rotas POST/PUT.
app.use(express.json());

// Array em memória para simular um banco de dados simples.
// Ele guarda os usuários da API enquanto o servidor estiver rodando.
let users = [
    {
        id: 1,
        name: "Ronaldo"
    },
    {
        id: 2,
        name: "Igor"
    }
];

// Rota GET /users
// Serve para consultar todos os usuários cadastrados.
// req = dados da requisição do cliente
// res = resposta que o servidor vai devolver
app.get("/users", (req, res) => {
    // status(200) significa sucesso na consulta.
    // json(users) envia o array em formato JSON para o cliente.
    res.status(200).json(users);
});

// Rota POST /users
// Serve para criar um novo usuário.
app.post("/users", (req, res) => {
    // req.body contém os dados enviados pelo cliente no corpo da requisição.
    // Exemplo: { "id": 3, "name": "Maria" }
    const user = req.body;

    // Adiciona o novo usuário no array de usuários.
    users.push(user);

    // status(201) significa que algo foi criado com sucesso.
    // Retorna o usuário criado para confirmar a operação.
    res.status(201).json(user);
});

// Inicia o servidor na porta 8080.
// Quando o servidor subir, o callback será executado e mostrará uma mensagem.
app.listen(8080, () => {
    console.log("Servidor online.");
});