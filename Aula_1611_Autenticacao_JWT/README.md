# API de Pessoas

Este projeto é uma API REST construída com Node.js e Express, com PostgreSQL configurado por meio do Sequelize, e autenticação via JWT. A organização em rotas, controllers e models separa a entrada das requisições, as regras da aplicação e o acesso aos dados.

## Responsabilidades das camadas

### Routes

A camada de rotas define os caminhos e métodos HTTP disponíveis e associa cada combinação a uma operação da aplicação. Por exemplo, `POST /pessoas` representa o cadastro de uma pessoa, enquanto `GET /pessoas/:id` representa a busca por uma pessoa específica.

As rotas devem tratar do direcionamento da requisição; a lógica de negócio e as consultas ao banco devem ficar nas camadas apropriadas.

### Controllers

Os controllers recebem a requisição encaminhada pela rota, acessam os dados enviados pelo cliente, chamam as operações necessárias e montam a resposta HTTP. Também são responsáveis por escolher o status adequado e encaminhar erros conforme o padrão adotado pela aplicação.

Assim, cada controller concentra o comportamento de uma operação, sem definir os caminhos HTTP nem implementar diretamente os detalhes de persistência.

### Models

Os models representam os dados da aplicação e sua estrutura no banco. Com Sequelize, um model define atributos e tipos de uma entidade — como uma pessoa — e permite executar operações de persistência, como criar, consultar, atualizar e remover registros.

Os models encapsulam o acesso aos dados para que controllers não precisem escrever consultas ou conhecer detalhes específicos do banco.

## Fluxo de uma requisição

As rotas de `/pessoas` são protegidas por JWT. Primeiro o cliente se registra (`POST /registrar`) e faz login (`POST /login`) para obter um token; depois envia esse token no cabeçalho `Authorization: Bearer <token>` em cada requisição. O middleware de autenticação valida o token antes de a requisição chegar ao controller. Os dados ficam em um banco PostgreSQL, acessado por meio do Sequelize.

### 1. Registro e login (obtenção do token)

```mermaid
sequenceDiagram
    participant Cliente
    participant Route as Route (/registrar, /login)
    participant Model as Model (Usuario)
    participant PostgreSQL

    Note over Cliente,PostgreSQL: Registro
    Cliente->>Route: POST /registrar {login, senha}
    Route->>Model: findOne({login})
    Model->>PostgreSQL: SELECT em usuarios
    PostgreSQL-->>Model: Resultado
    alt login já existe
        Route-->>Cliente: 400 Nome de usuário já existe
    else login disponível
        Route->>Model: create({login, senha})
        Note right of Model: hook beforeSave gera o hash da senha (bcrypt)
        Model->>PostgreSQL: INSERT em usuarios (senha com hash)
        PostgreSQL-->>Model: Registro criado
        Model-->>Route: Usuário
        Route-->>Cliente: 201 {id, login}
    end

    Note over Cliente,PostgreSQL: Login
    Cliente->>Route: POST /login {login, senha}
    Route->>Model: findOne({login})
    Model->>PostgreSQL: SELECT em usuarios
    PostgreSQL-->>Model: Usuário (ou vazio)
    Model-->>Route: Usuário
    alt usuário não encontrado
        Route-->>Cliente: 404 Usuário inválido ou não localizado
    else usuário encontrado
        Route->>Route: bcrypt.compare(senha, hash)
        alt senha inválida
            Route-->>Cliente: 401 Senha inválida
        else senha válida
            Route->>Route: jwt.sign({id, login}, JWT_SECRET, expiresIn 1h)
            Route-->>Cliente: 200 {mensagem, token}
        end
    end
```

### 2. Acesso a uma rota protegida (`/pessoas`)

```mermaid
sequenceDiagram
    participant Cliente
    participant Middleware as Middleware de autenticação
    participant Route as Route (/pessoas)
    participant Controller
    participant Model as Model (Pessoa)
    participant PostgreSQL

    Cliente->>Middleware: Requisição HTTP + Authorization: Bearer token
    Middleware->>Middleware: jwt.verify(token, JWT_SECRET)
    alt token ausente, inválido ou expirado
        Middleware-->>Cliente: 401 Não autorizado
    else token válido
        Middleware->>Route: next()
        Route->>Controller: Encaminha operação
        Controller->>Model: Consulta ou altera dados
        Model->>PostgreSQL: Executa operação (SQL via Sequelize)
        PostgreSQL-->>Model: Retorna resultado
        Model-->>Controller: Retorna dados
        Controller-->>Cliente: Envia resposta HTTP
    end
```

## Estado atual

O projeto configura o Sequelize para usar PostgreSQL em `config/database.js`, com host, porta, nome, usuário e senha lidos do `.env` (instruções em `postgres_instruções.md`). Existem os models `Pessoa` e `Usuario` (a senha é salva com hash bcrypt) e as rotas `/registrar` e `/login`, que devolvem um JWT. O middleware `middleware/middlewareDeAutenticacao.js` ainda está vazio e não é importado em `app.js`, então a verificação do token descrita no diagrama 2 ainda precisa ser implementada. Há também um erro em `routes/autentica.js` (`env.process.JWT_SECRET` deveria ser `process.env.JWT_SECRET`).
