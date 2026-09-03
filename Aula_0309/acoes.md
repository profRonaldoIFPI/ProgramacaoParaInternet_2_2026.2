# no terminal

    npm init -y
    npm install express ejs

# edit o package.json

    "main": "app.js",
    "scripts": {
        "dev": "node --watch app.js",
    }
    "type": "module",

# criar arquivo app.js

# criar arquivo tarefas.json

# criar arquivo views/principal.ejs

# implementar o padrão MVC

    - Criar os diretórios models e controllers
        - Models: responsável por lidar com os dados, como ler e escrever no arquivo tarefas.json.
        - Controllers: responsável por lidar com a lógica de negócios, como adicionar, remover e listar tarefas.
        - Views: responsável por renderizar a interface do usuário, como exibir a lista de tarefas e os formulários para adicionar ou remover tarefas.
    - Criar o diretório routes
        - Routes: responsável por definir as rotas da aplicação, como a rota para listar tarefas, adicionar tarefas e remover tarefas.
