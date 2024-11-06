/** @jsxImportSource @emotion/react */


import { css } from "@emotion/react";


export const containerCabecalho = css`
    width: 100%;
    display: flex;
    justify-content: center;  
    margin-top: 1rem;

    
`

export const cabecalhoFundo = css`
    background-color: #A9D9D0;
    border-radius: 12px;
    transition: .1s;
`;

export const cabecalhoLista = css`
    display: flex;
    gap: 1rem;
    list-style-type: none;
    text-align: center;
    align-items: center;
    margin: 0;
    padding: 0;

    @media (max-width: 540px) {
       gap: .0;
    }
`;

export const cabecalhoItem = css`
    padding: 0.25rem 1rem;

    @media (max-width: 440px) {
       padding: 0.25rem .75rem;
    }
    
    @media (max-width: 390px) {
       padding: 0.25rem .55rem;
    }

    @media (max-width: 360px) {
       padding: 0.25rem .35rem;
    }
    
`;

export const logosCabecalho = css`
    display: flex;
`;

export const logoCabecalhoLinkdin = css`
    margin-top: .3rem;
    transition: transform 0.2s, color 0.2s;

    &:hover{
        transform: scale(1.1);
    }
`;

export const logoCabecalhoGit = css`
    margin-top: .3rem;
    transition: transform 0.2s, color 0.2s;

     &:hover{
        transform: scale(1.1);
    }
`;

export const cabecalhoLink = css`
    text-decoration: none;
    font-family: "Lora", serif;
    font-weight: 600;
    font-size: 16.5px;
    color: #038C7F;
    
    
    &:hover {
        font-size: 17px;
        color: #026A5E;  
    }
    
    
`;
