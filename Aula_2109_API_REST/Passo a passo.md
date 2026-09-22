# Passo a passo para criar a API do zero

## 1) Preparar o ambiente

1. Verifique se o Node.js está instalado no computador.
2. Instale uma ferramenta para testar APIs, como:
   - Bruno
   - Insomnia
   - Postman

Essas ferramentas servem para enviar requisições para a API e visualizar as respostas.

---

## 2) Criar a pasta do projeto

Abra o terminal e crie uma pasta para o projeto:

```bash
mkdir nome-do-projeto
cd nome-do-projeto
```

Exemplo:

```bash
mkdir api-rest-aula
cd api-rest-aula
```

---

## 3) Inicializar o projeto com npm

No terminal, execute:

```bash
npm init -y
```

Esse comando cria o arquivo `package.json` com configurações básicas do projeto.

Depois, instale o Express:

```bash
npm install express
```

O Express é o pacote que permite criar o servidor web e definir rotas da API.

---

## 4) Configurar o package.json

Abra o arquivo `package.json` e ajuste as informações para que o projeto funcione corretamente com módulos ES.

O arquivo deve ter algo parecido com isso:

```json
{
  "name": "api-rest-aula",
  "version": "1.0.0",
  "main": "app.js",
  "type": "module",
  "scripts": {
    "dev": "node --watch app.js"
  },
  "dependencies": {
    "express": "^5.2.1"
  }
}
```

### Explicando cada parte:

- `type: "module"`: indica que o projeto usa módulos ES, então o `import` funciona.
- `main: "app.js"`: define qual arquivo será principal.
- `scripts.dev`: executa o servidor em modo de desenvolvimento e reinicia automaticamente quando o arquivo mudar.
- `dependencies`: lista os pacotes instalados, como o Express.

> Importante: o comando correto para rodar o projeto em modo de desenvolvimento é:
> `node --watch app.js`

---

## 5) Criar o arquivo `app.js`

Crie um arquivo chamado `app.js` com o seguinte conteúdo:

```js
import express from "express";

const app = express();

app.use(express.json());

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

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

app.listen(8080, () => {
  console.log("Servidor online.");
});
```

### O que esse código faz:

- `import express from "express";`: importa o pacote Express.
- `const app = express();`: cria a aplicação.
- `app.use(express.json());`: configura o Express para receber dados em JSON.
- `let users = [...]`: guarda os usuários em memória.
- `app.get("/users", ...)`: cria a rota para listar usuários.
- `app.post("/users", ...)`: cria a rota para cadastrar um novo usuário.
- `app.listen(8080, ...)`: inicia o servidor na porta 8080.

---

## 6) Rodar a API

No terminal, execute:

```bash
npm run dev
```

Se tudo estiver correto, a mensagem abaixo aparecerá:

```bash
Servidor online.
```

O servidor estará acessível em:

```text
http://localhost:8080
```

---

## 7) Testar a API

### Requisição GET para listar usuários

No Bruno, Insomnia ou Postman, use a URL:

```text
GET http://localhost:8080/users
```

Resposta esperada:

```json
[
  { "id": 1, "name": "Ronaldo" },
  { "id": 2, "name": "Igor" }
]
```

### Requisição POST para cadastrar um usuário

Use a rota:

```text
POST http://localhost:8080/users
```

No corpo da requisição, envie JSON como este:

```json
{
  "id": 3,
  "name": "Maria"
}
```

Resposta esperada:

```json
{
  "id": 3,
  "name": "Maria"
}
```

---

## 8) Conceitos importantes da aula

### API REST
Uma API REST é um conjunto de rotas que permite:
- receber dados do cliente
- processar essas informações
- devolver uma resposta em formato JSON

### Rota
Uma rota é um endereço da API, por exemplo:
- `GET /users`
- `POST /users`

### Método HTTP
- `GET`: buscar dados
- `POST`: criar dados

### JSON
Formato usado para trocar dados entre cliente e servidor.

---

## 9) Dica para continuar aprendendo

Depois dessa API simples, você pode evoluir para:

- atualizar usuário com `PUT` ou `PATCH`
- deletar usuário com `DELETE`
- salvar em um banco de dados real como SQLite, MySQL ou MongoDB
- separar o código em pastas como `routes`, `controllers` e `models`

---

## 10) Resumo do fluxo

1. Criar o projeto
2. Instalar o Express
3. Criar o arquivo `app.js`
4. Definir rotas
5. Iniciar o servidor
6. Testar usando Bruno, Insomnia ou Postman

Se quiser, o próximo passo pode ser criar uma API com:
- `GET /users/:id`
- `PUT /users/:id`
- `DELETE /users/:id`
- validação de dados
- banco de dados
