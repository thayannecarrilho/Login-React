import styled from 'styled-components'

export const Form = styled.div`
    display: flex;
    flex-direction: column;

    input{
        height: 1.5rem;
        width: 14rem;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
        border: 0;
        padding: 0 10px;
    }
    
    input::placeholder{
        padding: 0 10px;
    }
`