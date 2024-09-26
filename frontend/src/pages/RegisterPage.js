import React, { useState } from 'react';
import axios from 'axios';
import { Container, SubContainer, ContainerLogo } from '../components/Container/styles';
import { Form } from '../components/Input/styles';
import Button from '../components/Button';
import { IoEnterOutline, IoAlertCircle } from "react-icons/io5";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import Logo from '../assets/logo.gif';

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
            setMessage(
                <p>
                    <IoAlertCircle /> {error.response?.data?.message || 'Erro desconhecido'}
                </p>
            );
        }
    };

    return (
        <Container>
            <ContainerLogo>
                <img className="Logo" alt="Logo" src={Logo}/>  
                <a href='/login'> <span><IoEnterOutline /><br/></span> Fazer Login</a>
            </ContainerLogo>
            <SubContainer>
                <h2>Registrar</h2>
                {message && <p>{message}</p>}
                <Form onSubmit={handleRegister}>
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
                    <Button title="Registrar" onClick={handleRegister} />
                </Form>
            </SubContainer>
        </Container>
    );
};

export default Register;
