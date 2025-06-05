# Ecopontos Arapiraca - Backend

Este é um projeto backend da disciplina de Programação Web, cujo objetivo é aplicar os conhecimentos adquiridos na prática. Nesta parte do projeto, a equipe de backend, por meio desta API, visa permitir: **cadastrar informações, buscar, atualizar e deletar dados**


## Inicialização da API

1. **Crie um arquivo `.env` na raiz do projeto** com o seguinte conteúdo:

```
PORT_SERVER=3000
DB_NAME=ecosaracity
DB_USER=ecoaracity
DB_PASS=eco12345
```

2. **Instale as dependências:**
```sh
npm install
```

3. **Suba a aplicação com Docker Compose:**
```sh
docker-compose up --build
```

A API estará disponível na porta padrão **3000**. Caso queira alterar a porta, modifique a variável `PORT_SERVER` no arquivo `.env` antes de rodar o comando.

> **Observação:**
> - O arquivo `.env` é obrigatório para o funcionamento correto da aplicação.
> - Certifique-se de que o Docker e o Docker Compose estão instalados e rodando em sua máquina.