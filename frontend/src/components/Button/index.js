import React from 'react';
import { ContainerButton } from './styles';

export default function Button({ title, onClick }) {
    return (
        <ContainerButton type="submit" onClick={onClick}>
            {title}
        </ContainerButton>
    );
}
