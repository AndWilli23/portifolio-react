/** @jsxImportSource @emotion/react */

import { containerCabecalho, cabecalhoFundo, cabecalhoLista, 
cabecalhoItem, cabecalhoLink, logosCabecalho, logoCabecalhoGit, logoCabecalhoLinkdin } from "./cabecalho.style"
import github from "../assents/github.png"
import linkedin from "../assents/linkedin.png"



const Cabecalho = () => { 

    
    return (
        <>
            <header css={containerCabecalho} >
                <nav css={cabecalhoFundo}>
                    <ul css={cabecalhoLista}>
                        <li css={cabecalhoItem}>
                            <a href="#home" css={cabecalhoLink} to={""}>
                                Home
                            </a>
                        </li>

                        <li css={cabecalhoItem}>
                            <a href="#card" css={cabecalhoLink} >
                                Tecnologias
                            </a>
                        </li>

                        <li css={cabecalhoItem}>
                            <a href="#projetos"css={cabecalhoLink} >
                                Projetos
                            </a>
                        </li>

                        <div css={logosCabecalho}>
                            <li css={cabecalhoItem}>
                                <a css={cabecalhoLink} href={"https://github.com/AndWilli23"} target="_blank"  rel="noopener noreferrer" aria-label="Perfil do GitHub">
                                    <img css={logoCabecalhoGit} src={github} alt="botão com logo do github"/>
                                </a>
                            </li>

                            <li css={cabecalhoItem}>
                                <a css={cabecalhoLink} href={"https://www.linkedin.com/in/anderson-willian-b81b18274/"} target="_blank" rel="noopener noreferrer" aria-label="Perfil do Linkedin">
                                    <img css={logoCabecalhoLinkdin} src={linkedin} alt="botão com logo do linkedin"/>
                                </a>
                            </li>
                        </div> 

                    </ul>
                </nav>    
            </header>
            
        </>
    )
}

export default Cabecalho