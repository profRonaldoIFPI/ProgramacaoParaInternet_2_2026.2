# 📬 Coleção de Requisições - API REST

Esta pasta contém a coleção de requisições HTTP para testar os endpoints da API desenvolvida na aula.

A coleção foi estruturada utilizando o **[Bruno](https://www.usebruno.com/)**, um cliente de API *open-source*, leve e *local-first* (salva as requisições como arquivos diretamente no projeto, facilitando o versionamento com Git).

---

## 🚀 Como abrir no Bruno (Recomendado)

1. Baixe e instale o [Bruno](https://www.usebruno.com/downloads) (disponível para Linux, Windows e macOS).
2. Abra o aplicativo do Bruno.
3. Na tela inicial (ou no menu superior esquerdo), clique em **"Open Collection"**.
4. Navegue até a pasta deste projeto e selecione a pasta **`api-collection`**.
5. Pronto! A coleção será carregada com todas as requisições prontas para disparo.

> **Importante:** Certifique-se de que a API esteja em execução (ex: `node app.js` rodando em `http://localhost:8080`) antes de enviar as requisições.

---

## 🔄 Como usar em outras ferramentas (Postman, Insomnia, etc.)

Se você preferir utilizar outro cliente de API (como **Postman** ou **Insomnia**), há duas opções:

### Opção A: Exportar pelo Bruno (Mais simples)
1. Abra a coleção no Bruno seguindo o passo anterior.
2. Clique nos três pontinhos (`...`) ao lado do nome da coleção.
3. Selecione **Export** e escolha o formato **Postman Collection (v2.1)**.
4. Salve o arquivo `.json` gerado.
5. No Postman ou Insomnia, use a opção **Import** e selecione o arquivo exportado.

### Opção B: Consulta direta aos arquivos YAML
Os arquivos desta pasta (`get_users.yml`, `post_users.yml`) são formatados em texto simples legível. Caso queira recriar as requisições manualmente no Postman, Insomnia ou Thunder Client:
* **Método** e **URL** estão indicados no campo `http.method` e `http.url`.
* **Corpo (Payload)** em JSON está indicado no bloco `http.body.data`.

---

## 📋 Endpoints disponíveis nesta coleção

| Método | Endpoint | Descrição | Arquivo |
| :--- | :--- | :--- | :--- |
| `GET` | `http://localhost:8080/users` | Lista todos os usuários cadastrados | `get_users.yml` |
| `POST` | `http://localhost:8080/users` | Cadastra um novo usuário | `post_users.yml` |
