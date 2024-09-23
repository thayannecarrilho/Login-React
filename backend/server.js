const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'thayanne',
    database: 'login',
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL');
});

// Rota de registro
app.post('/api/register', async (req, res) => {
    const { username, password, confirmPassword } = req.body;

    if (!username || !password || !confirmPassword) {
        return res.status(400).json({ message: 'Usuário, senha e confirmação de senha são obrigatórios.' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'As senhas não coincidem.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err) => {
        if (err) return res.status(500).json({ message: 'Erro ao registrar usuário' });
        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    });
});

// Rota de login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Usuário e senha são obrigatórios.' });
    }

    db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
        if (err) return res.status(500).json({ message: 'Erro no servidor' });
        if (results.length === 0) return res.status(400).json({ message: 'Usuário não encontrado' });

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            return res.json({ message: 'Login bem-sucedido!' });
        } else {
            return res.status(400).json({ message: 'Senha incorreta' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
