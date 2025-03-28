/** @jsxImportSource @emotion/react */


import { css } from "@emotion/react";
import { containerCabecalho } from "./cabecalho.style"



const Rodape = () => { 

    const RodapeCopy = css`
        font-family: "Lora", serif;
        font-weight: 600;
        font-size: 16.5px;
        color: #038C7F;
        text-align:center;
    
    ` 

    
    return (
        <>
            <footer css={RodapeCopy} >
                
                <a css={RodapeCopy} href="#home">Voltar ao início</a>
               <p>&copy; 2025 Anderson Willian. Todos os direitos reservados.</p>
            </footer>
            
        </>
    )
}

export default Rodape