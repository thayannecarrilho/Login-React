import Logo from '../assets/logo.gif'
import { ContainerLogo } from '../components/Container/styles'

const Home = () => {
    return (
        <ContainerLogo>
            <h1>Bem-vindo à Home</h1>
            <p>Você está logado com sucesso!</p>
            <img className="Logo" alt="Logo" src={Logo}/>  
        </ContainerLogo>
    );
};

export default Home;
