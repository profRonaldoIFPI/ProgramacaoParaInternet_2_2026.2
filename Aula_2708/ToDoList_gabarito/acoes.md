# no terminal

    npm init -y
    npm install express ejs

# editar o package.json

    "main": "app.js",
    "scripts": {
        "start": "node app.js",
        "dev": "node --watch app.js"
    },
    "type": "module",

# criar arquivo tarefas.json

# aplicar arquitetura MVC e express.Router

## 1. Criar a camada Model (models/tarefaModel.js)
- Leitura e persistência no arquivo `tarefas.json` (`fs.readFileSync` e `fs.writeFileSync`)
- Funções para listar, adicionar, concluir e remover tarefas (usando `splice` para remoção por índice)

## 2. Criar a camada Controller (controllers/tarefaController.js)
- Intermedeia as requisições HTTP e o Model
- Métodos: `listar`, `formNova`, `criar`, `concluir` e `remover`

## 3. Criar as Rotas com express.Router (routes/tarefaRoutes.js)
- Modularizar as rotas do recurso de tarefas:
  - `GET /` -> `tarefaController.listar`
  - `GET /nova` -> `tarefaController.formNova`
  - `POST /nova` -> `tarefaController.criar`
  - `GET /concluir/:indice` -> `tarefaController.concluir`
  - `GET /remover/:indice` -> `tarefaController.remover`

## 4. Atualizar o arquivo principal (app.js)
- Configurar EJS e middleware para receber dados do formulário (`express.urlencoded`)
- Registrar a rota raiz `/` renderizando a tela de apresentação
- Registrar o roteador modular: `app.use("/tarefas", tarefaRoutes)`

# criar telas e views (EJS)

## 1. Criar Partials (views/partials/)
- `views/partials/header.ejs`: `<head>`, CDN do Tailwind CSS, `<header>`, `<nav>` e abertura de `<main>`
- `views/partials/footer.ejs`: fechamento de `</main>` e `<footer>` com `<small>`

## 2. Criar e atualizar as páginas usando include dos partials
- `views/index.ejs`: página inicial de apresentação com `<article>` e links de ação rápida
- `views/principal.ejs`: listagem das tarefas em tabela estilizada com `<section>`, `<hgroup>` e `<figure>`
- `views/novaTerefa.ejs`: formulário semântico com `<section>`, `<fieldset>` e `<menu>`

# boas práticas aplicadas
- **Eliminação de `<div>`s**: uso integral de tags semânticas do HTML5 (`header`, `nav`, `main`, `section`, `article`, `figure`, `hgroup`, `fieldset`, `menu`, `footer`)
- **Correção da remoção**: substituição de `tarefas.pop(indice)` por `tarefas.splice(indice, 1)`
