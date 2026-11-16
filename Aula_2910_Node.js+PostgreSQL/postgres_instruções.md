# Guia de Configuração do PostgreSQL via Docker

Este documento descreve o passo a passo realizado para criar e configurar o banco de dados **PostgreSQL** via Docker neste projeto, com persistência de dados local na pasta `config/`.

---

## 1. Criação e Inicialização do Container Docker

No terminal, a partir da raiz do projeto, foi executado o comando abaixo para criar o container chamado `postgres` utilizando a imagem `postgres:16-alpine`:

```bash
docker run --name postgres \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=admin123 \
  -e POSTGRES_DB=pessoas_api \
  -p 5432:5432 \
  -v "$(pwd)/config/pgdata:/var/lib/postgresql/data" \
  -d postgres:16-alpine
```

### Explicação dos parâmetros utilizados:
- `--name postgres`: Define o nome do container como `postgres`.
- `-e POSTGRES_USER=admin`: Cria o usuário padrão `admin`.
- `-e POSTGRES_PASSWORD=admin123`: Define a senha `admin123` para o usuário.
- `-e POSTGRES_DB=pessoas_api`: Cria automaticamente o banco de dados `pessoas_api` ao inicializar.
- `-p 5432:5432`: Mapeia a porta `5432` do container para a porta `5432` da máquina local (`localhost`).
- `-v "$(pwd)/config/pgdata:/var/lib/postgresql/data"`: Mapeia a pasta `config/pgdata` do projeto para o diretório de dados do PostgreSQL no container (usamos a subpasta `pgdata` dentro de `config/` porque o PostgreSQL exige um diretório inicialmente vazio para inicializar o banco e `config/` já possui o arquivo `database.js`).
- `-d`: Executa o container em segundo plano (*detached mode*).

---

## 2. Configuração das Variáveis de Ambiente (`.env`)

O arquivo `.env` na raiz do projeto foi atualizado com os dados de conexão correspondentes ao container criado:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=pessoas_api
DB_USER=admin
DB_PASS=admin123
```

---

## 3. Instalação do Driver do PostgreSQL no Node.js

Para conectar o Sequelize ao PostgreSQL (substituindo o `sqlite3`), utilize os pacotes `pg` e `pg-hstore`:

```bash
npm uninstall sqlite3
npm install pg pg-hstore
```

---

## 4. Exemplo de Configuração no `config/database.js`

Com o `.env` configurado e o pacote `pg` instalado, o arquivo `config/database.js` deve ser configurado da seguinte forma:

```javascript
import { Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "postgres",
        logging: true,
    }
);

export default sequelize;
```

---

## 5. Comandos Úteis de Gerenciamento do Container

- **Verificar se o container está em execução:**
  ```bash
  docker ps --filter "name=^postgres$"
  ```
- **Parar o container:**
  ```bash
  docker stop postgres
  ```
- **Iniciar o container novamente:**
  ```bash
  docker start postgres
  ```
- **Visualizar logs do banco de dados:**
  ```bash
  docker logs postgres
  ```
- **Acessar o console SQL (`psql`) dentro do container:**
  ```bash
  docker exec -it postgres psql -U admin -d pessoas_api
  ```
  *(Digite `\q` para sair do `psql`).*
