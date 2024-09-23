import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/register', { username, password, confirmPassword });
            setMessage(res.data.message);

            // Limpa os campos após registro bem-sucedido
            setUsername('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            setMessage('Erro ao registrar: ' + (error.response?.data?.message || 'Erro desconhecido'));
        }
    };

    return (
        <div>
            <h2>Registrar</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleRegister}>
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
                <input
                    type="password"
                    placeholder="Confirme a Senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Registrar</button>
            </form>
            <a href='/login'>Fazer Login</a>
        </div>
    );
};

export default Register;
