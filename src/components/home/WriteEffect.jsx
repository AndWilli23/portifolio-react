/** @jsxImportSource @emotion/react */


import { useState, useEffect } from "react";
import { css } from "@emotion/react";

const EfeitoEscrita = ({ texto, speed }) => {

    const TituloAbout = css`
        color: #027373;
        font-size: 36px;
    `

    const [textoEffect, setTextoEffect] = useState("");

    useEffect(() => {
        let timeoutId;
        let index = 0; 

        const intervalo = () => {
            if (index < texto.length - 1) {
                setTextoEffect((prev) => prev + texto[index]); // Adiciona a próxima letra
                index++; // Incrementa o índice
                timeoutId = setTimeout(intervalo, speed); // Chama a função novamente após o delay
            }
        };

        intervalo(); 

        return () => clearTimeout(timeoutId);
        
    }, [texto, speed]);

    return <h1 css={TituloAbout}>{textoEffect}</h1>;
}

export default EfeitoEscrita;
