/** @jsxImportSource @emotion/react */


import { css } from "@emotion/react";



export const ContainerCard = css`
    display: flex;
    flex-wrap: wrap; 
    gap: 3rem;      
    justify-content: center; 
    width: 100%;    

`
export const Card = css`
    background-color: #A9D9D0;
    padding: 2rem;
    text-align: center;
    border-radius: 12px;
    color: #038C7F;
    max-width: 250px;
    transition: box-shadow 0.3s ease;
    border: 1px solid #57BEBE;

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

`

export const iconCard = css`

    transition: transform 0.2s, color 0.2s;

    &:hover{
        transform: scale(1.1);
    }
`