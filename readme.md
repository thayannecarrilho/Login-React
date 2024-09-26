# Projeto de Login

Este repositório contém um projeto simples de login utilizando MySQL como banco de dados, Node no backend e React no frontend

<img src='./imgs/Login.gif' />

## Estrutura do Banco de Dados

Para configurar o banco de dados MySQL, siga as instruções abaixo:

### 1. Criar Banco de Dados

```sql
CREATE DATABASE login;
USE login;
```

### 2. Criar Tabela de Usuários

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```

## Configuração do Backend

O backend é implementado em Node.js. A conexão com o banco de dados é configurada no arquivo `server.js`.

### 1. Instalar Dependências

Certifique-se de ter o MySQL e Node.js instalados. Para instalar as dependências necessárias, execute:

```bash
npm install mysql
```

### 2. Configuração da Conexão

No arquivo `backend/server.js`, configure a conexão com o banco de dados:

```javascript
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'seulogin', // Substitua pelo seu usuário
    password: 'sua senha', // Substitua pela sua senha
    database: 'login',
});
```

## Como Iniciar

### Iniciar o Frontend

Para iniciar o frontend, utilize o comando:

```bash
npm start
```

### Iniciar o Backend

Para iniciar o backend, execute o seguinte comando no terminal:

```bash
node backend/server.js
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou um pull request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.



