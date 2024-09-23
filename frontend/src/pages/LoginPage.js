import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/login', { username, password });
            setMessage(res.data.message);
            navigate('/home');

            // Limpa os campos após login bem-sucedido
            setUsername('');
            setPassword('');
        } catch (error) {
            setMessage('Erro ao fazer login: ' + (error.response?.data?.message || 'Erro desconhecido'));
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>
                Não tem uma conta? <a href="/register">Registrar</a>
            </p>
        </div>
    );
};

export default Login;
