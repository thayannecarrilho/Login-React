import styled, { keyframes } from 'styled-components';

// Define a animação de entrada
const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-weight: 700;
    color: #743414;
    margin: 1rem 0;
    text-align: center;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: #743414;
    font-weight: 900;
    font-size: 1rem;
    text-align: center;
    margin-top: 1rem;
  }

  span {
    font-size: 2rem;
  }
`;

export const SubContainer = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height: 100vh;
  background-color: rgba(214, 192, 179, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${slideInFromRight} 1s ease-out forwards;

  h2 {
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 2rem;
  }
`;

export const ContainerLogo = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .Logo {
    height: auto;
    width: 20rem;
  }
`;
