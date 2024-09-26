import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, ContainerLogo, SubContainer } from '../components/Container/styles'
import { Form } from '../components/Input/styles'
import Button from '../components/Button'
import Logo from '../assets/logo.gif'


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
        <Container>
            <ContainerLogo>
                <img className="Logo" alt="Logo" src={Logo}/>  
            </ContainerLogo>                      
            <SubContainer>
            <h2>Faça seu login aqui!</h2>
            {message && <p>{message}</p>}
            <Form onSubmit={handleLogin}>
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
                 <Button title="Entrar" onClick={handleLogin} />
            </Form>
            <p>
                Não tem uma conta? <a href="/register">Registrar</a>
            </p>
            </SubContainer>            
        </Container>
    );
};

export default Login;
