/** @jsxImportSource @emotion/react */


import { css } from "@emotion/react";


export const ContainerProjeto = css`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 8rem 2rem;


    @media (max-width: 600px) {
       margin: 8rem 0;
        text-align: none;
    }

` 

export const tituloContainer = css`
    font-size: 36px;
    color: #027373;
    margin: 8rem 9.2rem;

    @media (max-width: 1200px) {
       margin: 8rem 7.2rem;
    }

    @media (max-width: 800px) {
       text-align: center;
    }
`

export const TituloCarrossel = css`
    font-size: 1.5rem;
    font-weight: bold;
    color: #027373;
    border-bottom: 2px solid #038C7F;
    padding-bottom: 4px;
    display: inline-block;
    margin-bottom: 1rem;
`

export const TextoCarrossel = css`
    font-size: 1rem;
    letter-spacing: 0.5px;
    color: #027373;
    transition: color 0.3s;
    font-size: 16px;
    padding:3rem;

    @media (max-width: 800px) {
       padding:3rem 1rem;
    }
    @media (max-width: 420px) {
       padding:3rem 1.5rem;
    }
`



export const Setas = css`

    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit; 
    cursor: pointer;
    margin: 0 3rem;
    transition: transform 0.2s, color 0.2s;

    &:hover {
    transform: scale(1.1);
    }

    @media (max-width: 420px) {
        margin: 0 1.5rem;
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
       padding: .65rem 2rem;
       margin-bottom: 4rem;
    }

    @media (max-width: 470px) {
       padding: .65rem 1rem;
       margin-bottom: 4rem;
    }
    
`
