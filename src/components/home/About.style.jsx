/** @jsxImportSource @emotion/react */


import { css } from "@emotion/react";


export const containerPrincipal = css`
    
`

export const ContainerAboutMe = css`
    margin: 8rem 2rem;

    @media (max-width: 540px) {
       margin: 3rem 0;
    }

` 

export const AboutConteudo = css`
    display: flex;
    align-items: center;
    gap: 4rem;
    margin: 4rem;

    @media (max-width: 950px) {
       flex-direction: column-reverse;
    }

    @media (max-width: 650px) {
       margin: 1rem;
    }

    @media (max-width: 540px) {
       margin: 0;
    }
`

export const containerConteudoTexto = css`
    margin: 0 3rem
`

export const TextoConteudo = css`
    color: #038C7F;
    font-size: 16.5px;
    padding-top: 1rem;

`

export const ContainerButtons = css`
    display: flex;
    gap: 2rem;
    margin-left: 7rem;

     @media (max-width: 650px) {
       margin: 3rem 0;
    }

     @media (max-width: 650px) {
       flex-direction: column;
       align-items: center;
    }
` 

export const BotaoVerde = css`
    background-color: #A9D9D0;
    color: #0D0D0D;
    border: 1px solid #027373;
    border-radius: 16px;
    padding: .65rem 4rem;
    transition: .2s;
    cursor: pointer;
    margin-bottom: 2rem;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: #91c5bb; 
        color: #ffffff;
    }

    @media (max-width: 540px) {
       padding: .65rem 7rem;
    }
`

export const BotaoVerdeEscuro = css`
    background-color: #038C7F;
    color: #0D0D0D;
    border: 1px solid #027373;
    border-radius: 16px;
    padding: .65rem 4rem;
    transition: .2s;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        background-color: #057a71; 
        color: #ffffff;
    }

    @media (max-width: 540px) {
       padding: .65rem 7rem;
       margin-bottom: 4rem;
    }
    
`

export const ConteudoFoto = css`
    width: 25%;
    border-radius: 8rem;

    @media (max-width: 950px) {
       width: 40%;
    }
    @media (max-width: 650px) {
       width: 45%;
    }
}
`

