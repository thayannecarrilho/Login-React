import { createGlobalStyle } from "styled-components";
import Background from './assets/Fundo.jpg'
export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
}
body{
    background-image: url(${Background});
    color: #111;
    font-family: 'Trebuchet MS';
    background-size: cover;
}
`
